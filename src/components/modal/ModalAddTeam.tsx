import { useState } from 'react';
import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';
import ModalPeopleTeamCancel from './ModalPeopleTeamCancel';
import Input from '../form/input/InputField';
import { useModal } from '../../hooks/useModal';
import Checkbox from '../form/input/Checkbox';

interface OptionType {
  value: string;
  label: string;
}

interface ModalAddTeamProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAddTeam({ isOpen, onClose }: ModalAddTeamProps) {
  const {
    isOpen: isModalPeopleTeamCancelOpen,
    openModal: openModalPeopleTeamCancel,
    closeModal: closeModalPeopleTeamCancel,
  } = useModal();

  const options12: OptionType[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange12 = (value: string) => {
    console.log('Selected value:', value);
  };

  const workers = [
    { id: '1', name: 'Trần Linh' },
    { id: '2', name: 'Ad' },
    { id: '3', name: 'McMaster–Carr - Vendor' },
  ];

  const [isWorkersOpen, setIsWorkersOpen] = useState(false);
  const [searchWorkers, setSearchWorkers] = useState('');
  const [selectedWorkerIds, setSelectedWorkerIds] = useState<string[]>([]);

  const filteredWorkers = workers.filter((w) =>
    w.name.toLowerCase().includes(searchWorkers.toLowerCase()),
  );

  const toggleWorker = (id: string) => {
    setSelectedWorkerIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
        <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Add Person
            </h4>
          </div>
          <div className="w-full border-b border-[#F3F3F3]" />

          <form className="flex flex-col">
            <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
              <div className="mt-7 flex flex-col md:gap-10 gap-3">
                <div className="w-full flex flex-col md:gap-4 gap-3">
                  <div className="text-[20px] font-semibold">Team Information</div>
                  <div className="w-full">
                    <Label>First name</Label>
                    <Input />
                  </div>
                  <div className="w-full">
                    <Label>Desciption</Label>
                    <Select
                      options={options12}
                      placeholder="Select an option"
                      onChange={handleSelectChange12}
                      className="dark:bg-dark-900 w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[20px] font-semibold">More Information</div>
                  <div className="mt-3 w-full">
                    <Label>Workers</Label>
                    <div className="relative w-full">
                      <button
                        type="button"
                        className="w-full border rounded-md h-10 px-3 flex items-center justify-between text-left bg-white"
                        onClick={() => setIsWorkersOpen((v) => !v)}
                      >
                        <span className="text-gray-700 text-sm">
                          {selectedWorkerIds.length === 0
                            ? 'Select workers'
                            : `${selectedWorkerIds.length} selected`}
                        </span>
                        <svg
                          className={`w-4 h-4 text-gray-500 transition-transform ${
                            isWorkersOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isWorkersOpen && (
                        <div className="absolute left-0 top-full mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-md z-10">
                          <div className="p-3 pb-2">
                            <div className="relative">
                              <input
                                className="w-full h-9 rounded-md bg-gray-100/80 border border-gray-200 pl-8 pr-3 text-sm outline-none"
                                placeholder="Search"
                                value={searchWorkers}
                                onChange={(e) => setSearchWorkers(e.target.value)}
                              />
                              <svg
                                className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                                />
                              </svg>
                            </div>
                          </div>

                          <div className="px-3 pb-3 max-h-60 overflow-y-auto">
                            {filteredWorkers.map((w) => {
                              const checked = selectedWorkerIds.includes(w.id);
                              const initial = w.name.charAt(0).toUpperCase();
                              return (
                                <div key={w.id} className="flex items-center gap-3 py-2">
                                  <Checkbox checked={checked} onChange={() => toggleWorker(w.id)} />
                                  <div className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-semibold">
                                    {initial}
                                  </div>
                                  <div className="text-sm text-gray-800">{w.name}</div>
                                </div>
                              );
                            })}
                            {filteredWorkers.length === 0 && (
                              <div className="text-sm text-gray-500 py-2">No results</div>
                            )}
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
                  onClick={openModalPeopleTeamCancel}
                  className="bg-white px-2 py-2 rounded border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={selectedWorkerIds.length === 0}
                  className={`flex items-center justify-center px-2 py-2 rounded-[4px] ${
                    selectedWorkerIds.length === 0
                      ? 'border border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'border border-[#0C6FF9] bg-[#0C6FF9] text-white hover:bg-[#0056b3]'
                  }`}
                >
                  Create Person
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <ModalPeopleTeamCancel
        isOpen={isModalPeopleTeamCancelOpen}
        onClose={closeModalPeopleTeamCancel}
      />
    </div>
  );
}
