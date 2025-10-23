import { Modal } from '../ui/modal';
import Label from '../form/Label';
import Input from '../form/input/InputField';
import TextArea from '../form/input/TextArea';

interface ModalCreateLocationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCreateLocation({ isOpen, onClose }: ModalCreateLocationProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="fixed inset-0 w-full h-full m-0 p-0">
      <div className="no-scrollbar relative w-full  overflow-y-auto bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Create Location
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7 mx-auto max-w-2xl">
              {/* Location Information Form Card */}
              <div className="p-6 bg-white rounded-[16px] border border-[#D9D9D9] shadow-md mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Location Information</h2>

                <div className="space-y-6">
                  {/* Address Field */}
                  <div>
                    <Label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="address"
                        name="address"
                        placeholder="Enter address"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Description Field */}
                  <div>
                    <Label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </Label>
                    <div className="mt-1">
                      <TextArea
                        id="description"
                        placeholder="Enter description"
                        rows={4}
                        className="w-full resize-none"
                      />
                    </div>
                  </div>

                  {/* Add from Saved Files Link */}
                  <div className="pt-2">
                    <button
                      type="button"
                      className="text-[#007FE6] hover:text-[#0056b3] text-sm font-medium cursor-pointer"
                    >
                      Add from Saved Files
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons - positioned right after form content */}
          <div className="w-full flex items-center justify-center gap-2 md:gap-4 px-2 py-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-4 py-2 rounded-[4px] hover:bg-[#0056b3]"
              type="button"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
