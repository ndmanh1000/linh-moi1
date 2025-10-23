import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';
import { GoPlus } from 'react-icons/go';
import Input from '../form/input/InputField';
import TextArea from '../form/input/TextArea';
import { RxDragHandleDots2 } from 'react-icons/rx';

import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MinusIcon } from '../../icons';

import TaskPreview from '../checklist/TaskPreview';

interface OptionType {
  value: string;
  label: string;
}

interface ModalEditCheckListProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalEditCheckList({ isOpen, onClose }: ModalEditCheckListProps) {
  const options12: OptionType[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange12 = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="fixed inset-0 w-full h-full m-0 p-0">
      <div className="no-scrollbar relative w-full overflow-y-auto  bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edit Checklist
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7 grid grid-cols-1 gap-3 md:flex items-center w-full md:gap-3">
              <div className="flex-1">
                <div className="flex flex-col items-center md:gap-3 gap-3 w-full mx-auto md:max-w-xl">
                  <div className="w-full">
                    <Label>Name</Label>
                    <Input />
                  </div>
                  <div className="w-full">
                    <Label>Description </Label>
                    <TextArea />
                  </div>
                  <div className="w-full">
                    <Label>Tags</Label>
                    <Select
                      options={options12}
                      placeholder="Select an option"
                      onChange={handleSelectChange12}
                      className="dark:bg-dark-900 w-full"
                    />
                  </div>
                  <div className="w-full flex items-center md:justify-end">
                    <button
                      type="button"
                      className="rounded bg-blue-500 px-4 py-2 text-white flex items-center gap-2"
                    >
                      <GoPlus />
                      Add Task
                    </button>
                  </div>
                  <div className="flex items-center w-full border rounded-lg overflow-hidden">
                    <div className="flex items-center px-3 border-r">
                      <RxDragHandleDots2 className="text-gray-400 cursor-move mr-2" size={18} />
                      <span className="text-sm font-medium">1</span>
                    </div>

                    <div className="w-full flex items-center justify-between p-1">
                      <div className="border border-[#C2C2C2] px-[8px] py-[16px] bg-white rounded-[16px]  ">
                        <input
                          type="text"
                          defaultValue="Nhìn bên ngoài máy xem thế nào"
                          className="flex-1 px-3 py-2 outline-none border-none"
                        />
                      </div>

                      <a href="#" className="text-blue-600 font-medium whitespace-nowrap px-3">
                        Sub-task Status
                      </a>

                      <button className="p-2 hover:bg-gray-100 rounded-full" type="button">
                        <MinusIcon className="text-gray-600" />
                      </button>

                      <button className="p-2 hover:bg-gray-100 rounded-full" type="button">
                        <HiOutlineDotsVertical className="text-gray-500" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full mx-auto">
                <TaskPreview />
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
                className="border border-[#1677FF] bg-[#1677FF] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
                type="button"
              >
                Save Checklist
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
