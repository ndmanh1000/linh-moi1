import React from 'react';

import { Modal } from '../ui/modal';
import FormPersonInfor from '../people-teams/FormPersonInfor';
import { useState } from 'react';
import { MoreIcon } from '../../icons';
import FormMoreInfor from '../people-teams/FormMoreInfor';
import ModalPeopleTeamEdit from './ModalPeopleTeamEdit';
import ModalDeactive from './ModalDeactive';
import ModalDeletePerson from './ModalDeletePerson';
import { useModal } from '../../hooks/useModal';

interface UserCardProps {
  name: string;
  role: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, role }) => {
  return (
    <div className="flex items-center space-x-2 mt-2">
      <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="flex items-center space-x-1">
        <span className="font-semibold text-gray-900">{name}</span>
        <span className="text-gray-400">- {role}</span>
      </div>
    </div>
  );
};

interface ModalPeopleDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalPeopleDetails({ isOpen, onClose }: ModalPeopleDetailsProps) {
  const [activeTab, setActiveTab] = useState('start');
  const [showMenu, setShowMenu] = useState(false);
  const {
    isOpen: isModalPeopleTeamEditOpen,
    openModal: openModalPeopleTeamEdit,
    closeModal: closeModalPeopleTeamEdit,
  } = useModal();

  const {
    isOpen: isModalDeactiveOpen,
    openModal: openModalDeactive,
    closeModal: closeModalDeactive,
  } = useModal();

  const {
    isOpen: isModalDeletePersonOpen,
    openModal: openModalDeletePerson,
    closeModal: closeModalDeletePerson,
  } = useModal();

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
        <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14 py-2">
            <UserCard name="Trần Linh" role="Administrator" />
          </div>
          <div className="w-full border-b border-[#F3F3F3]" />

          <form className="flex flex-col">
            <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
              <div className="mt-7 flex flex-col md:gap-4 gap-3">
                <div className="grid grid-cols-1 md:flex items-center justify-between">
                  <div>
                    <div className="flex flex-wrap border-b border-gray-200 w-full">
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
                        onClick={() => setActiveTab('work-oder')}
                        className={`px-4 py-2 text-sm font-medium ${
                          activeTab === 'work-oder'
                            ? 'text-blue-500 border-b-2 border-blue-500'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Work Order
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:flex items-center md:gap-3 gap-3">
                    <div className="border border-[#E6F6E7] bg-[#E6F6E7] rounded-[5px] p-1 w-full text-center md:w-20 md:h-10">
                      Active
                    </div>
                    <div>
                      <button
                        className="border border-[#949494] bg-white text-[#949494] rounded-[5px] border-solid w-full md:w-20 md:h-10"
                        type="button"
                        onClick={openModalPeopleTeamEdit}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="w-full cursor-pointer relative">
                      <MoreIcon onClick={() => setShowMenu(!showMenu)} />
                      {showMenu && (
                        <div className="absolute right-0 top-8 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                          <div className="py-1">
                            <button
                              className="flex items-center px-4 py-2 text-sm text-pink-600 hover:bg-gray-100 w-full text-left"
                              type="button"
                              onClick={() => {
                                setShowMenu(false);
                                openModalDeactive();
                              }}
                            >
                              <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4"
                                />
                              </svg>
                              Deactivate
                            </button>
                            <button
                              className="flex items-center px-4 py-2 text-sm text-pink-600 hover:bg-gray-100 w-full text-left"
                              type="button"
                              onClick={() => {
                                setShowMenu(false);
                                openModalDeletePerson();
                              }}
                            >
                              <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full border-b border-[#F3F3F3]" />
                <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                  {activeTab === 'details' && (
                    <div className="flex flex-col md:gap-3 gap-3 w-full">
                      <FormPersonInfor />
                      <FormMoreInfor />
                    </div>
                  )}

                  {activeTab === 'work-oder' && <div>Content</div>}
                </div>
              </div>

              <div className="w-full flex items-center justify-end gap-2 md:gap-4 md:mt-3 mt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-white px-2 py-2 rounded border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="border border-gray-300 bg-white flex items-center justify-center px-2 py-2 rounded-[4px]"
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <ModalPeopleTeamEdit isOpen={isModalPeopleTeamEditOpen} onClose={closeModalPeopleTeamEdit} />
      <ModalDeactive isOpen={isModalDeactiveOpen} onClose={closeModalDeactive} />
      <ModalDeletePerson isOpen={isModalDeletePersonOpen} onClose={closeModalDeletePerson} />
    </div>
  );
}
