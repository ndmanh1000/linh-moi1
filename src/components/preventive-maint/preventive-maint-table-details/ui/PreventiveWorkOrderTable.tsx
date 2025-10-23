interface WorkOrder {
  id: string;
  title: string;
  image?: string;
  dueDate: string;
  status: 'Open' | 'In Progress' | 'On Hold';
  priority: 'High' | 'Medium' | 'None';
  cost?: string;
  assignee: string;
  completedBy?: string;
}

const data: WorkOrder[] = [
  {
    id: '010',
    title: 'HVAC Monthly Preventive M...',
    dueDate: '07/01/2025 - 10:30PM',
    status: 'Open',
    priority: 'High',
    cost: '-',
    assignee: 'Trần Linh',
  },
  {
    id: '009',
    title: 'kiểm tra máy điều hoà',
    dueDate: '07/01/2025 - 10:30PM',
    status: 'In Progress',
    priority: 'None',
    cost: '-',
    assignee: 'Trần Linh',
  },
  {
    id: '008',
    title: 'Kiểm tra máy điều hoà',
    dueDate: '07/01/2025 - 10:30PM',
    status: 'On Hold',
    priority: 'Medium',
    cost: '-',
    assignee: 'Trần Linh',
  },
];

export default function PreventiveWorkOrderTable() {
  const statusColors: Record<WorkOrder['status'], string> = {
    Open: 'text-gray-500',
    'In Progress': 'text-green-600',
    'On Hold': 'text-orange-500',
  };

  const priorityColors: Record<WorkOrder['priority'], string> = {
    High: 'bg-red-100 text-red-600',
    Medium: 'bg-yellow-100 text-yellow-600',
    None: 'bg-gray-300 text-gray-700',
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="p-3">WO #</th>
            <th className="p-3">Work Order Title</th>
            <th className="p-3">Image</th>
            <th className="p-3">Due Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Cost</th>
            <th className="p-3">Assignees</th>
            <th className="p-3">Completed By</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="p-3 text-blue-500 font-medium cursor-pointer hover:underline">
                {row.id}
              </td>
              <td className="p-3">{row.title}</td>
              <td className="p-3">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500">👤</span>
                </div>
              </td>
              <td className="p-3">{row.dueDate}</td>
              <td className="p-3">
                <span className={`${statusColors[row.status]} flex items-center gap-1`}>
                  {row.status === 'Open' && '○'}
                  {row.status === 'In Progress' && '🟢'}
                  {row.status === 'On Hold' && '🟠'}
                  {row.status}
                </span>
              </td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    priorityColors[row.priority]
                  }`}
                >
                  {row.priority}
                </span>
              </td>
              <td className="p-3">{row.cost || '-'}</td>
              <td className="p-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold">
                  T
                </div>
                <span>{row.assignee}</span>
              </td>
              <td className="p-3">{row.completedBy || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
