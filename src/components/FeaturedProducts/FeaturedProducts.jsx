import { useContext, useEffect, useState } from "react";
import Loading from "../Loading/Loading"
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContext } from "../Context/Products.contex";

export default function FeaturedProducts() {
   const {Products, isLoading, isError } = useContext(ProductsContext)
    if(isLoading){
        return <Loading/>
    }
    if (isError) return <p className="text-red-500">Failed to load products.</p>;
    
  return <>
    <section className="pt-10">
        <div className="container">
            <h2 className="text-2xl font-bold">Featured Products</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
                {Products.map((product) => <ProductCard key={product.id} productInfo={product}/>)}
            </div>
        </div>
    </section>
  </>;
}
