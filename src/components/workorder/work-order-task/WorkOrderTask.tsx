import SortLabel from './ui/SortLabel';
import { GridColumnIcon } from '../../../icons';
import WorkOrderSearch from './ui/WorkOrderSearch';
import { useState, useEffect, useRef } from 'react';
import { RxDragHandleDots2 } from 'react-icons/rx';

type ColumnSelection = {
  WO: boolean;
  'Work Order Title': boolean;
  Description: boolean;
  'Due Date': boolean;
  'Start Date': boolean;
  Status: boolean;
  Priority: boolean;
  Category: boolean;
  Location: boolean;
  Asset: boolean;
  Parts: boolean;
};

export default function WorkOrderTask() {
  // State cho dropdown columns
  const [isColumnsDropdownOpen, setIsColumnsDropdownOpen] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState<ColumnSelection>({
    WO: false,
    'Work Order Title': false,
    Description: false,
    'Due Date': false,
    'Start Date': false,
    Status: false,
    Priority: false,
    Category: false,
    Location: false,
    Asset: false,
    Parts: false,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsColumnsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle column selection
  const toggleColumn = (columnName: keyof ColumnSelection) => {
    setSelectedColumns((prev) => ({
      ...prev,
      [columnName]: !prev[columnName],
    }));
  };
  return (
    <div className="grid grid-cols-1 md:flex md:items-center md:justify-between gap-4 md:gap-8">
      <div className="text-sm md:text-base">11 Results Returned</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:items-center md:gap-6 lg:gap-10 gap-3">
        <div>
          <SortLabel />
        </div>
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsColumnsDropdownOpen(!isColumnsDropdownOpen)}
          >
            <GridColumnIcon />
            <p className="text-sm">Columns</p>
          </div>

          {/* Columns Dropdown */}
          {isColumnsDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="py-2 max-h-80 overflow-y-auto">
                {Object.entries(selectedColumns).map(([columnName, isSelected]) => (
                  <div
                    key={columnName}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleColumn(columnName as keyof ColumnSelection)}
                  >
                    {/* Drag Handle Icon */}
                    <RxDragHandleDots2 className="w-4 h-4 text-gray-400" />

                    {/* Checkbox */}
                    <div
                      className={`flex items-center justify-center w-4 h-4 border-2 rounded-sm ${
                        isSelected ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Column Name */}
                    <span className="text-sm text-gray-700 flex-1">{columnName}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="sm:col-span-2 md:col-span-1">
          <WorkOrderSearch />
        </div>
      </div>
    </div>
  );
}
