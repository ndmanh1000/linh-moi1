import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';
import { DolaIcon } from '../../icons';
import DatePicker from '../form/date-picker';

import TextArea from '../form/input/TextArea';

interface OptionType {
  value: string;
  label: string;
}

interface ModalAddCostProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAddCost({ isOpen, onClose }: ModalAddCostProps) {
  const options12: OptionType[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange12 = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">Add Cost</h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
            <div className="mt-7">
              <div className="w-full">
                <Label>Description</Label>
                <TextArea />
              </div>

              <div className="grid grid-cols-1 md:flex items-center md:gap-2 gap-3 mt-3">
                <div className="w-full">
                  <Label>Category</Label>
                  <Select
                    options={options12}
                    placeholder="Select an option"
                    onChange={handleSelectChange12}
                    className="dark:bg-dark-900 w-full"
                  />
                </div>
                <div className="w-full">
                  <Label>Hourly Rate</Label>
                  <div className="flex items-center w-full">
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="w-full h-11 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <DolaIcon className="absolute top-2 left-3 text-gray-500 w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full grid grid-cols-1 md:flex md:gap-2 gap-2 md:mt-3 mt-3">
                <div className="w-full">
                  <Label>Assigned To</Label>
                  <Select
                    options={options12}
                    placeholder="Select an option"
                    onChange={handleSelectChange12}
                    className="dark:bg-dark-900 w-full"
                  />
                </div>
                <div className="w-full">
                  <DatePicker
                    id="date-picker"
                    label="Date"
                    placeholder="Select a date"
                    onChange={(dates, currentDateString) => {
                      console.log({ dates, currentDateString });
                    }}
                  />
                </div>
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
  );
}
