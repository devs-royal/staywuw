import moment from "moment";
import React, { useState, useContext } from "react";

import { AccordionCP } from "../Utils/AccordionCP";
import LanguageContext from "../../language/LanguageContext";
import { ImageNotFound } from "../../config/Others/ImageNotFound";
import { TotalOccupants } from "../config/totalOccupants";

import LocationIcon from "../../assets/icons/utils/others/location.svg";
import lineLocationIcon from "../../assets/icons/utils/others/itinerary-line.webp";

export function CardHotelConfirmationM(props) {
  const { itemHotel } = props;

  const { languageData } = useContext(LanguageContext);

  const [shoText, setShowText] = useState(false);
  const handleShowInfo = () => {
    setShowText(true);

    if (shoText) {
      setShowText(false);
    }
  };

  const totalRooms = itemHotel.rooms.length;

  // OBTEIN DAY OF WEEK AND FORMAT
  const dayOfWeek = moment(itemHotel.date).format("dddd");
  const dateFormatCheckIn = moment(itemHotel.checkIn).format("DD/MM/YY");
  const dateFormatCheckOut = moment(itemHotel.checkOut).format("DD/MM/YY");

  const maxLength = 30;
  return (
    <div className="m-itinerary-h mb-3">
      <div className={`m-image-itinerary ${shoText ? "m-info-payments-c" : ""}`}>
        <div className={`${shoText ? "m-info-hotel-a" : "m-info-hotel-i"}`}>
          <div className="date-moving-itinerary">
            {languageData.dayOfWeek[dayOfWeek]}
          </div>

          <span className="time-text-p-c ">checkIn</span>
          <div className="date-moving-calendar">{dateFormatCheckIn}</div>
          <div className="time-moving-itinerary">14:00 PM</div>

          <span className="time-text-p-c mt-1">checkOut</span>
          <div className="date-moving-calendar">{dateFormatCheckOut}</div>
          <div className="time-moving-itinerary">14:00 PM</div>

          <div className="location-moving-itinerary">
            {itemHotel.destinationName}
          </div>
        </div>

        <div
          onClick={handleShowInfo}
          className={`${shoText ? "m-image-left" : ""}height100`}
        >
          <div className="blinking-dot" />
          <div className="line-location-confirmed-pay">
            <img className="icon-location-o" src={LocationIcon} alt="LocationIcon" />
            <div
              className="line-location-background"
              style={{ backgroundImage: `url(${lineLocationIcon})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="align-items-end d-flex flex-column gap-3">
        {[...Array(totalRooms)].map((roomsTotal, roomItem) => (
          <div
            className={`m-card-itinerary ${
              shoText ? "m-card-confirmation-p" : ""
            } ${!itemHotel.reference && "incomplete-information"}`}
            key={roomItem}
          >
            <div className="m-image-itinerary-h">
              {itemHotel.image ? (
                <img
                  width="100%"
                  height="100%"
                  className="m-object-fit"
                  src={itemHotel.image}
                  alt={languageData.allAlt.altRoyalVacations}
                  effect="blur"
                />
              ) : (
                <ImageNotFound />
              )}
            </div>

            <div className="m-text-itinerary-h">
              <div>
                <div className="m-name-hotel-c">Hotel</div>
                <div className="m-name-is-h">{itemHotel.name}</div>

                <div>
                  <span className="m-text-location-p-c">
                    {itemHotel.address.length > maxLength
                      ? itemHotel.address.substring(0, maxLength) + "..."
                      : itemHotel.address}
                  </span>
                </div>

                <div className="d-flex gap-5 pt-1 ps-2">
                  <div className="d-flex flex-column">
                    <span className="occupancies-text">
                      {languageData.confirmation.cardHotel.occupation}
                    </span>

                    <span className="m-occupancies-total">
                      <TotalOccupants
                        occupants={itemHotel}
                        language={languageData}
                        confirmationPay={true}
                      />
                    </span>
                  </div>

                  <div
                    className={`m-reservation-text ${
                      !itemHotel.reference && "empty-reference"
                    }`}
                  >
                    {languageData.confirmation.cardHotel.numberBooking}
                    <span
                      className={`m-reservation-number ${
                        !itemHotel.reference && "empty-reference"
                      }`}
                    >
                      {itemHotel.reference
                        ? `#${itemHotel.reference}`
                        : languageData.confirmation.waiting}
                    </span>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <AccordionCP itemHotel={itemHotel} roomItem={roomItem}/>
                </div>
              </div>

              <div className="d-flex width100 justify-content-end align-items-center">
                <span className="total-text-payment-c">
                  {languageData.confirmation.total}
                </span>

                <div className="m-i-price-c">
                  <span>MXN</span>
                  <span>
                    $
                    {Math.floor(itemHotel.price)
                      .toLocaleString("es-MX", { currency: "MXN" })
                      .replace(".00", "")}
                    .
                  </span>
                  <sup>{(itemHotel.price % 1).toFixed(2).slice(2)}</sup>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
