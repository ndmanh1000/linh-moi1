import ModalFilter from '../../modal/ModalFilter';
import { useModal } from '../../../hooks/useModal';

export default function FilterButton() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button
        className="flex w-full items-center h-10 space-x-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-100 transition"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 018 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>

        <span>Filters</span>
      </button>

      <ModalFilter isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
