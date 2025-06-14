const CategorySection = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
        Best Selling Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 p-6">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src="/img/cat-1.webp"
              alt="Home Wellness Edit"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-center text-sm font-semibold text-gray-700">
            Electronics
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src="/img/cat-4.webp"
              alt="Kitchenware"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-center text-sm font-semibold text-gray-700">
            Accessories
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src="/img/cat-3.webp"
              alt="Lights"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-center text-sm font-semibold text-gray-700">
            Mens Clothing
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src="/img/cat-6.webp"
              alt="Furniture"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-center text-sm font-semibold text-gray-700">
            Decor
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src="/img/cat-2.webp"
              alt="Decor"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-center text-sm font-semibold text-gray-700">
            Kitchen
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src="/img/cat-5.webp"
              alt="Utility-Storage"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-center text-sm font-semibold text-gray-700">
            Utility
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src="/img/cat-7.webp"
              alt="New Arrivals"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-center text-sm font-semibold text-gray-700">
            New Arrivals
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
