import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  totalProducts,
  productsPerPage,
  onPageChange,
}: PaginationProps) => {
  const start = (currentPage - 1) * productsPerPage + 1;

  const end = Math.min(currentPage * productsPerPage, totalProducts);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    onPageChange(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="mt-10">
      {/* Top Info */}

      <div className="mb-6 flex flex-col items-center justify-between gap-3 rounded-xl border bg-white px-6 py-4 shadow-sm md:flex-row">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold">{start}</span> -
          <span className="font-semibold"> {end}</span> of{" "}
          <span className="font-semibold text-blue-600">{totalProducts}</span>{" "}
          Products
        </p>

        <p className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      {/* Desktop */}

      <div className="hidden items-center justify-center gap-2 md:flex">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <div key={index} className="px-2">
                <MoreHorizontal size={18} />
              </div>
            );
          }

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`
                h-11
                w-11
                rounded-xl
                border
                font-semibold
                transition-all

                ${
                  currentPage === page
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-50"
                }
              `}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Mobile */}

      <div className="flex items-center justify-between md:hidden">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-xl border bg-white p-3 disabled:opacity-40"
        >
          <ChevronLeft />
        </button>

        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-xl border bg-white p-3 disabled:opacity-40"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
