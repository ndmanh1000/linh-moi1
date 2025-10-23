import React, { useState } from 'react';

const SortLabel: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <button
      onClick={toggleSort}
      className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M8 17V7m0 0l-3 3m3-3l3 3"
          className={sortOrder === 'asc' ? 'stroke-gray-900' : 'stroke-gray-400'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M16 7v10m0 0l-3-3m3 3l3-3"
          className={sortOrder === 'desc' ? 'stroke-gray-900' : 'stroke-gray-400'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-[16px]">
        <span className="font-medium">Sort:</span> Date Created
      </span>
    </button>
  );
};

export default SortLabel;
