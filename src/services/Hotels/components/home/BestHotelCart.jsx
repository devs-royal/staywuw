"use client";

import moment from "moment";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export function BestHotelCart({ hotel }) {
  const { languageData, language } = useContext(LanguageContext);

  const searchHotel = (hotel) => {
    window.open(
      `/${language}/mx/${hotel.destinationCodeName}-mexico/${hotel.destinationCodeName}-hotels/${hotel.codeName}`,
      "_blank"
    );
  };


  return (
    <div onClick={() => searchHotel(hotel)}>
      <div className="w-full h-[216px]">
        <img
          className="w-full h-full rounded-t-lg object-cover select-none"
          src={hotel.image}
          alt="card"
        />
      </div>

      {/* bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col */}
      <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
        <div className="m-s-b pt-1 text-fs-14 text-start truncate">
          {hotel.name}
          {""}
        </div>

        <Rating
          className="my-1"
          name="read-only"
          value={hotel.category}
          readOnly
          size="small"
        />

        <div className="flex gap-1 mb-[11px]">
          <Image
            className="w-auto h-auto"
            src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
            alt="location icon"
            width={11}
            height={14}
          />
          <span className="text-bl-100 m-s-b text-fs-12">
            {hotel.destination}
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

          <button className="m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl border-2 border-bl-100 px-4 py-2 hover:bg-bl-100 hover:text-white text-nowrap">
            {languageData.cartTour.seeDetails}
          </button>
        </div>
      </div>
    </div>
  );
}
