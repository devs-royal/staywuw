import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { BestHotelCart } from "./BestHotelCart";
import { LodgingBestPrice } from "../Skeleton/HotelInformationSkeleton";

import "swiper/css";
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
          id="swiper-shuffle-hotel"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
              <SwiperSlide key={index} className="!rounded-lg">
                <div className="h-full cursor-pointer shadow-md shadow-gry-30 rounded-xl">
                  <BestHotelCart
                    hotel={hotel}

                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/*END TWO SWIPER */}

      {/* <div className=" lg:flex flex-wrap justify-between gap-x-[16px] gap-y-[24px] hidden"> */}
      <div
        data-aos="fade-up"
        className=" grid grid-cols-5 gap-x-[16px] gap-y-[24px] max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:hidden"
      >
        {Object.values(hotels)
          .slice(0, 10)
          .map((hotel, index) => (
            <div key={index} className="!rounded-lg colum-two">
              {/*  */}
              <div className="h-full min-w-[266px] max-w-[280px] cursor-pointer shadow-md shadow-gry-30 rounded-xl">
                <BestHotelCart
                  hotel={hotel}

                />
              </div>
            </div>
          ))}
      </div>
    </>
  ) : (
    <LodgingBestPrice />
  );
}
