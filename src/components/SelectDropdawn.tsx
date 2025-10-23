import { useState } from 'react';

const SelectDropdawn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Suite B'); // State để lưu giá trị đã chọn

  const locations = ['Suite A', 'Suite B', 'Suite C', 'Suite D', 'Suite E']; // Danh sách các lựa chọn

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setIsOpen(false); // Đóng dropdown sau khi chọn
  };

  return (
    <div className="relative inline-block w-full max-w-sm">
      <div
        className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-sm font-medium text-gray-700">
          Inventory Line : <span className="text-gray-900 font-semibold">{selectedLocation}</span>
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg border border-gray-200">
          <ul className="py-1">
            {locations.map((location) => (
              <li
                key={location}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                onClick={() => handleLocationSelect(location)}
              >
                {location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectDropdawn;
