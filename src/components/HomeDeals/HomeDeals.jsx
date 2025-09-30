import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { calcCounter } from "../../utils/counterDown";
import { useProduscts } from "../../hooks/useProducts";
import HomeDealsSkeleton from "../skeletons/HomeDealsSkeleton";

export default function HomeDeals() {
   const {products, isLoading, isError } = useProduscts()

  const [timeLeft, setTimeLeft] = useState({ hours: 0, mins: 0, secs: 0 });


  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calcCounter();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return function(){
      clearInterval(timer)
    }
  }, []);

  if (isLoading) {
    return <HomeDealsSkeleton />;
  }
  if (isError) return <p className="text-red-500">Failed to load products.</p>;

  const deals = products.filter((product) => product.priceAfterDiscount).slice(0, 5);

  return (
    <>
      <section className="pt-10">
        <div className="container">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Deals of the Day</h2>
            <div className="flex items-center gap-2">
              <p>Offers ends in:</p>
              <div className="counter flex items-center gap-2">
                <div className="size-7 text-sm rounded-md bg-gray-900 text-white flex items-center justify-center">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <span>:</span>
                <div className="size-7 text-sm rounded-md bg-gray-900 text-white flex items-center justify-center">
                  {String(timeLeft.mins).padStart(2, "0")}
                </div>
                <span>:</span>
                <div className="size-7 text-sm rounded-md bg-gray-900 text-white flex items-center justify-center">
                  {String(timeLeft.secs).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>

          <Link
            to={`/`}
            className="text-[#16a34a] hover:text-[#15803d] transition-colors duration-200"
          >
            View All Deals
          </Link>
        </div>

        <div className="py-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {deals.map((product) => (
            <ProductCard key={product.id} productInfo={product} />
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
