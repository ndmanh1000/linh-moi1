import WorkOrderTask from '../components/workorder/work-order-task/WorkOrderTask';
import FilterButton from '../components/workorder/work-order-button/FilterButton';

import LocationButton from '../components/workorder/work-order-button/LocationButton';

import LocationHeader from '../components/location/LocationHeader';
import LocationTable from '../components/location/LocationTable';

export default function Location() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <LocationHeader />
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
        <LocationTable />
      </div>
    </div>
  );
}
