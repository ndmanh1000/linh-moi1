import { useState } from 'react';
import Label from '../form/Label';
import Input from '../form/input/InputField';
import TextArea from '../form/input/TextArea';
import Select from '../form/Select';
import Checkbox from '../form/input/Checkbox';
import UpFile10 from '../upload/UpFile10';

interface Option {
  value: string;
  label: string;
}

export default function FormCreateAssets() {
  const [barcodeOption, setBarcodeOption] = useState('custom');
  const [customBarcode, setCustomBarcode] = useState('');

  // Sample options for dropdowns
  const teamOptions: Option[] = [
    { value: 'team1', label: 'Team A' },
    { value: 'team2', label: 'Team B' },
    { value: 'team3', label: 'Team C' },
  ];

  const customerOptions: Option[] = [
    { value: 'customer1', label: 'Customer A' },
    { value: 'customer2', label: 'Customer B' },
    { value: 'customer3', label: 'Customer C' },
  ];

  const vendorOptions: Option[] = [
    { value: 'vendor1', label: 'Vendor A' },
    { value: 'vendor2', label: 'Vendor B' },
    { value: 'vendor3', label: 'Vendor C' },
  ];

  const handleSelectChange = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg">
      <form className="space-y-8">
        {/* Asset Information - First Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Asset Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Name*</Label>
              <Input placeholder="Enter asset name" />
            </div>

            <div>
              <Label>Model</Label>
              <Input placeholder="Enter model" />
            </div>
          </div>

          <div>
            <Label>Description</Label>
            <TextArea placeholder="Enter description" rows={4} className="resize-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Manufacturer</Label>
              <Input placeholder="Enter manufacturer" />
            </div>

            <div>
              <Label>Serial Number</Label>
              <Input placeholder="Enter serial number" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Category</Label>
              <Input placeholder="Enter category" />
            </div>

            <div>
              <Label>Area</Label>
              <Input placeholder="Enter area" />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Barcode Options</Label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <Checkbox
                checked={barcodeOption === 'custom'}
                onChange={() => setBarcodeOption('custom')}
                label="Enter custom barcode"
              />
              <Checkbox
                checked={barcodeOption === 'random'}
                onChange={() => setBarcodeOption('random')}
                label="Generate random barcode"
              />
            </div>

            {barcodeOption === 'custom' && (
              <div>
                <Label>Barcode</Label>
                <Input
                  placeholder="Enter custom barcode"
                  value={customBarcode}
                  onChange={(e) => setCustomBarcode(e.target.value)}
                />
              </div>
            )}
          </div>

          <div>
            <Label>Image</Label>
            <UpFile10 />
          </div>
        </div>

        {/* Asset Information - Second Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Asset Information</h2>

          <div>
            <Label>Team</Label>
            <Select
              options={teamOptions}
              placeholder="Select team"
              onChange={handleSelectChange}
              className="w-full"
            />
          </div>
        </div>

        {/* More Information */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">More Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Customers</Label>
              <Select
                options={customerOptions}
                placeholder="Select customer"
                onChange={handleSelectChange}
                className="w-full"
              />
            </div>

            <div>
              <Label>Vendor</Label>
              <Select
                options={vendorOptions}
                placeholder="Select vendor"
                onChange={handleSelectChange}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Part Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl font-semibold text-gray-800">Part</h2>
            <button
              type="button"
              className="border border-[#949494] bg-white text-black h-10 rounded-[4px] px-4 py-2 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Add Parts
            </button>
          </div>

          <div className="w-full bg-[#C3BEBE14] h-[200px] flex items-center justify-center rounded-[4px]">
            <p className="text-gray-500">No line items have been added yet</p>
          </div>
        </div>

        {/* Files Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Files</h2>

          <div>
            <UpFile10 />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 sm:space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors order-2 sm:order-1"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors order-1 sm:order-2"
          >
            Create Asset
          </button>
        </div>
      </form>
    </div>
  );
}
