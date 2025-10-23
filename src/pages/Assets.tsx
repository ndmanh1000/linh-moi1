import WorkOrderTask from '../components/workorder/work-order-task/WorkOrderTask';
import FilterButton from '../components/workorder/work-order-button/FilterButton';

import LocationButton from '../components/workorder/work-order-button/LocationButton';
import AssetsTable from '../components/tables/AssetsTable';
import AssetsHeader from '../components/assets/AssetsHeader';

export default function Assets() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <AssetsHeader />
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
        <AssetsTable />
      </div>
    </div>
  );
}
