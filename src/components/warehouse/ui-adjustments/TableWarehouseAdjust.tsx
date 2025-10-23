interface Adjustment {
  date: string;
  adjustment: number;
  newVal: number;
  adjustedBy: string;
  avatar: string; // có thể thay bằng URL ảnh, tạm placeholder
  event: {
    name: string;
    link: string;
    tag?: string;
  };
  details: string;
}

export default function TableWarehouseAdjust() {
  const data: Adjustment[] = [
    {
      date: '07/01/25',
      adjustment: -1,
      newVal: 0,
      adjustedBy: 'Trần Linh',
      avatar: 'T', // hoặc link ảnh
      event: { name: 'Work Order: 007', link: '#', tag: 'Non-stock' },
      details: 'Add to Work Order',
    },
    {
      date: '07/01/25',
      adjustment: -11,
      newVal: 1,
      adjustedBy: 'Trần Linh',
      avatar: 'T',
      event: { name: 'Cycle Count', link: '#' },
      details: 'Test',
    },
    {
      date: '07/01/25',
      adjustment: 9,
      newVal: 12,
      adjustedBy: 'Trần Linh',
      avatar: 'T',
      event: { name: 'Cycle Count', link: '#' },
      details: 'Kiểm kê tháng 9',
    },
    {
      date: '07/01/25',
      adjustment: 3,
      newVal: 3,
      adjustedBy: 'Trần Linh',
      avatar: 'T',
      event: { name: 'Cycle Count', link: '#' },
      details: 'nhựa 99',
    },
  ];

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-[4px] shadow bg-white">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className=" text-gray-700">
            <tr>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Adjustment</th>
              <th className="px-4 py-3 font-medium">New</th>
              <th className="px-4 py-3 font-medium">Adjusted by</th>
              <th className="px-4 py-3 font-medium">Event</th>
              <th className="px-4 py-3 font-medium">Details</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-t">
                {/* Date */}
                <td className="px-4 py-3 text-gray-700">{row.date}</td>

                {/* Adjustment */}
                <td className={`px-4 py-3 ${row.adjustment < 0 ? '' : 'text-gray-700'}`}>
                  {row.adjustment.toFixed(2)}
                </td>

                {/* New */}
                <td className="px-4 py-3 text-gray-700">{row.newVal.toFixed(2)}</td>

                {/* Adjusted by */}
                <td className="px-4 py-3 flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-700 text-white font-medium">
                    {row.avatar}
                  </div>
                  <span className="text-gray-700">{row.adjustedBy}</span>
                </td>

                {/* Event */}
                <td className="px-4 py-3 text-blue-600 font-medium">
                  <a href={row.event.link} className="hover:underline">
                    {row.event.name}
                  </a>
                  {row.event.tag && (
                    <span className="ml-2 text-xs flex flex-col md:w-20 bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {row.event.tag}
                    </span>
                  )}
                </td>

                {/* Details */}
                <td className="px-4 py-3 text-gray-600">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
