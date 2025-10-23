import image60 from '../../../../../public/images/work-order-grid-box/image60.png';
import { LocationIcon, Boc1Icon, UserocIcon } from '../../../../icons';

interface GridBoxProps {
  woNumber: string;
  statusText: string;
  statusColor: string;
  statusBg: string;
}

export default function GridBox({ woNumber, statusText, statusColor, statusBg }: GridBoxProps) {
  return (
    <div className="w-full h-full bg-white px-2 sm:px-3 py-3 sm:py-4">
      <div
        className="h-full flex flex-col bg-white rounded-md sm:rounded-lg py-4 px-3 sm:px-4 border border-[#F3F3F3] relative
                   max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
      >
        <div className="w-full h-[5px] absolute -right-0 -top-1 bg-[#D9D9D9] rounded-tl-md rounded-tr-md"></div>

        <div className="w-full flex items-center justify-between flex-wrap gap-2">
          <p className="text-sm sm:text-base font-medium">{woNumber}</p>
          <div
            className="border rounded-md min-w-[90px] sm:min-w-[120px] text-xs sm:text-sm text-center px-2 py-1"
            style={{ borderColor: statusColor, backgroundColor: statusBg }}
          >
            <p style={{ color: statusColor }}>{statusText}</p>
          </div>
        </div>

        <div className="w-full border-b border-[#F3F3F3] mt-2"></div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-center mt-3">
            <img
              src={image60}
              alt="img60"
              className="w-[80px] sm:w-[110px] md:w-[120px] lg:w-[150px] h-auto object-contain"
            />
          </div>
          <div className="w-full border-b border-[#F3F3F3] mt-3"></div>

          <div className="w-full px-1 sm:px-2 py-4 flex flex-col gap-4 text-xs sm:text-sm">
            <div className="flex justify-between items-start gap-2">
              <div className="flex items-center gap-2 shrink-0">
                <LocationIcon />
                <p className="font-medium">Location</p>
              </div>
              <p className="flex-1 text-right break-words">Suite B</p>
            </div>

            <div className="flex justify-between items-start gap-2">
              <div className="flex items-center gap-2 shrink-0">
                <Boc1Icon />
                <p className="font-medium">Assets</p>
              </div>
              <p className="flex-1 text-right break-words">TRANE HVAC Suite B Suite B</p>
            </div>

            <div className="flex justify-between items-start gap-2">
              <div className="flex items-center gap-2 shrink-0">
                <Boc1Icon />
                <p className="font-medium">Closeout Notes</p>
              </div>
              <p className="flex-1 text-right break-words">N/A</p>
            </div>

            <div className="flex justify-between items-start gap-2">
              <div className="flex items-center gap-2 shrink-0">
                <UserocIcon />
                <p className="font-medium">Assignee</p>
              </div>
              <p className="flex-1 text-right break-words">Trần Linh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
