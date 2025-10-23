import Input from '../form/input/InputField';
import Select from '../form/Select';
import { Modal } from '../ui/modal';
import { Label } from 'flowbite-react';
import DatePicker from '../form/date-picker';

interface ModalCreateCycleCountProps {
  isOpen: boolean;
  onClose: () => void;
}
interface Option {
  value: string;
  label: string;
}

export default function ModalCreateCycleCount({ isOpen, onClose }: ModalCreateCycleCountProps) {
  const options10: Option[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange10 = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="fixed inset-0 w-full h-full m-0 p-0">
      <div className="no-scrollbar relative w-full  overflow-y-auto bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Create Cycle Count
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7 mx-auto max-w-3xl">
              <div className="p-6 bg-white rounded-[16px] border border-[#D9D9D9] shadow-md mx-auto mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Details</h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <div>
                      <Input />
                    </div>
                  </div>
                  <div>
                    <Label>Inventory Location</Label>
                    <Select
                      options={options10}
                      placeholder="Select an option"
                      onChange={handleSelectChange10}
                      className="dark:bg-dark-900 w-full"
                    />
                  </div>
                  <div className=" grid grid-cols-1 md:flex md:gap-2 gap-2">
                    <div className="w-full">
                      <DatePicker
                        id="date-picker"
                        label="Date Start"
                        placeholder="Select a date"
                        onChange={(dates, currentDateString) => {
                          console.log({ dates, currentDateString });
                        }}
                      />
                    </div>
                    <div className="w-full">
                      <DatePicker
                        id="date-picker"
                        label="Due Date"
                        placeholder="Select a date"
                        onChange={(dates, currentDateString) => {
                          console.log({ dates, currentDateString });
                        }}
                      />
                    </div>
                  </div>
                  <div>If specified. when the CC becomes avaiable to count</div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-[16px] border border-[#D9D9D9] shadow-md mx-auto mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Parts to Count</h2>

                <div className="flex flex-col md:gap-3 gap-3">
                  Countings: 0 parts
                  <button className="border border-[#D9D9D9] rounded-[4px] bg-[#D9D9D9] text-[#000000] h-10 w-full md:w-32">
                    Select Parts
                  </button>
                </div>
              </div>
              <div>
                <hr className="my-8 border-t-2 border-dashed border-gray-200" />

                <div className="text-center text-gray-500">No line items have been added yet</div>
                <hr className="my-8 border-t-2 border-dashed border-gray-200" />
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
                className="border border-[#D9D9D9] bg-white text-[#D9D9D9] flex items-center justify-center px-2 py-2 rounded-[4px]"
                type="button"
              >
                Create Cycle Count
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
