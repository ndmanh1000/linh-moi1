import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';
import Input from '../form/input/InputField';

interface Option {
  value: string;
  label: string;
}

interface ModalMeterScheduleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalMeterSchedule({ isOpen, onClose }: ModalMeterScheduleProps) {
  const options: Option[] = [
    { value: 'option1', label: 'Reaches every' },
    { value: 'option2', label: 'Equals exactly' },
  ];

  const handleSelectChange = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 lg:p-8">
        <div className="mb-4">
          <h4 className="text-2xl font-semibold text-gray-800">Add Meter Schedule</h4>
        </div>

        <div className="mb-6 rounded-lg border border-gray-200 bg-gray-100 p-4 text-gray-600 text-sm">
          When editing the PM’s records, you can set a specific meter and unit baseline for each
          record applied to this schedule.
        </div>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Label className="w-full sm:w-40 font-medium text-gray-800">Create WOs</Label>
            <div className="grid grid-cols-1 items-center gap-3 w-full md:flex">
              <div>
                <span className="text-gray-700">When a reading</span>
              </div>
              <div>
                <Select
                  options={options}
                  placeholder="Reaches every"
                  onChange={handleSelectChange}
                  className="w-full sm:w-40"
                />
              </div>
              <div>
                <Input className="w-20" />
              </div>
              <div>
                <span className="text-gray-700">units</span>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200" />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Label className="w-full sm:w-40 font-medium text-gray-800">WOs Due</Label>
            <div className="flex flex-wrap items-center gap-3 w-full">
              <Input className="w-20" />
              <Select
                options={options}
                placeholder="Day(s)"
                onChange={handleSelectChange}
                className="w-full sm:w-32"
              />
              <span className="text-gray-700">after creation</span>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="rounded border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
