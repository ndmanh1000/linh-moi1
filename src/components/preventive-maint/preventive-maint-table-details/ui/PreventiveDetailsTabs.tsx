import { useState } from 'react';

import { GridColumnIcon } from '../../../../icons';
import FilterButton from '../../../workorder/work-order-button/FilterButton';
import LocationButton from '../../../workorder/work-order-button/LocationButton';
import AssignButton from '../../../workorder/work-order-button/AssignButton';
import AssetLocationTable from './AssetLocationTable';
import PreventiveTaskDetails from './PreventiveTaskDetails';
import WorkOrderTask from '../../../workorder/work-order-task/WorkOrderTask';
import StatusButton from '../../../workorder/work-order-button/StatusButton';
import PriorityButton from '../../../workorder/work-order-button/PriorityButton';
import AssetsButton from '../../../workorder/work-order-button/AssetsButton';
import PreventiveWorkOrderTable from './PreventiveWorkOrderTable';
export default function PreventiveDetailsTabs() {
  const [activeTab, setActiveTab] = useState('start');

  return (
    <div className="w-full">
      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button
          type="button"
          onClick={() => setActiveTab('assets')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'assets'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Assets & Locations
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('details')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'details'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('workorders')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'workorders'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Work Orders
        </button>
      </div>

      <div className="mt-4  ">
        {activeTab === 'assets' && (
          <div className="flex flex-col md:gap-4 gap-3">
            <div className="w-full flex items-center justify-between">
              <div>3 Result Returned</div>
              <div className="flex items-center md:gap-3 gap-3">
                <GridColumnIcon />
                Columns
              </div>
            </div>

            <div className="border-b border-gray-200" />
            <div className="w-full md:flex items-center justify-between grid grid-cols-1 gap-2">
              <div className="md:flex items-center gap-3 grid grid-cols-1 md:gap-2 w-full">
                <FilterButton />
                <LocationButton />
                <AssignButton />
                <p className="text-[#007FE6] cursor-pointer">Reset</p>
              </div>
              <div className="cursor-pointer">Save View</div>
            </div>
            <div>
              <AssetLocationTable />
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div>
            <div className="w-full flex items-center justify-between">
              <div>3 Result Returned</div>
              <div className="flex items-center md:gap-3 gap-3">
                <GridColumnIcon />
                Columns
              </div>
            </div>
            <div>
              <PreventiveTaskDetails />
            </div>
          </div>
        )}

        {activeTab === 'workorders' && (
          <div className="flex flex-col md:gap-3 gap-3">
            <div>
              <WorkOrderTask />
            </div>
            <div className="border-b border-[#F3F3F3]" />
            <div className="w-full md:flex items-center justify-between grid grid-cols-1 gap-2">
              <div className="md:flex items-center gap-3 grid grid-cols-1 md:gap-2 w-full">
                <FilterButton />
                <StatusButton />
                <PriorityButton />
                <LocationButton />
                <AssetsButton />
                <AssignButton />
                <p className="text-[#007FE6] cursor-pointer">Reset</p>
              </div>
              <div className="cursor-pointer whitespace-nowrap">Save View</div>
            </div>
            <div>
              <PreventiveWorkOrderTable />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
