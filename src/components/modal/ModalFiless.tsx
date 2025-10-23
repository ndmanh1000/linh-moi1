import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';
import UpFile10 from '../upload/UpFile10';

interface Option {
  value: string;
  label: string;
}
const options10: Option[] = [
  { value: 'tranlinh', label: 'Trần Linh' },
  { value: 'template', label: 'A' },
  { value: 'development', label: 'B' },
];

const handleSelectChange10 = (value: string) => {
  console.log('Selected value:', value);
};

interface ModalFiless {
  isOpen: boolean;
  onClose: () => void;
}
interface ModalFilessProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalFiless({ isOpen, onClose }: ModalFilessProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Add Files
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]"></div>

        <form className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
            <div className="mt-7 flex flex-col md:gap-4 gap-3">
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-700">Files</label>
                <UpFile10 />
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
                className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
                type="button"
              >
                Add Files
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
