import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/categories-services";
import { data } from "react-router";

export function useCategories() {
  const { data:categories, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    select: (data)=> data.data.data
  });

  return { categories, isLoading, error };
}
