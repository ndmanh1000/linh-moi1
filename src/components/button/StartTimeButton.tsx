import { Time2Icon } from '../../icons';

export default function StartTimeButton() {
  return (
    <div className="w-full">
      <div className="border border-[#C8C8C8] cursor-pointer bg-white h-10 rounded-[8px] text-[#0071FF] w-full flex items-center justify-center gap-2 p-1 ">
        <Time2Icon />
        <p>Start Timer</p>
      </div>
    </div>
  );
}
