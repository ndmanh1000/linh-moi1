const FormPersonInfor = () => {
  return (
    <div className="border border-gray-300 rounded-md bg-white w-full mx-auto">
      <div className="px-4 py-3 text-lg text-gray-900 border-b border-gray-300">
        Person Information
      </div>
      <dl className="divide-y divide-gray-300">
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-base text-gray-900">Name</dt>
          <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">Trần Linh</dd>
        </div>
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-base text-gray-900">Email</dt>
          <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            th.linh@meshtech.com.cn
          </dd>
        </div>
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-base text-gray-900">Phone Number</dt>
          <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">+84 914 544 233</dd>
        </div>
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-base text-gray-900">Job Title</dt>
          <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">n/a</dd>
        </div>
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-base text-gray-900">Categories</dt>
          <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">None</dd>
        </div>
      </dl>
    </div>
  );
};

export default FormPersonInfor;
