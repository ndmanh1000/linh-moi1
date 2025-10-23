import { IoArrowBack } from 'react-icons/io5';
import { MoreIcon } from '../../../icons';
import { useNavigate } from 'react-router';

export default function AssetsTask1Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2 md:gap-3">
        <IoArrowBack className="cursor-pointer" onClick={() => navigate('/assets')} />
        Linh
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <button className="border border-[#000000] bg-white rounded-[4px] text-[#000000] h-10 p-2">
          Edit Details
        </button>
        <button className="border border-[#1677FF] bg-[#1677FF] text-white h-10 p-2 rounded-[4px]">
          Create Work Order
        </button>
        <MoreIcon className="cursor-pointer" />
      </div>
    </div>
  );
}
