import { FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import DataTable, { TableColumn, StatusConfig } from '../../common/DataTable';

interface Product {
  id: number;
  name: string;
  image?: string; // Added image property
  status: { text: string; color: string; bg: string };
  qty: number;
  qtyColor: string;
  inventoryLines: number;
  barcode: string;
  tag: { text: string; color: string; bg: string };
  cost: string;
  category: string;
  description: string;
}

export default function PartsTable() {
  const navigate = useNavigate();

  const data: Product[] = [
    {
      id: 1,
      name: 'Bút',
      status: { text: 'Out of stock', color: 'text-red-600', bg: 'bg-red-100' },
      qty: 0,
      qtyColor: 'text-red-600',
      inventoryLines: 1,
      barcode: '333333',
      tag: { text: 'High', color: 'text-red-600', bg: 'bg-red-100' },
      cost: '$2.000',
      category: 'dd',
      description: 'dd',
    },
    {
      id: 2,
      name: 'Foil Tape 1.89 - paper...',
      status: { text: 'Non-stock', color: 'text-gray-700', bg: 'bg-gray-100' },
      qty: 2,
      qtyColor: 'text-gray-700',
      inventoryLines: 1,
      barcode: '111111',
      tag: { text: 'None', color: 'text-gray-500', bg: 'bg-gray-100' },
      cost: 'N/A',
      category: 'HVAC Parts',
      description: '322 HVAC Multi-P',
    },
  ];

  const columns: TableColumn<Product>[] = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'image',
      label: 'Image',
      render: () => (
        <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-200">
          <FaImage className="text-gray-500" />
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (_value, row: Product) => (
        <span className={`px-2 py-1 rounded ${row.status.bg} ${row.status.color} text-sm`}>
          {row.status.text}
        </span>
      ),
    },
    {
      key: 'qty',
      label: 'Available Qty',
      render: (value, row: Product) => (
        <span className={`font-medium ${row.qtyColor}`}>
          {typeof value === 'number' ? value.toFixed(2) : '0.00'}
        </span>
      ),
    },
    {
      key: 'inventoryLines',
      label: 'Inventory Lines',
    },
    {
      key: 'barcode',
      label: 'Barcode',
    },
    {
      key: 'tag',
      label: 'Tag',
      render: (_value, row: Product) => (
        <span className={`px-2 py-1 rounded ${row.tag.bg} ${row.tag.color} text-sm`}>
          {row.tag.text}
        </span>
      ),
    },
    {
      key: 'cost',
      label: 'Cost',
    },
    {
      key: 'category',
      label: 'Category',
    },
    {
      key: 'description',
      label: 'Description',
    },
  ];

  const statusConfig: StatusConfig = {
    'Out of stock': {
      text: 'Out of stock',
      color: 'error',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
    },
    'Non-stock': {
      text: 'Non-stock',
      color: 'info',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-700',
    },
  };

  const handleRowClick = () => {
    navigate('/ware-house-inventory-details');
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      statusConfig={statusConfig}
      selectable={true}
      onRowClick={handleRowClick}
      className="overflow-x-auto"
    />
  );
}
