"use client"
import "swiper/css";

import Image from "next/image";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../assets/styles/general/Swiper.css";
import LanguageContext from "@/language/LanguageContext";
// import LanguageContext from "@/language/LanguageContext";

export function BannerHomeTour() {
    const bannerTraveling = `${process.env.NEXT_PUBLIC_URL}general/Banner-Traveling.webp`;
    const bannerTour = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/xplor-feb24.webp`;
    const { languageData } = useContext(LanguageContext);

    return (

        <Swiper
            slidesPerView={3}
            spaceBetween={16}
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
                {/* <div className="bg-black rounded-lg ">
                    <div className="relative w-full h-[273px] max-xl:h-[235px] max-lg:h-[292px] max-sm:h-[263px] rounded-lg bg-[#1B1464] max-lg:w-full ">

                        <div className="absolute top-[0%] left-[0%] w-[65%] h-[80%] pr-[50px] bg-[#2743A6] rounded-tl-lg rounded-bl-lg pt-[32px] pl-[22px] max-w-[545px]">
                            <h2 className="text-white text-fs-24 m-b text-left w-[254px] max-sm:text-fs-18 max-sm:w-[159px] !select-all">
                                {languageData.bannersFooter.destination}
                            </h2>
                        </div>

                        <div className="absolute bottom-[35px] left-0 bg-[#1B1464] w-[57%] h-[35%] rounded-bl-lg transform skew-y-[-4deg]"></div>

                        <div className="absolute bottom-[-24px] left-0 h-[45%] pl-[22px] w-[43%] max-lg:bottom-[-24px] max-sm:bottom-[-12px]">
                            <p className="text-white text-fs-12 m-m max-sm:text-fs-10 !select-all">
                                {languageData.bannersFooter.descriptionOfTheDestination}
                            </p>
                        </div>

                        <div className="absolute h-[273px] max-xl:h-[235px] max-lg:h-[292px] right-0 rounded-lg  clip-custom max-[1235px]:w-[349px] max-xl:w-[299px] max-lg:w-[71%]">
                            <Image src={excDiscounts} width={547} height={273} className="w-full h-full max-lg:h-full max-sm:h-[90%] max-sm:h-[91%] rounded-r-lg object-cover select-none" alt="Banner cenote san antonio" />
                        </div>

                        <a
                            // href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
                            // target="_blank"
                            // rel="noopener noreferrer" 
                            className="absolute bottom-[8%] right-[9%] rounded-full py-[10px] px-[30px] bg-yw-100 m-b text-fs-12 text-black no-underline hover:bg-yw-110 max-sm:right-0">
                            {languageData.cartTour.youWantMore}
                        </a>
                    </div>
                </div> */}
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


