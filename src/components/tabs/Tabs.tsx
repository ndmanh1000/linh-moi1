import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('start');

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap border-b border-gray-200 w-full">
        <button
          type="button"
          onClick={() => setActiveTab('start')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'start'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Start Timer
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('tasks')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'tasks'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Tasks
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('labor')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'labor'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Labor
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('parts')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'parts'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Parts
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('costs')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'costs'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Costs
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('files')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'files'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Files
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('activity')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'activity'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Activity
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('links')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'links'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Links
        </button>
      </div>

      <div className="mt-4 p-4 border rounded-lg bg-gray-50">
        {activeTab === 'start' && (
          <div>
            <h2 className="text-lg font-semibold">Start Timer Content</h2>
            <p>Bạn có thể bấm nút start để bắt đầu đếm giờ.</p>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div>
            <h2 className="text-lg font-semibold">Tasks Content</h2>
            <p>Danh sách các công việc cần làm sẽ hiển thị ở đây.</p>
          </div>
        )}

        {activeTab === 'labor' && (
          <div>
            <h2 className="text-lg font-semibold">Labor Content</h2>
            <p>Thông tin chi tiết về nhân công.</p>
          </div>
        )}

        {activeTab === 'parts' && (
          <div>
            <h2 className="text-lg font-semibold">Parts Content</h2>
            <p>Danh sách các phụ tùng hoặc linh kiện.</p>
          </div>
        )}
        {activeTab === 'costs' && (
          <div>
            <h2 className="text-lg font-semibold">Costs Content</h2>
            <p>Danh sách các phụ tùng hoặc linh kiện.</p>
          </div>
        )}
        {activeTab === 'files' && (
          <div>
            <h2 className="text-lg font-semibold">File Content</h2>
            <p>Danh sách các phụ tùng hoặc linh kiện.</p>
          </div>
        )}
        {activeTab === 'activity' && (
          <div>
            <h2 className="text-lg font-semibold">Activity Content</h2>
            <p>Danh sách các phụ tùng hoặc linh kiện.</p>
          </div>
        )}
        {activeTab === 'links' && (
          <div>
            <h2 className="text-lg font-semibold">Link Content</h2>
            <p>Danh sách các phụ tùng hoặc linh kiện.</p>
          </div>
        )}
      </div>
    </div>
  );
}
