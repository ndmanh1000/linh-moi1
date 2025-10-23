import { Modal } from '../ui/modal';

interface ModalDeactiveProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalDeactive({ isOpen, onClose }: ModalDeactiveProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Update User Status
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7">Are you sure you want to disable this user?</div>

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
                className="border border-[#0C6FF9] bg-[#0C6FF9] flex items-center text-white justify-center px-2 py-2 rounded-[4px]"
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
