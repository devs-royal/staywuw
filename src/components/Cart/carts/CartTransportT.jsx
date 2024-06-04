"use client";

import moment from "moment";
import Image from "next/image";
import { useState } from "react";

import { useCartAxios } from "../CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export default function CartTransportT(props) {
  const { transport, cartId, isLoader, setIsLoader } = props;

  const [showDelete, setShowDelete] = useState({});
  const { setItinerary, removeTransportById } = useCartAxios();
  const [loadingTransports, setLoadingTransports] = useState({});

  // TOGGLE DELETE ICON SHOW
  const toggleDelete = (transportId) => {
    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[transportId] = !updatedShowDelete[transportId];
    setShowDelete(updatedShowDelete);
  };

  // FUNCTION DELETED TRANSPORT AXIOS
  const handleDeleteClick = (transport) => {
    setLoadingTransports((prevLoadingTransports) => ({
      ...prevLoadingTransports,
      [transport.id]: true,
    }));

    const transportId = transport.id;
    setIsLoader(true);

    axiosWithInterceptor
      .delete(`v1/carts/${cartId}/transports/${transportId}`)
      .then((response) => {
        removeTransportById(transportId);
        setShowDelete({ ...showDelete });
        setItinerary(Math.floor(Math.random() * 100) + 1);
        setIsLoader(false);
        setLoadingTransports({});
      })
      .catch((error) => {
        setIsLoader(false);
        alert("Ups ocurrio un error en eliminar el carro");
      });
  };

  return (
    <>
      <div className="flex relative rounded-lg hover:bg-[#efefef] mb-3 mr-[16px] max-sm:w-[98%]">
        {/* STYLE WHEN REMOVED */}
        {loadingTransports[transport.id] && (
          <div className="absolute flex justify-center items-center w-full h-full backdrop-contrast-50">
            <div className="relative w-[8px] h-[8px] rounded-[5px] bg-bl-100 text-bl-100 animate-[dot-flashing_1s_infinite_linear_alternate] before:content-[' '] before:block before:absolute before:top-0 before:left-[15px] before:w-[8px] before:h-[8px] before:rounded-[5px] before:bg-bl-100 before:text-bl-100 before:animate-[dot-flashing_1s_infinite_alternate] before:delay-0 after:content-[' '] after:block after:absolute after:top-0 after:left-[30px] after:w-[8px] after:h-[8px] after:rounded-[5px] after:bg-bl-100 after:text-bl-100 after:animate-[dot-flashing_1s_infinite_alternate] after:delay-1000	dot-flashing" />
          </div>
        )}

        <div className="p-2 gap-4 flex justify-between w-full max-sm:w-[86%]">
          {/* IMAGE CART */}
          <img
            src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`}
            alt="img-cart-tour"
            className="w-[100px] h-[100px] rounded-lg object-cover"
          />

          {/* INFO CART */}
          <div className="w-full leading-4 flex flex-col justify-center max-sm:w-[61%]">
            <span className="m-m text-gry-100 text-fs-12 truncate w-[187px] ">
              {transport.destination}
            </span>

            <span className="m-s-b text-fs-14 truncate w-[187px] max-sm:w-full">
              {transport.name}
            </span>

            {/* TIME TRANSPORT */}
            <div className="flex gap-2 mb-[3px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                width={12}
                height={12}
                alt="icon-calendar"
              />

              <span className=" m-m text-gry-100 text-fs-12">
                {moment(transport.date).format("MM/DD/YYYY")} |{" "}
                {moment(`${transport.date}T${transport.time}`)
                  .format("h:mma")
                  .toLowerCase()}
              </span>
            </div>

            {/* PRICE TRANSPORT */}
            <span className="m-s-b text-fs-14 text-or-100 mb-[3px]">
              MXN $
              {Math.floor(transport.prices)
                .toLocaleString("es-MX", { currency: "MXN" })
                .replace(".00", "")}
              .<sup>{(transport.prices % 1).toFixed(2).slice(2)}</sup>
            </span>

            {/* TYPE AND PEOPLE TOTAL  */}
            <div className="flex gap-3">
              <div className="flex gap-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
                  width={12}
                  height={12}
                  alt="icon-transport"
                />
                <span className=" m-m text-fs-12 text-gry-100">Compartido</span>
              </div>

              <div className="flex gap-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                  width={12}
                  height={12}
                  alt="icon-adult"
                />
                <span className=" m-m text-fs-12 text-gry-100">2</span>
              </div>
            </div>
          </div>
        </div>

        {/* ICON DELETE  CLICK*/}
        {showDelete[transport.id] ? (
          <div
            className={`${
              isLoader && "hidden"
            } transition duration-500 ease-in-out bg-red-100 w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteClick(transport);
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
            className={`${
              isLoader && "hidden"
            }  w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
            onClick={(e) => {
              e.stopPropagation();
              toggleDelete(transport.id);
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
              width={16}
              height={16}
              alt="icon-delete-w"
            />
          </div>
        )}
      </div>
    </>
  );
}
