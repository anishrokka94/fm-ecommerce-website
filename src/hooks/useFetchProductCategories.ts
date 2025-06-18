import { useEffect, useState } from "react";
import { fetchProductCategories } from "../services/services";
import type { ProductCategories } from "../components/common/ProductCard/types";

const useFetchProductCategories = (limit: number) => {
  const [categories, setCategories] = useState<ProductCategories[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  //   console.log("cate", categories);
  useEffect(() => {
    const getAllCategories = async () => {
      setLoading(true);
      try {
        const res = await fetchProductCategories(limit);
        // console.log("res", res);
        setCategories(res);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    getAllCategories();
  }, [limit]);

  return { categories, error, loading };
};

export default useFetchProductCategories;
