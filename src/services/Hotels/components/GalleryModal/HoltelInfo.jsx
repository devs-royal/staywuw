"use client";

import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function HotelInfo(props) {
  const { hotel } = props;
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      {/* IS TOP */}
      {hotel.isTop && (
        <div className="bg-[#fef0d2] w-[fit-content] rounded-full py-[4px] px-[8px] d-flex flex justify-between mb-2 gap-2">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}/icons/sales/fire_department.svg`}
            alt="fire"
            width={12}
            height={12}
          />

          <span className="text-fs-12 text-nowrap ">{languageData.modalHotel.Highly}</span>
        </div>
      )}

      <h1 className="m-b text-fs-24">{hotel.name}</h1>

      <TotalStars stars={hotel.stars} />

      <div className="mt-3 flex mb-[6]">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
          alt="location"
          width={14}
          height={18}
        />

        <div className="m-m text-fs-13 ml-1 text-gry-70">
          {`${hotel.address}, ${hotel.destination}`}
        </div>
      </div>
    </>
  );
}
