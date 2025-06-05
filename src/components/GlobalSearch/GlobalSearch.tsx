import React from "react";

const GlobalSearch = () => {
  return (
    <div className="max-w-lg flex flex-1 items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all">
      <input
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
  );
};

export default GlobalSearch;
