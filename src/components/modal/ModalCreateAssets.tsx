import { Modal } from '../ui/modal';
import FormCreateAssets from '../assets/FormCreateAssets';

interface ModalCreateAssetsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCreateAssets({ isOpen, onClose }: ModalCreateAssetsProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="fixed inset-0 w-full h-full m-0 p-0">
      <div className="no-scrollbar relative w-full  overflow-y-auto bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Create Asset
          </h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />

        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7 w-full">
              <FormCreateAssets />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
