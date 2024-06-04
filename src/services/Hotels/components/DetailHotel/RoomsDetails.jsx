"use client";

// CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../../assets/styles/general/Swiper.css";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useEffect } from "react";

import AddPreCartHotel from "./AddPreCartHotel";
import ToolTipRefundable from "../ToolTip/Tooltip";
import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "../../context/RoomsHotelContext";
import { RoomsSelectedSkeleton } from "../Skeleton/HotelInformationSkeleton";

import {
  parseQueryParams,
  formatAdultsAndChildren,
} from "../../utils/utilsDetailHotel";

export default function RoomsDetails(codeHotel) {
  const { languageData } = useContext(LanguageContext);
  const {
    roomsData,
    handleFetchPostRooms,
    selectedRooms,
    setRequestBodyRooms,
  } = useContext(RoomsHotelContext);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryParams = parseQueryParams(urlSearchParams, codeHotel);
    setRequestBodyRooms(queryParams);
    handleFetchPostRooms(queryParams);
  }, []);

  // Filter rooms to avoid visual duplicates, except selected ones
  const filteredGroupedRooms = roomsData
    ? Object.entries(
      roomsData.rooms.reduce((acc, room) => {
        if (!acc[room.name]) {
          acc[room.name] = [];
        }
        acc[room.name].push(room);
        return acc;
      }, {})
    ).reduce((acc, [groupName, rooms]) => {
      const filteredRooms = rooms.filter(
        (room) =>
          !selectedRooms.some(
            (selectedRoom) => selectedRoom.idRoom === room.idRoom
          ) ||
          selectedRooms.some(
            (selectedRoom) =>
              selectedRoom.idRoom === room.idRoom &&
              selectedRoom.rateIndex === room.rateIndex
          )
      );
      acc[groupName] = filteredRooms;
      return acc;
    }, {})
    : {};

  if (!roomsData) {
    return <RoomsSelectedSkeleton />;
  }

  return (
    <>
      <h4 className="text-gry-100 text-fs-12 m-s-b mt-6 mb-9 w-max ml-auto mr-auto lg:mx-0 ">
        <span>
          {roomsData.totalRooms} {languageData.modalHotel.roomsFound}
        </span>
      </h4>

      {Object.entries(filteredGroupedRooms).map(([roomType, rooms]) => {
        // Renderiza solamente si hay habitaciones disponibles
        if (rooms.length > 0) {
          return (
            <div key={roomType} className="mb-[4rem] ">
              <h2 className="text-fs-14 text-black m-b mb-4 ml-auto mr-auto lg:mx-0 w-max pr-4 ">
                {roomType}
              </h2>
              <div className="relative pr-4 lg:pr-9">
                <Swiper
                  id="room-details"
                  className="mySwiper"
                  slidesPerView={4}
                  spaceBetween={16}
                  navigation
                  modules={[Navigation]}
                  breakpoints={{
                    300: {
                      slidesPerView: 1.1,
                    },
                    500: {
                      slidesPerView: 1.4,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1010: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {rooms.map((room, index) => {
                    const isSelected = selectedRooms.some(
                      (selectedRoom) =>
                        selectedRoom.idRoom === room.idRoom &&
                        selectedRoom.rateIndex === room.rateIndex
                    );

                    return (
                      <SwiperSlide
                        key={index}
                        className={`bg-transparent shadow-sm rounded-lg ${isSelected ? "border-2 border-bl-70" : ""
                          }`}
                      >
                        <div
                          className="p-4 rounded-lg border border-gry-30 bg-white"
                        >
                          <div className="flex flex-col gap-y-4 ">
                            {/* IMAGE ROOM */}
                            <div className="relative w-full h-[222px] overflow-hidden rounded-lg">
                              <img
                                src={room.image}
                                className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-105"
                                width={40}
                                height={40}
                                alt="room"
                              />

                              {/* EATING PLAN */}
                              <div className="absolute w-full bottom-0 left-0 bg-black rounded-b-lg flex justify-center items-center">
                                <span className="m-b text-white text-fs-12 p-2">
                                  {room.eatingPlan}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col gap-y-1">
                              <p className="m-s-b text-fs-12 text-black text-start m-0">
                                {languageData.containerModalHotel.capacityRoom}
                              </p>

                              <div className="flex flex-wrap gap-y-2 gap-x-2 ">
                                {/* OCCUPANCIES */}
                                <div className="flex gap-x-[4px]">
                                  <img
                                    src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                                    className="w-[14px] h-[14px]"
                                    alt="adult"
                                  />
                                  <span className="m-s-b text-fs-12 text-gry-100">
                                    {formatAdultsAndChildren(
                                      room.adultChildren
                                    )}
                                  </span>
                                </div>

                                {/* BEDS */}
                                {room.beds &&
                                  room.beds.map((bed, index) => (
                                    <div
                                      key={index}
                                      className="flex gap-x-[4px]"
                                    >
                                      <img
                                        src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                                        className="w-[14px] h-[14px]"
                                        alt="room"
                                      />
                                      <span className="m-s-b text-fs-12 text-gry-100">
                                        {bed.number} {bed.type}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            </div>

                            <div className="flex flex-col gap-y-2">
                              <p className="m-s-b text-fs-12 text-black text-start m-0">
                                {languageData.modalTour.amenities}
                              </p>

                              <div className="flex flex-wrap gap-x-[8px]">
                                <img
                                  src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                                  alt="amenities"
                                  className="h-[15px] w-auto"
                                />
                                <img
                                  src={`${process.env.NEXT_PUBLIC_URL}icons/air/air-b.svg`}
                                  alt="amenities"
                                  className="h-[15px] w-auto"
                                />
                                <img
                                  src={`${process.env.NEXT_PUBLIC_URL}icons/water/water-b.svg`}
                                  alt="amenities"
                                  className="h-[15px] w-auto"
                                />
                              </div>
                            </div>

                            {/* CANCELLATIONS NOR OR NRF */}
                            {/* NOR = refundable */}
                            <div className="flex flex-col gap-y-2">
                              {room.cancellationCode === "NOR" && (
                                <span className="flex text-fs-12 gap-x-1 items-center">
                                  <img
                                    src={`${process.env.NEXT_PUBLIC_URL}icons/check/check-g.svg`}
                                    alt="amenities"
                                    className="h-[12px] w-auto"
                                  />{" "}
                                  <p className="m-b m-0 text-fs-11 text-grn-100">
                                    {languageData.itinerary.refundable}
                                  </p>
                                </span>
                              )}

                              {/* NRF = no Refundable */}
                              {room.cancellationCode === "NRF" && (
                                <span className="flex text-fs-12 gap-x-1 items-center">
                                  <img
                                    src={`${process.env.NEXT_PUBLIC_URL}icons/error/error-r.svg`}
                                    alt="amenities"
                                    className="h-[12px] w-auto"
                                  />{" "}
                                  <p className="m-m m-0 text-fs-12 text-black">
                                    {languageData.itinerary.nonRefundable}
                                  </p>
                                </span>
                              )}

                              {/* POLICY ROOM  */}
                              <ToolTipRefundable room={room} />
                            </div>
                          </div>

                          <span className="border border-gry-30 w-full mt-4 mb-4 flex" />

                          <div className="flex justify-between items-center">
                            {/* PRICE ROOM  */}
                            <div className="flex flex-col gap-y-1">
                              <span className="m-b text-fs-18 text-black">
                                {room.currency} $
                                {Math.floor(room.price)
                                  .toLocaleString("es-MX", { currency: "MXN" })
                                  .replace(".00", "")}
                                .
                                <sup>
                                  {(room.price % 1).toFixed(2).slice(2)}
                                </sup>
                              </span>

                              <div className="rounded bg-grn-30 text-grn-100 m-m text-fs-10 py-1 px-2 w-max">
                                {languageData.cart.taxes}
                              </div>
                            </div>

                            {/* <AddPreCartHotel room={room} /> */}
                            {/* {!isSelected && <AddPreCartHotel room={room} />} */}

                            {isSelected ? (
                              <div className="text-center text-fs-12 text-bl-100 m-b w-min">
                                {languageData.modalHotel.selectedRoom}
                              </div>
                            ) : (
                              <AddPreCartHotel room={room} />
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
