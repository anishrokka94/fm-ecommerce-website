import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/common/ProductCard/ProductCard";

const ShopPage = () => {
  const { allData } = useFetch();
  console.log("all data", allData);
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 p-6">
        <ProductCard products={allData} />
      </div>
    </div>
  );
};

export default ShopPage;
