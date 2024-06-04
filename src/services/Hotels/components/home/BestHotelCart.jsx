"use client";

import Image from "next/image";
import { useState, useContext } from "react";
import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "@/language/LanguageContext";

export function BestHotelCart({ hotel }) {
  const [isHovered, setIsHovered] = useState(false);
  const { languageData, language } = useContext(LanguageContext);

  const searchHotel = (hotel) => {
    window.open(
      `/${language}/mx/${hotel.destinationCodeName}-mexico/${hotel.destinationCodeName}-hotels/${hotel.codeName}`,
      "_blank"
    );
  };

  return (
    <div
      onClick={() => searchHotel(hotel)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="shadow-3xl !rounded-lg"
    >
      <div className="w-full h-[216px] overflow-hidden rounded-t-lg">
        <img
          className={`w-full h-full rounded-t-lg object-cover select-none transition-transform duration-500 transform ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          src={hotel.image}
          alt="card"
        />
      </div>

      {/* bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col */}
      <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
        <div className="m-s-b pt-1 text-fs-14 text-start truncate mb-[4px]">
          {hotel.name}
          {""}
        </div>

        <div className="mb-[4px]">
          <TotalStars name="read-only" stars={hotel.stars} />
        </div>

        <div className="flex gap-1 mb-[11px]">
          <Image
            className="w-auto h-auto"
            src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
            alt="location icon"
            width={11}
            height={14}
          />
          <span className="text-bl-100 m-s-b text-fs-12 truncate">
            {hotel.address}
          </span>
        </div>

        <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
          <div className="flex flex-col">
            <span className="m-m text-gry-100 text-fs-12 text-start">
              {languageData.cartTour.from}
            </span>
            <span className="m-b text-or-100 text-fs-12">
              MXN <span className="m-b text-fs-16">${hotel.price}</span>
            </span>
          </div>

          <button
            className={`m-s-b  text-fs-12 min-h-8 rounded-3xl border-2  px-4 py-2 text-nowrap ${
              isHovered ? "bg-bl-100 text-white" : "text-bl-100 border-bl-100"
            }`}
          >
            {languageData.cartTour.seeDetails}
          </button>
        </div>
      </div>
    </div>
  );
}
