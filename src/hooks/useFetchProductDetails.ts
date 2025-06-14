import { useEffect, useState } from "react";
import { fetchProductDetails } from "../services/services";
import type { ProductDetails } from "../components/common/ProductCard/types";

export const useFetchProductDetails = (productId: string) => {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!productId) return;
    const getProductDetails = async () => {
      setIsLoading(true);
      try {
        const res = await fetchProductDetails(productId);
        console.log("res details", res);
        setProductDetails(res);
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
      }
    };

    getProductDetails();
  }, [productId]);

  return { productDetails, error, isLoading };
};
