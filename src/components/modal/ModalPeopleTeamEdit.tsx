import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';

import Input from '../form/input/InputField';

interface OptionType {
  value: string;
  label: string;
}

interface ModalPeopleTeamEditProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalPeopleTeamEdit({ isOpen, onClose }: ModalPeopleTeamEditProps) {
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
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edit Person
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col gap-3 ">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3 gap-3">
            <div className="mt-7 flex flex-col md:gap-7 gap-4 ">
              <div className="w-full flex flex-col md:gap-3 gap-3">
                <div>Person Information</div>
                <div className="w-full">
                  <Label>First Name</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label>Last name</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label>Email</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label>Phone Number</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label>Job Title</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label>Categories</Label>
                  <Select
                    options={options12}
                    placeholder="Select an option"
                    onChange={handleSelectChange12}
                    className="dark:bg-dark-900 w-full"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col md:gap-3 gap-3">
                <div>More Information</div>
                <div className="w-full">
                  <Label>Hourly Rate</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label>Company Name</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label>Categories</Label>
                  <Select
                    options={options12}
                    placeholder="Selec User Role"
                    onChange={handleSelectChange12}
                    className="dark:bg-dark-900 w-full"
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
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
