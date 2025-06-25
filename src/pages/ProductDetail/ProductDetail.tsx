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
import AddToCart from "../../components/Buttons/AddToCart";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // console.log("slug", slug);

  const productId = slug?.split("-").pop();
  const { productDetails } = useFetchProductDetails(productId!);
  console.log("pd", productDetails);

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
              <QuantitySelector />
              <AddToCart product={productDetails} />
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

            {productDetails?.brand && (
              <SellerInfo brand={productDetails?.brand} />
            )}

            {productDetails?.reviews && (
              <CustomerReviews reviews={productDetails?.reviews} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
