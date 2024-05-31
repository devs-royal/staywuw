"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../../../../assets/css/Hotel/GalleryImage.css";

export function GalleryImages({ images }) {
  const carrouselRef = useRef(null);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };
  return (
    <div className=" w-full lg:w-[52%] select-none">
      <Swiper
        navigation={true}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[20rem] md:h-[22rem] xl:h-[30rem]"
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="h-full object-cover w-full rounded-lg"
              alt={`${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-full mt-2 select-none"
        breakpoints={{
          390: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          500: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          800: {
            spaceBetween: 17,
            slidesPerView: 7,
          },
          1030: {
            spaceBetween: 17,
            slidesPerView: 6,
          },
          1280: {
            spaceBetween: 17,
            slidesPerView: 7,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!h-[72px]">
            <img
              className={`object-cover w-full h-full rounded-lg cursor-pointer ${
                index === currentSlideIndex
                  ? "opacity-100 border-2 border-or-100"
                  : "opacity-50"
              }`}
              src={image}
              alt={`${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
