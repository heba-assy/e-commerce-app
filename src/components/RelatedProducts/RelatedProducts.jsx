import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/products-service";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function RelatedProducts({ productDetails }) {
  const { category } = productDetails;

  const [relatedProduct, setRelatedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null)

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts({ category: category._id });

      if (response.success) {
        setIsLoading(false);
        setRelatedProduct(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error.message || "Something went wrong");
    }
  }

  useEffect(() => {
    fetchProducts();
  },[]);

  if (isLoading) {
    return <Loading />;
  }
  
  

  return (
    <>
      <section className="pt-10">
        <div className="container">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold">You May Also Like</h2>
            <div className="flex items-center justify-center gap-2 *:hover:bg-[#dcfce7] *:hover:text-[#16a34a] *:transition-colors *:hover:duration-200">
              <button className="related-prev-btn size-10 bg-gray-100 rounded-full text-gray-600">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button className="related-next-btn size-10 bg-gray-100 rounded-full text-gray-600">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            navigation={{nextEl: ".related-next-btn", prevEl: ".related-prev-btn"}}
          >
            {relatedProduct.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard productInfo={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
