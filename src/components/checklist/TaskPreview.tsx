import Select from '../form/Select';
import { LuClipboardCheck } from 'react-icons/lu';
import { LuClipboardList } from 'react-icons/lu';
import { LuClipboardPen } from 'react-icons/lu';
export default function TaskPreview() {
  interface OptionType {
    value: string;
    label: string;
  }
  const options12: OptionType[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange12 = (value: string) => {
    console.log('Selected value:', value);
  };
  return (
    <div className="w-full bg-[#dddddd] p-6 flex items-center justify-center ">
      <div className=" border-solid border-2 border-white shadow-2xl bg-[#dddddd] rounded-[8px] flex flex-col w-full h-[600px] md:max-w-xl ">
        <div className="flex items-center md:gap-2 gap-2 p-2 bg-white w-full">
          <LuClipboardCheck size={30} />
          Task Preview
        </div>
        <div className="w-full border-b border-[#F3F3F3]" />
        <div className="bg-[#f8f9f9] p-2 flex items-center justify-between w-full">
          <div className="flex flex-col md:gap-2 gap-2 w-full">
            <div>Nhìn bên ngoài em máy thế nào</div>
            <div>
              <Select
                options={options12}
                placeholder="Open"
                onChange={handleSelectChange12}
                className="dark:bg-dark-900 w-full md:w-32 md:rounded-full"
              />
            </div>
          </div>
          <div className="w-full flex items-center md:gap-2 gap-2 justify-end ">
            <LuClipboardList size={25} />
            <LuClipboardPen size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
