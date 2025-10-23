import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

interface DataType {
  location: string;
  closeoutNotes: string;
  category: string;
  estimatedDuration: string;
  primaryAssignee: string;
}

type FieldKey = keyof DataType;

export default function BodyModalGridBox() {
  const [status, setStatus] = useState<'Operational' | 'In Progress' | 'Completed'>('Operational');
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [hoveredRow, setHoveredRow] = useState<FieldKey | null>(null);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [editField, setEditField] = useState<FieldKey | ''>('');
  const [editValue, setEditValue] = useState<string>('');

  const [data, setData] = useState<DataType>({
    location: 'Suite B',
    closeoutNotes: 'N/A',
    category: 'Preventative',
    estimatedDuration: '10',
    primaryAssignee: 'Trần Linh',
  });

  const fieldNames: Record<FieldKey, string> = {
    location: 'Location',
    closeoutNotes: 'Closeout Notes',
    category: 'Category',
    estimatedDuration: 'Estimated Duration',
    primaryAssignee: 'Primary Assignee',
  };

  const getPriorityColor = () => {
    switch (priority) {
      case 'High':
        return 'bg-orange-500';
      case 'Low':
        return 'bg-red-500';
      case 'Medium':
      default:
        return 'bg-green-500';
    }
  };

  const handleEditClick = (field: FieldKey, value: string) => {
    setEditField(field);
    setEditValue(value);
    setEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (editField) {
      setData({ ...data, [editField]: editValue });
    }
    setEditModalOpen(false);
  };

  return (
    <div className="w-full border border-[#F3F3F3] bg-white rounded-[8px] px-[24px] py-[24px]">
      <div className="flex flex-col md:gap-2 gap-4">
        <p>HVAC Monthly Preventive Maintenance - AC</p>
        <p>Monthy HVAC preventative maintenance, specifically for AC function</p>
      </div>
      <div className="w-full border-b border-[#F3F3F3] md:mt-4 mt-3"></div>
      <div className="flex flex-col md:gap-4 gap-5">
        <div className="space-y-4 text-sm md:mt-3 mt-3">
          <div
            className="flex items-start relative"
            onMouseEnter={() => setHoveredRow('location')}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <span className="w-40 text-gray-500">Location</span>
            <a href="#" className="text-blue-500 hover:underline">
              {data.location}
            </a>
            {hoveredRow === 'location' && (
              <FaEdit
                className="absolute right-0 cursor-pointer"
                onClick={() => handleEditClick('location', data.location)}
              />
            )}
          </div>

          <div className="flex items-center w-full md:gap-4">
            <div className="w-40 text-gray-500">Asset</div>
            <div>
              <a href="#" className="text-blue-500 hover:underline">
                TRANE HVAC Suite B
              </a>
            </div>
            <div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as typeof status)}
                className="border rounded px-3 py-1 text-sm"
              >
                <option>Operational</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <span className="w-40 text-gray-500">Priority</span>
          <div className="flex items-center space-x-2">
            <span className={`w-2 h-2 rounded-full ${getPriorityColor()}`}></span>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as typeof priority)}
              className="border-none bg-transparent focus:outline-none"
            >
              <option>Medium</option>
              <option>High</option>
              <option>Low</option>
            </select>
          </div>
        </div>

        <div
          className="flex items-start relative"
          onMouseEnter={() => setHoveredRow('closeoutNotes')}
          onMouseLeave={() => setHoveredRow(null)}
        >
          <span className="w-40 text-gray-500">Closeout Notes</span>
          <span className="text-gray-700">{data.closeoutNotes}</span>
          {hoveredRow === 'closeoutNotes' && (
            <FaEdit
              className="absolute right-0 cursor-pointer"
              onClick={() => handleEditClick('closeoutNotes', data.closeoutNotes)}
            />
          )}
        </div>

        <div
          className="flex items-start relative"
          onMouseEnter={() => setHoveredRow('category')}
          onMouseLeave={() => setHoveredRow(null)}
        >
          <span className="w-40 text-gray-500">Category</span>
          <span className="text-gray-700">{data.category}</span>
          {hoveredRow === 'category' && (
            <FaEdit
              className="absolute right-0 cursor-pointer"
              onClick={() => handleEditClick('category', data.category)}
            />
          )}
        </div>

        <div
          className="flex items-start relative"
          onMouseEnter={() => setHoveredRow('estimatedDuration')}
          onMouseLeave={() => setHoveredRow(null)}
        >
          <span className="w-40 text-gray-500">Estimated Duration</span>
          <span className="text-gray-700">{data.estimatedDuration}</span>
          {hoveredRow === 'estimatedDuration' && (
            <FaEdit
              className="absolute right-0 cursor-pointer"
              onClick={() => handleEditClick('estimatedDuration', data.estimatedDuration)}
            />
          )}
        </div>

        <div className="flex items-start">
          <span className="w-40 text-gray-500">Created</span>
          <span>
            Jul 02, 2025 11:00 AM by{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Trần Linh
            </a>
          </span>
        </div>

        <div className="flex items-start">
          <span className="w-40 text-gray-500">Last Update</span>
          <span>
            Jul 02, 2025 11:00 AM by{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Trần Linh
            </a>
          </span>
        </div>

        <div className="flex items-start">
          <span className="w-40 text-gray-500">Due Date</span>
          <span>Aug 02, 2025 11:12 AM</span>
        </div>

        <div
          className="flex items-start relative"
          onMouseEnter={() => setHoveredRow('primaryAssignee')}
          onMouseLeave={() => setHoveredRow(null)}
        >
          <span className="w-40 text-gray-500">Primary Assignee</span>
          <a href="#" className="text-blue-500 hover:underline">
            {data.primaryAssignee}
          </a>
          {hoveredRow === 'primaryAssignee' && (
            <FaEdit
              className="absolute right-0 cursor-pointer"
              onClick={() => handleEditClick('primaryAssignee', data.primaryAssignee)}
            />
          )}
        </div>
      </div>

      {editModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 transform transition-all duration-300 scale-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Chỉnh sửa {editField && fieldNames[editField as FieldKey]}
            </h2>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition duration-200"
              >
                Hủy
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
