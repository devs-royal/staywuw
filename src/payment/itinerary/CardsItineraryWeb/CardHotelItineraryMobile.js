import moment from "moment";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { CircularProgress, Rating } from "@mui/material";

import LanguageContext from "../../../language/LanguageContext";
import UnavailableCardHotel from "../others/UnavailableCardHotel";
import { useCartAxios } from "../../../components/Cart/CartAxios";
import { ImageNotFound } from "../../../config/Others/ImageNotFound";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

import LocationIcon from "../../../assets/icons/utils/others/location.svg";
import CloseIcon from "../../../assets/icons/hotel/modal/close_active.svg";
import lineLocationIcon from "../../../assets/icons/utils/others/itinerary-line.webp";
import RoomOutlinedIcon from "../../../assets/icons/utils/searchBox/location-autocomplete.svg";

export default function CardHotelItineraryMobile(props) {
  const { itemHotel } = props;
  const [shoText, setShowText] = useState(false);
  const { languageData } = useContext(LanguageContext);
  const { fetchData } = useCartAxios();

  const handleShowInfo = () => {
    setShowText(true);

    if (shoText) {
      setShowText(false);
    }
  };

  // OBTEIN DAY OF WEEK AND FORMAT
  const dayOfWeek = moment(itemHotel.date).format("dddd");
  const dateFormatCheckIn = moment(itemHotel.checkIn).format("DD/MM/YY");

  const maxLength = 30;

  const totalRooms = itemHotel.rooms.length;

  const [loader, setLoader] = useState(false);
  const [iconRemove, setIconRemove] = useState(false);
  // const [removeCard, setRemoveCard] = useState(false);
  // const [hiddenDiv, setHiddenDiv] = useState(false);
  // const [heightDiv, setHeightDiv] = useState(false);

  const cancelRemove = () => {
    if (iconRemove === true) setIconRemove(false);
  };

  // REMOVE RESERVATION
  const searchParams = new URLSearchParams(window.location.search);
  const cartUid = searchParams.get("uid");
  const cartHotelId = itemHotel.code;

  const removeReservation = () => {
    setLoader(true);
    axiosWithInterceptor
      .delete(`v1/carts/${cartUid}/hotel/${cartHotelId}`)
      .then((response) => {
        // setRemoveCard(true);
        setIconRemove(false);
        fetchData(cartUid);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
      });
  };

  // useEffect(() => {
  //   if (removeCard === true) {
  //     setHiddenDiv(true);
  //     setTimeout(() => {
  //       setHeightDiv(true);
  //     }, 1000);
  //   }
  // }, [removeCard]);

  return (
    <>
      <div className="d-flex pb-3" onClick={cancelRemove}>
        {/* SHOW INFO HOTEL */}
        <div
          className={`m-image-itinerary ${shoText ? "m-info-itinerary" : ""}`}
        >
          <div className={`${shoText ? "m-info-hotel-a" : "m-info-hotel-i"}`}>
            <div className="date-moving-itinerary">
              {languageData.dayOfWeek[dayOfWeek]}
            </div>

            <div className="date-moving-calendar">{dateFormatCheckIn}</div>
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
            <div className="line-location-itinerary">
              <img
                className="icon-location-o"
                src={LocationIcon}
                alt="LocationIcon"
              />
              <div
                className="line-location-background"
                style={{ backgroundImage: `url(${lineLocationIcon})` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          {[...Array(totalRooms)].map((totalRoom, itemRooms) => (
            <div className="m-itinerary-h" key={itemRooms}>
              {/* TEXT CARD HOTEL */}
              <div
                className={`m-card-itinerary ${
                  shoText ? "m-card-itinerary-r" : ""
                } ${iconRemove && "card-opacity"}`}
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
                  <div className="m-name-hotel-c">Hotel</div>
                  <div className="m-name-is-h">{itemHotel.name}</div>

                  <div>
                    <Image
                      src={RoomOutlinedIcon}
                      alt="RoomOutlinedIcon"
                      className="m-i-location-h"
                    />{" "}
                    <span className="m-text-location-h">
                      {itemHotel.address.length > maxLength
                        ? itemHotel.address.substring(0, maxLength) + "..."
                        : itemHotel.address}
                    </span>
                  </div>

                  <Rating
                    name="size-small"
                    defaultValue={itemHotel.stars}
                    max={itemHotel.stars}
                    size="small"
                    readOnly
                  />
                  {itemHotel.rooms &&
                    itemHotel.rooms.map((room, indexR) => (
                      <div key={indexR}>
                        {/* {indexR === itemRooms && <AccordionIM room={room} />} */}
                      </div>
                    ))}
                </div>
                {iconRemove ? (
                  <div
                    className="button-remove-reservation"
                    onClick={() => removeReservation()}
                  >
                    {languageData.SearchBox.tabHotel.roomBox.buttonDelete}
                  </div>
                ) : (
                  <div className="icon-remove-reservation">
                    <button onClick={() => setIconRemove(true)}>
                      <Image src={CloseIcon} alt="CloseIcon" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {itemHotel.available === false && (
          <>
            <UnavailableCardHotel destination={itemHotel} />
            <div className="overlay" />
          </>
        )}
      </div>
      {loader && (
        <div className="progress-loader">
          <CircularProgress />
        </div>
      )}
    </>

    // <div
    //   className={`${hiddenDiv === true && "hidden-card"} ${
    //     heightDiv === true && "height-div-card"
    //   } card-remove`}
    // >
    //   <div className="remove-card-text">
    //     {languageData.SearchBox.tabHotel.roomBox.buttonDelete}
    //   </div>
    // </div>
  );
}
