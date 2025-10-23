import { PlusOutlinedIcon, MoreIcon, ScanIcon } from '../../icons';

import { useModal } from '../../hooks/useModal';
import ModalQr from '../modal/ModalQr';
import ModalCreateRequest from '../modal/ModalCreateRequest';
import ModalScanQr from '../modal/ModalScanQr';

export default function RequestHeader() {
  const { isOpen: isModalQrOpen, openModal: openModalQr, closeModal: closeModalQr } = useModal();
  const {
    isOpen: isModalCreateRequestOpen,
    openModal: openModalCreateRequest,
    closeModal: closeModalCreateRequest,
  } = useModal();
  const {
    isOpen: isModalScanQrOpen,
    openModal: openModalScanQr,
    closeModal: closeModalScanQr,
  } = useModal();

  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <div>Requests</div>
        <div className="flex items-center md:gap-10 gap-5">
          <button
            onClick={openModalCreateRequest}
            className="flex items-center gap-2 justify-center text-white bg-[#1677ff] px-2 py-2 rounded-[8px] hover:bg-blue-light-300 cursor-pointer"
          >
            <PlusOutlinedIcon />
            <p>Creater Request</p>
          </button>

          <div className="cursor-pointer">
            <MoreIcon />
          </div>
          <div className="cursor-pointer">
            <ScanIcon className="w-5 h-5" onClick={openModalScanQr} />
          </div>
        </div>
      </div>
      <ModalQr isOpen={isModalQrOpen} onClose={closeModalQr} />
      <ModalCreateRequest isOpen={isModalCreateRequestOpen} onClose={closeModalCreateRequest} />
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
