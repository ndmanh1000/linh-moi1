// src/components/TaskDetail.tsx

import Select from '../../../form/Select';
import { Edit3Icon } from '../../../../icons';

export default function PreventiveTaskDetails() {
  interface Options {
    value: string;
    label: string;
  }
  const options10: Options[] = [
    { value: 'high', label: 'High' },
    { value: 'low', label: 'Low' },
  ];

  const handleSelectChange10 = (value: string) => {
    console.log('Selected value:', value);
  };
  return (
    <div className="flex flex-col md:flex-row bg-white md:min-h-screen p-4 gap-4">
      <div className="flex-1 space-y-4">
        <div className="bg-white rounded-lg shadow p-4 border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Kiểm tra máy điều hoà</h2>
              <p className="text-gray-500 text-sm">sgrt</p>
            </div>

            <div className="flex items-center gap-3  ">
              <Select
                options={options10}
                placeholder="Select"
                onChange={handleSelectChange10}
                className="md:w-32"
              />
              <button className="text-sm text-[#000000] hover:underline flex items-center gap-2 md:w-32">
                <Edit3Icon />
                Edit Details
              </button>
            </div>
          </div>
          <div className="w-full border-b border-[#F3F3F3] mt-4"></div>

          <div className="mt-4 md:flex-col md:gap-4 flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-medium">Category: </span>
              <span className="text-gray-600">Meter Reading</span>
            </div>
            <div>
              <span className="font-medium">Estimate Time: </span>
              <span className="text-gray-600">None</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 border">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-semibold">Test1</h3>
            <button className="text-sm text-[#000000] hover:underline flex items-center gap-2 md:w-32">
              <Edit3Icon />
              Edit Details
            </button>
          </div>
          <div className="w-full border-b border-[#F3F3F3] mt-4"></div>

          <ul className="mt-4 space-y-2">
            <li className="flex justify-between items-center">
              <span>1. Nhìn bên ngoài máy xem thế nào</span>
              <span className="text-gray-500 text-xs">Task</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/4 bg-white rounded-lg shadow p-4 border">
        <h4 className="text-md font-semibold mb-4">Activity</h4>
        <div className="md:flex items-center grid grid-cols-1 md:gap-2 gap-2 w-full">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              T
            </div>
            <div className="flex-1 ">
              <p className="text-sm font-medium">Trần Linh</p>
              <p className="text-xs text-gray-500">07/01/2025 10:14 PM</p>
            </div>
          </div>
          <button className="mt-4 text-red-500 hover:text-red-600">🗑 Xoá</button>
        </div>
      </div>
    </div>
  );
}
