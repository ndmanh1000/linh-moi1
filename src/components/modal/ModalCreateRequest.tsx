import Label from '../form/Label';
import { Modal } from '../ui/modal';
import Select from '../form/Select';

import Input from '../form/input/InputField';
import TextArea from '../form/input/TextArea';
import UpFile10 from '../upload/UpFile10';

interface ModalCreateRequestProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCreateRequest({ isOpen, onClose }: ModalCreateRequestProps) {
  const handleSelectChange12 = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Create Request
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
            <div className="mt-7 space-y-6">
              {/* Title Field */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-red-500">*</span>
                </Label>
                <Input id="title" name="title" placeholder="Enter title" className="w-full" />
              </div>

              {/* Description Field */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <TextArea placeholder="Enter description" rows={4} className="w-full resize-none" />
              </div>

              {/* Priority Field */}
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  options={[
                    { value: 'low', label: 'Low' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'high', label: 'High' },
                    { value: 'urgent', label: 'Urgent' },
                  ]}
                  placeholder="Select priority"
                  onChange={handleSelectChange12}
                  className="w-full"
                />
              </div>

              {/* Image Upload Section */}
              <div className="space-y-2">
                <Label>Image</Label>
                <UpFile10
                  onFilesSelected={(files) => console.log('Image files selected:', files)}
                />
              </div>

              {/* Files Upload Section */}
              <div className="space-y-2">
                <Label>Files</Label>
                <UpFile10 onFilesSelected={(files) => console.log('Files selected:', files)} />
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
                Submit Request
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
