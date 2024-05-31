import Image from "next/image";
import React, { useContext, useEffect } from "react";

import LanguageContext from "../../language/LanguageContext";
import { scrollToTop } from "../../utils/pageConfig/scrollToTop";
import StructureItineraryWeb from "./others/StructureItineraryWeb";
import { StepperContext } from "../context/steeperContext";
import { AlertNoAvailability, AlertUpdate } from "../Booking/AlertRate";

import { isAnyHotelUnavailable } from "../config/itineraryHelpers";

import IconRoyal from "../../assets/icons/utils/payment/icon-royal-vacations.svg";

export default function Itinerary(props) {
  const { dataItinerary } = props;
  const { languageData } = useContext(LanguageContext);
  const { handleStepChange } = useContext(StepperContext);

  const isButtonDisabled = isAnyHotelUnavailable(dataItinerary);

  useEffect(() => {
    if (dataItinerary && dataItinerary.status === 3) {
      handleStepChange(3);
    }
  }, [dataItinerary && dataItinerary.status, handleStepChange]);

  useEffect(() => {
    scrollToTop();
  }, []);

  // MOBILE
  // const isMobile = useIsMobileNew();

  return (
    <div className="m-scroll-i">
      <div className="display-title-button-share">
        <div className="m-fit d-flex">
          {/* <IconRoyal className="icon-royal-itinerary" /> */}
          <Image
            className="icon-royal-itinerary"
            src={IconRoyal}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
          />
          <h1 className="itinerary-title-page">
            {languageData.itinerary.titleItinerary}
          </h1>
        </div>

        {/* {!isMobile && <ModalShare className="modal-style-share" />} */}
      </div>

      <h2 className="itinerary-subtitle-page">
        {languageData.itinerary.subtitleItinerary}
      </h2>

      <StructureItineraryWeb dataItinerary={dataItinerary} />

      <AlertUpdate priceChanged={dataItinerary.priceChanged} />

      {isButtonDisabled && (
        <AlertNoAvailability isNoAvailability={isButtonDisabled} />
      )}
    </div>
  );
}
