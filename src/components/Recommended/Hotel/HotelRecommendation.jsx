"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import { useContext } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "@/language/LanguageContext";
import { BestHotelCart } from '@/services/Hotels/components/home/BestHotelCart'
import { shuffleHotelTypes } from "@/services/Hotels/config/shuffleHotelTypes";

export default function HotelRecommendation() {

    const { languageData } = useContext(LanguageContext);

    const hotels = shuffleHotelTypes;

    return (
        <>
            <div className="bg-white p-[36px] relative rounded-lg my-[28px]">

                {/* TITLE */}
                <div className="mb-[36px]">
                    <span className="m-b text-fs-20">{languageData.recommendations.hotel.titleRecommedation}</span>
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={12}
                    id="swiper-tour-recommendation"
                    navigation
                    modules={[Navigation]}
                    className="mySwiper !static mb-0"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 1.2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                        1536: {
                            slidesPerView: 4.5,
                        },
                    }}
                >
                    {/* CARD HOTEL */}
                    {hotels[0][1].slice(0, 10).map((hotelMap, index) => (
                        <SwiperSlide key={index} className="!rounded-lg">
                            <BestHotelCart hotel={hotelMap} />
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </>
    )
}