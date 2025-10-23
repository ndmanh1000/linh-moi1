import { PlusOutlinedIcon, MoreIcon, ScanIcon, ColummIcon } from '../../icons';
import { Modal } from '../ui/modal';

import Label from '../form/Label';
import Input from '../form/input/InputField';
import Select from '../form/Select';
import TextArea from '../form/input/TextArea';
import { CiSearch } from 'react-icons/ci';
import DatePicker from '../form/date-picker';
import UpFile10 from '../upload/UpFile10';
import { useModal } from '../../hooks/useModal';
import ModalQr from '../modal/ModalQr';
import Toggle from '../toggle-switch/Toggle';
import ModalScanQr from '../modal/ModalScanQr';

import { useState, useEffect, useRef } from 'react';
import { GoTable } from 'react-icons/go';
import { useNavigate } from 'react-router';

// import UploadFiles from "../upload/UploadFiles";

const options = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'template', label: 'Template' },
  { value: 'development', label: 'Development' },
];
const options2 = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'template', label: 'Template' },
  { value: 'development', label: 'Development' },
];
const options3 = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'template', label: 'Template' },
  { value: 'development', label: 'Development' },
];
const options4 = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'template', label: 'Template' },
  { value: 'development', label: 'Development' },
];
const options5 = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'template', label: 'Template' },
  { value: 'development', label: 'Development' },
];
const handleSelectChange5 = (value: string) => {
  console.log('Selected value:', value);
};
const options6 = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'template', label: 'Template' },
  { value: 'development', label: 'Development' },
];
const handleSelectChange7 = (value: string) => {
  console.log('Selected value:', value);
};
//
const options7 = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'template', label: 'Template' },
  { value: 'development', label: 'Development' },
];
const handleSelectChange6 = (value: string) => {
  console.log('Selected value:', value);
};
const handleSelectChange1 = (value: string) => {
  console.log('Selected value:', value);
};
const handleSelectChange2 = (value: string) => {
  console.log('Selected value:', value);
};
const handleSelectChange3 = (value: string) => {
  console.log('Selected value:', value);
};
const handleSelectChange4 = (value: string) => {
  console.log('Selected value:', value);
};

export default function WorkOrderHeader() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();
  const { isOpen: isModalQrOpen, openModal: openModalQr, closeModal: closeModalQr } = useModal();
  const {
    isOpen: isModalScanQrOpen,
    openModal: openModalScanQr,
    closeModal: closeModalScanQr,
  } = useModal();

  // State cho layout dropdown
  const [selectedLayout, setSelectedLayout] = useState('Table');
  const [isLayoutDropdownOpen, setIsLayoutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLayoutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <div>Work Orders</div>
          <div className="w-px h-6 bg-gray-600"></div>
          <div className="relative" ref={dropdownRef}>
            {/* Layout Dropdown */}
            <button
              onClick={() => setIsLayoutDropdownOpen(!isLayoutDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 "
            >
              <span className="text-sm font-medium">{selectedLayout}</span>
              <svg
                className={`w-4 h-4 transition-transform ${isLayoutDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isLayoutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setSelectedLayout('Table');
                      setIsLayoutDropdownOpen(false);
                      navigate('/work-order-click-table');
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 ${
                      selectedLayout === 'Table' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <GoTable
                      className={`w-4 h-4 ${selectedLayout === 'Table' ? 'text-blue-600' : 'text-gray-400'}`}
                    />
                    Table
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLayout('Column');
                      setIsLayoutDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 ${
                      selectedLayout === 'Column' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <ColummIcon
                      className={`w-4 h-4 ${selectedLayout === 'Column' ? 'text-blue-600' : 'text-gray-400'}`}
                    />
                    Column
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center md:gap-10 gap-5">
          <button
            onClick={openModal}
            className="flex items-center gap-2 justify-center text-white bg-[#1677ff] px-2 py-2 rounded-[8px] hover:bg-blue-light-300 cursor-pointer"
          >
            <PlusOutlinedIcon />
            <p>Create Work Order</p>
          </button>

          <div className="cursor-pointer">
            <MoreIcon />
          </div>
          <div className="cursor-pointer">
            <ScanIcon className="w-5 h-5" onClick={openModalScanQr} />
          </div>
        </div>

        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[900px] m-4">
          <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
            <div className="px-2 pr-14">
              <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                Create New Order
              </h4>
            </div>
            <form className="flex flex-col">
              <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
                <div className="mt-7">
                  <div className="w-full border-b border-[#F3F3F3] mt-4"></div>
                  <div className="mt-3 flex flex-col w-full md:gap-5">
                    <div>Work Order Details</div>
                    <div>
                      <Label>Work Order Title</Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Description </Label>
                      <TextArea />
                    </div>

                    <div className="w-full grid grid-cols-1 md:flex gap-2 md:gap-2 ">
                      <div className="w-full">
                        <Label>Category</Label>
                        <Select
                          options={options}
                          placeholder="Select an option"
                          onChange={handleSelectChange1}
                          className="dark:bg-dark-900 w-full"
                        />
                      </div>
                      <div className="w-full">
                        <Label>Priority</Label>
                        <Select
                          options={options2}
                          placeholder="Select an option"
                          onChange={handleSelectChange2}
                          className="dark:bg-dark-900 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-sm text-gray-700">Photos</label>
                      <UpFile10 />
                    </div>
                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    <div>Job Specifications</div>
                    <div className="grid grid-cols-1 md:flex gap-2 md:gap-2">
                      <div className="w-full">
                        <Label>Assets</Label>
                        <div className="flex items-center w-full">
                          <div className="relative w-full">
                            <input
                              type="text"
                              className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <CiSearch className="absolute top-2 left-3 text-gray-500" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <Label>Location</Label>
                        <Select
                          options={options3}
                          placeholder="Select an option"
                          onChange={handleSelectChange3}
                          className="dark:bg-dark-900 w-full h-10"
                        />
                      </div>
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
                    <div>
                      <Label>Duration (as hours)</Label>
                      <Select
                        options={options4}
                        placeholder="Select an option"
                        onChange={handleSelectChange4}
                        className="dark:bg-dark-900 w-full h-10"
                      />
                    </div>
                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    <div className="mt-2">Assignment & Team</div>
                    <div>
                      <div className="w-full grid grid-cols-1 md:flex gap-2 md:gap-2 mt-2 ">
                        <div className="w-full">
                          <Label>Primary Assignee</Label>
                          <Select
                            options={options5}
                            placeholder="Select an option"
                            onChange={handleSelectChange5}
                            className="dark:bg-dark-900 w-full"
                          />
                        </div>
                        <div className="w-full">
                          <Label>Team</Label>
                          <Select
                            options={options6}
                            placeholder="Select an option"
                            onChange={handleSelectChange6}
                            className="dark:bg-dark-900 w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-2">
                      <Label>Additional Assignee(s)</Label>
                      <Select
                        options={options7}
                        placeholder="Select an option"
                        onChange={handleSelectChange7}
                        className="dark:bg-dark-900 w-full h-10"
                      />
                    </div>
                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    <div className="mt-2">Assets</div>
                    <div className="w-full flex items-center justify-between">
                      <div>Photo</div>
                      <div>
                        <button className="border border-[#333333] bg-white px-2 py-2 rounded-[8px]">
                          Add Part
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-12 border border-dashed text-center flex items-center justify-center mt-2">
                      <p>No line items have been added yet</p>
                    </div>
                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    {/*  */}
                    <div className="mt-4">Tasks & Checklists</div>
                    <div className="w-full flex items-center justify-between mt-4">
                      <div>List</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <button className="border border-[#333333] bg-white h-10 w-30 rounded-[5px]">
                            Add Task
                          </button>
                          <button className="border border-[#333333] bg-white h-10 w-30 rounded-[5px]">
                            Add Checklist
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-12 border border-dashed text-center flex items-center justify-center mt-4">
                      <p>No line items have been added yet</p>
                    </div>

                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    <div className="mt-4">Documents & Reference</div>
                    <div className="mt-4">File</div>
                    <div className="mt-4">
                      <UpFile10 />
                    </div>
                    <div className="text-[16px] font-medium text-[#0071FF] cursor-pointer mt-4">
                      Add from Saved Files
                    </div>
                    <div className="mt-4">
                      <div className="w-full">
                        <Label>Purchase Order</Label>
                        <Select
                          options={options}
                          placeholder="Select an option"
                          onChange={handleSelectChange1}
                          className="dark:bg-dark-900 w-full"
                        />
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-between mt-4">
                      <div className="flex flex-col gap-2">
                        <p>Signature Required</p>
                        <p>
                          Require technicians to upload a signature image in order to complete this
                          work order.
                        </p>
                      </div>
                      <div>
                        <Toggle />
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-b border-[#F3F3F3] mt-4"></div>
                  <div className="w-full flex items-center justify-end gap-2 md:gap-4 md:mt-3 mt-3">
                    <button
                      onClick={closeModal}
                      className=" bg-white px-2 py-2  rounded border border-gray-300"
                    >
                      Cancel
                    </button>
                    <button className="border border-gray-300 bg-white flex items-center justify-center px-2 py-2 rounded-[4px]">
                      Creat Word Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
      <ModalQr isOpen={isModalQrOpen} onClose={closeModalQr} />

      <ModalScanQr
        isOpen={isModalScanQrOpen}
        onClose={closeModalScanQr}
        onScanSuccess={(result) => {
          console.log('QR Scan result:', result);
          closeModalScanQr();
          // Mở ModalQr sau khi quét QR thành công
          setTimeout(() => {
            openModalQr();
          }, 100);
        }}
      />
    </div>
  );
}
