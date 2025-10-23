import { FiTrash2, FiInfo } from 'react-icons/fi';
import Select from '../form/Select';

export default function FormInventoryLines() {
  interface OptionType {
    value: string;
    label: string;
  }

  const options12: OptionType[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange12 = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <div className="w-full border border-[#f0f0f0] rounded-xl p-4 bg-white ">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-medium">Inventory Lines</h2>
          <FiInfo className="text-gray-400" size={14} />
        </div>
        <button className="text-sm text-blue-600 hover:underline">Show Inventory Settings</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-[#f0f0f0] border-collapse">
          <thead className="bg-gray-50">
            <tr className="text-gray-600">
              <th className="px-3 py-2 border border-gray-200 text-left font-normal">Location</th>
              <th className="px-3 py-2 border border-gray-200 text-left font-normal">Area</th>
              <th className="px-3 py-2 border border-gray-200 text-left font-normal">Min QTY</th>
              <th className="px-3 py-2 border border-gray-200 text-left font-normal">Max QTY</th>
              <th className="px-3 py-2 border border-gray-200 text-left font-normal">Avail QTY</th>
              <th className="px-3 py-2 border border-gray-200 text-left font-normal">Cost</th>
              <th className="px-3 py-2 border border-gray-200 text-left font-normal">Barcode</th>
              <th className="px-3 py-2 border border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2  text-gray-600">
                <Select
                  options={options12}
                  placeholder="Select location"
                  onChange={handleSelectChange12}
                  className=" w-full border-none"
                />
              </td>
              <td className="px-3 py-2 border border-gray-200">
                <input type="text" className="w-full px-2 py-1 text-sm " />
              </td>
              <td className="px-3 py-2 border border-gray-200">
                <input type="number" className="w-full px-2 py-1 text-sm " />
              </td>
              <td className="px-3 py-2 border border-gray-200">
                <input type="number" className="w-full px-2 py-1 text-sm " />
              </td>
              <td className="px-3 py-2 border border-gray-200">
                <input type="number" className="w-full  px-2 py-1 text-sm " />
              </td>
              <td className="px-3 py-2 border border-gray-200">
                <input type="text" className="w-full  px-2 py-1 text-sm " />
              </td>
              <td className="px-3 py-2 border border-gray-200">
                <input type="text" className="w-full px-2 py-1 text-sm " />
              </td>
              <td className="px-3 py-2 border border-gray-200 text-center">
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={16} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3">
        <button
          className="flex items-center gap-2 text-sm border rounded-md px-3 py-2 hover:bg-gray-50"
          type="button"
        >
          + Add Custom Field
        </button>
      </div>
    </div>
  );
}
