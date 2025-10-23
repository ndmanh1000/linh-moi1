import { useState } from 'react';
import {
  ClockIcon,
  DolarIcon,
  BackwardIcon,
  EditIcon1,
  LinkIcon,
  MoreIcon,
  DocumentIcon,
  Note2Icon,
  Copy1,
  Track1Icon,
} from '../../icons';
import { useModal } from '../../hooks/useModal';
import ModalAddTime from '../modal/ModalAddTime';
import ModalAddCost from '../modal/ModalAddCost';
import ModalAddPart from '../modal/ModalAddPart';
import ModalEditWorkOrder from '../modal/ui-edit-work-order/ModalEditWorkOrder';

export default function GroupButton() {
  const { isOpen: isTimeOpen, openModal: openTimeModal, closeModal: closeTimeModal } = useModal();

  const { isOpen: isCostOpen, openModal: openCostModal, closeModal: closeCostModal } = useModal();
  const { isOpen: isPartOpen, openModal: openPartModal, closeModal: closePartModal } = useModal();
  const {
    isOpen: isModalEditWorkOrderOpen,
    openModal: openModalEditWorkOrder,
    closeModal: closeModalEditWorkOrder,
  } = useModal();

  const [isPlay, setIsPlay] = useState(false);

  const toggleDropdown = () => {
    setIsPlay((prev) => !prev);
  };

  return (
    <div className="w-full flex items-center gap-4">
      <ClockIcon className="cursor-pointer" onClick={openTimeModal} />

      <DolarIcon className="cursor-pointer" onClick={openCostModal} />

      <BackwardIcon className="cursor-pointer" onClick={openPartModal} />
      <EditIcon1 className="cursor-pointer" onClick={openModalEditWorkOrder} />
      <LinkIcon className="cursor-pointer" />

      <div className="relative">
        <MoreIcon className="cursor-pointer" onClick={toggleDropdown} />
        {isPlay && (
          <div className="absolute left-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg z-10">
            <ul>
              <li>
                <button
                  className="flex items-center gap-2 p-2 w-full text-left text-gray-900 hover:bg-gray-200"
                  type="button"
                >
                  <DocumentIcon className="text-gray-500" />
                  <span>Print PDF</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 p-2 w-full text-left text-gray-900 hover:bg-gray-200"
                  type="button"
                >
                  <Note2Icon className="text-gray-500" />
                  <span>Generate Invoice</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 p-2 w-full text-left text-gray-900 hover:bg-gray-200"
                  type="button"
                >
                  <Copy1 className="text-gray-500" />
                  <span>Duplicate</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 p-2 w-full text-left text-gray-900 hover:bg-gray-200"
                  type="button"
                >
                  <Copy1 className="text-gray-500" />
                  <span>Copy Feedback Link</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 p-2 w-full text-left text-gray-900 hover:bg-gray-200"
                  type="button"
                >
                  <DocumentIcon className="text-gray-500" />
                  <span>Archive</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 p-2 w-full text-left text-red-500 hover:bg-gray-200"
                  type="button"
                >
                  <Track1Icon className="text-red-500" />
                  <span>Delete</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <ModalAddTime isOpen={isTimeOpen} onClose={closeTimeModal} />
      <ModalAddCost isOpen={isCostOpen} onClose={closeCostModal} />
      <ModalAddPart isOpen={isPartOpen} onClose={closePartModal} />
      <ModalEditWorkOrder isOpen={isModalEditWorkOrderOpen} onClose={closeModalEditWorkOrder} />
    </div>
  );
}
