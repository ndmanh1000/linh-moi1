import { useState, useEffect } from 'react';

export default function OpenButton() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    label: 'Open',
    color: 'text-gray-600',
    icon: '◯',
  });

  const options = [
    { label: 'Open', color: 'text-gray-600', icon: '◯' },
    { label: 'In Progress', color: 'text-green-700', icon: '◐' },
    { label: 'On Hold', color: 'text-orange-600', icon: '⏸' },
    { label: 'Complete', color: 'text-blue-600', icon: '✓' },
  ];

  useEffect(() => {
    const saved = localStorage.getItem('selectedStatus');
    if (saved) {
      setSelected(JSON.parse(saved));
    }
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleSelect = (option: typeof selected) => {
    setSelected(option);
    localStorage.setItem('selectedStatus', JSON.stringify(option));
    setOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left w-full"
      onBlur={(e) => {
        const nextFocus = e.relatedTarget as Node | null;
        if (!e.currentTarget.contains(nextFocus)) {
          setOpen(false);
        }
      }}
      tabIndex={0}
    >
      <button
        onClick={handleToggle}
        className={`flex items-center w-full gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 focus:outline-none ${selected.color}`}
      >
        <span className="text-lg">{selected.icon}</span>
        <span>{selected.label}</span>
        <svg
          className={`ml-auto h-4 w-4 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-1 md:w-48 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options
            .filter((option) => option.label !== selected.label)
            .map((option) => (
              <button
                key={option.label}
                className={`flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-gray-100 ${option.color} text-sm`}
                onClick={() => handleSelect(option)}
              >
                <span className="text-lg">{option.icon}</span>
                {option.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
