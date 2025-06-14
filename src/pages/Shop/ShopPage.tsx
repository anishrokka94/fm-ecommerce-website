import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Pagination from "../../components/common/Pagination/Pagination";
import CategoryFilter from "../../components/Filters/CategoryFilter/CategoryFilter";
import ProductCard from "../../components/common/ProductCard/ProductCard";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const { allData, total, loading } = useFetch(currentPage, itemsPerPage);

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <>
      <div className="w-full flex gap-6 p-6">
        {/* Left Sidebar Filter */}
        <div className="w-48">
          {" "}
          {/* fixed width */}
          <CategoryFilter />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 p-6">
            <ProductCard products={allData} loading={loading} />
          </div>
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
