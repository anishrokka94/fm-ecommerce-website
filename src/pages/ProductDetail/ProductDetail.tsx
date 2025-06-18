import { useParams } from "react-router-dom";
import ProductSlider from "./components/ProductThumbnailSlider/ProductThumbnailSlider";
import { useFetchProductDetails } from "../../hooks/useFetchProductDetails";
import ProductSpecificationAccordion from "./components/ProductSpecificationAccordion/ProductSpecificationAccordion";
import QuantitySelector from "../../components/common/QuantitySelector/QuantitySelector";
import ProductBasicDetails from "./components/ProductBasicDetails/ProductBasicDetails";
import ProductShippingAccordion from "./components/ProductShippingAccordion/ProductShippingAccordion";
import ProductWarrentyAccordion from "./components/ProductWarrentyAccordion/ProductWarrentyAccordion";
import SellerInfo from "./components/SellerInfo/SellerInfo";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import { useEffect } from "react";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // console.log("slug", slug);

  const productId = slug?.split("-").pop();
  const { productDetails } = useFetchProductDetails(productId!);
  // console.log("pd", productDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="flex-2 px-8">
            {/* <ProductSlider images={productDetails?.images} /> */}
            {productDetails?.images && (
              <ProductSlider images={productDetails.images} />
            )}
          </div>

          {/* <!-- Product Details --> */}
          <div className="flex-1 px-8">
            {productDetails && (
              <ProductBasicDetails productDetails={productDetails} />
            )}
            <div className="mb-6 flex gap-4">
              {/* ldamdma */}
              <QuantitySelector />
              <button className="w-100 border-2 border-gray-600 rounded-full px-4 py-1 hover:bg-black-500 cursor-pointer">
                Add to Cart
              </button>
            </div>

            {productDetails?.dimensions && (
              <ProductSpecificationAccordion
                dimensions={productDetails.dimensions}
              />
            )}

            {productDetails?.shippingInformation && (
              <ProductShippingAccordion
                shippingInformation={productDetails.shippingInformation}
              />
            )}
            {productDetails?.warrantyInformation && (
              <ProductWarrentyAccordion
                warrantyInformation={productDetails.warrantyInformation}
              />
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-1 gap-10">
        {/* Customer Reviews */}
        <CustomerReviews />
        {/* About the seller */}
        <SellerInfo />
      </div>
    </>
  );
};

export default ProductDetail;
