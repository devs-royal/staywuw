"use client";

import Image from "next/image";
import { useContext } from "react";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import LanguageContext from "@/language/LanguageContext";

import "swiper/css";


export default function ChainsHome() {

    const { languageData } = useContext(LanguageContext);

    const logoRiu = `${process.env.NEXT_PUBLIC_URL}img/home/logo-riu.jpg`;
    const logoNick = `${process.env.NEXT_PUBLIC_URL}img/home/logo-nick.jpg`;
    const logoOasis = `${process.env.NEXT_PUBLIC_URL}img/home/logo-oasis.jpg`;
    const logoDorado = `${process.env.NEXT_PUBLIC_URL}img/home/logo-dorado.jpg`;
    const logoBarcelo = `${process.env.NEXT_PUBLIC_URL}img/home/logo-barcelo.jpg`;
    const logoIberostar = `${process.env.NEXT_PUBLIC_URL}img/home/logo-iberostar.jpg`;

    return (
        <div className="mb-[56px]">
            <h2 className="m-b text-fs-28 mb-[36px]">{languageData.exploreActivitiesHome.bestHotels}</h2>

            <div className="h-[135px]">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={24}
                    className="h-full rounded-lg mySwiper"
                    id="swiper-banner-home-offers"
                    initialSlide={0}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        428: {
                            slidesPerView: 3,
                        },
                        800: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                >

                    <SwiperSlide className="!rounded-lg !flex !items-center">
                        <Image
                            src={logoOasis}
                            alt='Logo Oasis chains'
                            className="select-none"
                            width={184}
                            height={81}
                        />
                    </SwiperSlide>


                    <SwiperSlide className="!rounded-lg !flex !items-center">
                        <Image
                            src={logoRiu}
                            alt='Logo Riu chains'
                            className="select-none"
                            width={156}
                            height={101}
                        />
                    </SwiperSlide>

                    <SwiperSlide className="!rounded-lg !flex !items-center">
                        <Image
                            src={logoIberostar}
                            alt='Logo Iberostar chains'
                            className="select-none"
                            width={185}
                            height={135}
                        />
                    </SwiperSlide>

                    <SwiperSlide className="!rounded-lg !flex !items-center">
                        <Image
                            src={logoBarcelo}
                            alt='Logo Barcelo chains'
                            className="select-none"
                            width={156}
                            height={101}
                        />
                    </SwiperSlide>


                    <SwiperSlide className="!rounded-lg !flex !items-center">
                        <Image
                            src={logoNick}
                            alt='Logo Nickelodeon chains'
                            className="select-none object-cover"
                            width={156}
                            height={101}
                        />
                    </SwiperSlide>

                    <SwiperSlide className="!rounded-lg !flex !items-center">
                        <Image
                            src={logoDorado}
                            alt='Logo El Dorado chains'
                            className="select-none"
                            width={156}
                            height={101}
                        />
                    </SwiperSlide>

                    <SwiperSlide className="!rounded-lg !flex !items-center">
                        <Image
                            src={logoBarcelo}
                            alt='Logo Barcelo chains'
                            className="select-none"
                            width={156}
                            height={101}
                        />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
