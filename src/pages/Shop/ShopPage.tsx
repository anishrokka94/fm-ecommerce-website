import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Pagination from "../../components/common/Pagination/Pagination";
import CategoryFilter from "../../components/Filters/CategoryFilter/CategoryFilter";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const { allData, total, loading, error } = useFetch(
    currentPage,
    itemsPerPage
  );

  const filteredProducts = selectedCategory.length
    ? allData.filter((product) => selectedCategory.includes(product.category))
    : allData;

  console.log("fil", filteredProducts);

  const totalPages = Math.ceil(total / itemsPerPage);

  const handleCategoryChange = (value: string, isChecked: boolean) => {
    setSelectedCategory((prev) => {
      if (isChecked) {
        return prev.includes(value) ? prev : [...prev, value];
      } else {
        return prev.filter((cat) => cat !== value);
      }
    });
  };

  const handleClose = (catName: string) => {
    // console.log("removed");
    setSelectedCategory((prev) => prev.filter((cat) => cat !== catName));
  };

  console.log("selected cat", selectedCategory);
  return (
    <>
      <div className="w-full flex gap-6 p-6">
        {/* Left Sidebar Filter */}
        <div className="w-52">
          {" "}
          {/* fixed width */}
          <CategoryFilter onCategoryChange={handleCategoryChange} />
        </div>

        <div className="flex-1">
          {/* filtered categories */}
          <div className="flex flex-wrap gap-3 p-4">
            {selectedCategory?.map((catName) => {
              return (
                <div
                  key={catName}
                  className="flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700"
                >
                  <span> {catName} </span>
                  <button
                    className="ml-2 text-gray-500 hover:text-gray-700"
                    onClick={() => handleClose(catName)}
                  >
                    <XMarkIcon width={12} height={12} />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 p-6">
            <ProductCard
              error={error?.message}
              products={filteredProducts}
              loading={loading}
              category={selectedCategory}
            />
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
