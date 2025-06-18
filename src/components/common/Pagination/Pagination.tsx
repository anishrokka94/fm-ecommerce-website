import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: number[] = [];
    const maxShown = 5;
    let start = Math.max(1, currentPage - Math.floor(maxShown / 2));
    const end = Math.min(totalPages, start + maxShown - 1);

    if (end - start < maxShown - 1) {
      start = Math.max(1, end - maxShown + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-6">
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="cursor-pointer p-2 rounded-full bg-white hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
        </button>

        {getPages().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer px-3 py-1 rounded-2xl text-sm ${
              currentPage === page
                ? "bg-[#af0c4b] text-white font-semibold border"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="cursor-pointer p-2 rounded-full bg-white hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronRightIcon className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
