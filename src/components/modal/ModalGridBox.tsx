import { Modal } from '../ui/modal';
import HeaderModalGridBox from './ui-modal-grid-box/HeaderModalGridBox';
import BodyModalGridBox from './ui-modal-grid-box/BodyModalGridBox';

interface ModalGridBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalGridBox({ isOpen, onClose }: ModalGridBoxProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[800px] m-4">
      <div className="no-scrollbar relative w-full max-w-[800px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">WO #011</h4>
        </div>
        <div className="w-full border-b border-[#F3F3F3]"></div>

        <form className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
            <div className="mt-7">
              <div>
                <HeaderModalGridBox />
              </div>
              <div className="w-full border-b border-[#F3F3F3] mt-4"></div>

              <div className="mt-4">
                <BodyModalGridBox />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
