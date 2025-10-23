import ModalPeopleDetails from '../modal/ModalPeopleDetails';
import { useModal } from '../../hooks/useModal';
import DataTable, { TableColumn, StatusConfig } from '../common/DataTable';

interface User {
  id: number;
  name: string;
  status: string;
  accountType: string;
  email: string;
  phone: string;
  jobTitle: string;
  hourlyRate: string;
  company: string;
}

export default function PeopleTeamTable() {
  const {
    isOpen: isModalPeopleDetailsOpen,
    openModal: openModalPeopleDetails,
    closeModal: closeModalPeopleDetails,
  } = useModal();

  const data: User[] = [
    {
      id: 1,
      name: 'Trần Linh',
      status: 'Active',
      accountType: 'Administrator',
      email: 'linhtranhai747@gmail.com',
      phone: '+84 912 123 412',
      jobTitle: 'N/A',
      hourlyRate: 'N/A',
      company: 'MESz',
    },
  ];

  const columns: TableColumn<User>[] = [
    {
      key: 'name',
      label: 'Name',
      render: (value: string | number) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
            {typeof value === 'string' ? value.charAt(0) : ''}
          </div>
          {value}
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'accountType',
      label: 'Account Type',
    },
    {
      key: 'email',
      label: 'Email',
      render: (value: string | number) => <span className="truncate max-w-[180px]">{value}</span>,
    },
    {
      key: 'phone',
      label: 'Phone Number',
    },
    {
      key: 'jobTitle',
      label: 'Job Title',
    },
    {
      key: 'hourlyRate',
      label: 'Hourly Rate',
    },
    {
      key: 'company',
      label: 'Company Name',
    },
  ];

  const statusConfig: StatusConfig = {
    Active: {
      text: 'Active',
      color: 'success',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
    },
  };

  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        statusConfig={statusConfig}
        selectable={true}
        onRowClick={openModalPeopleDetails}
        className="overflow-x-auto rounded-lg border border-gray-200"
      />
      <ModalPeopleDetails isOpen={isModalPeopleDetailsOpen} onClose={closeModalPeopleDetails} />
    </>
  );
}
