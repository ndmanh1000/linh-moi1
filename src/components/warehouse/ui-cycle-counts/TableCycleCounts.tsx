import React, { useState, useCallback } from 'react';

interface CycleCountData {
  id: number;
  name: string;
  location: string;
  status: string;
  startDate: string;
  dueDate?: string;
  counted: string;
  dateCreated: string;
}

const data: CycleCountData[] = [
  {
    id: 1,
    name: 'Kiểm kê hệ thống ngay...',
    location: 'Suite B',
    status: 'Closed',
    startDate: '07/01/2025',
    dueDate: '07/01/2025',
    counted: '3/3',
    dateCreated: '3',
  },
  {
    id: 2,
    name: 'Test',
    location: 'Suite B',
    status: 'Closed',
    startDate: '07/01/2025',
    dueDate: '07/01/2025',
    counted: '3/3',
    dateCreated: '3',
  },
  {
    id: 3,
    name: 'Nhựa 99',
    location: 'Suite B',
    status: 'Closed',
    startDate: '07/01/2025',
    dueDate: '07/01/2025',
    counted: '3/3',
    dateCreated: '3',
  },
  {
    id: 4,
    name: 'BBC',
    location: 'Upkeep HQ',
    status: 'Closed',
    startDate: '07/01/2025',
    counted: '2/2',
    dateCreated: '3',
  },
  {
    id: 5,
    name: 'Linh',
    location: 'Suite B',
    status: 'Closed',
    startDate: '07/01/2025',
    counted: '1/1',
    dateCreated: '3',
  },
];

const TableCycleCounts: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Khởi tạo state cho select (dateCreated)
  const [dateValues, setDateValues] = useState<{ [key: number]: string }>(
    Object.fromEntries(data.map((d) => [d.id, d.dateCreated])),
  );

  const handleSelectAll = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allRowIds = data.map((row) => row.id);
      setSelectedRows(allRowIds);
    } else {
      setSelectedRows([]);
    }
  }, []);

  const handleSelectRow = useCallback((id: number) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id],
    );
  }, []);

  const handleDateChange = useCallback((id: number, value: string) => {
    setDateValues((prevValues) => ({ ...prevValues, [id]: value }));
  }, []);

  const isRowSelected = (id: number) => selectedRows.includes(id);

  const allRowsSelected = selectedRows.length === data.length;

  return (
    <div className="overflow-hidden rounded-lg shadow-md mt-6 border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded text-blue-600 focus:ring-blue-500"
                  onChange={handleSelectAll}
                  checked={allRowsSelected}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Counted
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Created
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => {
              const isSelected = isRowSelected(row.id);
              return (
                <tr key={row.id} className={`${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded text-blue-600 focus:ring-blue-500"
                      onChange={() => handleSelectRow(row.id)}
                      checked={isSelected}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.startDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.dueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.counted}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <select
                      className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-1 px-2"
                      value={dateValues[row.id]}
                      onChange={(e) => handleDateChange(row.id, e.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCycleCounts;
