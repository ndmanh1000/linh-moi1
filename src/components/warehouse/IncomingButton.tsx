import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { DiagramIcon } from '../../icons';

export default function IncomingButton() {
  const [selected, setSelected] = useState('Incoming Qty');
  const [open, setOpen] = useState(false);

  const options = ['Priority', 'High', 'Medium', 'Low'];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border rounded-md px-3 py-1.5 h-10 w-full text-gray-700 hover:bg-gray-100"
      >
        <DiagramIcon className="w-4 h-4" />
        {selected}
        <FaAngleDown className="ml-auto w-4 h-4" />
      </button>

      {open && (
        <div className="absolute mt-2 md:w-40 w-full bg-white border rounded-md shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                selected === option ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
