import { useState } from 'react';
import { Modal } from '../ui/modal';

import FlTable from '../tables/FlTable';
import HistoryTable from '../tables/HistoryTable';
import { BroomIcon, DocumentUpIcon } from '../../icons';

interface ModalQrProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalQr({ isOpen, onClose }: ModalQrProps) {
  const [activeTab, setActiveTab] = useState('listpart');
  const [selectedParts, setSelectedParts] = useState<any[]>([]);
  const [totalParts, setTotalParts] = useState(0);

  const handleSelectionChange = (selectedRows: any[]) => {
    setSelectedParts(selectedRows);
  };

  const handleTotalPartsChange = (total: number) => {
    setTotalParts(total);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Tên máy HAVC22
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]"></div>

        <form className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
            <div className="mt-7">
              <div className="w-full flex items-center gap-2 md:gap-2 justify-items-start">
                <button
                  className="border border-[#0071FF] bg-[#0071FF] text-white flex items-center justify-center px-[8px] py-[16px] h-10 rounded-[8px]"
                  type="button"
                >
                  {' '}
                  Request WO#{' '}
                </button>
                <button
                  className="border border-[#0071FF] bg-[#0071FF] text-white flex items-center justify-center px-[8px] py-[16px] h-10 rounded-[8px]"
                  type="button"
                >
                  {' '}
                  Update WO#
                </button>
              </div>
              <div className="w-full border-b border-[#F3F3F3] md:mt-3 mt-3"></div>
              <div className="w-full max-w-4xl mx-auto">
                <div className="flex flex-wrap border-b border-gray-200 w-full justify-between items-center">
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => setActiveTab('listpart')}
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === 'listpart'
                          ? 'text-blue-500 border-b-2 border-blue-500'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      List parts
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('history')}
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === 'history'
                          ? 'text-blue-500 border-b-2 border-blue-500'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      History
                    </button>
                  </div>
                  
                  <div className="flex items-center">
                    <DocumentUpIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
                  </div>
                </div>

                <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                  {activeTab === 'listpart' && (
                    <div>
                      <FlTable 
                        onSelectionChange={handleSelectionChange} 
                        onTotalPartsChange={handleTotalPartsChange}
                      />
                    </div>
                  )}

                  {activeTab === 'history' && (
                    <div>
                      <HistoryTable />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full border-b border-[#F3F3F3] md:mt-3 mt-3"></div>
            </div>
            {activeTab === 'listpart' && (
              <div className="w-full flex items-center justify-between gap-2 md:gap-4 md:mt-3 mt-3">
                <div className="text-sm text-gray-600">
                  {selectedParts.length}/{totalParts} Parts Select
                </div>
                <button
                  className="border border-[#0071FF] bg-[#0071FF] flex items-center justify-center px-[8px] py-[16px] h-10 text-white gap-2 rounded-[8px]"
                  type="button"
                >
                  <BroomIcon />
                  Take out part
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
}
