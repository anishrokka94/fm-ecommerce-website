import { Link } from "react-router-dom";
import { actualPrice } from "../../../utils/auth";
import type { ProductCard } from "./types";

interface ProductCardProps {
  products: ProductCard[];
  loading: boolean;
  error: boolean;
}

const ProductCard = ({ products, loading }: ProductCardProps) => {
  // console.log("prosasa", products);

  if (loading) {
    return (
      <>
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className="animate-pulse group relative">
            <div className="aspect-square w-full rounded-md bg-gray-300 lg:aspect-auto lg:h-60" />
            <div className="mt-4 h-5 w-3/4 rounded bg-gray-300"></div>
            <div className="mt-2 flex justify-between">
              <div className="h-5 w-1/4 rounded bg-gray-300"></div>
              <div className="h-5 w-1/6 rounded bg-gray-300"></div>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {products?.map((product) => {
        const createSlug = (title: string, id: number) => {
          return `${title
            .toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-")}-${id}`;
        };

        return (
          <Link
            to={`/product/${createSlug(product.title, product.id)}`}
            className="group relative"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <span
                    aria-hidden="true"
                    className="text-base font-medium inset-0"
                  >
                    {" "}
                    {product.title}{" "}
                  </span>
                </h3>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <span className="text-md text-gray-700 mr-2">
                  {/* ${product.price} */}$
                  {actualPrice(product.price, product.discountPercentage)}
                </span>
                <span className="text-md text-gray-700 line-through">
                  ${product.price}
                </span>
              </div>
              <div></div>
              <p className="bg-amber-800 px-1 text-md font-medium text-white">
                {product?.discountPercentage}% OFF
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ProductCard;
