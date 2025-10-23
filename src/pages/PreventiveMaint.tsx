import PreventiveMaintHeader from '../components/preventive-maint/PreventiveMaintHeader';
import WorkOrderTask from '../components/workorder/work-order-task/WorkOrderTask';
import FilterButton from '../components/workorder/work-order-button/FilterButton';
import StatusButton from '../components/workorder/work-order-button/StatusButton';
import PriorityButton from '../components/workorder/work-order-button/PriorityButton';
import LocationButton from '../components/workorder/work-order-button/LocationButton';
import AssetsButton from '../components/workorder/work-order-button/AssetsButton';
import AssignButton from '../components/workorder/work-order-button/AssignButton';
import PreventiveMainTable from '../components/tables/PreventiveMainTable';

export default function PreventiveMaint() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <PreventiveMaintHeader />
      </div>
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
