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
              <div className="container text-center lg:text-left space-y-4 text-white">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
                  Fresh Products delivery <br /> to your Door
                </h2>

                <p className="text-sm sm:text-base md:text-lg">Get 20% off for your first order</p>

                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                  <button className="btn border-2 border-white text-[#16a34a] bg-white hover:bg-gray-100 text-sm sm:text-base">
                    Shop now
                  </button>
                  <button className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#16a34a] text-sm sm:text-base">
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
              <div className="container text-center lg:text-left space-y-4 text-white">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
                  Fresh Products delivery <br /> to your Door
                </h2>

                <p className="text-sm sm:text-base md:text-lg">Get 20% off for your first order</p>

                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                  <button className="btn border-2 border-white text-[#16a34a] bg-white hover:bg-gray-100 text-sm sm:text-base">
                    Shop now
                  </button>
                  <button className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#16a34a] text-sm sm:text-base">
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
              <div className="container text-center lg:text-left space-y-4 text-white">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
                  Fresh Products delivery <br /> to your Door
                </h2>

                <p className="text-sm sm:text-base md:text-lg">Get 20% off for your first order</p>

                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                  <button className="btn border-2 border-white text-[#16a34a] bg-white hover:bg-gray-100 text-sm sm:text-base">
                    Shop now
                  </button>
                  <button className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#16a34a] text-sm sm:text-base">
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
