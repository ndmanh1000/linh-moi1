import { useState } from 'react';
import { useModal } from '../hooks/useModal';
import WorkOrderTask from '../components/workorder/work-order-task/WorkOrderTask';
import ModalScanQr from '../components/modal/ModalScanQr';
import { ScanIcon, MoreIcon } from '../icons';
import ModalQr from '../components/modal/ModalQr';
import PeopleTeamTable from '../components/people-teams/PeopleTeamTable';

import Checkbox from '../components/form/input/Checkbox';
import ModalAddTeam from '../components/modal/ModalAddTeam';
import ModalPeopleTeamAddTeam from '../components/modal/ModalPeopleTeamAddTeam';

import AccountTypeButton from '../components/people-teams/AccountTypeButton';
export default function PeoPleTeam() {

  const { isOpen: isModalQrOpen, openModal: openModalQr, closeModal: closeModalQr } = useModal();
  const {
    isOpen: isModalAddTeamOpen,
    openModal: openModalAddTeam,
    closeModal: closeModalAddTeam,
  } = useModal();
  const {
    isOpen: isModalAddPersonOpen,
    openModal: openModalAddPerson,
    closeModal: closeModalAddPerson,
  } = useModal();
  const {
    isOpen: isModalScanQrOpen,
    openModal: openModalScanQr,
    closeModal: closeModalScanQr,
  } = useModal();
  const [includeDeactivated, setIncludeDeactivated] = useState(false);

  const [activeTab, setActiveTab] = useState('People');
  return (
    <div className="w-full flex flex-col md:gap-4 gap-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center md:gap-3 gap-3">
          <div>
            {' '}
            <button
              type="button"
              onClick={() => setActiveTab('people')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'people'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              People
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('teams')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'teams'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Teams
            </button>
          </div>
        </div>

        <div className="flex items-center md:gap-3 gap-3">
          {' '}
          <button
            className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
            type="button"
            onClick={activeTab === 'teams' ? openModalAddTeam : openModalAddPerson}
          >
            {activeTab === 'teams' ? 'Add Teams' : 'Add Person'}
          </button>
          <MoreIcon className="cursor-pointer" />
          <div className="cursor-pointer">
            <ScanIcon className="w-5 h-5" onClick={openModalScanQr} />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#F3F3F3]" />
      <div className="mt-4 p-4 ">
        {activeTab === 'people' && (
          <div className="flex flex-col md:gap-3 gap-3">
            <WorkOrderTask />
            <div className=" grid grid-cols-1 md:flex items-center md:gap-4 gap-4">
              <AccountTypeButton />
              <Checkbox checked={includeDeactivated} onChange={setIncludeDeactivated} />
              <p>Include Deactivated</p>
              <p className="cursor-pointer font-medium text-[#007FE6]">Reset</p>
            </div>

            <PeopleTeamTable />
          </div>
        )}

        {activeTab === 'teams' && (
          <div className="flex flex-col md:gap-3 gap-3">
            <WorkOrderTask />
            <div className="flex flex-col items-center justify-center gap-2 md:gap-6 w-full min-h-[60vh]">
              <div className="text-[20px] font-semibold">No Teams</div>
              <div className="flex flex-col items-center gap-2 md:gap-5">
                <div className="text-[#949494C9]">You can begin by creating or importing teams.</div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div>
                    {' '}
                    <button
                      type="button"
                      onClick={openModalAddTeam}
                      className="border border-gray-300 bg-white flex items-center justify-center px-2 py-2 rounded-[4px]"
                    >
                      Create Team
                    </button>
                  </div>
                  <div>
                    {' '}
                    <button
                      type="button"
                      className="border border-gray-300 bg-white flex items-center justify-center px-2 py-2 rounded-[4px]"
                    >
                      Import Teams
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ModalQr isOpen={isModalQrOpen} onClose={closeModalQr} />
      <ModalAddTeam isOpen={isModalAddPersonOpen} onClose={closeModalAddPerson} />
      <ModalPeopleTeamAddTeam isOpen={isModalAddTeamOpen} onClose={closeModalAddTeam} />
      <ModalScanQr
        isOpen={isModalScanQrOpen}
        onClose={closeModalScanQr}
        onScanSuccess={(result) => {
          console.log('QR Scan result:', result);
          closeModalScanQr();
          // Mở ModalQr sau khi quét QR thành công
          setTimeout(() => {
            openModalQr();
          }, 100);
        }}
      />
    </div>
  );
}
