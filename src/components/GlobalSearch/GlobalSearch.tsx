import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const GlobalSearch = () => {
  const { handleSubmit, register, watch } = useForm();
  const [showDropdown, setShowDropdown] = useState(false);

  const searchQuery = watch("searchQuery");
  // console.log("query", searchQuery);

  const { allData } = useFetch(1, 100);
  // console.log("search", allData);

  const filteredData = allData.filter((product) => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  console.log("fil", filteredData);

  useEffect(() => {
    if (searchQuery && searchQuery.length > 1) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [searchQuery]);

  const onSubmit = (data) => {
    console.log("data", data);
    setShowDropdown(false);
  };
  return (
    <div className="relative max-w-lg flex flex-1 items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all">
          <input
            {...register("searchQuery")}
            autoComplete="off"
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent focus:outline-none text-sm text-gray-900 placeholder-gray-500"
          />
          <button className="p-2 rounded-full transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
        </div>

        {/* Suggestion Dropdown */}
        {showDropdown && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto z-50 text-sm">
            {filteredData.length > 0 ? (
              filteredData.map((product) => {
                const createSlug = (title: string, id: number) => {
                  return `${title
                    .toLowerCase()
                    .replace(/[^\w ]+/g, "")
                    .replace(/ +/g, "-")}-${id}`;
                };
                return (
                  <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    <Link
                      to={`/product/${createSlug(product.title, product.id)}`}
                    >
                      {" "}
                      {product.title}{" "}
                    </Link>
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-3 hover:bg-gray-100"> No product found</li>
            )}
          </ul>
        )}
      </form>
    </div>
  );
};

export default GlobalSearch;
