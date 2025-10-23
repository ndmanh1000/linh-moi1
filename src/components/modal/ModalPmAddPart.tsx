import { useState } from 'react';

import { Modal } from '../ui/modal';

import FlTable from '../tables/FlTable';
import { FaSearch } from 'react-icons/fa';

interface ModalPmAddPartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalPmAddPart({ isOpen, onClose }: ModalPmAddPartProps) {
  const [activeTab, setActiveTab] = useState('start');

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">Add Time</h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]"></div>

        <form className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
            <div className="mt-7 flex flex-col md:gap-4">
              <div className="w-full">
                <div className="flex items-center bg-gray-200 rounded-[8px] px-4 py-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
                  />
                  <FaSearch className="text-gray-500" />
                </div>
              </div>
              <div className="w-full max-w-4xl mx-auto">
                <div className="flex flex-wrap border-b border-gray-200 w-full">
                  <button
                    type="button"
                    onClick={() => setActiveTab('part')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'part'
                        ? 'text-blue-500 border-b-2 border-blue-500'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Part
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
                </div>

                <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                  {activeTab === 'part' && (
                    <div>
                      <FlTable />
                    </div>
                  )}

                  {activeTab === 'sets' && <div>Content</div>}
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-end gap-2 md:gap-4 md:mt-4 mt-4 ">
              <button
                type="button"
                onClick={onClose}
                className="bg-white px-2 py-2 rounded border border-gray-300"
              >
                Cancel
              </button>
              <button
                className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
                type="button"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
