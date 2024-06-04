"use client";
import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function TransportBanner() {
  const { languageData } = useContext(LanguageContext);
  return (
    <section className="flex bg-white flex-col max-lg:items-center lg:flex-row h-max my-16 md:mt-[131px] md:mb-32 shadow-3xl">
      <div
        data-aos="fade-right"
        className="flex justify-center px-8 py-14 md:px-16 w-full lg:pr-0 items-start md:py-[88px] flex-col gap-y-2.5 lg:w-4/5 gap-y-5"
      >
        <h3 className="m-b text-fs-32">
          {languageData.bannerTransportHome.titleDisposal}
        </h3>

        <p className="m-m text-fs-14">
          {languageData.bannerTransportHome.textBookNow}
        </p>

        <button className="rounded-full py-[20px] px-[41px] bg-bl-100 text-white w-max m-s-b text-fs-12 hover:bg-bl-110">
          {languageData.bannerTransportHome.chooseDates}
        </button>
      </div>

      <div
        data-aos="fade-left"
        className="relative w-4/5 flex justify-center mb-14 lg:mb-0 lg:justify-end items-center lg:items-end"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_URL}banners/vehicle/tiggo-7-pro.webp`}
          alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} tiggo car`}
          className="absolute z-[1] bottom-[75px] right-0 left-[139px] mx-auto select-none max-xl:!left-0"
          // width="auto"
          // height="100%"
          width={452}
          height={226}
        />
        <img
          src={`${process.env.NEXT_PUBLIC_URL}general/Iso-tipo-staywuw.jpg`}
          alt={process.env.NEXT_PUBLIC_NAME_COMPANY}
          className="object-cover h-full mr-0 md:mr-[44px] lg:mr-0 xl:mr-[44px] select-none"
          width="auto"
          height="100%"
        />
      </div>
    </section>
  );
}
