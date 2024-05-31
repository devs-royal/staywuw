import moment from "moment";
import Image from "next/image";
import React, { useContext, useState } from "react";

import { useCartAxios } from "./CartAxios";
import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import IconDate from "../../assets/icons/utils/payment/date.svg";
import IconPerson from "../../assets/icons/utils/payment/person.svg";
import IconRoom from "../../assets/icons/utils/payment/cart-room.svg";
import IconHotel from "../../assets/icons/utils/navigation/hotel.svg";
import IconNight from "../../assets/icons/utils/payment/night-room.svg";

export default function CartHotel(props) {
  const { setItinerary, removeHotelById } = useCartAxios();
  const { hotelGetCart, cartId } = props;
  const [showDelete, setShowDelete] = useState({});
  const { languageData } = useContext(LanguageContext);

  const handleDeleteClick = (hotel) => {
    const hotelId = hotel.id;

    axiosWithInterceptor
      .delete(`v1/carts/${cartId}/hotel/${hotelId}`)
      .then((response) => {
        removeHotelById(hotelId);
        setShowDelete({ ...showDelete });
        setItinerary(Math.floor(Math.random() * 100) + 1);
      })
      .catch((error) => {
        alert("Ups ocurrio un error en eliminar el carro");
      });
  };

  const toggleDelete = (hotelId) => {
    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[hotelId] = !updatedShowDelete[hotelId];
    setShowDelete(updatedShowDelete);
  };

  const handleCardClick = (hotelId) => {
    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[hotelId] = !updatedShowDelete[hotelId];
    setShowDelete(updatedShowDelete);
  };

  return (
    <>
      {hotelGetCart.hotels.map((hotel, index) => (
        <div
          key={hotel.id}
          className="cart-card"
          onClick={() => handleCardClick(hotel.id)}
        >
          <div className="cart-date">
            <div>{moment(hotel.checkIn).format("DD/MM/YY")}</div>
            <div>{moment(hotel.checkOut).format("DD/MM/YY")}</div>
          </div>

          <div className="cart-title-information">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="cart-title-type">
                {languageData.cart.titleHotel}
              </span>
              <span>
                <span
                  className="cart-card-delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDelete(hotel.id);
                  }}
                >
                  x
                </span>
              </span>{" "}
            </div>
            <div className="cart-destination">{hotel.destination}</div>
          </div>

          <div className="cart-type-element">
            <Image src={IconHotel} alt="icon Hotel" />
            {languageData.cart.titleHotel}
          </div>

          <div className="cart-information-reservation">
            <div className="cart-title-types">
              {hotel.name && hotel.name.length > 25
                ? `${hotel.name.substring(0, 25)}...`
                : hotel.name}
            </div>

            <div className="cart-detail-information">
              <span className="cart-text-content">
                <Image src={IconDate} alt="icon date" />{" "}
                <span className="cart-text-detail">
                  {moment(hotel.checkIn).format("DD/MM/YY")}
                </span>
              </span>

              <span className="cart-text-content">
                <Image src={IconNight} alt="icon night" />{" "}
                <span className="cart-text-detail">2</span>
              </span>

              <span className="cart-text-content">
                <Image src={IconRoom} alt="icon room" />{" "}
                <span className="cart-text-detail">{hotel.rooms}</span>
              </span>

              <span className="cart-text-content">
                <Image src={IconPerson} alt="icon person" />{" "}
                <span className="cart-text-detail">
                  {hotel.adults + hotel.children}
                </span>
              </span>
            </div>
          </div>

          {showDelete[hotel.id] && (
            <div
              className="delete-card-new"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteClick(hotel);
              }}
            >
              {languageData.cart.remove}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
