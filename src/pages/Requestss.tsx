import WorkOrderTask from '../components/workorder/work-order-task/WorkOrderTask';
import FilterButton from '../components/workorder/work-order-button/FilterButton';
import RequestHeader from '../components/request/RequestHeader';
import LocationButton from '../components/workorder/work-order-button/LocationButton';
import RequestTable from '../components/request/RequestTable';

export default function Requestss() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <RequestHeader />
      </div>
      <div>
        <WorkOrderTask />
      </div>
      <div className=" grid grid-cols-1 md:flex items-center md:gap-4 gap-4">
        <FilterButton />

        <LocationButton />

        <p className="cursor-pointer font-medium text-[#007FE6]">Reset</p>
      </div>
      <div>
        <RequestTable />
      </div>
    </div>
  );
}
