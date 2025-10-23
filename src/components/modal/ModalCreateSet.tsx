import { Modal } from '../ui/modal';
import Input from '../form/input/InputField';

interface ModalCreateSetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCreateSet({ isOpen, onClose }: ModalCreateSetProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="fixed inset-0 w-full h-full m-0 p-0">
      <div className="no-scrollbar relative w-full  overflow-y-auto bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Create Set
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7 mx-auto max-w-3xl">
              <div className="p-6 bg-white rounded-[16px] border border-[#D9D9D9] shadow-md mx-auto mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Set Information</h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div>
                      <Input />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Parts
                  </button>
                </div>

                <hr className="my-8 border-t-2 border-dashed border-gray-200" />

                <div className="text-center text-gray-500">No line items have been added yet</div>
                <hr className="my-8 border-t-2 border-dashed border-gray-200" />
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
                className="border border-[#D9D9D9] bg-white text-[#D9D9D9] flex items-center justify-center px-2 py-2 rounded-[4px]"
                type="button"
              >
                Create Sets
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
