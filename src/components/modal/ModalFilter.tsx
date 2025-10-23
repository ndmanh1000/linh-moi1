import { useState } from 'react';

import { Modal } from '../ui/modal';

import MultiSelect from '../form/MultiSelect';
import { CiTrash } from 'react-icons/ci';
import { FiPlus } from 'react-icons/fi';

interface ModalFilterProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalFilter({ isOpen, onClose }: ModalFilterProps) {
  const multiOptions = [
    { value: '1', text: 'Option 1', selected: false },
    { value: '2', text: 'Option 2', selected: false },
    { value: '3', text: 'Option 3', selected: false },
    { value: '4', text: 'Option 4', selected: false },
    { value: '5', text: 'Option 5', selected: false },
  ];
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">Filter</h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
            <div className="mt-7">
              <div>
                <div className="flex w-full items-center justify-between">
                  <div>Archived</div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <CiTrash size={20} />
                    Remove
                  </div>
                </div>

                <MultiSelect
                  label=""
                  options={multiOptions}
                  defaultSelected={['1', '3']}
                  onChange={(values) => setSelectedValues(values)}
                />
                <p className="sr-only">Selected Values: {selectedValues.join(', ')}</p>
              </div>
              <div className="md:mt-6 mt-3">
                <div className="flex w-full items-center justify-between">
                  <div>Status</div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <CiTrash size={20} />
                    Remove
                  </div>
                </div>
                <MultiSelect
                  label=""
                  options={multiOptions}
                  defaultSelected={['1', '3']}
                  onChange={(values) => setSelectedValues(values)}
                />
                <p className="sr-only">Selected Values: {selectedValues.join(', ')}</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between gap-2 md:gap-4 md:mt-3 mt-3">
              <div className="flex items-center gap-2 text-[#1677FF] cursor-pointer">
                <FiPlus />
                Add Filter
              </div>
              <div className="flex items-center md:gap-2 gap-2">
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
                  Apply
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
