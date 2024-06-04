"use client";

import "swiper/css";
import "swiper/css/navigation";
import "../../../assets/styles/general/Swiper.css";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "@/language/LanguageContext";
import PolicyCardTransportWhite from "../components/ToolTip/PolicyCardTransportWhite";

export default function RecommendedTransport() {

  const { languageData } = useContext(LanguageContext);
  const [openPolicy, setOpenPolicy] = useState(null);
  return (
    <>
      <div className="relative">

        {/* TITLE RECOMMENDED TRANSPORT */}
        <h2 className='mb-[32px] text-fs-24 m-b'>{languageData.CardHomeTransport.titleRecommended}</h2>

        <Swiper
          data-aos="fade-up"
          slidesPerView={5}
          spaceBetween={24}
          className="!static"
          navigation
          modules={[Navigation]}
          id="swiper-recommended-transport"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            350: {
              slidesPerView: 1.5,
            },
            580: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1250: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 4.5,
            },
          }}
        >

          {/* CARD TRANSPORT */}
          {[...Array(8)].map((_, index) => (

            <SwiperSlide key={index}>
              <div className='flex flex-col gap-2 p-[16px] border-2 border-[#EBEBEB] rounded-lg bg-white'>
                {/* IMG TRANSPORT */}
                <Image src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`} width={216} height={164} alt="test card" className="select-none" />

                <div className="flex flex-col gap-[16px]">
                  <span className='text-fs-16 m-b mt-[16px]'>Vehiculo Standard</span>

                  {/* FEATURES */}
                  <div className="flex flex-col gap-[8px]">
                    <span className='text-gry-100 text-fs-12 m-m'>{languageData.CardHomeTransport.features}</span>

                    <div className='flex flex-wrap mb-[6px] gap-2'>
                      <div className='flex gap-2'>
                        <Image src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`} width={12.8} height={13.4} alt="icon adult" />
                        <span className='m-m text-fs-12'>4 {languageData.CardHomeTransport.people}</span>
                      </div>

                      <div className='flex gap-2'>
                        <Image src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
                          width={14}
                          height={13}
                          alt="icon transport"
                          className="w-[14px] h-[13px]" />
                        <span className='m-m text-fs-12'>{languageData.cardMoving.textModel} KSDSDF</span>
                      </div>

                      <div className='flex gap-2'>
                        <Image src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`} width={12.1} height={14.1} alt="icon baggage" />
                        <span className='m-m text-fs-12'>2 {languageData.CardHomeTransport.suitcases}</span>
                      </div>
                    </div>
                  </div>

                  {/* MODALITIES */}
                  <div className="flex flex-col gap-[8px]">
                    <span className='text-gry-100 text-fs-12 m-m'>{languageData.modalTour.modalities}</span>

                    <div className='flex gap-2 mb-[15.5px]'>
                      <div className='bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12'>{languageData.CardHomeTransport.private}</div>
                      <div className='bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12'>{languageData.CardHomeTransport.shared}</div>
                    </div>
                  </div>
                </div>
                {/* NAME TRANSPORT */}

                <div className='flex flex-col gap-2 border-t-2 border-[#EBEBEB] items-center'>
                  <bottom className='px-[71.5px] py-[14px] text-fs-12 text-white bg-bl-100 rounded-full hover:bg-bl-110 w-fit mt-[15.5px] text-nowrap cursor-pointer'>{languageData.cartTour.seeDetails}</bottom>

                  <span
                    className='text-bl-100 text-fs-10 cursor-pointer relative'
                    onMouseOver={() => setOpenPolicy(index)}
                    onMouseLeave={() => setOpenPolicy(null)}
                  >
                    {languageData.containerModalHotel.policies}
                    {openPolicy === index && (
                      <PolicyCardTransportWhite />
                    )}
                  </span>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/*END CARD TRANSPORT */}
      </div>
    </>
  )
}
