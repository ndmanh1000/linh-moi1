import { useMemo, useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import DataTable, { TableColumn } from '../common/DataTable';

type Vendor = {
  id: number;
  name: string;
  address: string;
  phone: string;
  contact: string;
  email: string;
  vendorType: string;
  website: string;
  dateCreate: string;
  hourlyRate: string;
};

const vendors: Vendor[] = [
  {
    id: 1,
    name: 'Westwood HVAC Solutions',
    address: '10855 Lindbrook Dr, Los Angeles, CA',
    phone: '+84 912 123 412',
    contact: 'John Doe',
    email: 'linhtranhai747@gmail.com',
    vendorType: 'HVAC Repair and Service',
    website: 'N/A',
    dateCreate: '2025-07-01',
    hourlyRate: '$95.00',
  },
  {
    id: 2,
    name: 'McMaster - Carr',
    address: '9630 Norwalk Blvd. Santa Fe Springs, CA',
    phone: '+84 912 123 412',
    contact: 'John Doe',
    email: 'linhtranhai747@gmail.com',
    vendorType: 'General Parts',
    website: 'http://www.mcmaster.com/',
    dateCreate: '2025-07-01',
    hourlyRate: 'N/A',
  },
  
];

export default function VerdorsCustomersTable() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const setSort = (dir: 'asc' | 'desc') => {
    setSortOrder((cur) => (cur === dir ? null : dir));
  };

  const sortedVendors = useMemo(() => {
    if (!sortOrder) return vendors;
    const arr = [...vendors];
    arr.sort((a, b) => {
      const da = new Date(a.dateCreate).getTime();
      const db = new Date(b.dateCreate).getTime();
      return sortOrder === 'asc' ? da - db : db - da;
    });
    return arr;
  }, [sortOrder]);

  const columns: TableColumn<Vendor>[] = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'address',
      label: 'Address',
    },
    {
      key: 'phone',
      label: 'Phone Number',
    },
    {
      key: 'contact',
      label: 'Contact',
    },
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'vendorType',
      label: 'Vendor Type',
    },
    {
      key: 'website',
      label: 'Website',
      render: (value: string | number) => (
        <span className="text-blue-500 underline">
          {value === 'N/A' ? (
            'N/A'
          ) : (
            <a href={String(value)} target="_blank" rel="noopener noreferrer">
              {value}
            </a>
          )}
        </span>
      ),
    },
    {
      key: 'dateCreate',
      label: 'Date Create',
      render: (value: string | number) => (
        <div className="flex items-center gap-2">
          <span>{new Date(String(value)).toLocaleDateString('en-US')}</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSort('asc')}
              className={`p-1 rounded hover:bg-gray-100 transition
                ${sortOrder === 'asc' ? 'text-gray-900' : 'text-gray-400'}`}
              aria-pressed={sortOrder === 'asc'}
              title="Sort ascending"
            >
              <FaArrowUp />
            </button>
            <button
              type="button"
              onClick={() => setSort('desc')}
              className={`p-1 rounded hover:bg-gray-100 transition
                ${sortOrder === 'desc' ? 'text-gray-900' : 'text-gray-400'}`}
              aria-pressed={sortOrder === 'desc'}
              title="Sort descending"
            >
              <FaArrowDown />
            </button>
          </div>
        </div>
      ),
    },
    {
      key: 'hourlyRate',
      label: 'Hourly Rate',
    },
  ];

  return (
    <div className="p-4">
      <DataTable
        data={sortedVendors}
        columns={columns}
        selectable={true}
        className="overflow-x-auto rounded-lg border border-gray-200"
      />
    </div>
  );
}
