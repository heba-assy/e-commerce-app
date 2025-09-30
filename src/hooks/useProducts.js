import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/products-service";

export function useProduscts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return {
        products: data?.data.data,
        isLoading,
        isError,
        error,
      }
}
