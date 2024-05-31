import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { BestHotelCart } from "./BestHotelCart";
import { LodgingBestPrice } from "../Skeleton/HotelInformationSkeleton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../assets/styles/general/Swiper.css";

export function LodgingsView({ hotels }) {

  return hotels ? (
    <>
      {/* TWO SWIPER */}
      <div className="lg:hidden block relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={12}
          navigation
          id="swiper-shuffle-hotel"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper !pb-10 !static"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            390: {
              slidesPerView: 1.4,
            },
            500: {
              slidesPerView: 1.8,
            },
            620: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {Object.values(hotels)
            .slice(0, 10)
            .map((hotel, index) => (
              <SwiperSlide
                key={index}
                className="!rounded-lg"
                
              >
                <div className="h-full cursor-pointer shadow-md shadow-gry-30 rounded-xl">
                  <BestHotelCart hotel={hotel} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/*END TWO SWIPER */}

      <div className=" lg:flex flex-wrap justify-center md:justify-start gap-x-[16px] gap-y-[24px] hidden">
        {Object.values(hotels)
          .slice(0, 10)
          .map((hotel, index) => (
            <div key={index} className="!rounded-lg" >
              {/*  */}
              <div className="h-full min-w-[266px] max-w-[280px] cursor-pointer shadow-md shadow-gry-30 rounded-xl">
                <BestHotelCart hotel={hotel} />
              </div>
            </div>
          ))}
      </div>
    </>
  ) : (
    <LodgingBestPrice />
  );
}
