import { useEffect, useState } from "react";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductTabs from "../../components/ProductTabs/ProductTabs";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { getSpecificProduct } from "../../services/products-service";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading"

export default function ProductDetails() {

  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const {id} = useParams()

  async function fetchProductDetails(){
    try {
      setIsLoading(true)
      const response = await getSpecificProduct({id})
      if(response.success){
        setIsLoading(false)
        setProductDetails(response.data.data)
      }
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
      setError(error.message || "Failed to load products")
    }
  }

  useEffect(() => {
    fetchProductDetails()
  }, [id])

  if(isLoading){
    return <Loading/>
  }
  
  return (
    <>
      <ProductInfo productDetails={productDetails}/>
      <ProductTabs productDetails={productDetails}/>
      <RelatedProducts productDetails={productDetails}/>
    </>
  );
}
