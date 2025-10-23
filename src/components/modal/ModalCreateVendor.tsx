import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';
import TextArea from '../form/input/TextArea';
import { DolaIcon } from '../../icons';
import Input from '../form/input/InputField';

interface ModalCreateVendorProps {
  isOpen: boolean;
  onClose: () => void;
}
interface OptionType {
  value: string;
  label: string;
}
const options12: OptionType[] = [
  { value: 'tranlinh', label: 'Trần Linh' },
  { value: 'template', label: 'A' },
  { value: 'development', label: 'B' },
];

const handleSelectChange12 = (value: string) => {
  console.log('Selected value:', value);
};

export default function ModalCreateVendor({ isOpen, onClose }: ModalCreateVendorProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="fixed inset-0 w-full h-full m-0 p-0">
      <div className="no-scrollbar relative w-full overflow-y-auto  bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Create Vendor
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7 flex flex-col md:gap-3 gap-3 justify-center md:max-w-xl mx-auto w-full">
              <div>Details</div>
              <div className="w-full">
                <Label>Company Name</Label>
                <Select
                  options={options12}
                  placeholder="Select an option"
                  onChange={handleSelectChange12}
                  className="dark:bg-dark-900 w-full"
                />
              </div>
              <div className="w-full">
                <Label>Address</Label>
                <Input />
              </div>
              <div className="w-full">
                <Label>Phone Number</Label>
                <Input />
              </div>
              <div className="w-full">
                <Label>Website</Label>
                <Input />
              </div>
              <div className="w-full">
                <Label>Name</Label>
                <Input />
              </div>
              <div className="w-full">
                <Label>Email</Label>
                <Input />
              </div>
              <div className="w-full">
                <Label>Type</Label>
                <Input />
              </div>
              <div className="w-full">
                <Label>Description </Label>
                <TextArea />
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
              <div>
                <p>Custom Data</p>
                <p>After naming custom fields, you can enter a value and unit.</p>
              </div>
              <div>
                <button
                  className="border border-[#D9D9D9] bg-white text-[#000000] flex items-center justify-center px-2 py-2 rounded-[4px]"
                  type="button"
                >
                  Add Custom Field
                </button>
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
                className="border border-[#D9D9D9] bg-white text-[#000000] flex items-center justify-center px-2 py-2 rounded-[4px]"
                type="button"
              >
                Create Vendor
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
