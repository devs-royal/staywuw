import moment from "moment";
import Accordion from "@mui/material/Accordion";
import React, { useContext, useState } from "react";
import { CircularProgress, Rating } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
// import "react-lazy-load-image-component/src/effects/blur.css";

import { useIsMobile } from "../../../config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";
import UnavailableCardHotel from "../others/UnavailableCardHotel";
import { useCartAxios } from "../../../components/Cart/CartAxios";
import { ImageNotFound } from "../../../config/Others/ImageNotFound";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

import CloseIcon from "../../../assets/alerts/close.svg";
import RoomIcon from "../../../assets/icons/utils/searchBox/room.svg";
import ErrorIcon from "../../../assets/icons/utils/others/error-r.svg";
import DoneIcon from "../../../assets/icons/tour/modal/done_active.svg";
import IconLocationBorder from "../../../assets/icons/utils/others/location-border.svg";
// import LocationIcon from "../../../assets/icons/utils/searchBox/location-autocomplete.svg";
import Image from "next/image";
import "../../../../src/assets/styles/mobile/HotelMobile.css";
import "@/assets/styles/web/Hotel.css"
export default function CardHotelItinerary(props) {
  const { itemHotel } = props;
  const { fetchData } = useCartAxios();
  const isMobile = useIsMobile();

  const { languageData } = useContext(LanguageContext);

  const dateFormatCheckIn = moment(itemHotel.checkIn).format("DD/MM/YY");
  const dateFormatCheckOut = moment(itemHotel.checkOut).format("DD/MM/YY");

  const [loader, setLoader] = useState(false);

  // DAY OF WEEK
  const dayOfWeek = moment(itemHotel.date).format("dddd");

  const [iconRemove, setIconRemove] = useState(false);

  const cancelRemove = () => {
    if (iconRemove === true) setIconRemove(false);
  };

  // REMOVE RESERVATION
  const searchParams = new URLSearchParams(window.location.search);
  const cartUid = searchParams.get("uid");
  const cartHotelId = itemHotel.code;

  const removeReservation = (uidHotel) => {
    setLoader(true);
    if (cartHotelId === uidHotel) {
      const reservationRemove = async () => {
        axiosWithInterceptor
          .delete(`v1/carts/${cartUid}/hotel/${cartHotelId}`)
          .then((response) => {
            fetchData(cartUid);
            setIconRemove(false);
          })
          .catch((error) => {
            console.error(error);
            setLoader(false);
          })
          .finally(() => {
            // setLoader(false);
          });
      };
      reservationRemove();
    }
  };

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      <div className="cont-card-icon-location-and-date">
        <Image className="icon-location-border-date" src={IconLocationBorder} alt="IconLocationBorder" />
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
                <span className="mr-2 ml-2">•</span>
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
            {/* CLOSE BUTTON */}

            <div
              className="remove-card-listing"
              onClick={() => setIconRemove(true)}
            >
              {/* <CloseIcon /> */}
              <Image src={CloseIcon} alt="icon close"/>
            </div>

            {/* FATHER ONE */}

            <div className="d-flex cont-img-price-info">
              <div className="cont-img-card-hotel">
                <img
                  src={itemHotel.image ? itemHotel.image : ImageNotFound}
                  alt="hotel"
                  width="100%"
                  className="!h-full"
                />
              </div>

              <div className="d-flex width8 justify-content-between my-auto mt-1">
                <div className="width100">
                  <div className="cont-name-hotel-and-location d-flex flex-column align-self-center gap-[3px]">
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

                    <div className="icon-location-and-text d-flex gap-2 items-center">
                      <Image 
                      className="icons-size-m" src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`} 
                      alt="icon-location-bl"
                      width={11}
                      height={14}
                      />
                      <span>{itemHotel.address}</span>
                    </div>

                    <div className="occupancy-rooms-itinerary max-lg:!hidden">
                      <div className="text-grey-card-hotel-i d-flex gap-2 align-items-center">
                        <img
                          className="icons-size-m"
                          src="https://sandboxmexico.com/assets/icons/adult/adult-b.svg"
                          alt="icon-adult-b"
                        ></img>
                        <span>
                          {/* TEXT ADULTS AND CHILDREN /LP 15-02-24 */}
                          {itemHotel.totalAdults}{" "}
                          {languageData.modalHotel.adults}{" "}
                          {itemHotel.totalChildren}{" "}
                          {languageData.modalHotel.children}
                        </span>
                      </div>

                      <div className="text-grey-card-hotel-i d-flex gap-2 align-items-center">
                        {/* <RoomIcon className="icons-size-m" /> */}
                        <Image className="icons-size-m" src={RoomIcon} alt="icon Room"/>

                        <span>
                          {itemHotel.totalRooms}{" "}
                          {languageData.itinerary.detailsPayment.rooms}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="active-container-payment-desktop widthA max-lg:hidden flex">
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
                    {itemHotel.totalAdults} {languageData.containerModalHotel.adults}, {itemHotel.totalChildren}{" "}
                    {languageData.containerModalHotel.children}
                  </span>
                </div>

                <div className="text-grey-card-hotel-i d-flex gap-2 align-items-center">
                  <Image className="icons-size-m" src={RoomIcon} alt="icon room"/>
                  <span>{itemHotel.totalRooms} {languageData.modalHotel.rooms}</span>
                </div>
              </div>

              <div className={`${isMobile ? "widthA" : "width100"}`}>
                <div className="cont-price-taxes-and-policies d-flex flex-column align-self-center">
                  <span className="text-grey-card-hotel-i">
                    {languageData.cardHotel.taxes}
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

              <div className="cont-accordion-hotel-card-i">
                {itemHotel.rooms &&
                  itemHotel.rooms.map((roomInfo, index) => (
                    <div key={index}>
                      <Accordion
                        id="accordion-hotel-itinerary-one"
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <div className="father-all-inclusive">
                            <div className="d-flex gap-3 align-items-center">
                              <span className="title-card-three">
                                x{roomInfo.quantity} {roomInfo.name}
                              </span>
                            </div>
                          </div>
                        </AccordionSummary>

                        {/* DETAILS FIRST ACCORDION */}

                        <AccordionDetails>
                          <div className="d-flex d-grid gap-4 align-items-center">
                            {roomInfo.occupancies &&
                              roomInfo.occupancies.map((roomBed, index) => (
                                <div key={index}>
                                  <div className="text-grey-card-hotel-i margin-b">
                                    {/* TEXT ROOM /LP 15-02-24 */}
                                    <span>
                                      {
                                        languageData.itinerary.detailsPayment
                                          .room
                                      }{" "}
                                      {index + 1}
                                    </span>
                                  </div>

                                  <div className="d-flex flex-wrap row-gap-1 gap-2 align-items-center">
                                    <div className="d-flex gap-2 items-center">
                                      <img
                                        className="icons-size-m"
                                        src="https://sandboxmexico.com/assets/icons/adult/adult-b.svg"
                                        alt="icon-adult-b"
                                      />

                                      <span className="text-grey-card-hotel-i">
                                        {/* TEXT ADULTS AND CHILDREN /LP 15-02-24 */}
                                        {roomBed.adults}{" "}
                                        {languageData.modalHotel.adults}{" "}
                                        {roomBed.children}{" "}
                                        {languageData.modalHotel.children}
                                      </span>
                                    </div>

                                    {/* MAP ROOM BEDS */}
                                    {roomBed.beds &&
                                      roomBed.beds.map((bed, index) => (
                                        <div key={index} className="flex gap-2 items-center">
                                          {/* <RoomIcon className="icons-size-m" /> */}
                                          <Image
                                            className="icons-size-m"
                                            src={RoomIcon}
                                            alt="icon Room"
                                          />{" "}
                                          <span className="text-grey-card-hotel-i">
                                            {bed.number} {bed.type}
                                          </span>
                                        </div>
                                      ))}

                                    {/* NON REFUNDABLE */}

                                    <div className="d-flex align-items-center">
                                      {roomBed.refundable === false && (
                                        <Image
                                          className="icons-size-s"
                                          src={ErrorIcon}
                                          alt="icon error"
                                        />
                                      )}
                                      {roomBed.refundable === true && (
                                        <Image
                                          className="icons-size-s"
                                          src={DoneIcon}
                                          alt="icon done"
                                        />
                                      )}

                                      <span className="text-grey-card-hotel-i">
                                        {!roomBed.refundable &&
                                          languageData.itinerary.nonRefundable}
                                        {roomBed.refundable &&
                                          languageData.itinerary.refundable}
                                      </span>
                                    </div>

                                    {/* EATING PLAN */}
                                    {roomBed.eatingPlan && (
                                      <div className="d-flex align-items-center">
                                        <Image
                                          className="icons-size-s"
                                          src={DoneIcon}
                                          alt="icon-done"
                                        />
                                        <span className="text-all-inclusive-i">
                                          {roomBed.eatingPlan}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  ))}
              </div>
            </div>

            {/* REMOVE CARD */}

            {iconRemove && (
              <>
                <div
                  className="container-remove-itinerary"
                  onClick={() => cancelRemove()}
                />
                <div
                  className="remove-reservation-itinerary"
                  onClick={() => removeReservation(itemHotel.code)}
                >
                  {languageData.cart.remove}
                </div>
              </>
            )}
            {/* END REMOVE CARD */}

            {itemHotel.available === false && (
              <>
                <UnavailableCardHotel destination={itemHotel} />
                <div className="overlay" />
              </>
            )}
          </div>
        </div>
      </div>

      {loader && (
        <div className="progress-loader">
          <CircularProgress />
        </div>
      )}
    </>
  );
}
