import OpenButton from '../../button/OpenButton';
import GroupButton from '../../button/GroupButton';
import StartTimeButton from '../../button/StartTimeButton';
import Tabs from '../../tabs/Tabs';
export default function HeaderModalGridBox() {
  return (
    <div>
      <div className="w-full md:flex items-center justify-between grid grid-cols-1 gap-3">
        <div className="md:flex items-center md:gap-6 grid grid-cols-1 gap-3">
          <div>
            <OpenButton />
          </div>
          <div>
            <GroupButton />
          </div>
        </div>
        <div>
          <StartTimeButton />
        </div>
      </div>
      <div className="w-full border-b border-[#F3F3F3] md:mt-4"></div>
      <div className="md:mt-3">
        <Tabs />
      </div>
    </div>
  );
}
