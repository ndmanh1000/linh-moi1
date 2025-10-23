import { useState } from 'react';
import ModalRequestDetails from '../modal/ModalRequestDetails';
import DataTable, { TableColumn } from '../common/DataTable';

interface Request {
  id: string;
  title: string;
  asset: string;
  status: {
    text: string;
    color: string;
    bgColor: string;
  };
  workOrderStatus: string;
  submittedCreated: string;
  category: string;
  submittedBy: string;
  priority: string;
  workOrder: string;
  isSelected?: boolean;
  image?: string;
}

const requests: Request[] = [
  {
    id: '1',
    title: 'Linh',
    asset: 'ABC',
    status: {
      text: 'Declined',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    workOrderStatus: 'Open',
    submittedCreated: '07/01/25 - 02:23...',
    category: 'ABC',
    submittedBy: 'Tran Linh',
    priority: '',
    workOrder: '007',
  },
  {
    id: '2',
    title: 'Linh',
    asset: 'ABC',
    status: {
      text: 'Approved',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    workOrderStatus: 'Open',
    submittedCreated: '07/01/25 - 02:23...',
    category: 'ABC',
    submittedBy: 'Tran Linh',
    priority: '',
    workOrder: '007',
  },
  {
    id: '3',
    title: 'Linh',
    asset: 'ABC',
    status: {
      text: 'Declined',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    workOrderStatus: 'Open',
    submittedCreated: '07/01/25 - 02:23...',
    category: 'ABC',
    submittedBy: 'Tran Linh',
    priority: '',
    workOrder: '007',
  },
  {
    id: '4',
    title: 'Linh',
    asset: 'ABC',
    status: {
      text: 'Declined',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    workOrderStatus: 'Open',
    submittedCreated: '07/01/25 - 02:23...',
    category: 'ABC',
    submittedBy: 'Tran Linh',
    priority: '',
    workOrder: '007',
  },
];

const RequestTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const columns: TableColumn<Request>[] = [
    {
      key: 'title',
      label: 'Title',
    },
    {
      key: 'image',
      label: 'Image',
      render: () => (
        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-300 transition-colors">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>
      ),
    },
    {
      key: 'asset',
      label: 'Asset',
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => {
        if (
          value &&
          typeof value === 'object' &&
          'text' in value &&
          'color' in value &&
          'bgColor' in value
        ) {
          return (
            <span
              className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${value.bgColor} ${value.color} whitespace-nowrap`}
            >
              {value.text}
            </span>
          );
        }
        return null;
      },
    },
    {
      key: 'workOrderStatus',
      label: 'Work Order Status',
    },
    {
      key: 'submittedCreated',
      label: 'Submitted Created',
    },
    {
      key: 'category',
      label: 'Category',
    },
    {
      key: 'submittedBy',
      label: 'Submitted By',
    },
    {
      key: 'priority',
      label: 'Priority',
    },
    {
      key: 'workOrder',
      label: 'Work Order',
      render: (value) => (
        <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-800">
          {typeof value === 'string' ? value : ''}
        </span>
      ),
    },
  ];

  return (
    <>
      <DataTable
        data={requests}
        columns={columns}
        selectable={true}
        onRowClick={handleRowClick}
        className="w-full bg-white rounded-lg border border-gray-200"
      />
      <ModalRequestDetails isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default RequestTable;
