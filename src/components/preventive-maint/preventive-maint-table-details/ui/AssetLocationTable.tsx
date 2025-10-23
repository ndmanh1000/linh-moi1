import React, { MouseEvent } from 'react';
import { MoreIcon, Edit3Icon, Track1Icon } from '../../../../icons';

interface Position {
  top: number;
  left: number;
}

export default function AssetLocationTable() {
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [allSelected, setAllSelected] = React.useState<boolean>(false);
  const [openMenu, setOpenMenu] = React.useState<number | null>(null);
  const [menuPosition, setMenuPosition] = React.useState<Position | null>(null);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows([0, 1, 2]);
      setAllSelected(true);
    } else {
      setSelectedRows([]);
      setAllSelected(false);
    }
  };

  const handleSelectRow = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
    setAllSelected(false);
  };

  const toggleMenu = (index: number, event: MouseEvent<HTMLButtonElement>) => {
    if (openMenu === index) {
      setOpenMenu(null);
      setMenuPosition(null);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.pageYOffset,
        left: rect.left + window.pageXOffset,
      });
      setOpenMenu(index);
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input
                type="checkbox"
                className="rounded text-blue-600"
                checked={allSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Schedule
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Asset
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Meter
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Work Order
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Next Due Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Next Trigger
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Start Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              End Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assigned To
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Additional Workers
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Team
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className={selectedRows.includes(0) ? 'bg-blue-100' : ''}>
            <td className="px-6 py-4 whitespace-nowrap">
              <input
                type="checkbox"
                className="rounded text-blue-600"
                checked={selectedRows.includes(0)}
                onChange={() => handleSelectRow(0)}
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Every 3 days</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              6863fb699392181242...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Suit B</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              6863fb6993921812427...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
              <button className="text-blue-600 hover:text-blue-900">View</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">07/04/2025</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">07/03/2025</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">07/01/2025</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>T Trân Linh
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <button onClick={(e) => toggleMenu(0, e)}>
                <MoreIcon />
              </button>
            </td>
          </tr>
          <tr className={selectedRows.includes(1) ? 'bg-blue-100' : ''}>
            <td className="px-6 py-4 whitespace-nowrap">
              <input
                type="checkbox"
                className="rounded text-blue-600"
                checked={selectedRows.includes(1)}
                onChange={() => handleSelectRow(1)}
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Every 3 days</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              6863fb699392181242...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Suit B</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              6863fb6993921812427...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
              <button className="text-blue-600 hover:text-blue-900">View</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">07/04/2025</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">07/03/2025</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">07/01/2025</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>T Trân Linh
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <button onClick={(e) => toggleMenu(1, e)}>
                <MoreIcon />
              </button>
            </td>
          </tr>
          <tr className={selectedRows.includes(2) ? 'bg-blue-100' : ''}>
            <td className="px-6 py-4 whitespace-nowrap">
              <input
                type="checkbox"
                className="rounded text-blue-600"
                checked={selectedRows.includes(2)}
                onChange={() => handleSelectRow(2)}
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Every 3 days</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              6863fb699392181242...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Suit B</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              6863fb6993921812427...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
              <button className="text-blue-600 hover:text-blue-900">View</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">07/04/2025</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">07/03/2025</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">07/01/2025</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>T Trân Linh
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <button onClick={(e) => toggleMenu(2, e)}>
                <MoreIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {openMenu !== null && menuPosition && (
        <div
          className="fixed bg-white shadow-lg rounded-md py-1 z-50"
          style={{
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
          }}
        >
          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ">
            <div className="flex items-center md:gap-2 gap-1">
              <Edit3Icon />
              Edit
            </div>
          </button>
          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
            <div className="flex items-center md:gap-2 gap-1">
              <Track1Icon />
              Delete
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
