import useFetchProductCategories from "../../../hooks/useFetchProductCategories";

const CategoryFilter = () => {
  const { categories, loading } = useFetchProductCategories(0);
  // console.log("cat", categories.length);

  if (loading) {
    return (
      <div className="space-y-4" style={{ padding: 20 }}>
        <h3 className="w-40 h-4 rounded bg-gray-200"></h3>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 animate-pulse"
          >
            <div className="w-4 h-4 rounded bg-gray-200" />
            <div className="h-5 w-40 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h3 className="text-md mb-4 font-bold">Filter by Category</h3>
      {categories.map((category) => (
        <div key={category.slug} style={{ marginBottom: 8 }}>
          <label className="font-light text-sm">
            <input
              className="mr-3"
              type="checkbox"
              // checked={selectedCategories.includes(category)}
            />{" "}
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
