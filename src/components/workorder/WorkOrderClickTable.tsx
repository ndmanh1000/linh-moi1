import PreventiveMainTable from '../tables/PreventiveMainTable';
import FilterButton from './work-order-button/FilterButton';
import StatusButton from './work-order-button/StatusButton';
import PriorityButton from './work-order-button/PriorityButton';
import LocationButton from './work-order-button/LocationButton';
import AssetsButton from './work-order-button/AssetsButton';
import AssignButton from './work-order-button/AssignButton';
import WorkOrderTask from './work-order-task/WorkOrderTask';
import WorkOrderHeader from './WorkOrderHeader';

export default function WorkOrderClickTable() {
  return (
    <div className="w-full flex flex-col gap-6">
      <WorkOrderHeader />

      <div>
        <WorkOrderTask />
      </div>
      <div className=" grid grid-cols-1 md:flex items-center md:gap-4 gap-4">
        <FilterButton />
        <StatusButton />
        <PriorityButton />
        <LocationButton />
        <AssetsButton />
        <AssignButton />
        <p className="cursor-pointer font-medium text-[#007FE6]">Reset</p>
      </div>
      <div>
        <PreventiveMainTable />
      </div>
    </div>
  );
}
