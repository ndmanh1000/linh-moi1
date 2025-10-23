import GridBox from './ui/GridBox';
import { useModal } from '../../../hooks/useModal';
import ModalGridBox from '../../modal/ModalGridBox';

export default function WorkOrderGridBox() {
  const {
    isOpen: isModalGridBoxOpen,
    openModal: openModalGridBox,
    closeModal: closeModalGridBox,
  } = useModal();

  const workOrders = [
    {
      woNumber: 'WO #001',
      statusText: 'Đang hoạt động',
      statusColor: '#73D13D',
      statusBg: '#F6FFED',
    },
    {
      woNumber: 'WO #002',
      statusText: 'Đang bảo dưỡng',
      statusColor: '#1890FF',
      statusBg: '#E6F7FF',
    },
    {
      woNumber: 'WO #003',
      statusText: 'Đang kiểm tra',
      statusColor: '#FAAD14',
      statusBg: '#FFFBE6',
    },
    {
      woNumber: 'WO #004',
      statusText: 'Quá tải',
      statusColor: '#FF4D4F',
      statusBg: '#FFF1F0',
    },
  ];

  return (
    <div className="w-full bg-white px-3 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-stretch">
      {Array.from({ length: 10 }).map((_, index) => {
        const wo = workOrders[index % workOrders.length];
        return (
          <div key={index} onClick={openModalGridBox} className="cursor-pointer h-full">
            <GridBox
              woNumber={wo.woNumber}
              statusText={wo.statusText}
              statusColor={wo.statusColor}
              statusBg={wo.statusBg}
            />
          </div>
        );
      })}

      <ModalGridBox isOpen={isModalGridBoxOpen} onClose={closeModalGridBox} />
    </div>
  );
}
