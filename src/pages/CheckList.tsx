import { useState } from 'react';
import WorkOrderSearch from '../components/workorder/work-order-task/ui/WorkOrderSearch';
import { MoreIcon } from '../icons';
import FilterButton from '../components/workorder/work-order-button/FilterButton';
import TagButton from '../components/files/ui/files-button/TagButton';
import CheckListTable from '../components/tables/CheckListTable';
import { useModal } from '../hooks/useModal';
import ModalCreateCheckList from '../components/modal/ModalCreateCheckList';
export default function CheckList() {
  const {
    isOpen: isModalCreateCheckListOpen,
    openModal: openModalCreateCheckList,
    closeModal: closeModalCreateCheckList,
  } = useModal();
  const [activeTab, setActiveTab] = useState('start');
  return (
    <div className="w-full flex flex-col md:gap-4 gap-3">
      <div className="w-full flex flex-col md:gap-4 gap-3">
        <div>Checklist</div>
        <div className="flex items-center md:gap-3 gap-3">
          <div>
            {' '}
            <button
              type="button"
              onClick={() => setActiveTab('yourchecklists')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'yourchecklists'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Your Checklists
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('templatelibrary')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'templatelibrary'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Template Library
            </button>
          </div>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />
        <div className=" p-4 ">
          {activeTab === 'yourchecklists' && (
            <div>
              <div className="w-full md:flex items-center justify-between grid grid-cols-1">
                <div>
                  <p>2Checklists</p>
                </div>
                <div className="w-full flex items-center md:gap-3 gap-3 md:justify-end">
                  <div>
                    <WorkOrderSearch />
                  </div>
                  <div>
                    <MoreIcon />
                  </div>
                  <div>
                    <button
                      className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
                      type="button"
                      onClick={openModalCreateCheckList}
                    >
                      Add Checklist
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center md:gap-3 gap-3 md:justify-items-start">
                <FilterButton />
                <TagButton />
                <p className="text-[#0071FF] cursor-pointer">Reset</p>
              </div>
              <div>
                <CheckListTable />
              </div>
            </div>
          )}

          {activeTab === 'templatelibrary' && (
            <div>
              <h2 className="text-lg font-semibold">Tasks Content</h2>
              <p>Danh sách các công việc cần làm sẽ hiển thị ở đây.</p>
            </div>
          )}
        </div>
      </div>
      <ModalCreateCheckList
        isOpen={isModalCreateCheckListOpen}
        onClose={closeModalCreateCheckList}
      />
    </div>
  );
}
