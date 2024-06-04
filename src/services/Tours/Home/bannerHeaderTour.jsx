"use client";

import "swiper/css";
import "swiper/css/navigation";

import React, { useContext } from 'react'
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tour } from '@/config/Others/imagesBanners';
import LanguageContext from '@/language/LanguageContext'

export default function BannerHeaderTour() {

    const { languageData } = useContext(LanguageContext);

    return (
        // BANNER TOUR HEADER
        <Swiper
            className="relative h-[442px] md:h-72 2xl:h-[480px] w-full "
            slidesPerView={1}
            id="swiper-banner-home"
            navigation
            modules={[Navigation,Autoplay]}
            loop={true}
            cssMode={true}
            autoplay={{
                delay: 6000,
            }}
        >
            {[...Array(2)].map((_, index) => (
                <SwiperSlide key={index} className="!flex items-center justify-center">

                    <img
                        src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/BannerHomeTour.webp`}
                        className='w-full h-full object-cover select-none'

                    />


                    <h1 className="absolute text-white m-b lg:text-fs-60 md:text-fs-40 max-sm:text-fs-20">
                        {languageData.titleBanners[Tour.bannerHome.title]}
                    </h1>


                </SwiperSlide>
            ))}
        </Swiper>

    )
}
