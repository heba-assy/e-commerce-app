import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductTabs from "../../components/ProductTabs/ProductTabs";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { useProductDetails } from "../../hooks/useProductDetails";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function ProductDetails() {
  const { id } = useParams();
  const { productDetails, isLoading, isError, error } = useProductDetails(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageMetaData
        title={productDetails?.title}
        description={productDetails?.description}
      />
      <ProductInfo productDetails={productDetails} />
      <ProductTabs productDetails={productDetails} />
      <RelatedProducts productDetails={productDetails} />
    </>
  );
}
