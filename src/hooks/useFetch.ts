import { useEffect, useState } from "react";
import { fetchProducts } from "../services/services";
import type { ProductCard } from "../components/common/ProductCard/types";

const useFetch = (page: number, limit: number = 12) => {
  const [allData, setAllData] = useState<ProductCard[]>([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  // console.log("tot", total);
  useEffect(() => {
    const getAllData = async () => {
      setLoading(true);
      try {
        const skip = (page - 1) * limit;
        const data = await fetchProducts(skip, limit);
        const filteredData: ProductCard[] = data.products.map(
          (product: ProductCard) => ({
            id: product.id || 0,
            title: product.title,
            brand: product.brand,
            discountPercentage: product.discountPercentage || 0,
            thumbnail: product.thumbnail,
            price: product.price,
            category: product.category,
          })
        );
        setAllData(filteredData);
        setTotal(data.total);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    getAllData();
  }, [page, limit]);

  return { allData, error, loading, total };
};

export default useFetch;
