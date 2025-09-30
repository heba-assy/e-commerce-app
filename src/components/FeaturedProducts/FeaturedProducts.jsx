import ProductCard from "../ProductCard/ProductCard";
import { useProduscts } from "../../hooks/useProducts";
import FeaturedProductsSkeleton from "../skeletons/FeaturedProductsSkeleton";

export default function FeaturedProducts() {
   const {products, isLoading, isError } = useProduscts()
    if(isLoading){
        return <FeaturedProductsSkeleton/>
    }
    if (isError) return <p className="text-red-500">Failed to load products.</p>;
    
  return <>
    <section className="pt-10">
        <div className="container">
            <h2 className="text-2xl font-bold">Featured Products</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
                {products.map((product) => <ProductCard key={product.id} productInfo={product}/>)}
            </div>
        </div>
    </section>
  </>;
}
