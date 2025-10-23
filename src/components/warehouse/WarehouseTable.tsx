import { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router';

interface Product {
  name: string;
  status: string;
  statusColor: string;
  qty: number;
  qtyColor: string;
  allocated: number;
  onHand: number;
  incoming: number;
  location: string;
  barcode: string;
  tag: string;
  area: string;
  cost: number;
  category: string;
  description: string;
  worker: string;
  vendor: string;
  dateCreated: string;
  id: string;
  partNumber: string;
  customer: string;
  details: string;
  team: string;
  minQty: number;
  maxQty: number;
  critical: string;
}

export default function WarehouseTable() {
  const data: Product[] = [
    {
      name: 'Bút',
      status: 'Out of stock',
      statusColor: 'bg-red-100 text-red-600',
      qty: 0,
      qtyColor: 'text-red-500',
      allocated: 1,
      onHand: 0,
      incoming: 5,
      location: 'A1-01',
      barcode: '123456789',
      tag: 'Stationery',
      area: 'Office',
      cost: 2000,
      category: 'Supplies',
      description: 'Bút bi màu xanh',
      worker: 'Nguyen Van A',
      vendor: 'Công ty Bút Việt',
      dateCreated: '2025-08-01',
      id: 'P001',
      partNumber: 'B001',
      customer: 'Trường A',
      details: 'Viết mượt, lâu hết mực',
      team: 'Kho A',
      minQty: 1,
      maxQty: 100,
      critical: 'Yes',
    },
    {
      name: 'Foil Tape 1.89 - paper...',
      status: 'Non-stock',
      statusColor: 'bg-gray-100 text-gray-500',
      qty: 2,
      qtyColor: 'text-gray-800',
      allocated: 1,
      onHand: 10,
      incoming: 0,
      location: 'B2-05',
      barcode: '987654321',
      tag: 'Tape',
      area: 'Maintenance',
      cost: 5000,
      category: 'Tools',
      description: 'Băng keo bạc cách nhiệt',
      worker: 'Tran Van B',
      vendor: 'Tape Co',
      dateCreated: '2025-07-25',
      id: 'P002',
      partNumber: 'T001',
      customer: 'Công ty X',
      details: 'Chịu nhiệt cao',
      team: 'Kho B',
      minQty: 5,
      maxQty: 50,
      critical: 'No',
    },
    {
      name: 'HVAC Filter 20x20x1',
      status: 'Low stock',
      statusColor: 'bg-yellow-100 text-yellow-600',
      qty: 3,
      qtyColor: 'text-gray-800',
      allocated: 2,
      onHand: 8,
      incoming: 12,
      location: 'C3-02',
      barcode: '111222333',
      tag: 'Filter',
      area: 'Warehouse',
      cost: 12000,
      category: 'HVAC',
      description: 'Bộ lọc không khí',
      worker: 'Le Thi C',
      vendor: 'HVAC Supplier',
      dateCreated: '2025-08-10',
      id: 'P003',
      partNumber: 'F001',
      customer: 'Công ty Y',
      details: 'Thay định kỳ 3 tháng',
      team: 'Kho C',
      minQty: 2,
      maxQty: 30,
      critical: 'Yes',
    },
  ];

  const [selected, setSelected] = useState<number[]>([]);
  const isAllSelected = selected.length === data.length;
  const navigate = useNavigate();

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelected([]);
    } else {
      setSelected(data.map((_, idx) => idx));
    }
  };

  const toggleSelect = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-separate border-spacing-y-2 border border-[#F3F3F3]">
        <thead
          className={`text-sm ${
            isAllSelected ? 'bg-blue-100 text-blue-700' : 'bg-gray-50 text-gray-500'
          }`}
        >
          <tr className="w-full">
            <th className="p-3 text-left">
              <input type="checkbox" checked={isAllSelected} onChange={toggleSelectAll} />
            </th>
            <th className="p-3 text-left whitespace-nowrap">Name</th>
            <th className="p-3 text-left whitespace-nowrap">Image</th>
            <th className="p-3 text-left whitespace-nowrap">Status</th>
            <th className="p-3 text-left whitespace-nowrap">Available Qty</th>
            <th className="p-3 text-left whitespace-nowrap">Allocated</th>
            <th className="p-3 text-left whitespace-nowrap">On Hand Qty</th>
            <th className="p-3 text-left whitespace-nowrap">Incoming Qty</th>
            <th className="p-3 text-left whitespace-nowrap">Location</th>
            <th className="p-3 text-left whitespace-nowrap">Barcode</th>
            <th className="p-3 text-left whitespace-nowrap">Tag</th>
            <th className="p-3 text-left whitespace-nowrap">Area</th>
            <th className="p-3 text-left whitespace-nowrap">Cost</th>
            <th className="p-3 text-left whitespace-nowrap">Category</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left whitespace-nowrap">Worker</th>
            <th className="p-3 text-left whitespace-nowrap">Vendor</th>
            <th className="p-3 text-left whitespace-nowrap">Date Created</th>
            <th className="p-3 text-left whitespace-nowrap">ID</th>
            <th className="p-3 text-left whitespace-nowrap">Part Number</th>
            <th className="p-3 text-left whitespace-nowrap">Customer</th>
            <th className="p-3 text-left whitespace-nowrap">Additional Details</th>
            <th className="p-3 text-left whitespace-nowrap">Team</th>
            <th className="p-3 text-left whitespace-nowrap">Minimum Qty</th>
            <th className="p-3 text-left whitespace-nowrap">Maximum Qty</th>
            <th className="p-3 text-left whitespace-nowrap">Critical</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            const isSelected = selected.includes(index);
            return (
              <tr
                key={index}
                onClick={() => navigate(`/ware-house-inventory-details`)}
                className={`cursor-pointer rounded-lg shadow-sm transition-colors ${
                  isSelected ? 'bg-blue-50' : 'bg-white'
                }`}
              >
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => toggleSelect(index)}
                  />
                </td>
                <td className="p-3 whitespace-nowrap">{item.name}</td>
                <td className="p-3">
                  <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-md">
                    <FaImage className="text-gray-500" />
                  </div>
                </td>
                <td className="p-3 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className={`p-3 font-medium ${item.qtyColor} whitespace-nowrap`}>
                  {item.qty.toFixed(2)}
                </td>
                <td className="p-3 whitespace-nowrap">{item.allocated.toFixed(2)}</td>
                <td className="p-3 whitespace-nowrap">{item.onHand}</td>
                <td className="p-3 whitespace-nowrap">{item.incoming}</td>
                <td className="p-3 whitespace-nowrap">{item.location}</td>
                <td className="p-3 whitespace-nowrap">{item.barcode}</td>
                <td className="p-3 whitespace-nowrap">{item.tag}</td>
                <td className="p-3 whitespace-nowrap">{item.area}</td>
                <td className="p-3 whitespace-nowrap">{item.cost}</td>
                <td className="p-3 whitespace-nowrap">{item.category}</td>
                <td className="p-3">{item.description}</td>
                <td className="p-3 whitespace-nowrap">{item.worker}</td>
                <td className="p-3 whitespace-nowrap">{item.vendor}</td>
                <td className="p-3 whitespace-nowrap">{item.dateCreated}</td>
                <td className="p-3 whitespace-nowrap">{item.id}</td>
                <td className="p-3 whitespace-nowrap">{item.partNumber}</td>
                <td className="p-3 whitespace-nowrap">{item.customer}</td>
                <td className="p-3">{item.details}</td>
                <td className="p-3 whitespace-nowrap">{item.team}</td>
                <td className="p-3 whitespace-nowrap">{item.minQty}</td>
                <td className="p-3 whitespace-nowrap">{item.maxQty}</td>
                <td className="p-3 whitespace-nowrap">{item.critical}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
