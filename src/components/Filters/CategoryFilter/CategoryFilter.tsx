import useFetchProductCategories from "../../../hooks/useFetchProductCategories";

const CategoryFilter = () => {
  const { categories } = useFetchProductCategories(0);
  console.log("cat", categories);
  // const [selectedCategories, setSelectedCategories] = useState([]);

  // function handleCheckboxChange(category: any) {
  //   setSelectedCategories((prev) =>
  //     prev.includes(category)
  //       ? prev.filter((c) => c !== category)
  //       : [...prev, category]
  //   );
  // }

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
