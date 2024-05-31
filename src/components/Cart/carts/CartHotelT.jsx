"use client";

import Image from "next/image";
import React, { useState } from "react";

import { useCartAxios } from "../CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { calculateNights } from "@/services/Hotels/utils/calculateNights";

export default function CartHotelT(props) {
  const [iconDelete, setIconDelete] = useState(null);

  const { setItinerary, removeHotelById } = useCartAxios();
  const { hotelGetCart, cartId, setIsLoader, isLoader } = props;
  const [showDelete, setShowDelete] = useState({});
  const [loadingHotels, setLoadingHotels] = useState({});

  const handleDeleteClick = (hotel) => {
    setLoadingHotels((prevLoadingHotels) => ({
      ...prevLoadingHotels,
      [hotel.id]: true,
    }));

    const hotelId = hotel.id;
    setIsLoader(true);
    axiosWithInterceptor
      .delete(`v1/carts/${cartId}/hotel/${hotelId}`)
      .then((response) => {
        removeHotelById(hotelId);
        setShowDelete({ ...showDelete });
        setItinerary(Math.floor(Math.random() * 100) + 1);
        setIsLoader(false);
        setLoadingHotels({});
      })
      .catch((error) => {
        setIsLoader(false);
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
    <div className="relative">
      {/* CARD CART HOTEL */}
      {hotelGetCart &&
        hotelGetCart.hotels.map((hotel, index) => (
          <div
            key={index}
            className="flex relative rounded-lg hover:bg-[#efefef] mb-3 mr-[16px] max-sm:w-[98%]"
          >
            {loadingHotels[hotel.id] && (
              <div className="absolute flex justify-center items-center w-full h-full backdrop-contrast-50">
                <div className="relative w-[8px] h-[8px] rounded-[5px] bg-bl-100 text-bl-100 animate-[dot-flashing_1s_infinite_linear_alternate] before:content-[' '] before:block before:absolute before:top-0 before:left-[15px] before:w-[8px] before:h-[8px] before:rounded-[5px] before:bg-bl-100 before:text-bl-100 before:animate-[dot-flashing_1s_infinite_alternate] before:delay-0 after:content-[' '] after:block after:absolute after:top-0 after:left-[30px] after:w-[8px] after:h-[8px] after:rounded-[5px] after:bg-bl-100 after:text-bl-100 after:animate-[dot-flashing_1s_infinite_alternate] after:delay-1000	dot-flashing" />
              </div>
            )}
            <div className="p-2 gap-4 flex justify-between w-full max-sm:w-[86%]">
              {/* IMAGE CART */}
              <img
                // src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                src={hotel.image}
                alt="img-cart-hotel"
                className="w-[100px] h-[100px] rounded-lg object-cover"
              />

              {/* INFO CART */}
              <div className="w-full leading-4 flex flex-col justify-center max-sm:w-[61%] gap-y-[5px]">
                <span className="m-m text-gry-100 text-fs-12 truncate w-[187px] ">
                  Cancun
                </span>

                <span className="m-s-b text-fs-14 truncate w-[187px] max-sm:w-full">
                  {hotel.name}
                </span>

                <div className="flex gap-2">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                    width={12}
                    height={12}
                    alt="icon-calendar"
                  />

                  <span className=" m-m text-gry-100 text-fs-12">
                    {hotel.checkIn} | 2:00pm
                  </span>
                </div>

                <span className="m-s-b text-fs-14 text-or-100">
                  MXN $
                  {Math.floor(hotel.price)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(hotel.price % 1).toFixed(2).slice(2)} </sup>
                </span>

                <div className="flex gap-3">
                  <div className="flex gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/night/night-b.svg`}
                      width={12}
                      height={12}
                      alt="icon-night"
                    />
                    <span className=" m-m text-fs-12 text-gry-100">
                      {calculateNights(hotel.checkIn, hotel.checkOut)}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                      width={12}
                      height={12}
                      alt="icon-room"
                    />
                    <span className="m-m text-fs-12 text-gry-100">
                      {hotel.rooms}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                      width={12}
                      height={12}
                      alt="icon-dult"
                    />
                    <span className=" m-m text-fs-12 text-gry-100">
                      {hotel.adults + hotel.children}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ICON DELETE */}
            {showDelete[hotel.id] ? (
              <div
                className={`${
                  isLoader && "hidden"
                } transition duration-500 ease-in-out bg-red-100 w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClick(hotel);
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-w.svg`}
                  width={16}
                  height={16}
                  alt="icon-delete-w"
                />
              </div>
            ) : (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDelete(hotel.id);
                }}
                className={` ${
                  isLoader && "hidden"
                } w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                  width={16}
                  height={16}
                  alt="icon-delete-r"
                />
              </div>
            )}

            {/* {showDelete[hotel.id] && (
              
            )} */}
            {/* {!isLoader && (
              <>
                <div
                  onMouseOver={() => setIconDelete(index)}
                  onMouseOut={() => setIconDelete(null)}
                  className={`${
                    iconDelete === index
                      ? "transition duration-500 ease-in-out "
                      : ""
                  } w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                    width={16}
                    height={16}
                    alt="icon-delete-r"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDelete(hotel.id);
                    }}
                  />
                </div>
                {showDelete[hotel.id] && (
                  <div
                    className="transition duration-500 ease-in-out bg-red-100 flex w-[48px] justify-center items-center rounded-r-lg cursor-pointer absolute right-[14px] h-[116px] max-sm:right-[6px]"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(hotel);
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-w.svg`}
                      width={16}
                      height={16}
                      alt="icon-delete-w"
                    />
                  </div>
                )}
              </>
            )} */}
          </div>
        ))}
      {/* END CART HOTEL */}
    </div>
  );
}
