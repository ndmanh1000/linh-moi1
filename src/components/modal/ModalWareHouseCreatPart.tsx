import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';
import FormInventoryLines from '../warehouse/FormInventoryLines';
import Input from '../form/input/InputField';
import Toggle from '../toggle-switch/Toggle';

import FormVendorCustomer from '../warehouse/FormVendorCustomer';
import { Textarea } from 'flowbite-react';
import FormPeopleTeam from '../warehouse/FormPeopleTeam';
import FormAdditionalInformation from '../warehouse/FormAdditionalInformation';
import FormCustomData from '../warehouse/FormCustomData';
import UpFile10 from '../upload/UpFile10';

interface ModalWareHouseCreatPartProps {
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

export default function ModalWareHouseCreatPart({ isOpen, onClose }: ModalWareHouseCreatPartProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="fixed inset-0 w-full h-full m-0 p-0">
      <div className="no-scrollbar relative w-full overflow-y-auto bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 ">
            New Part
          </h4>
        </div>
        <div className="w-full border-b border-[#D9D9D9]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7 w-full flex flex-col md:gap-10 gap-3 items-center justify-center">
              <div className="w-full ">
                <div className="border border-[#f0f0f0] bg-white rounded-[8px] mx-auto md:max-w-3xl flex flex-col md:gap-5 gap-3 px-3 py-3">
                  <div>Part Details</div>
                  <div className="w-full border-b border-[#D9D9D9]" />
                  <div className="grid grid-cols-1 md:flex w-full md:gap-4 gap-2">
                    <div className="w-full">
                      <Label>Name</Label>
                      <Input />
                    </div>
                    <div className="w-full">
                      <Label>Part Number</Label>
                      <Input />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:flex w-full md:gap-4 gap-2">
                    <div className="w-full">
                      <Label>Category</Label>
                      <Input />
                    </div>
                    <div className="w-full">
                      <Label>Category</Label>
                      <Select
                        options={options12}
                        placeholder="Select an option"
                        onChange={handleSelectChange12}
                        className="dark:bg-dark-900 w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea />
                  </div>
                  <UpFile10 />
                  <div className="text-[#0071FF] cursor-pointer">Add from Saved Files</div>
                  <div className="w-full grid grid-cols-1 items-center md:gap-6 gap-3">
                    <div className="w-full grid grid-cols-1 md:flex items-center md:gap-3 gap-3">
                      <div>
                        <Toggle />
                      </div>
                      <div>
                        <p>This is a non-stock part</p>
                        <p>
                          Non-stock parts are not regularly kept in inventory and are often
                          purchased on-demand. These parts won’t trigger low or out-of-stock alerts.
                        </p>
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:flex items-center md:gap-3 gap-3">
                      <div>
                        <Toggle />
                      </div>
                      <div>
                        <p>This is a non-stock part</p>
                        <p>
                          Non-stock parts are not regularly kept in inventory and are often
                          purchased on-demand. These parts won’t trigger low or out-of-stock alerts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-[8px] mx-auto md:max-w-3xl flex flex-col md:gap-5 gap-3 ">
                <FormInventoryLines />
              </div>
              <div className="w-full rounded-[8px] mx-auto md:max-w-3xl flex flex-col md:gap-5 gap-3 ">
                <FormVendorCustomer />
              </div>
              <div className="w-full rounded-[8px] mx-auto md:max-w-3xl flex flex-col md:gap-5 gap-3 ">
                <FormPeopleTeam />
              </div>
              <div className="w-full rounded-[8px] mx-auto md:max-w-3xl flex flex-col md:gap-5 gap-3 ">
                <FormAdditionalInformation />
              </div>
              <div className="w-full rounded-[8px] mx-auto md:max-w-3xl flex flex-col md:gap-5 gap-3 ">
                <FormCustomData />
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
                Create Part
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
