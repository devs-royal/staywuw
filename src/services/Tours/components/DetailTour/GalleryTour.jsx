"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import "../../../../assets/css/Hotel/GalleryImage.css";

export default function GalleryTour({ images }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[20rem] md:h-[22rem] xl:h-[30rem] mt-4 rounded-lg
     "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="image tour details carrousel"
              className="object-cover w-full h-full select-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
