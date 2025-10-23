import { MoreIcon } from '../icons';
import { useState } from 'react';
import { useModal } from '../hooks/useModal';
import WorkOrderTask from '../components/workorder/work-order-task/WorkOrderTask';
import VerdorsCustomersTable from '../components/verdors-customers/VerdorsCustomersTable';
import ModalCreateVendor from '../components/modal/ModalCreateVendor';

export default function VerdorsCustomers() {
  const {
    isOpen: isModalCreateVendorOpen,
    openModal: openModalCreateVendor,
    closeModal: closeModalCreateVendor,
  } = useModal();

  const [activeTab, setActiveTab] = useState('start');
  return (
    <div className="w-full flex flex-col md:gap-4 gap-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center md:gap-3 gap-3">
          <div>
            {' '}
            <button
              type="button"
              onClick={() => setActiveTab('vendors')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'vendors'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Vendors
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('customers')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'customers'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Customers
            </button>
          </div>
        </div>

        <div className="flex items-center md:gap-3 gap-3">
          {' '}
          <button
            className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
            type="button"
            onClick={openModalCreateVendor}
          >
            Creater Vendor
          </button>
          <MoreIcon />
        </div>
      </div>
      <div className="w-full border-b border-[#F3F3F3]" />
      <div className="mt-4 p-4 ">
        {activeTab === 'vendors' && (
          <div>
            <WorkOrderTask />
            <VerdorsCustomersTable />
          </div>
        )}

        {activeTab === 'customers' && (
          <div>
            <h2 className="text-lg font-semibold">Tasks Content</h2>
            <p>Danh sách các công việc cần làm sẽ hiển thị ở đây.</p>
          </div>
        )}
      </div>
      <ModalCreateVendor isOpen={isModalCreateVendorOpen} onClose={closeModalCreateVendor} />
    </div>
  );
}
