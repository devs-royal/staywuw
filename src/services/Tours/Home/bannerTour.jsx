"use client";

import "swiper/css";
import "../../../assets/styles/general/Swiper.css";

import Image from "next/image";
import { useContext } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "@/language/LanguageContext";

export function BannerHomeTour() {
    return (
        <>
            <div className="max-lg:hidden">
                <BannerHomeTourD />
            </div>
            <div className="lg:hidden">
                <BannerHomeTourSwiper />
            </div>
        </>
    );
}
export function BannerHomeTourSwiper() {

    const { languageData } = useContext(LanguageContext);
    const bannerTraveling = `${process.env.NEXT_PUBLIC_URL}general/Banner-Traveling.webp`;
    const bannerTour = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/xplor-feb24.webp`;

    return (

        <Swiper
            slidesPerView={3}
            spaceBetween={16}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            className="h-[19rem] mb-16"
            id="swiper-banner-home-tour"
            initialSlide={0}
            breakpoints={{
                0: {
                    slidesPerView: .5,
                },
                350: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 2.5,
                },
                1440: {
                    slidesPerView: 3,
                },

            }}>

            {/* ONE CARD IMAGE AND TEXT */}
            <SwiperSlide className="!w-[48%] max-lg:!w-full max-sm:!w-full !bg-gry-30 !rounded-lg">
                <div className="w-full flex justify-center !bg-white">
                    <Image src={`${process.env.NEXT_PUBLIC_URL}test/hotel-banner-home.jpg`} width={547} height={235} className="w-full h-[19rem] rounded-lg object-cover object-center select-none" alt="Banner Exc Discounts" />
                </div>
            </SwiperSlide>
            {/*END ONE CARD IMAGE AND TEXT */}

            {/*TWO CARD TEXT */}
            <SwiperSlide className="!w-1/4 max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center !bg-white">
                <div className="relative w-full flex justify-center ">
                    <Image src={bannerTraveling} width={266} height={235} className="w-full rounded-lg select-none" alt="Banner Experimenta los mejores tours" />

                    <div className="absolute top-[39px] left-[33px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[12%] max-sm:top-[40px]">
                        <h2 className="m-b w-9/12 text-white text-fs-28 mb-4 text-left max-2xl:text-fs-22 max-xl:text-fs-18 max-lg:text-fsw-48 max-sm:text-fs-24">{languageData.titleBanners.titleTourMexico}</h2>
                        <h4 className="m-m w-9/12 text-[#BEE0EE] text-fs-22 text-left max-2xl:text-fs-18 max-xl:text-fs-16 max-lg:text-fsw-38 max-sm:text-fsw-64" >{languageData.titleBanners.subtitleTourM}</h4>
                    </div>
                </div>
            </SwiperSlide>
            {/*END TWO CARD TEXT */}

            {/* THREE CARD IMAGE TOUR */}
            <SwiperSlide className="!w-1/4 max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center !bg-white">
                <div className="w-full flex justify-center">
                    <Image src={bannerTour} width={266} height={235} className="w-full rounded-lg select-none object-cover object-bottom" alt="Banner tour mes de feb" />
                </div>
            </SwiperSlide>
            {/*END THREE CARD IMAGE TOUR */}

        </Swiper>
    );
}

export function BannerHomeTourD() {
    const { languageData } = useContext(LanguageContext);
    const bannerTraveling = `${process.env.NEXT_PUBLIC_URL}general/Banner-Traveling.webp`;
    const bannerTour = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/xplor-feb24.webp`;

    return (
        <div className="flex gap-[16px] h-[318px] mb-[40px]">
            <div className="flex bg-white justify-center items-center shadow-3xl w-1/2">
                <div className="w-full h-full flex justify-center !bg-white overflow-hidden rounded-lg">
                    <Image
                        width={547}
                        height={235}
                        alt="Banner Exc Discounts"
                        src={`${process.env.NEXT_PUBLIC_URL}test/hotel-banner-home.jpg`}
                        className="w-full rounded-lg object-cover object-center select-none transition-transform duration-500 transform scale-100 hover:scale-105"
                    />
                </div>
            </div>

            <div className="relative flex justify-center w-3/12">
                <div className="relative w-full flex justify-center ">

                    <Image
                        width={266}
                        height={235}
                        src={bannerTraveling}
                        className="w-full rounded-lg select-none"
                        alt="Banner Experimenta los mejores tours"
                    />

                    <div className="absolute top-[39px] left-[33px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[12%] max-sm:top-[40px]">
                        <h2
                            className="m-b w-9/12 text-white text-fs-28 mb-4 text-left max-2xl:text-fs-22 max-xl:text-fs-18 max-lg:text-fsw-48 max-sm:text-fs-24"
                        >
                            {languageData.titleBanners.titleTourMexico}
                        </h2>

                        <h4
                            className="m-m w-9/12 text-[#BEE0EE] text-fs-22 text-left max-2xl:text-fs-18 max-xl:text-fs-16 max-lg:text-fsw-38 max-sm:text-fsw-64"
                        >
                            {languageData.titleBanners.subtitleTourM}
                        </h4>
                    </div>
                </div>
            </div>

            <div className=" flex justify-center w-3/12 relative">
                <div className="w-full flex justify-center overflow-hidden rounded-lg">
                    <Image
                        width={266}
                        height={235}
                        src={bannerTour}
                        alt="Banner tour mes de feb"
                        className="w-full rounded-lg select-none object-cover object-bottom transition-transform duration-500 transform scale-100 hover:scale-105"
                    />
                </div>

            </div>
        </div>
    );
}
