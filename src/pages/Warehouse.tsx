import { MoreIcon, ScanIcon } from '../icons';
import { useState } from 'react';
import { useModal } from '../hooks/useModal';
import WorkOrderTask from '../components/workorder/work-order-task/WorkOrderTask';
import ModalQr from '../components/modal/ModalQr';
import FilterButton from '../components/workorder/work-order-button/FilterButton';
import StatusButton from '../components/workorder/work-order-button/StatusButton';
import IncomingButton from '../components/warehouse/IncomingButton';
import LocationButton from '../components/workorder/work-order-button/LocationButton';
import TagButton from '../components/files/ui/files-button/TagButton';
import WarehouseTable from '../components/warehouse/WarehouseTable';
import PartsTable from '../components/warehouse/ui-parts/PartsTable';
import SetsTable from '../components/warehouse/ui-sets/SetsTable';
import ModalCreateSet from '../components/modal/ModalCreateSet';
import ModalCreateCycleCount from '../components/modal/ModalCreateCycleCount';
import TableCycleCounts from '../components/warehouse/ui-cycle-counts/TableCycleCounts';

export default function Warehouse() {
  const { isOpen: isModalQrOpen, openModal: openModalQr, closeModal: closeModalQr } = useModal();

  // Khai báo state cho từng loại modal riêng biệt

  const {
    isOpen: isModalCreateSetOpen,
    openModal: openModalCreateSet,
    closeModal: closeModalCreateSet,
  } = useModal();

  const {
    isOpen: isModalCreateCycleCountOpen,
    openModal: openModalCreateCycleCount,
    closeModal: closeModalCreateCycleCount,
  } = useModal();

  const [activeTab, setActiveTab] = useState('inventory');

  // Hàm xác định tên nút dựa trên tab đang hoạt động
  const getButtonName = () => {
    switch (activeTab) {
      case 'inventory':
        return 'Create Inventory';
      case 'parts':
        return 'Create Part';
      case 'sets':
        return 'Create Set';
      case 'cyclecounts':
        return 'Create Cycle Count';
      default:
        return 'Create';
    }
  };

  // Hàm xử lý việc mở modal đúng
  const handleOpenModal = () => {
    switch (activeTab) {
      case 'sets':
        openModalCreateSet();
        break;
      case 'cyclecounts':
        openModalCreateCycleCount();
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full flex flex-col md:gap-4 gap-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center md:gap-3 gap-3">
          <div>
            <button
              type="button"
              onClick={() => setActiveTab('inventory')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'inventory'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Inventory
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('parts')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'parts'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Parts
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sets')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'sets'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sets
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cyclecounts')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'cyclecounts'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Cycle Counts
            </button>
          </div>
        </div>

        <div className="flex items-center md:gap-3 gap-3">
          <button
            className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
            type="button"
            onClick={handleOpenModal}
          >
            {getButtonName()}
          </button>
          <MoreIcon />
          <div className="cursor-pointer">
            <ScanIcon className="w-5 h-5" onClick={openModalQr} />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#F3F3F3]" />
      <div className="mt-4 p-4 ">
        {activeTab === 'inventory' && (
          <div className="flex flex-col md:gap-3 gap-3">
            <WorkOrderTask />
            <div className="grid grid-cols-1 md:flex items-center md:gap-4 gap-4">
              <FilterButton />
              <StatusButton />
              <IncomingButton />
              <LocationButton />
              <TagButton />
              <p className="cursor-pointer font-medium text-[#007FE6]">Reset</p>
            </div>
            <WarehouseTable />
          </div>
        )}

        {activeTab === 'parts' && (
          <div className="flex flex-col md:gap-3 gap-3">
            <div>
              <WorkOrderTask />
            </div>
            <div className="grid grid-cols-1 md:flex items-center md:gap-4 gap-4">
              <FilterButton />
              <StatusButton />
              <IncomingButton />
              <LocationButton />
              <TagButton />
              <p className="cursor-pointer font-medium text-[#007FE6]">Reset</p>
            </div>
            <PartsTable />
          </div>
        )}

        {activeTab === 'sets' && (
          <div className="flex flex-col md:gap-3 gap-3">
            <div>
              <WorkOrderTask />
            </div>
            <div className="grid grid-cols-1 md:flex items-center md:gap-4 gap-4">
              <FilterButton />
              <StatusButton />
              <IncomingButton />
              <LocationButton />
              <TagButton />
              <p className="cursor-pointer font-medium text-[#007FE6]">Reset</p>
            </div>
            <SetsTable />
          </div>
        )}

        {activeTab === 'cyclecounts' && (
          <div className="flex flex-col md:gap-3 gap-3">
            <div>
              <WorkOrderTask />
            </div>

            <p className="cursor-pointer font-medium text-[#007FE6]">Reset</p>

            <TableCycleCounts />
          </div>
        )}
      </div>

      {/* Các Modal được đặt ở cuối component */}

      <ModalCreateSet isOpen={isModalCreateSetOpen} onClose={closeModalCreateSet} />
      <ModalCreateCycleCount
        isOpen={isModalCreateCycleCountOpen}
        onClose={closeModalCreateCycleCount}
      />
      <ModalQr isOpen={isModalQrOpen} onClose={closeModalQr} />
    </div>
  );
}
