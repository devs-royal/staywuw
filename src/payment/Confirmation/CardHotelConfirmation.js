import moment from "moment";
import Image from "next/image";
import { Rating } from "@mui/material";
import React, { useContext } from "react";

import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
import { ImageNotFound } from "../../config/Others/ImageNotFound";

import RoomIcon from "../../assets/icons/utils/searchBox/room.svg";
import ErrorIcon from "../../assets/icons/utils/others/error-r.svg";
import DoneIcon from "../../assets/icons/tour/modal/done_active.svg";
import IconLocationBorder from "../../assets/icons/utils/others/location-border.svg";
import LocationIcon from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

import "@/assets/styles/mobile/HotelMobile.css"
import "@/assets/styles/web/Hotel.css"
export default function CardHotelConfirmation(props) {
  const { languageData } = useContext(LanguageContext);
  const { itemHotel } = props;
  const isMobile = useIsMobile();
  const dateFormatCheckIn = moment(itemHotel.checkIn).format("DD/MM/YY");
  const dateFormatCheckOut = moment(itemHotel.checkOut).format("DD/MM/YY");
  const dayOfWeek = moment(itemHotel.date).format("dddd");

  // const totalRooms = itemHotel.rooms.length;

  return (
    <div className="cont-card-icon-location-and-date">
      <Image
        className="icon-location-border-date"
        src={IconLocationBorder}
        alt="IconLocationBorder"
      />

      <div className="container-card-hotel-i-and-date">
        {/* DAY,TIME HOTEL */}
        <div className="date-itinerary-hotel max-lg:!flex-row">
          <div>
            <span className="text-hotel-or-i">
              {languageData.dayOfWeek[dayOfWeek]}
            </span>{" "}
            <span className="text-loc-hotel-grey-i">{dateFormatCheckIn}</span>{" "}
            <span className="text-loc-hotel-grey-i">|</span>{" "}
            <span className="text-loc-hotel-grey-i">14:00pm</span>
          </div>

          <ul className="ul-hotel-date">
            <li>
              <span className="text-hotel-grey-i">Check out</span>{" "}
              <span className="text-loc-hotel-grey-i">
                {dateFormatCheckOut}{" "}
              </span>
              <span className="text-loc-hotel-grey-i">- </span>
              <span className="text-loc-hotel-grey-i">02:00pm</span>
            </li>
          </ul>
        </div>

        <div className="cont-card-hotel-itinerary">
          {/* FATHER ONE */}

          <div className="d-flex cont-img-price-info">
            <div className="cont-img-card-hotel">
              {itemHotel.image ? (
                <img
                  src={itemHotel.image}
                  alt="hotel"
                  width="100%"
                  height="100%"
                />
              ) : (
                <ImageNotFound />
              )}
            </div>

            <div className="d-flex width8 justify-content-between my-auto mt-1">
              <div className="widthA">
                <div className="cont-name-hotel-and-location d-flex flex-column align-self-center">
                  <div className="d-flex title-start">
                    <span className="title-card-ini">{itemHotel.name}</span>

                    <div className="">
                      <Rating
                        id="start-itinerary"
                        className="d-flex align-self-start"
                        name="no-value"
                        value={itemHotel.stars}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="icon-location-and-text d-flex gap-2">
                    <Image
                      className="icons-size-m"
                      src={LocationIcon}
                      alt="LocationIcon"
                    />

                    <span>{itemHotel.address}</span>
                  </div>

                  <div className="active-container-payment-desktop occupancy-rooms-itinerary">
                    <div className="text-grey-card-hotel-i d-flex gap-2 align-items-center">
                      <img
                        className="icons-size-m"
                        src="https://sandboxmexico.com/assets/icons/adult/adult-b.svg"
                        alt="icon-adult-b"
                      ></img>
                      <span>
                        {/* TEXT ADULTS AND CHILDREN /LP 15-02-24 */}
                        {itemHotel.totalAdults} {languageData.modalHotel.adults}{" "}
                        {itemHotel.totalChildren}{" "}
                        {languageData.modalHotel.children}
                      </span>
                    </div>

                    <div className="text-grey-card-hotel-i d-flex gap-2 align-items-center">
                      <Image
                        className="icons-size-m"
                        src={RoomIcon}
                        alt="RoomIcon"
                      />

                      <span>
                        {itemHotel.totalRooms}{" "}
                        {languageData.itinerary.detailsPayment.rooms}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="active-container-payment-desktop widthA flex">
                <div className="cont-price-taxes-and-policies d-flex flex-column align-self-center">
                  <span className="text-grey-card-hotel-i">
                    {languageData.cartTour.taxesText}
                  </span>

                  <span className="title-card-two">
                    <b>
                      MXN $
                      {Math.floor(itemHotel.price)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(itemHotel.price % 1).toFixed(2).slice(2)}</sup>
                    </b>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="active-container-payment-mobile lg:!hidden">
            <div className="occupancy-rooms-itinerary">
              <div className="text-grey-card-hotel-i d-flex gap-2 align-items-center">
                <img
                  className="icons-size-m"
                  src="https://sandboxmexico.com/assets/icons/adult/adult-b.svg"
                  alt="icon-adult-b"
                />

                <span>
                  {itemHotel.totalAdults} adultos, {itemHotel.totalChildren}{" "}
                  niños
                </span>
              </div>

              <div className="text-grey-card-hotel-i d-flex gap-2 align-items-center">
                <Image className="icons-size-m" src={RoomIcon} alt="RoomIcon" />

                <span>{itemHotel.totalRooms} Habitaciones</span>
              </div>
            </div>

            <div className={`${isMobile ? "widthA" : "width100"}`}>
              <div className="cont-price-taxes-and-policies d-flex flex-column align-self-center">
                <span className="text-grey-card-hotel-i">
                  Impuestos incluidos
                </span>

                {/* PENDIENTE DE CONECTAR BACK */}
                <span className="title-card-two">
                  <b>
                    MXN $
                    {Math.floor(itemHotel.price)
                      .toLocaleString("es-MX", { currency: "MXN" })
                      .replace(".00", "")}
                    .<sup>{(itemHotel.price % 1).toFixed(2).slice(2)}</sup>
                  </b>
                </span>
              </div>
            </div>
          </div>

          {/* FATHER TWO */}

          <div>
            <div className="text-or">
              {/* TEXT ROOMS YOU RESERVED /LP 15-02-24 */}
              <span>{languageData.itinerary.roomsYouReserved}</span>
            </div>

            {/* FIRST ACCORDION */}

            <div className="cont-accordion-hotel-card-i p-3 d-flex flex-column gap-3">
              {itemHotel.rooms &&
                itemHotel.rooms.map((roomInfo, index) => (
                  <div key={index}>
                    <div className="d-flex flex-column gap-4">
                      <div className="father-all-inclusive">
                        <div className="d-flex gap-3 align-items-center">
                          <span className="title-card-three">
                            x{roomInfo.quantity} {roomInfo.name}
                          </span>
                        </div>
                      </div>

                      <div className="container-confirmation-room-info">
                        {roomInfo.occupancies &&
                          roomInfo.occupancies.map((roomBed, index) => (
                            <div key={index} className="widthA">
                              <div className="text-grey-card-hotel-i margin-b align-items-center d-flex gap-1">
                                <span>
                                  {languageData.itinerary.detailsPayment.room}{" "}
                                  {index + 1}
                                </span>
                                <span className="reservation-number-room-c">
                                  No. reserva: #{roomBed.reference}
                                </span>
                              </div>

                              <div className="d-flex flex-wrap gap-1 align-items-center">
                                <div className="d-flex gap-2">
                                  <img
                                    className="icons-size-m"
                                    src="https://sandboxmexico.com/assets/icons/adult/adult-b.svg"
                                    alt="icon-adult-b"
                                  />

                                  <span className="text-grey-card-hotel-i">
                                    {roomBed.adults}{" "}
                                    {languageData.modalHotel.adults}{" "}
                                    {roomBed.children}{" "}
                                    {languageData.modalHotel.children}
                                  </span>
                                </div>

                                {roomBed.beds &&
                                  roomBed.beds.map((bed, index) => (
                                    <div key={index}>
                                      <Image
                                        lassName="icons-size-m"
                                        src={RoomIcon}
                                        alt="RoomIcon"
                                      />{" "}
                                      <span className="text-grey-card-hotel-i">
                                        {bed.number} {bed.type}
                                      </span>
                                    </div>
                                  ))}

                                {roomBed.cancelPolicies &&
                                  roomBed.cancelPolicies.cancellationCode &&
                                  roomBed.cancelPolicies.cancellationCode ===
                                    "NRF" && (
                                    <div className="d-flex align-items-center">
                                      <Image
                                        className="icons-size-s"
                                        src={ErrorIcon}
                                        alt="ErrorIcon"
                                      />

                                      <span className="text-grey-card-hotel-i">
                                        {languageData.itinerary.nonRefundable}
                                      </span>
                                    </div>
                                  )}

                                {roomBed.cancelPolicies &&
                                  roomBed.cancelPolicies.cancellationCode &&
                                  roomBed.cancelPolicies.cancellationCode ===
                                    "NOR" && (
                                    <div className="d-flex align-items-center">
                                      <Image
                                        className="icons-size-s"
                                        src={DoneIcon}
                                        alt="DoneIcon"
                                      />

                                      <span className="text-grey-card-hotel-i">
                                        {languageData.itinerary.refundable}
                                      </span>
                                    </div>
                                  )}

                                {roomBed.food && (
                                  <div className="d-flex align-items-center">
                                    <Image
                                      className="icons-size-s"
                                      src={DoneIcon}
                                      alt="DoneIcon"
                                    />
                                    <span className="text-all-inclusive-i">
                                      {languageData.eatingPlan[roomBed.food]}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {index !== itemHotel.rooms.length - 1 && (
                      <div className="width100 border border-1 mt-3" />
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* {itemHotel.available === false && (
              <>
                <UnavailableCardHotel destination={itemHotel} />
                <div className="overlay" />
              </>
            )} */}
        </div>
      </div>
    </div>
  );
}
