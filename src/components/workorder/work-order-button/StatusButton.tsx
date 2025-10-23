import { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';

export default function StatusButton() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Status'); // lưu trạng thái được chọn
  const options = ['Status', 'Active', 'Inactive', 'Pending'];
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 border border-gray-300 w-full rounded-lg px-3 py-1.5 h-10 text-gray-700 hover:bg-gray-100"
      >
        {selected}
        <FaAngleDown
          className={`ml-auto w-4 h-4 text-gray-500 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="absolute mt-1 md:w-40 w-full rounded-lg bg-white shadow-lg border border-gray-200 z-50">
          {options.map((opt) => (
            <button
              key={opt}
              className={`w-full flex justify-between items-center text-left px-4 py-2 hover:bg-gray-100 ${
                selected === opt ? 'bg-gray-200 font-semibold' : ''
              }`}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
            >
              {opt}
              {selected === opt && <FaCheck className="text-green-500 w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
