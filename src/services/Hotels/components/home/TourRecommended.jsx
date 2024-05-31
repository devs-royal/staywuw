import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import LanguageContext from "../../../../language/LanguageContext";
import Image from "next/image";
import { homeRecommendedTour } from "@/config/Others/HomeRecommendedTour";

export default function CartTourOptions() {
  const { languageData, language } = useContext(LanguageContext);
  const tourData = homeRecommendedTour;

  const sentTour = (tourInfo) => {
    window.open(
      `/${language}/mx/${tourInfo.destinationCodeName}-${
        tourInfo[language || "es"].country
      }/tours/${tourInfo.codeName}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="mb-10 mt-[128px] max-sm:mt-10">
        <h2 className="m-b text-center text-fs-24 mb-2">
          {languageData.TourRecommended.title}
        </h2>
        <div className="flex w-full text-center justify-center max-sm:text-fs-12 w-11/12">
          <div className="m-m text-gry-100">
            {languageData.TourRecommended.subtitle}
            <b className="text-black">
              {languageData.TourRecommended.subtitle2}
            </b>
            {languageData.TourRecommended.subtitle3}
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={36}
        className="mySwiper !pb-12 max-sm:!pb-16"
        id="swiper-recommended-hotel"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 2,
          },
          570: {
            slidesPerView: 2.5,
          },
          700: {
            slidesPerView: 3,
          },
          846: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1536: {
            slidesPerView: 7,
          },
        }}
      >
        {tourData.slice(0, 12).map((tour, index) => {
          if (!tour[language]) {
            console.error("Missing language data for tour:", tour);
            return null; // Skip rendering this particular slide
          }
          return (
            <SwiperSlide
              key={index}
              className="!rounded-md !h-[275px] select-none"
              onClick={() => sentTour(tour)}
            >
              {/* w-[185px] h-[258px] */}
              <div className="h-full bg-white cursor-pointer shadow-3xl border border-gry-30 rounded-md px-4 py-4 flex flex-col justify-center items-center">
                {/* w-[132px] h-[132px] */}
                <div className="mb-3 w-[132px] h-[132px]">
                  <img
                    className="w-full h-full rounded-full object-cover select-none"
                    src={tour.image}
                    alt="staywow card"
                  />
                </div>

                <div className="max-w-xs overflow-hidden text-center">
                  <h2 className="text-fs-14 mb-2 mt-4 mb-4 w-full">
                    <b className="!box-orient-vertical !line-clamp-2 !overflow-hidden !text-ellipsis">
                      {tour[language].name}
                    </b>
                  </h2>
                </div>

                <div className="flex justify-center gap-1">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
                    width={9.5}
                    height={12.1}
                    alt="icon-location-b"
                  />
                  <span className="m-m text-gry-100 text-fs-12 truncate ...">
                    {tour[language].destination.length > 21
                      ? `${tour[language].destination.substring(0, 21)} ..`
                      : tour[language].destination}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
