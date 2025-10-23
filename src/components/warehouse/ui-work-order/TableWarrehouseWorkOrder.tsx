export default function FormWarrehouseWorkOrder() {
  const data = [
    {
      number: '007',
      title: 'sửa máy B',
      availableQty: '07/01/25',
      status: 'On Hold',
      due: '',
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto rounded-[4px] shadow bg-white">
        <table className="min-w-full text-sm text-left border-collapse">
          {/* header có vạch chia dọc và border dưới */}
          <thead className="text-gray-600 text-sm border-b border-gray-200">
            <tr className="divide-x divide-gray-200">
              <th className="px-4 py-3 font-semibold">Number</th>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Available Qty</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Due</th>
            </tr>
          </thead>

          {/* ✅ vừa divide-y (ngăn ngang), vừa divide-x (ngăn dọc) */}
          <tbody className="divide-y divide-gray-200">
            {data.map((row, idx) => (
              <tr key={idx} className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-gray-700">{row.number}</td>
                <td className="px-4 py-3 text-gray-700">{row.title}</td>
                <td className="px-4 py-3 text-gray-700">{row.availableQty}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-md bg-orange-100 text-orange-600 text-xs font-medium">
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-700">{row.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
