import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import homeSliderImg from "../../assets/images/home-slider-1.png";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        pagination={{clickable: true}}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeSliderImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay py-24 bg-gradient-to-r from-[#16a34a]/95 to-[#16a34a]/40">
              <div className="container space-y-4 text-white">
                <h2 className="text-2xl font-bold">
                  Fresh Products delivery <br /> to your Door
                </h2>

                <p>Get 20% off for your first order</p>

                <div className="space-x-3">
                  <button className="btn border-2 border-white text-[#16a34a] bg-white hover:bg-gray-100 ">
                    Shop now
                  </button>
                  <button className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#16a34a]">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeSliderImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay py-24 bg-gradient-to-r from-[#16a34a]/95 to-[#16a34a]/40">
              <div className="container space-y-4 text-white">
                <h2 className="text-2xl font-bold">
                  Fresh Products delivery <br /> to your Door
                </h2>

                <p>Get 20% off for your first order</p>

                <div className="space-x-3">
                  <button className="btn border-2 border-white text-[#16a34a] bg-white hover:bg-gray-100 ">
                    Shop now
                  </button>
                  <button className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#16a34a]">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeSliderImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay py-24 bg-gradient-to-r from-[#16a34a]/95 to-[#16a34a]/40">
              <div className="container space-y-4 text-white">
                <h2 className="text-2xl font-bold">
                  Fresh Products delivery <br /> to your Door
                </h2>

                <p>Get 20% off for your first order</p>

                <div className="space-x-3">
                  <button className="btn border-2 border-white text-[#16a34a] bg-white hover:bg-gray-100 ">
                    Shop now
                  </button>
                  <button className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#16a34a]">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
