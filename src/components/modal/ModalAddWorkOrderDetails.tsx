//
import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';
import Input from '../form/input/InputField';
import TextArea from '../form/input/TextArea';
import Checkbox from '../form/input/Checkbox';
import Toggle from '../toggle-switch/Toggle';
import { GoPlus } from 'react-icons/go';
import ModalPmAddPart from './ModalPmAddPart';
import { useModal } from '../../hooks/useModal';

import UpFile10 from '../upload/UpFile10';

interface Option {
  value: string;
  label: string;
}

interface ModalAddWorkOrderDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAddWorkOrderDetails({
  isOpen,
  onClose,
}: ModalAddWorkOrderDetailsProps) {
  const options3a: Option[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange3a = (value: string) => {
    console.log('Selected value:', value);
  };

  const options3b: Option[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange3b = (value: string) => {
    console.log('Selected value:', value);
  };

  const {
    isOpen: isModalPmAddPartOpen,
    openModal: openModalPmAddPart,
    closeModal: closeModalPmAddPart,
  } = useModal();

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
        <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Add Work Order Details
            </h4>
          </div>
          <div className="w-full border-b border-[#F3F3F3]"></div>

          <form className="flex flex-col">
            <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
              <div className="mt-7 flex flex-col md:gap-4">
                <div>
                  <div className="w-full">
                    <Label>Worker</Label>
                    <Input />
                  </div>
                </div>

                <div>
                  <Label>Description </Label>
                  <TextArea />
                </div>

                <div className="flex items-center md:gap-2 gap-2">
                  <Checkbox checked={false} onChange={() => {}} />
                  Create first Work Order Now?
                </div>

                <div className="grid grid-cols-1 md:flex md:gap-2 gap-2">
                  <div className="w-full">
                    <Label>Priority</Label>
                    <Select
                      options={options3a}
                      placeholder="Select an option"
                      onChange={handleSelectChange3a}
                      className="dark:bg-dark-900 w-full"
                    />
                  </div>
                  <div className="w-full">
                    <Label>Category</Label>
                    <Select
                      options={options3b}
                      placeholder="Select an option"
                      onChange={handleSelectChange3b}
                      className="dark:bg-dark-900 w-full"
                    />
                  </div>
                </div>

                <div>
                  <Label>Duration (as hours)</Label>
                  <Input />
                </div>

                <div>
                  <div>Signature</div>
                  <div className="flex items-center md:gap-2 gap-2 md:mt-2 mt-2">
                    <Toggle />
                    Requires Signature
                  </div>
                </div>

                <div className="w-full border-b border-[#F3F3F3] "></div>
                <div>Attachments</div>

                <div className="flex flex-col space-y-2">
                  <label className="text-sm text-gray-700">Photos</label>
                  <UpFile10 />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-sm text-gray-700">Files</label>
                  <UpFile10 />
                </div>

                <div className="text-[#0071FF] cursor-pointer font-medium">
                  Add from Saved Files
                </div>

                <div className="w-full border-b border-[#F3F3F3]"></div>
                <div>Assets</div>

                <div className="w-full flex items-center justify-end">
                  <button
                    className="border border-[#333333] bg-white px-2 py-2 rounded-[8px]"
                    type="button"
                    onClick={openModalPmAddPart}
                  >
                    Add Part
                  </button>
                </div>

                <div className="w-full h-12 border border-dashed text-center flex items-center justify-center mt-2">
                  <p>No line items have been added yet</p>
                </div>

                <div className="flex w-full items-center md:gap-2 gap-2 justify-items-start text-[#4096FF]">
                  <div className="flex items-center gap-1 border border-[#1677FF] border-dashed p-2 rounded-[4px]">
                    <GoPlus />
                    Add Tasks
                  </div>
                  <div className="flex items-center gap-1 border border-dashed  border-[#1677FF] p-2 rounded-[4px]">
                    <GoPlus />
                    Add Checklist
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
                  className="border border-[#1677FF] bg-[#1677FF] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
                  type="button"
                >
                  Add Work Order Details
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>

      <ModalPmAddPart isOpen={isModalPmAddPartOpen} onClose={closeModalPmAddPart} />
    </div>
  );
}
