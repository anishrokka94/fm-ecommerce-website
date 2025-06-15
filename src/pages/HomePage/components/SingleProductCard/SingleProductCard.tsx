import ProductCard from "../../../../components/common/ProductCard/ProductCard";
import type { ProductCard as ProductType } from "../../../../components/common/ProductCard/types";

interface SingleProductCardProps {
  product: ProductType;
}

const SingleProductCard = ({ product }: SingleProductCardProps) => {
  return (
    <div className="w-full">
      <ProductCard products={[product]} loading={false} error={false} />
    </div>
  );
};

export default SingleProductCard;
