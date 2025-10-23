import { MoreIcon } from '../../../../icons';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { useModal } from '../../../../hooks/useModal';
import ModalAddAsset from '../../../modal/ModalAddAsset';

export default function PreventiveDetailsHeader() {
  const {
    isOpen: isModalAddAssetOpen,
    openModal: openModalAddAsset,
    closeModal: closeModalAddAsset,
  } = useModal();
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full md:flex items-center grid grid-cols-1 md:gap-2 gap-3">
        <div className="text-[20px] font-medium flex items-center md:gap-2 gap-2 w-full">
          <IoIosArrowRoundBack
            size={25}
            onClick={() => navigate('/preventivemaint')}
            className="cursor-pointer"
          />
          Kiểm tra máy điều hòa
        </div>
        <div className="w-full flex items-center md:gap-4 gap-2 justify-end">
          <button className="border border-[#D9D9D9] bg-white p-2 h-10 rounded-[4px] w-full md:w-32">
            Edit Details
          </button>
          <button
            className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center h-10 justify-center px-2 py-2 rounded-[4px] w-full md:w-32"
            type="button"
            onClick={openModalAddAsset}
          >
            Add Assets
          </button>
          <MoreIcon className="cursor-pointer" />
        </div>
      </div>
      <ModalAddAsset isOpen={isModalAddAssetOpen} onClose={closeModalAddAsset} />
    </div>
  );
}
