import { Link } from "react-router-dom";
import type { ProductCategories } from "../common/ProductCard/types";

interface CategorySectionProps {
  categories: ProductCategories[];
  loading: boolean;
}

const CategorySection = ({ categories, loading }: CategorySectionProps) => {
  if (loading) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <div className="">
          <h2 className="w-60 h-5 rounded-full bg-gray-200 mb-6"></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 py-6">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 animate-pulse"
              >
                <div className="w-24 h-24 rounded-full bg-gray-200" />
                <div className="w-20 h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  // console.log("cat home", categories);
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
