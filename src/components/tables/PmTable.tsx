import React, { useState } from 'react';
import Select from '../form/Select';
import DatePicker from '../form/date-picker';

interface RowData {
  id: number;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  timezone: string;
  assignedTo: string;
  additionalWorkers: string;
}

const PmTable: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([
    {
      id: 1,
      name: 'maintenance_task_1',
      location: 'production_floor',
      startDate: '2025-07-03',
      endDate: '2025-07-05',
      timezone: 'hanoi',
      assignedTo: 'john_doe',
      additionalWorkers: 'team_a',
    },
  ]);

  const handleChange = (id: number, field: keyof RowData, value: string) => {
    setRows((prev) => prev.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const handleDelete = (id: number) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  // Options for Name field
  const nameOptions = [
    { value: 'maintenance_task_1', label: 'Maintenance Task 1' },
    { value: 'preventive_maintenance', label: 'Preventive Maintenance' },
    { value: 'equipment_check', label: 'Equipment Check' },
    { value: 'system_inspection', label: 'System Inspection' },
    { value: 'routine_service', label: 'Routine Service' },
  ];

  // Options for Location field
  const locationOptions = [
    { value: 'production_floor', label: 'Production Floor' },
    { value: 'warehouse_a', label: 'Warehouse A' },
    { value: 'maintenance_bay', label: 'Maintenance Bay' },
    { value: 'control_room', label: 'Control Room' },
    { value: 'equipment_room', label: 'Equipment Room' },
  ];

  // Options for Timezone field
  const timezoneOptions = [
    { value: 'hanoi', label: '(UTC +07:00) Asia/Hanoi' },
    { value: 'bangkok', label: '(UTC +07:00) Asia/Bangkok' },
    { value: 'singapore', label: '(UTC +08:00) Asia/Singapore' },
    { value: 'tokyo', label: '(UTC +09:00) Asia/Tokyo' },
    { value: 'sydney', label: '(UTC +10:00) Australia/Sydney' },
    { value: 'new_york', label: '(UTC -05:00) America/New_York' },
    { value: 'london', label: '(UTC +00:00) Europe/London' },
  ];

  // Options for Assigned To field
  const assignedToOptions = [
    { value: 'john_doe', label: 'John Doe' },
    { value: 'jane_smith', label: 'Jane Smith' },
    { value: 'mike_johnson', label: 'Mike Johnson' },
    { value: 'sarah_wilson', label: 'Sarah Wilson' },
    { value: 'david_brown', label: 'David Brown' },
  ];

  // Options for Additional Workers field
  const additionalWorkersOptions = [
    { value: 'none', label: 'None' },
    { value: 'team_a', label: 'Team A' },
    { value: 'team_b', label: 'Team B' },
    { value: 'specialists', label: 'Specialists' },
    { value: 'contractors', label: 'Contractors' },
  ];

  return (
    <div className="overflow-x-auto md:h-[600px]">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm block md:table">
        <thead className="hidden md:table-header-group">
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-2 text-left border-r border-gray-200">Name</th>
            <th className="p-2 text-left border-r border-gray-200">Location</th>
            <th className="p-2 text-left border-r border-gray-200">Start Date</th>
            <th className="p-2 text-left border-r border-gray-200">End Date</th>
            <th className="p-2 text-left border-r border-gray-200">Timezone</th>
            <th className="p-2 text-left border-r border-gray-200">Assigned To</th>
            <th className="p-2 text-left border-r border-gray-200">Additional Workers</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody className="block md:table-row-group">
          {rows.map((row) => (
            <tr key={row.id} className="border-t block md:table-row mb-4 md:mb-0">
              <td className="p-2 block md:table-cell">
                <div className="md:hidden font-semibold mb-1">Name</div>
                <Select
                  options={nameOptions}
                  placeholder="Select task name"
                  onChange={(value) => handleChange(row.id, 'name', value)}
                  defaultValue={row.name}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell">
                <div className="md:hidden font-semibold mb-1">Location</div>
                <Select
                  options={locationOptions}
                  placeholder="Select location"
                  onChange={(value) => handleChange(row.id, 'location', value)}
                  defaultValue={row.location}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">Start Date</div>
                <div className="w-full">
                  <DatePicker
                    id={`start-date-${row.id}`}
                    placeholder="Select start date"
                    onChange={(_, currentDateString) => {
                      handleChange(row.id, 'startDate', currentDateString);
                    }}
                  />
                </div>
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">End Date</div>
                <DatePicker
                  id={`end-date-${row.id}`}
                  placeholder="Select end date"
                  onChange={(_, currentDateString) => {
                    handleChange(row.id, 'endDate', currentDateString);
                  }}
                />
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">Timezone</div>
                <Select
                  options={timezoneOptions}
                  placeholder="Select timezone"
                  onChange={(value) => handleChange(row.id, 'timezone', value)}
                  defaultValue={row.timezone}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">Assigned To</div>
                <Select
                  options={assignedToOptions}
                  placeholder="Select assigned to"
                  onChange={(value) => handleChange(row.id, 'assignedTo', value)}
                  defaultValue={row.assignedTo}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">Additional Workers</div>
                <Select
                  options={additionalWorkersOptions}
                  placeholder="Select additional worker"
                  onChange={(value) => handleChange(row.id, 'additionalWorkers', value)}
                  defaultValue={row.additionalWorkers}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell  text-center">
                <div className="md:hidden font-semibold mb-1">Action</div>
                <button
                  className="text-red-500 hover:text-red-700"
                  type="button"
                  onClick={() => handleDelete(row.id)}
                >
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PmTable;
