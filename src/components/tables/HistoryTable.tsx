import React from 'react';
import { SuccessIcon, FaillIcon,UserFrameIcon,BroomIcon } from '../../icons';

interface HistoryEntry {
  id: number;
  date: string;
  entry: string;
  status: 'success' | 'failed';
  user: string;
}

const mockData: HistoryEntry[] = [
  {
    id: 1,
    date: '03/06/2025',
    entry: 'Montly PM has been successfully',
    status: 'success',
    user: 'Demo User'
  },
  {
    id: 2,
    date: '03/06/2025',
    entry: 'Montly PM has been successfully',
    status: 'failed',
    user: 'Bryan Christiansen'
  },
  {
    id: 3,
    date: '03/06/2025',
    entry: 'Montly PM has been successfully',
    status: 'success',
    user: 'Demo User'
  },
  {
    id: 4,
    date: '03/06/2025',
    entry: 'Montly PM has been successfully',
    status: 'failed',
    user: 'Bryan Christiansen'
  },
  {
    id: 5,
    date: '03/06/2025',
    entry: 'Montly PM has been successfully',
    status: 'success',
    user: 'Demo User'
  }
];

const HistoryTable: React.FC = () => {
 
  const currentData = mockData.slice(0, 5);

  const renderStatusIcon = (status: 'success' | 'failed') => {
    if (status === 'success') {
      return <SuccessIcon />;
    }
    return <FaillIcon />;
  };

  const renderPagination = () => {
    return (
      <>
        {/* Previous button */}
        <div
          className="px-3 py-1 text-gray-500 border border-[#BDBDBD] rounded-[8px] cursor-default"
        >
          &lt;
        </div>

        {/* Page numbers */}
        {[1, 2, 3, 4, 5].map((page) => (
          <div
            key={page}
            className={`px-3 py-1 border border-[#BDBDBD] rounded-[8px] ${
              page === 1
                ? 'bg-blue-500 text-white border-blue-500'
                : 'text-gray-500 border-gray-300'
            } ${page === 1 ? 'rounded' : page === 5 ? 'rounded' : ''}`}
          >
            {page}
          </div>
        ))}

        {/* Next button */}
        <div
          className="px-3 py-1 text-gray-500 border border-[#BDBDBD] rounded-[8px] cursor-default"
        >
          &gt;
        </div>
      </>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entry
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center space-x-2">
                    {renderStatusIcon(entry.status)}
                    <span>{entry.date}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center space-x-2">
                    <span><BroomIcon className="w-4 h-4 text-black" /></span>
                    <span>
                      <span className="text-blue-600 font-medium">Montly PM</span> has been successfully
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center space-x-2">
                    <UserFrameIcon className="text-gray-400" />
                    <span>{entry.user}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white px-4 py-3 flex items-center justify-center">
        <div className="flex items-center md:gap-2 gap-1">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
