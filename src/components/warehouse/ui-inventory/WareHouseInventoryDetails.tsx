import { IoArrowBack } from 'react-icons/io5';
import { LayoutLineIcon, MoreIcon } from '../../../icons';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import InventoryTable1 from './InventoryTable1';
import FormWarehouseDetails from '../ui-details/TableWarehouseDetails';

import SelectDropdawn from '../../SelectDropdawn';
import TableWarrehouseWorkOrder from '../ui-adjustments/TableWarehouseAdjust';
import TableWarehouseAssets from '../ui-assets/TableWarehouseAssets';
import TableWarehouseAdjust from '../ui-adjustments/TableWarehouseAdjust';

export default function WareHouseInventoryDetails() {
  const [activeTab, setActiveTab] = useState('WareHouseInventoryDetails');
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col md:gap-4 gap-4 bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 md:gap-3">
          <IoArrowBack className="cursor-pointer" onClick={() => navigate('/warehouse')} />
          Bút
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <button className="border border-[#D9D9D9] bg-white rounded-[4px] text-black h-10 p-2">
            Edit{' '}
          </button>

          <MoreIcon className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  md:min-h-screen bg-[#F5F5F5] ">
        <div className="flex-1 space-y-4 border border-[#F3F3F3] p-2">
          <div className="w-full md:flex items-center md:justify-between grid grid-col-1 gap-3">
            <div className="flex flex-wrap border-b border-gray-200 w-full">
              <button
                type="button"
                onClick={() => setActiveTab('inventory')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'inventory'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Inventory
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('details')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'details'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Details
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('work-order')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'work-order'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Work Orders
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('assets')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'assets'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Assets
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
                onClick={() => setActiveTab('adjustments')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'adjustments'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Adjustments
              </button>
            </div>
            <div className="w-full flex items-center md:justify-end md:gap-3 gap-3">
              <LayoutLineIcon />
              QR Code
            </div>
          </div>

          <div className="mt-4 p-4">
            {activeTab === 'inventory' && (
              <div className="w-full flex flex-col md:gap-3 gap-3">
                <div className="w-full md:flex items-center justify-between grid grid-col-1 gap-3">
                  <div className="flex items-center md:gap-3 gap-3">
                    <div>1 Iventory Lines</div>

                    <div className="px-2 py-1 rounded-md bg-red-100 text-red-600 text-xs font-medium">
                      Out of stock
                    </div>
                  </div>
                  <div className="flex items-center md:gap-3 gap-3">
                    <div>Total Avaiable</div>
                    <div>0.00</div>
                    <div>
                      <button className="border border-[#D9D9D9] bg-white rounded-[4px] p-1 h-10 flex items-center justify-center text-black">
                        Add Inventory Line
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <InventoryTable1 />
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div>
                <FormWarehouseDetails />
              </div>
            )}

            {activeTab === 'work-order' && (
              <div className="flex flex-col md:gap-3 gap-3">
                <div className="w-full md:w-52">
                  <SelectDropdawn />
                </div>
                <div>
                  <TableWarrehouseWorkOrder />
                </div>
              </div>
            )}

            {activeTab === 'assets' && (
              <div className="flex flex-col md:gap-3 gap-3 w-full">
                <div className="w-full md:flex items-center justify-between gap-3 grid grid-col-1">
                  <div className="w-full md:w-52">
                    <SelectDropdawn />
                  </div>
                  <div className="w-full md:w-32">
                    <button className="border border-[#D9D9D9] bg-white p-1 h-10 text-black rounded-[4px] w-full md:w-32">
                      Link Asset
                    </button>
                  </div>
                </div>
                <div>
                  <TableWarehouseAssets />
                </div>
              </div>
            )}
            {activeTab === 'files' && (
              <div>
                <h2 className="text-lg font-semibold">Costs Content</h2>
                <p>Danh sách các phụ tùng hoặc linh kiện.</p>
              </div>
            )}
            {activeTab === 'adjustments' && (
              <div>
                <TableWarehouseAdjust />
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/4 bg-white shadow p-4 border border-[#F3F3F3] flex flex-col md:gap-3 gap-3">
          <div>Assigned to</div>
          <div className="flex items-center md:gap-3 gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-700 text-white font-medium">
              T
            </div>
            Trần Linh
          </div>
        </div>
      </div>
    </div>
  );
}
