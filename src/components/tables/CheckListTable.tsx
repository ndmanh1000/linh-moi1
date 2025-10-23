import ModalEditCheckList from '../modal/ModalEditCheckList';
import { useModal } from '../../hooks/useModal';
import DataTable, { TableColumn, TableAction } from '../common/DataTable';

interface RowData {
  id: number;
  name: string;
  description: string;
  tasks?: string;
  tags?: string;
}

const data: RowData[] = [
  {
    id: 1,
    name: 'Westwood HVAC Solutions',
    description: 'Check tổng quan cơ bản các máy',
  },
  {
    id: 2,
    name: 'McMaster–Carr',
    description: 'These tasks and checks should be performed every day at the end',
  },
];

export default function CheckListTable() {
  const {
    isOpen: isModalEditCheckListOpen,
    openModal: openModalEditCheckList,
    closeModal: closeModalEditCheckList,
  } = useModal();

  const columns: TableColumn<RowData>[] = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'description',
      label: 'Description',
    },
    {
      key: 'tasks',
      label: 'Tasks',
      render: (value: string | number | undefined) =>
        (typeof value === 'string' ? value : '') || '',
    },
    {
      key: 'tags',
      label: 'Tags',
      render: (value: string | number | undefined) =>
        (typeof value === 'string' ? value : '') || '',
    },
  ];

  const actions: TableAction<RowData>[] = [
    {
      label: 'Edit',
      onClick: (row: RowData) => {
        console.log('Edit', row);
        openModalEditCheckList();
      },
    },
    {
      label: 'Delete',
      onClick: (row: RowData) => {
        console.log('Delete', row);
      },
      variant: 'danger',
    },
    {
      label: 'Duplicate',
      onClick: (row: RowData) => {
        console.log('Duplicate', row);
      },
    },
  ];

  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        actions={actions}
        selectable={true}
        showActions={true}
        className="overflow-x-auto rounded-lg shadow bg-white relative"
      />
      <ModalEditCheckList isOpen={isModalEditCheckListOpen} onClose={closeModalEditCheckList} />
    </>
  );
}
