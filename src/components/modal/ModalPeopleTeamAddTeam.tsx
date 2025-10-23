import { useState } from 'react';
import Label from '../form/Label';
import { Modal } from '../ui/modal';

import InputField from '../form/input/InputField';
import ModalDiscardChanges from './ModalDiscardChanges';



interface Worker {
  id: string;
  name: string;
  selected: boolean;
}

interface ModalPeopleTeamAddTeamProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalPeopleTeamAddTeam({ isOpen, onClose }: ModalPeopleTeamAddTeamProps) {
  const [firstName, setFirstName] = useState('');
  const [description, setDescription] = useState('');
  const [workers, setWorkers] = useState<Worker[]>([
    { id: '1', name: 'Trần Linh', selected: false },
    { id: '2', name: 'Ad', selected: false },
    { id: '3', name: 'McMaster-Carr - Vendor', selected: false },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showWorkersDropdown, setShowWorkersDropdown] = useState(false);
  const [showDiscardModal, setShowDiscardModal] = useState(false);

  const handleWorkerToggle = (workerId: string) => {
    setWorkers(prev => prev.map(worker => 
      worker.id === workerId ? { ...worker, selected: !worker.selected } : worker
    ));
  };

  const filteredWorkers = workers.filter(worker => 
    worker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedWorkers = workers.filter(worker => worker.selected);

  const hasUnsavedChanges = firstName.trim() || description.trim() || selectedWorkers.length > 0;

  const handleCancelClick = () => {
    if (hasUnsavedChanges) {
      setShowDiscardModal(true);
    } else {
      onClose();
    }
  };

  const handleDiscard = () => {
    setShowDiscardModal(false);
    onClose();
  };

  const handleDiscardModalClose = () => {
    setShowDiscardModal(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">Add Team</h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
            <div className="mt-7">
              {/* Team Information Section */}
              <div className="mb-6">
                <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">Team Information</h5>
                
                <div className="mb-4">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    First name <span className="text-red-500">*</span>
                  </Label>
                  <InputField
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description
                  </Label>
                  <div className="relative mt-1">
                    <InputField
                      id="description"
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter description"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* More Information Section */}
              <div className="mb-6">
                <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">More Information</h5>
                
                <div className="mb-4">
                  <Label htmlFor="workers" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Workers
                  </Label>
                  <div className="relative mt-1">
                    <div
                      className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 cursor-pointer focus:border-blue-500 focus:outline-none"
                      onClick={() => setShowWorkersDropdown(!showWorkersDropdown)}
                    >
                      {selectedWorkers.length > 0 
                        ? `${selectedWorkers.length} worker(s) selected`
                        : 'Select workers'
                      }
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {showWorkersDropdown && (
                      <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
                        <div className="p-3">
                          <div className="mb-3">
                            <input
                              type="text"
                              placeholder="Q Search"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                            />
                          </div>
                          <div className="max-h-48 overflow-y-auto">
                            {filteredWorkers.map((worker) => (
                              <div key={worker.id} className="flex items-center p-2 hover:bg-gray-50">
                                <input
                                  type="checkbox"
                                  checked={worker.selected}
                                  onChange={() => handleWorkerToggle(worker.id)}
                                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <div className="flex items-center">
                                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white text-sm font-medium">
                                    T
                                  </div>
                                  <span className="text-sm text-gray-700">{worker.name}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-end gap-2 md:gap-4 md:mt-3 mt-3">
              <button
                type="button"
                onClick={handleCancelClick}
                className="bg-white px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded ${
                  firstName.trim() 
                    ? 'bg-gray-500 bg-gray-500 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!firstName.trim()}
              >
                Create Team
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Discard Changes Modal */}
      <ModalDiscardChanges
        isOpen={showDiscardModal}
        onClose={handleDiscardModalClose}
        onDiscard={handleDiscard}
      />
    </Modal>
  );
}
