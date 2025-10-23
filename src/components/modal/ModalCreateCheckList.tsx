import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';

import Input from '../form/input/InputField';
import TextArea from '../form/input/TextArea';
import TaskPreview from '../checklist/TaskPreview';
import CheckListAccor from '../checklist/CheckListAccor';
import { GoPlus } from 'react-icons/go';

interface OptionType {
  value: string;
  label: string;
}

interface ModalCreateCheckListProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCreateCheckList({ isOpen, onClose }: ModalCreateCheckListProps) {
  const options10: OptionType[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange10 = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="fixed inset-0 w-full h-full m-0 p-0">
      <div className="no-scrollbar relative w-full  overflow-y-auto  bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Create Checklist
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7 grid grid-cols-1 gap-3 md:flex items-start w-full md:gap-3">
              <div className="flex-1">
                <div className="flex flex-col gap-3 w-full mx-auto md:max-w-xl md:gap-3 gap-3">
                  <div>
                    <CheckListAccor />
                  </div>
                  <div>Checklist Details</div>
                  <div className="w-full">
                    <Label>Name</Label>
                    <Input />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <TextArea />
                  </div>
                  <div className="w-full">
                    <Label>Tags</Label>
                    <Select
                      options={options10}
                      placeholder="Select an option"
                      onChange={handleSelectChange10}
                      className="dark:bg-dark-900 w-full"
                    />
                  </div>
                  <div className="w-full flex items-center md:justify-end">
                    <button
                      className="border border-[#1677FF] bg-[#1677FF] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
                      type="button"
                    >
                      <GoPlus />
                      Add Task
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full mx-auto">
                <TaskPreview />
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-end gap-2 md:gap-4 mt-3">
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
        </form>
      </div>
    </Modal>
  );
}
