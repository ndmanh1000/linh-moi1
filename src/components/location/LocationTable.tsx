import { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import DataTable, { TableColumn, TableAction, StatusConfig } from '../common/DataTable';
import { apiClient } from '../../services/apiClient';
import { ApiResponse, Location } from '../../types/response';

interface LocationData {
  id: number;
  address: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  dateCreated: string;
  worker: string;
}

export default function LocationTable() {
  const [mappedLocationData, setMappedLocationData] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);

  const columns: TableColumn<LocationData>[] = [
    {
      key: 'address',
      label: 'Address',
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'dateCreated',
      label: 'Date Created',
    },
    {
      key: 'worker',
      label: 'Worker',
    },
  ];

  const statusConfig: StatusConfig = {
    Approved: {
      text: 'Approved',
      color: 'success',
      bgColor: 'bg-green-500',
      textColor: 'text-white',
    },
    Pending: {
      text: 'Pending',
      color: 'warning',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
    },
    Rejected: {
      text: 'Rejected',
      color: 'error',
      bgColor: 'bg-red-100',
      textColor: 'text-red-800',
    },
  };

  const actions: TableAction<LocationData>[] = [
    {
      label: 'Edit',
      icon: <FiEdit2 className="h-4 w-4" />,
      onClick: (row: LocationData) => {
        console.log('Edit location:', row.id);
      },
    },
    {
      label: 'Delete',
      icon: <FiTrash2 className="h-4 w-4" />,
      onClick: (row: LocationData) => {
        console.log('Delete location:', row.id);
      },
      variant: 'danger',
    },
  ];

  useEffect(() => {
    async function fetchLocations() {
      try {
        const location = await apiClient.get<ApiResponse<Location>>('/api/v1/locations');
        const mapped = location.items.map((loc) => ({
          id: parseInt(loc.id),
          address: loc.name,
          status: 'Approved' as const,
          dateCreated: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: '2-digit',
          }),
          worker: 'Unknown',
        }));
        setMappedLocationData(mapped);
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLocations();
  }, []);

  if (loading) {
    return <div className="p-4">Loading locations...</div>;
  }

  return (
    <DataTable
      data={mappedLocationData}
      columns={columns}
      actions={actions}
      statusConfig={statusConfig}
      selectable={true}
      showActions={true}
      maxHeight="max-h-96"
      stickyHeader={true}
      className="bg-white rounded-lg shadow overflow-hidden"
    />
  );
}
