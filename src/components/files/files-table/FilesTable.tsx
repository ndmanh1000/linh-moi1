import { useState } from 'react';
import DataTable, { TableColumn, TableAction } from '../../common/DataTable';

interface RowData {
  id: number;
  name: string;
  tags: string;
  uploadedBy: string;
  uploadedByAvatar: string;
  uploadedOn: string;
}

const FilesTable = () => {
  const [rows, setRows] = useState<RowData[]>([
    {
      id: 1,
      name: 'Westwood HVAC Solutions',
      tags: '',
      uploadedBy: 'Trần Linh',
      uploadedByAvatar: 'T',
      uploadedOn: 'John Doe',
    },
  ]);

  const columns: TableColumn<RowData>[] = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'tags',
      label: 'Tags',
    },
    {
      key: 'uploadedBy',
      label: 'Uploaded By',
      render: (value: string | number, row: RowData) => (
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-700 text-white font-bold">
            {row.uploadedByAvatar}
          </div>
          {value}
        </div>
      ),
    },
    {
      key: 'uploadedOn',
      label: 'Uploaded On',
    },
  ];

  const actions: TableAction<RowData>[] = [
    {
      label: 'Edit',
      onClick: (row: RowData) => {
        alert(`Edit row ID: ${row.id}`);
      },
    },
    {
      label: 'Delete',
      onClick: (row: RowData) => {
        if (confirm('Bạn có chắc muốn xóa dòng này?')) {
          setRows((prev) => prev.filter((r) => r.id !== row.id));
        }
      },
      variant: 'danger',
    },
  ];

  return (
    <div className="p-4">
      <DataTable
        data={rows}
        columns={columns}
        actions={actions}
        selectable={true}
        showActions={true}
        className="overflow-x-auto bg-white rounded-lg shadow"
      />
    </div>
  );
};

export default FilesTable;
