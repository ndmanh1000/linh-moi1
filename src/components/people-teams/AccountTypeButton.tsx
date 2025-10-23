import { useState } from 'react';
import { BsTag } from 'react-icons/bs';

import { FaAngleDown } from 'react-icons/fa6';

export default function AccountTypeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Account Type');

  const options = ['A', 'B', 'C'];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 h-10 w-full border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition"
      >
        <BsTag className="w-4 h-4 text-gray-600" />
        <span className="text-gray-700">{selected}</span>
        <FaAngleDown
          className={`ml-auto w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 md:w-40 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {options.map((item) => (
            <button
              key={item}
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                selected === item ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
