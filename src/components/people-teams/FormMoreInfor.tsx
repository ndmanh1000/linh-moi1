const FormMoreInfor = () => {
  return (
    <div className="border border-gray-300 rounded-md bg-white w-full mx-auto">
      <div className="px-4 py-3 text-lg text-gray-900 border-b border-gray-300">
        More Information
      </div>
      <dl className="divide-y divide-gray-300">
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-base text-gray-900">Hourly</dt>
          <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">None</dd>
        </div>
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-base text-gray-900">Company Name</dt>
          <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">MES</dd>
        </div>
      </dl>
    </div>
  );
};

export default FormMoreInfor;
