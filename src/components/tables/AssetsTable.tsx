import { useMemo } from 'react';
import { FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import DataTable, { TableColumn, StatusConfig } from '../common/DataTable';

interface AssetRow {
  id: number;
  name: string;
  image?: string | null;
  location: string;
  barcode: string;
  serialNumber: string;
  description: string;
  category: string;
  status: 'High' | 'Medium' | 'Low' | 'None';
  paused: boolean;
  checklist: string;
}

const initialRows: AssetRow[] = [
  {
    id: 1,
    name: 'Máy A',
    image: null,
    location: 'MES',
    barcode: 'MES',
    serialNumber: 'Monthly HVAC preventative...',
    description: '3',
    category: 'Meter Reading',
    status: 'High',
    paused: false,
    checklist: 'Test 1',
  },
  {
    id: 2,
    name: 'Máy B',
    image: null,
    location: '',
    barcode: 'sdsfsd',
    serialNumber: '',
    description: '3',
    category: 'Meter Reading',
    status: 'None',
    paused: false,
    checklist: 'Test 1',
  },
  {
    id: 3,
    name: 'Máy C',
    image: null,
    location: 'Suite B',
    barcode: '6863fb69392...',
    serialNumber: 'kiểm tra máy điều hòa',
    description: '3',
    category: 'Meter Reading',
    status: 'Medium',
    paused: false,
    checklist: 'Test 1',
  },
];

const AssetsTable: React.FC = () => {
  const rows = useMemo(() => initialRows, []);
  const navigate = useNavigate();

  const columns: TableColumn<AssetRow>[] = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'image',
      label: 'Image',
      render: (value: string | number | boolean | null | undefined, row: AssetRow) => (
        <div className="w-9 h-9 bg-gray-200 flex items-center justify-center rounded-md">
          {typeof value === 'string' && value ? (
            <img src={value} alt={row.name} className="w-9 h-9 object-cover rounded" />
          ) : (
            <FaImage className="text-gray-500" />
          )}
        </div>
      ),
    },
    {
      key: 'location',
      label: 'Location',
    },
    {
      key: 'barcode',
      label: 'Barcode',
    },
    {
      key: 'serialNumber',
      label: 'Serial Number',
    },
    {
      key: 'description',
      label: 'Description',
    },
    {
      key: 'category',
      label: 'Category',
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'paused',
      label: 'Paused',
      render: (value: string | number | boolean | null | undefined) =>
        value === true ? 'Yes' : 'No',
    },
    {
      key: 'checklist',
      label: 'Checklist',
      render: (value: string | number | boolean | null | undefined) => (
        <span className="text-blue-600 cursor-pointer hover:text-blue-800">
          {typeof value === 'string' ? value : ''}
        </span>
      ),
    },
  ];

  const statusConfig: StatusConfig = {
    High: {
      text: 'High',
      color: 'error',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-600',
    },
    Medium: {
      text: 'Medium',
      color: 'warning',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700',
    },
    Low: {
      text: 'Low',
      color: 'success',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-700',
    },
    None: {
      text: 'None',
      color: 'info',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-600',
    },
  };

  const handleRowClick = () => {
    navigate('/assets-task1');
  };

  return (
    <DataTable
      data={rows}
      columns={columns}
      statusConfig={statusConfig}
      selectable={true}
      onRowClick={handleRowClick}
      className="overflow-x-auto rounded-lg bg-white shadow"
    />
  );
};

export default AssetsTable;
