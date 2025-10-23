import WorkOrderTask from '../components/workorder/work-order-task/WorkOrderTask';
import FilterButton from '../components/workorder/work-order-button/FilterButton';
import TagButton from '../components/files/ui/files-button/TagButton';
import FilesTable from '../components/files/files-table/FilesTable';
import ModalFiless from '../components/modal/ModalFiless';
import { useModal } from '../hooks/useModal';

export default function Filess() {
  const {
    isOpen: isModalFilessOpen,
    openModal: openModalFiless,
    closeModal: closeModalFiless,
  } = useModal();
  return (
    <div className="w-full flex flex-col md:gap-4 gap-3">
      <div className="w-full flex items-center justify-between">
        <div>Files</div>
        <div>
          <button
            className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
            type="button"
            onClick={openModalFiless}
          >
            Add Files
          </button>
        </div>
      </div>
      <div className="w-full border-b border-[#F3F3F3]" />
      <div>
        <WorkOrderTask />
      </div>
      <div className="w-full border-b border-[#F3F3F3]" />
      <div className="w-full flex items-center md:justify-items-start md:gap-2 gap-2">
        <FilterButton />
        <TagButton />
        <p className="text-[#007FE6] cursor-pointer">Reset</p>
      </div>
      <div>
        <FilesTable />
      </div>
      <ModalFiless isOpen={isModalFilessOpen} onClose={closeModalFiless} />
    </div>
  );
}
