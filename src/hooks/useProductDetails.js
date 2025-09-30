import { useQuery } from "@tanstack/react-query"
import { getSpecificProduct } from "../services/products-service"

export  function useProductDetails(id) {
    const {data:productDetails , isLoading, isError, error} = useQuery({
        queryKey: ['productDetails', id],
        queryFn: ()=> getSpecificProduct({id}),
        select: (data)=> data.data.data
    })
  return {
    productDetails,
    isLoading,
    isError,
    error
  }
}
