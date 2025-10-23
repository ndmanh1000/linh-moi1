import React from 'react';

interface InfoTableProps {
  title: string;
  data: { label: string; value: string }[];
}

const InfoTable: React.FC<InfoTableProps> = ({ title, data }) => {
  return (
    <div className="mb-6">
      <div className="overflow-x-auto rounded-[4px] shadow bg-white">
        <table className="min-w-full text-sm text-left border-collapse border border-gray-200">
          <thead className=" text-gray-600">
            <tr>
              <th colSpan={2} className="px-4 py-3 font-semibold border border-gray-200">
                {title}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td className="px-4 py-3 text-gray-600 w-1/3 border border-gray-200">
                  {item.label}
                </td>
                <td className="px-4 py-3 text-gray-800 border border-gray-200">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function TableWarehouseDetails() {
  const details = [
    { label: 'Name', value: 'Bút' },
    { label: 'Part Number', value: '12312' },
    { label: 'Description', value: 'None' },
    { label: 'Category', value: 'dd' },
    { label: 'Cost', value: 'None' },
    { label: 'Barcode', value: '33333' },
  ];

  const moreInfo = [
    { label: 'Vendors', value: 'McMaster–Carr' },
    { label: 'Customers', value: 'None' },
    { label: 'Additional', value: 'None' },
  ];

  return (
    <div className="p-6 space-y-6">
      <InfoTable title="Details" data={details} />
      <InfoTable title="More Information" data={moreInfo} />
    </div>
  );
}
