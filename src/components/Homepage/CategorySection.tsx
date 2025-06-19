import { Link } from "react-router-dom";
import type { ProductCategories } from "../common/ProductCard/types";

interface CategorySectionProps {
  categories: ProductCategories[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  console.log("cat home", categories);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
        Best Selling Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 py-6">
        {categories?.map((category) => {
          const categoryImage = () => {
            if (category.slug === "beauty") {
              return (
                <img
                  src="/img/beauty.webp"
                  alt="Home Wellness Edit"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              );
            }
            if (category.slug === "fragrances") {
              return (
                <img
                  src="/img/freg.webp"
                  alt="Home Wellness Edit"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              );
            }
            if (category.slug === "furniture") {
              return (
                <img
                  src="/img/furniture.webp"
                  alt="Home Wellness Edit"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              );
            }
            if (category.slug === "groceries") {
              return (
                <img
                  src="/img/museli.avif"
                  alt="Home Wellness Edit"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              );
            }
            if (category.slug === "home-decoration") {
              return (
                <img
                  src="/img/cat-6.webp"
                  alt="Home Wellness Edit"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              );
            }
            if (category.slug === "kitchen-accessories") {
              return (
                <img
                  src="/img/cat-2.webp"
                  alt="Home Wellness Edit"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              );
            }
            if (category.slug === "laptops") {
              return (
                <img
                  src="/img/macbook.avif"
                  alt="Home Wellness Edit"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              );
            }
          };
          return (
            <Link to={category.slug}>
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                  {categoryImage()}
                </div>
                <span className="mt-2 text-center text-sm font-semibold text-gray-700">
                  {category.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;
