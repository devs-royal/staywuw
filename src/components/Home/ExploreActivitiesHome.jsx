"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import Image from "next/image";
import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";

import CardTourHome from "./CardTourHome";
import LanguageContext from "@/language/LanguageContext";

export default function ExploreActivitiesHome() {

  const { languageData } = useContext(LanguageContext);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="flex flex-col my-[180px] max-sm:my-[90px]">
      {/* TITLE EXPLORE ACTIVITIES HOME*/}
      <span className="m-b text-fs-28 mb-[4px]">
        {languageData.exploreActivitiesHome.titleExplore}
      </span>

      {/* SUBTITLE EXPLORE ACTIVITIES HOME */}
      <span className="m-m text-fs-16 text-gry-100 mb-[32px]">
        {languageData.exploreActivitiesHome.weRecommended}
      </span>

      <div className="w-full flex h-[717px] gap-[5vw] max-lg:flex-col max-lg:h-auto max-xl:gap-[12px]">

        {/* SWIPER EXPLORE ACTIVITIES HOME */}
        <div className="w-[50%] relative max-lg:w-full max-lg:h-[500px] overflow-hidden rounded-lg shadow-3xl">
          {/* SWIPER IMG */}
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg"
            id="swiper-home-explore-activities"
            initialSlide={0}
            modules={[Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
           
              <SwiperSlide className="!rounded-lg z-[1]">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/BannerHomeTour.webp`}
                  alt="banner-offers"
                  className="h-full w-full select-none object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="!rounded-lg z-[1]" >
                <img
                  src={"https://www.royalvacationsmexico.com/static/media/banner_hotel.353834a1.webp"}
                  alt="banner-offers"
                  className="h-full w-full select-none object-cover"
                />
              </SwiperSlide>
           

            <div className="h-[314px] absolute bottom-0 w-full z-[2]">
              <img src={`${process.env.NEXT_PUBLIC_URL}img/home/curve-yellow.png`} alt="curve yellow" className="w-full h-full" />
            </div>

            <div className="w-[190px] h-[190px] rounded-full border-[32px] border-yw-100 absolute top-[-114px] right-[-31px] z-[2]" />
          </Swiper>

          {/* SWIPER TEXT */}
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg !absolute top-0 w-full"
            id="swiper-home-explore-activities"
            initialSlide={0}
            navigation
            modules={[Navigation, Controller]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
          >
            {[...Array(2)].map((_, index) => (
              <SwiperSlide className="!rounded-lg z-[1]" key={index}>

                <div className="absolute bottom-0 pb-[49px] pl-[47.5px] pr-[59.5px] pt-[30px] flex flex-col gap-[8px] max-sm:pb-[20px] z-[4]">
                  <h3 className="text-fs-28 m-s-b">Cancún</h3>

                  <p className="m-m text-fs-14">
                    En Cancún encontrarás fascinantes sitios arqueológicos
                    como el cercano complejo de ruinas mayas de Tulum y la
                    misteriosa ciudad precolombina de Chichén Itzá.
                  </p>

                  <button className="m-b text-fs-16 flex items-center w-fit px-[24px] py-[10px] bg-white rounded-full gap-[8px] hover:!bg-gry-30">
                    {languageData.titleBanners.bannerHoteldecided.knowMore}
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/arrow-right.svg`}
                      width={16}
                      height={12}
                      alt="icon-arrow"
                    />
                  </button>
                </div>

              </SwiperSlide>
            ))}

          </Swiper>
        </div>

        {/*CARDS TOUR EXPLORE ACTIVITIES HOME */}
        <div className="w-[55%] grid grid-cols-2 gap-[16px] max-lg:w-full gap-x-[46px] max-xl:gap-[12px] max-sm:grid-cols-1">
          {[...Array(4)].map((_, index) => (
            <CardTourHome key={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
