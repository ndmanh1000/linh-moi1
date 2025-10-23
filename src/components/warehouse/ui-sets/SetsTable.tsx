import { useState } from 'react';

interface Item {
  id: number;
  name: string;
  dateCreated: string;
  totalCost: string;
  setsOnHand: number;
  created: string;
}

const data: Item[] = [
  {
    id: 1,
    name: 'Bút',
    dateCreated: '3',
    totalCost: '$607.20',
    setsOnHand: 0,
    created: '07/01/25 - 12:59 PM',
  },
  {
    id: 2,
    name: 'Foil Tape 1.89 - paper',
    dateCreated: '3',
    totalCost: '$207.20',
    setsOnHand: 0,
    created: '07/01/25 - 12:27 PM',
  },
  {
    id: 3,
    name: 'HVAC Filter 20x20x1',
    dateCreated: '3',
    totalCost: '$13171.45',
    setsOnHand: 0,
    created: '07/01/25 - 11:19 AM',
  },
];

export default function SetsTable() {
  const [selected, setSelected] = useState<number[]>([]);
  const [dateValues, setDateValues] = useState<{ [key: number]: string }>(
    Object.fromEntries(data.map((d) => [d.id, d.dateCreated])),
  );

  const toggleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(data.map((d) => d.id));
    }
  };

  const toggleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleDateChange = (id: number, value: string) => {
    setDateValues({ ...dateValues, [id]: value });
  };

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={selected.length === data.length}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="p-3 text-gray-500 whitespace-nowrap">Name</th>
              <th className="p-3 text-gray-500 whitespace-nowrap">Date Created</th>
              <th className="p-3 text-gray-500 whitespace-nowrap">Total Cost</th>
              <th className="p-3 text-gray-500 whitespace-nowrap">Sets on hand</th>
              <th className="p-3 text-gray-500 whitespace-nowrap">Created</th>
              <th className="p-3 text-gray-500 whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              const isSelected = selected.includes(item.id);
              return (
                <tr
                  key={item.id}
                  className={`border-b cursor-pointer ${
                    isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  {/* Checkbox */}
                  <td className="p-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelect(item.id)}
                    />
                  </td>
                  {/* Name */}
                  <td className="p-3 whitespace-nowrap">{item.name}</td>
                  {/* Date Created - có select */}
                  <td className="p-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <select
                      className="border rounded px-2 py-1"
                      value={dateValues[item.id]}
                      onChange={(e) => handleDateChange(item.id, e.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                  {/* Total Cost */}
                  <td className="p-3 whitespace-nowrap">{item.totalCost}</td>
                  {/* Sets on hand */}
                  <td className="p-3 whitespace-nowrap">{item.setsOnHand.toFixed(2)}</td>
                  {/* Created */}
                  <td className="p-3 whitespace-nowrap">{item.created}</td>
                  {/* Actions */}
                  <td className="p-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <button className="text-gray-500">⋮</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
