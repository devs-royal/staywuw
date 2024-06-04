import Image from "next/image";
import React, { useContext, useEffect } from "react";

import CardsItinerary from "./others/CardsItinerary";
import { BookingContext } from "../context/BookingContext";
import LanguageContext from "../../language/LanguageContext";
import { scrollToTop } from "../../utils/pageConfig/scrollToTop";
import { isAnyHotelUnavailable } from "../config/itineraryHelpers";
import { AlertNoAvailability, AlertUpdate } from "../Booking/AlertRate";

export default function Itinerary(props) {
  const { dataItinerary } = props;
  const { languageData } = useContext(LanguageContext);
  const { handleStepChange } = useContext(BookingContext);
  const isButtonDisabled = isAnyHotelUnavailable(dataItinerary);

  useEffect(() => {
    if (dataItinerary && dataItinerary.status === 3) {
      handleStepChange(3);
    }
  }, [dataItinerary && dataItinerary.status, handleStepChange]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="m-scroll-i">

      {/* TITLE ITINERARY */}
      <div className="display-title-button-share">
        <div className="flex !gap-x-2 w-full items-start justify-start !mb-2">
          <Image
            className="w-[27px] h-[25px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
            width={27}
            height={25}
          />
          <h1 className="text-fs-24 m-b text-black">
            {languageData.itinerary.titleItinerary}
          </h1>
        </div>
      </div>

      <h2 className="text-fs-14 m-m text-black mb-[36px]">
        {languageData.itinerary.subtitleItinerary}
      </h2>

      {/* CARDS RETURN SHOW */}
      <CardsItinerary dataItinerary={dataItinerary} />

      {/* ALERT UPDATE PRICES */}
      <AlertUpdate priceChanged={dataItinerary.priceChanged} />


      {/* ALERT NO AVAILABILITY PRICES */}
      {isButtonDisabled && (
        <AlertNoAvailability isNoAvailability={isButtonDisabled} />
      )}
    </div>
  );
}
