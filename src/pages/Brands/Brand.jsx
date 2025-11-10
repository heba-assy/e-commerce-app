import { useBrands } from "../../hooks/useBrands";
import BrandCard from "../../components/BrandCard/BrandCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import BrandsSkeleton from "../../components/skeletons/BrandsSkeleton";

export default function Brand() {
  const { brands, isLoading, error } = useBrands();
  console.log(brands);

  const chunkedBrands = [];
  if (brands && brands.length > 0) {
    for (let i = 0; i < brands.length; i += 12) {
      chunkedBrands.push(brands.slice(i, i + 12));
    }
  }

  if(isLoading){
    return <BrandsSkeleton/>
  }

  return (
    <>
      <main className="pt-10">
        <div className="container">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-semibold">Our Partners Brands</h2>
            <p className="text-gray-600 md:max-w-180 mx-auto">
              Discover quality products from our trusted brand partners. We've
              partnered with leading
              brands to bring you the best selection of fresh and organic
              products.
            </p>
          </div>
        </div>

        <div className="bg-[#F9FAFB] py-8">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-10">Featured Brands</h2>

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".brand-next-btn",
                prevEl: ".brand-prev-btn",
              }}
              spaceBetween={20}
              slidesPerView={1}
              
            >
              {chunkedBrands.map((group,index) => (
                <SwiperSlide key={index._id} className="mb-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {group.map((brand)=> <BrandCard brandTitle={brand.name} img={brand.image} />)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-5 flex justify-center gap-2">
              <button className="brand-prev-btn btn bg-white border border-gray-300 p-2 *:text-lg">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button className="brand-next-btn btn bg-white border border-gray-300 p-2 *:text-lg">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
