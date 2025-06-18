import ProductCard from "../../../../components/common/ProductCard/ProductCard";
import type { Product } from "../../../../components/common/ProductCard/types";

interface SingleProductCardProps {
  product: Product;
}

const SingleProductCard = ({ product }: SingleProductCardProps) => {
  return (
    <div className="w-full">
      <ProductCard products={[product]} loading={false} />
    </div>
  );
};

export default SingleProductCard;
