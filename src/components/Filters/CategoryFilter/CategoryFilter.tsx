import { useState } from "react";

const categories = ["Clothing", "Footwear", "Accessories"];

const CategoryFilter = () => {
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
      <h3 className="text-lg mb-4">Filter by Category</h3>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: 8 }}>
          <label>
            <input
              type="checkbox"
              // checked={selectedCategories.includes(category)}
            />{" "}
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
