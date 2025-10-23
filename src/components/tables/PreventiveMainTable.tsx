import { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router';

interface RowData {
  name: string;
  id: string;
  title: string;
  description: string;
  assets: number;
  category: string;
  priority: string;
  paused: string;
  checklist: string;
  priorityColor: string;
}

export default function PreventiveMainTable() {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState<RowData[]>([
    {
      name: 'kiểm tra máy điều hòa',
      id: '6863fb69392...',
      title: 'HVAC Monthly Preventive M...',
      description: 'Monthly HVAC preventative...',
      assets: 3,
      category: 'Meter Reading',
      priority: 'High',
      paused: 'No',
      checklist: 'Test 1',
      priorityColor: 'bg-red-100 text-red-500',
    },
    {
      name: 'truyền một',
      id: '6863fb69392...',
      title: 'kiểm tra máy điều hòa',
      description: 'kiểm tra máy điều hòa',
      assets: 3,
      category: 'Meter Reading',
      priority: 'None',
      paused: 'No',
      checklist: 'Test 1',
      priorityColor: 'bg-gray-100 text-gray-500',
    },
    {
      name: 'HVAC Preventive Maintenance',
      id: '6863fb69392...',
      title: 'kiểm tra máy điều hòa',
      description: 'kiểm tra máy điều hòa',
      assets: 3,
      category: 'Meter Reading',
      priority: 'Medium',
      paused: 'No',
      checklist: 'Test 1',
      priorityColor: 'bg-yellow-100 text-yellow-600',
    },
  ]);

  const [selected, setSelected] = useState<number[]>([]);
  const isAllSelected = selected.length === tableData.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelected([]);
    } else {
      setSelected(tableData.map((_, idx) => idx));
    }
  };

  const toggleSelect = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const handleAssetChange = (index: number, value: number) => {
    const updatedData = [...tableData];
    updatedData[index].assets = value;
    setTableData(updatedData);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="text-gray-500 text-sm">
          <tr>
            <th className="p-3">
              <input type="checkbox" checked={isAllSelected} onChange={toggleSelectAll} />
            </th>
            <th className="p-3">Name</th>
            <th className="p-3">ID</th>
            <th className="p-3">Work Order Title</th>
            <th className="p-3">Work Order Description</th>
            <th className="p-3">Image</th>
            <th className="p-3">Assets & Location</th>
            <th className="p-3">Category</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Paused</th>
            <th className="p-3">Checklist</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {tableData.map((row, idx) => {
            const isSelected = selected.includes(idx);
            return (
              <tr
                key={idx}
                className={`border-t hover:bg-gray-50 ${isSelected ? 'bg-blue-50' : ''}`}
              >
                <td className="p-3">
                  <input type="checkbox" checked={isSelected} onChange={() => toggleSelect(idx)} />
                </td>
                <td className="p-3 cursor-pointer" onClick={() => navigate('/preventive-details')}>
                  {row.name}
                </td>
                <td className="p-3">{row.id}</td>
                <td className="p-3">{row.title}</td>
                <td className="p-3">{row.description}</td>
                <td className="p-3">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <FaImage className="text-gray-500" />
                  </div>
                </td>
                <td className="p-3">
                  <select
                    value={row.assets}
                    onChange={(e) => handleAssetChange(idx, Number(e.target.value))}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </td>
                <td className="p-3">{row.category}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs rounded ${row.priorityColor}`}>
                    {row.priority}
                  </span>
                </td>
                <td className="p-3">{row.paused}</td>
                <td className="p-3 text-blue-500 cursor-pointer">{row.checklist}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
