import { useFetchProductCategoriesName } from "../../../hooks/useFetchProductCategoriesName";

interface CategoryChangeProps {
  onCategoryChange: (value: string, isChecked: boolean) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryChangeProps) => {
  const { categoryName, loading } = useFetchProductCategoriesName();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const isChecked = e.target.checked;
    // console.log("is", isChecked);
    onCategoryChange(value, isChecked);
  };

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
      <form>
        {categoryName.map((category, index) => (
          <div key={index} style={{ marginBottom: 8 }}>
            <label className="font-light capitalize text- text-sm">
              <input
                className="mr-3"
                type="checkbox"
                value={category}
                onChange={handleFilter}
                // checked={}
              />{" "}
              {category}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CategoryFilter;
