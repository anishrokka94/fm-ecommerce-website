import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import type { ProductCard } from "../components/common/ProductCard/types";

const useFetch = () => {
  const [allData, setData] = useState<ProductCard[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllData = async (): Promise<ProductCard[]> => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        const filteredData: ProductCard[] = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          brand: product.brand,
          discountPercentage: product.discountPercentage,
          thumbnail: product.thumbnail,
          price: product.price,
        }));
        setData(filteredData);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    getAllData();
  }, []);

  return { allData, error, loading };
};

export default useFetch;
