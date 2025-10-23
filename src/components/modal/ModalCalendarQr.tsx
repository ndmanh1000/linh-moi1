import { useState } from 'react';
import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';

import Input from '../form/input/InputField';
import { TimeIcon } from '../../icons';
import Checkbox from '../form/input/Checkbox';

interface Option {
  value: string;
  label: string;
}

interface ModalCalendarQrProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCalendarQr({ isOpen, onClose }: ModalCalendarQrProps) {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const options10: Option[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange10 = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Add Calendar Schedule
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]"></div>

        <form className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
            <div className="mt-7 flex flex-col md:gap-7 gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <Label className="sm:w-40 w-full">Schedule Type</Label>
                <Select
                  options={options10}
                  placeholder="Regular Interval"
                  onChange={handleSelectChange10}
                  className="w-full"
                />
              </div>

              <div className="border-b border-[#F3F3F3]" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <Label className="sm:w-40 w-full">Schedule Type</Label>
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span>Every</span>
                    <Input className="w-full sm:w-20" />
                    <Select
                      options={options10}
                      placeholder="Day(s)"
                      onChange={handleSelectChange10}
                      className="w-full sm:w-32 md:w-full"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span>At</span>
                    <div className="relative w-full sm:w-40 md:w-full">
                      <Input
                        className="w-full"
                        type="time"
                        id="tm"
                        name="tm"
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                        <TimeIcon className="size-6" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-[#F3F3F3]" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <Label className="sm:w-40 w-full">Create WOs</Label>
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <Checkbox checked={checkbox1} onChange={setCheckbox1} />
                    <Input className="w-full sm:w-20" />
                    <Select
                      options={options10}
                      placeholder="Day(s)"
                      onChange={handleSelectChange10}
                      className="w-full sm:w-32"
                    />
                    <span>before the due date</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <Checkbox checked={checkbox2} onChange={setCheckbox2} />
                    <span>On the</span>
                    <Select
                      options={options10}
                      placeholder="Day(s)"
                      onChange={handleSelectChange10}
                      className="w-full sm:w-32"
                    />
                    <span>before the due date</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span>At</span>
                    <div className="relative w-full sm:w-40 md:w-full">
                      <Input
                        className="w-full"
                        type="time"
                        id="tm"
                        name="tm"
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                        <TimeIcon className="size-6" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                  Add Calendar Schedule
                </h4>
              </div>
              <div className="mb-6 rounded-lg border border-gray-200 bg-gray-100 p-4 text-gray-600 text-sm">
                When editing the PM’s records, you can set a specific meter and unit baseline for
                each record applied to this schedule.
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Label className="w-full sm:w-40 font-medium text-gray-800">Create WOs</Label>
                <div className="grid grid-cols-1 items-center gap-3 w-full md:flex">
                  <div>
                    <span className="text-gray-700">When a reading</span>
                  </div>
                  <div>
                    <Select
                      options={options10}
                      placeholder="Reaches every"
                      onChange={handleSelectChange10}
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
                    options={options10}
                    placeholder="Day(s)"
                    onChange={handleSelectChange10}
                    className="w-full sm:w-32"
                  />
                  <span className="text-gray-700">after creation</span>
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
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Done
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
