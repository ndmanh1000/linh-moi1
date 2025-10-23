import React, { useState } from 'react';
import ModalGridBox from '../../modal/ModalGridBox';

interface WorkOrder {
  id: string;
  woNumber: string;
  title: string;
  dueDate: string;
  status: {
    text: string;
    color: string;
    bgColor: string;
  };
  priority: {
    text: string;
    color: string;
    bgColor: string;
  };
  cost: string;
  assignee: {
    name: string;
    initial: string;
  };
  completedBy?: string;
}

const workOrders: WorkOrder[] = [
  {
    id: '1',
    woNumber: '010',
    title: 'HVAC Monthly Preventive M...',
    dueDate: '07/01/2025 - 10:30PM',
    status: {
      text: 'Open',
      color: 'text-gray-600',
      bgColor: 'bg-gray-200',
    },
    priority: {
      text: 'High',
      color: 'text-white',
      bgColor: 'bg-red-500',
    },
    cost: '-',
    assignee: {
      name: 'Trần Linh',
      initial: 'T',
    },
  },
  {
    id: '2',
    woNumber: '009',
    title: 'kiểm tra máy điều hòa',
    dueDate: '07/01/2025 - 10:30PM',
    status: {
      text: 'In Progress',
      color: 'text-green-600',
      bgColor: 'bg-green-200',
    },
    priority: {
      text: 'None',
      color: 'text-gray-700',
      bgColor: 'bg-gray-300',
    },
    cost: '-',
    assignee: {
      name: 'Trần Linh',
      initial: 'T',
    },
  },
  {
    id: '3',
    woNumber: '008',
    title: 'kiểm tra máy điều hòa',
    dueDate: '07/01/2025 - 10:30PM',
    status: {
      text: 'On Hold',
      color: 'text-orange-600',
      bgColor: 'bg-orange-200',
    },
    priority: {
      text: 'Medium',
      color: 'text-white',
      bgColor: 'bg-orange-400',
    },
    cost: '-',
    assignee: {
      name: 'Trần Linh',
      initial: 'T',
    },
  },
];

const AssetsWorkOrderTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200">
      {/* Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px] lg:min-w-[1200px] xl:min-w-[1400px]">
          {/* Table Header */}
          <div className="bg-gray-50 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
            <div className="grid grid-cols-9 gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm font-medium text-gray-700">
              <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">WO #</div>
              <div className="col-span-2 min-w-[200px] sm:min-w-[250px]">Work Order Title</div>
              <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">Image</div>
              <div className="col-span-1 min-w-[140px] sm:min-w-[180px]">Due Date</div>
              <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">Status</div>
              <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">Priority</div>
              <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">Cost</div>
              <div className="col-span-1 min-w-[120px] sm:min-w-[150px]">Assignees</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {workOrders.map((workOrder) => (
              <div
                key={workOrder.id}
                className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={handleRowClick}
              >
                <div className="grid grid-cols-9 gap-2 sm:gap-3 md:gap-4 items-center text-xs sm:text-sm">
                  {/* WO # */}
                  <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">
                    <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-800">
                      {workOrder.woNumber}
                    </span>
                  </div>

                  {/* Work Order Title */}
                  <div className="col-span-2 min-w-[200px] sm:min-w-[250px]">
                    <span className="text-gray-900 truncate block">{workOrder.title}</span>
                  </div>

                  {/* Image */}
                  <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">
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
                  </div>

                  {/* Due Date */}
                  <div className="col-span-1 min-w-[140px] sm:min-w-[180px]">
                    <span className="text-gray-700">{workOrder.dueDate}</span>
                  </div>

                  {/* Status */}
                  <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${workOrder.status.bgColor}`}
                      ></div>
                      <span className={workOrder.status.color}>{workOrder.status.text}</span>
                    </div>
                  </div>

                  {/* Priority */}
                  <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${workOrder.priority.bgColor} ${workOrder.priority.color}`}
                    >
                      {workOrder.priority.text}
                    </span>
                  </div>

                  {/* Cost */}
                  <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">
                    <span className="text-gray-500">{workOrder.cost}</span>
                  </div>

                  {/* Assignees */}
                  <div className="col-span-1 min-w-[120px] sm:min-w-[150px]">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-600 text-white text-xs flex items-center justify-center font-semibold">
                        {workOrder.assignee.initial}
                      </div>
                      <span className="text-gray-700">{workOrder.assignee.name}</span>
                    </div>
                  </div>

                  {/* Completed By */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal GridBox */}
      <ModalGridBox isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default AssetsWorkOrderTable;
