import { useParams } from "react-router-dom";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import { useFetchProductDetails } from "../../hooks/useFetchProductDetails";
import { actualPrice } from "../../utils/auth";
import ProductSpecificationAccordion from "./components/ProductSpecificationAccordion/ProductSpecificationAccordion";
import QuantitySelector from "../../components/common/QuantitySelector/QuantitySelector";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // console.log("slug", slug);

  const productId = slug?.split("-").pop();
  const { productDetails } = useFetchProductDetails(productId!);
  console.log("pd", productDetails);

  return (
    <>
      <div className="mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/2 px-4">
            {/* <ProductSlider images={productDetails?.images} /> */}
            {productDetails?.images && (
              <ProductSlider images={productDetails.images} />
            )}
          </div>

          {/* <!-- Product Details --> */}
          <div className="md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{productDetails?.title}</h2>
            <p className="text-gray-600 mb-4">SKU: {productDetails?.sku}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">
                {" "}
                $
                {actualPrice(
                  productDetails?.price ?? 0,
                  productDetails?.discountPercentage ?? 0
                )}
              </span>
              <span className="text-gray-500 line-through mr-2">
                ${productDetails?.price}
              </span>

              <span className="bg-amber-800 px-1 text-md font-medium text-white">
                {productDetails?.discountPercentage}% OFF
              </span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 text-gray-600">
                {" "}
                {productDetails?.rating}({productDetails?.reviews.length}{" "}
                reviews)
              </span>
            </div>
            <p className="text-gray-700 mb-6">{productDetails?.description}</p>

            <div className="mb-6 flex gap-4">
              {/* ldamdma */}
              <QuantitySelector />
              <button className="w-100 border-2 border-gray-600 rounded-full px-4 py-1 hover:bg-black-500 cursor-pointer">
                Add to Cart
              </button>
            </div>

            {/* why not this */}
            {/* <ProductSpecificationAccordion
          productSpecification={productDetails.dimension}
        /> */}

            {/* why this */}
            {productDetails?.dimensions && (
              <ProductSpecificationAccordion
                productSpecification={productDetails.dimensions}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
