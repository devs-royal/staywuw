"use client";

import { useContext, useEffect } from "react";

import { HotelInfo } from "./HoltelInfo";
import TabInfoHotel from "./TabInfoHotel";
import { GalleryImages } from "./GalleryImages";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export function GalleryModal(props) {
  const { codeName, hotel } = props;
  const { setHotelInfo } = useContext(RoomsHotelContext);

  useEffect(() => {
    if (hotel) {
      setHotelInfo({
        codeName: codeName || null,
        name: hotel.name || null,
        date: { checkIn: hotel.checkIn || null, checkOut: hotel.checkOut || null },
      });
    }
  }, [hotel]);

  return (
    <div className="bg-white rounded-lg flex flex-col lg:items-center lg:flex-row py-9 px-4 lg:p-8 lg:gap-x-9">
      <GalleryImages images={hotel.images} />

      <div className="w-full lg:min-h-[30rem] lg:w-[40%] xl:w-[45%] pt-9 lg:py-4 lg:px-2">
        <HotelInfo hotel={hotel} />
        <TabInfoHotel hotel={hotel} />
      </div>
    </div>
  );
}
