export default function WorkOrderSearch() {
  return (
    <div className="flex items-center bg-gray-200 rounded-md px-3 py-1 w-full sm:w-48 md:w-60">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-500 cursor-pointer flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
        />
      </svg>
    </div>
  );
}
