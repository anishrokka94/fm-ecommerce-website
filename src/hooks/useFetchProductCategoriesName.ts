import { useEffect, useState } from "react";
import { fetchProductCategoriesName } from "../services/services";

export const useFetchProductCategoriesName = () => {
  const [categoryName, setCategoryName] = useState([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllCategoriesName = async () => {
      setLoading(true);
      try {
        const res = await fetchProductCategoriesName();
        setCategoryName(res);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    getAllCategoriesName();
  }, []);

  return { categoryName, error, loading };
};
