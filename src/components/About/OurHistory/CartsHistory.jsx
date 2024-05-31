import "swiper/css";
import Image from "next/image";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "../../../language/LanguageContext";
import { CardHistoryConfig } from "../../../config/Others/CardHistoryContent";

import CardHistory from "../../../assets/images/others/card-container-h.png";

export default function CardsHistory() {
  const { languageData } = useContext(LanguageContext);
  return (
    <Swiper
      // id="swiper-about-m"
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
      }}
      className="mySwiper h-[15rem] lg:h-[17rem]"
      autoplay={{
        delay: 7000,
      }}
      breakpoints={{
        390: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        800: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        1010: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      }}
    >
      {CardHistoryConfig.map((info, item) => (
        <SwiperSlide className="relative" key={item}>
          <Image
            className="w-full h-full"
            src={CardHistory}
            alt="content cart history"
          />

          <div className="absolute flex flex-col gap-y-4 md:gap-y-9 z-[3] top-[37px]">
            <div className="flex flex-col items-center">
              <Image
                src={info.image}
                className=" w-[50px]
                h-[50px] lg:w-[60px] lg:h-[60px]"
                width={24}
                height={21}
                alt="icon services"
              />

              <h3 className="m-b text-or-100 text-fs-16 lg:text-fs-24 text-center">
                {languageData.navigation[info.title]}
              </h3>
            </div>

            <h4 className="m-m text-fs-13 lg:text-fs-16 text-gry-100 px-7">
              {languageData.ourHistory[info.description]}
            </h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

