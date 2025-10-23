import { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { DiagramIcon } from '../../../icons';

export default function PriorityButton() {
  const [selected, setSelected] = useState('Priority');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ['Priority', 'High', 'Medium', 'Low'];

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
        className="flex items-center gap-2 border rounded-md px-3 py-1.5 h-10 w-full text-gray-700 hover:bg-gray-100"
      >
        <DiagramIcon className="w-4 h-4" />
        {selected}
        <FaAngleDown className="ml-auto w-4 h-4" />
      </button>

      {open && (
        <div className="absolute mt-2 md:w-40 w-full bg-white border rounded-md shadow-lg z-50">
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
