import moment from "moment";
import Image from "next/image";
import React, { useContext } from "react";

import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "../../language/LanguageContext";
import { ImageNotFound } from "../../config/Others/ImageNotFound";

export default function CardHotelConfirmation(props) {
  const { languageData } = useContext(LanguageContext);
  const { itemHotel } = props;
  const dateFormatCheckIn = moment(itemHotel.checkIn).format("DD/MM/YY");
  const dateFormatCheckOut = moment(itemHotel.checkOut).format("DD/MM/YY");
  const dayOfWeek = moment(itemHotel.date).format("dddd");

  // const totalRooms = itemHotel.rooms.length;

  return (
    <div className="flex gap-x-2 items-start">
      <Image
        className="w-[12px]"
        src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-border.svg`}
        alt="IconLocationBorder"
        width={12}
        height={192}
      />

      <div className="flex flex-col gap-y-5 max-sm:w-full">
        {/* DAY,TIME HOTEL */}
        <div className="max-md:flex-col flex gap-x-4">
          <div className="text-fs-16 m-b">
            <span className="text-or-100">
              {languageData.dayOfWeek[dayOfWeek]}
            </span>{" "}
            <span className="text-gry-70">{dateFormatCheckIn}</span>{" "}
            <span className="text-gry-70">|</span>{" "}
            <span className="text-gry-70">14:00pm</span>
          </div>

          <ul className="tex-fs-16 m-b list-disc list-inside list-gry-70">
            <li>
              <span className="text-black">Check out</span>{" "}
              <span className="text-gry-70">{dateFormatCheckOut} </span>
              <span className="text-gry-70">- </span>
              <span className="text-gry-70">02:00pm</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col rounded-lg bg-white p-4 w-full">
          {/* FATHER ONE */}

          <div className="flex gap-x-4 sm:gap-x-7 items-center">
            <div className=" w-[132px] h-[114px]">
              {/* <div className="w-[77px] h-[66px] sm:w-[132px] sm:h-[114px]"> */}
              {itemHotel.image ? (
                <img
                  src={itemHotel.image}
                  alt="hotel"
                  width={132}
                  height={114}
                  className="rounded-lg w-full h-full"
                />
              ) : (
                <ImageNotFound />
              )}
            </div>

            <div className="flex flex-col max-sm:gap-y-[4px]">
              <div className="flex flex-col">
                <h2 className="text-fs-16 text-black m-b">{itemHotel.name}</h2>
                <TotalStars stars={itemHotel.stars} width={12} height={12} />
              </div>

              <div className="flex gap-x-[165px]">
                {/* LEFT INFORMATION */}
                <div className="flex flex-col gap-y-1 items-start">
                  <span className="flex items-center gap-x-1">
                    <Image
                      className="w-[12px]"
                      src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                      alt="IconLocationBorder"
                      width={12}
                      height={192}
                    />
                    <p className="m-0 text-fs-10 m-s-b text-gry-100">
                      {itemHotel.address}
                    </p>
                  </span>

                  <span className="max-sm:hidden flex gap-x-4">
                    <div className="flex gap-x-1 items-center">
                      <Image
                        className="w-[12px]"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                        alt="IconLocationBorder"
                        width={12}
                        height={192}
                      />

                      <p className="m-0 text-fs-10 m-s-b text-gry-100 flex flex-wrap">
                        {itemHotel.totalAdults} {languageData.modalHotel.adults}{" "}
                        {itemHotel.totalChildren}{" "}
                        {languageData.modalHotel.children}
                      </p>
                    </div>

                    <div className="flex gap-x-1 items-center">
                      <Image
                        className="w-[12px]"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                        alt="IconLocationBorder"
                        width={12}
                        height={192}
                      />

                      <p className="m-0 text-fs-10 m-s-b text-gry-100 flex flex-wrap">
                        {itemHotel.totalRooms}{" "}
                        {languageData.itinerary.detailsPayment.rooms}
                      </p>
                    </div>
                  </span>
                </div>

                {/* PRICE HOTEL */}
                <div className="max-sm:hidden flex flex-col gap-y-1 items-start mr-[22px]">
                  <p className="m-0 m-m text-fs-8 text-gry-100 ">
                    {languageData.cartTour.taxesText}
                  </p>

                  <span className="m-b text-black flex gap-x-[2px] items-center">
                    <p className="m-0 text-fs-12">MXN </p>
                    <p className="m-0 text-fs-16">
                      $
                      {Math.floor(itemHotel.price)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(itemHotel.price % 1).toFixed(2).slice(2)}</sup>
                    </p>
                  </span>

                  {/* PYC */}
                  {/* <p className="text-fs-8 m-b text-bl-100 m-0">
                    {languageData.containerModalHotel.policies}
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE DETAILS */}
          <div className="sm:hidden flex justify-between items-start pt-[7.5px] mt-[7.5px] border-t border-gry-70 pb-2 border-b">
            <div className="flex flex-col gap-y-[2px]">
              <span className="flex gap-x-[4px] items-center py-[2px]">
                <Image
                  className="w-[12px]"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                  alt="IconLocationBorder"
                  width={12}
                  height={192}
                />

                <p className="m-0 text-fs-10 m-s-b text-gry-100 flex flex-wrap">
                  {itemHotel.totalAdults} {languageData.modalHotel.adults}{" "}
                  {itemHotel.totalChildren} {languageData.modalHotel.children}
                </p>
              </span>

              <span className="flex items-center gap-x-[4px] py-[2px]">
                <Image
                  className="w-[12px]"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                  alt="IconLocationBorder"
                  width={12}
                  height={192}
                />

                <p className="m-0 text-fs-10 m-s-b text-gry-100 flex flex-wrap">
                  {itemHotel.rooms.length} {/* {itemHotel.totalRooms}{" "} */}
                  {languageData.itinerary.detailsPayment.rooms}
                </p>
              </span>
            </div>

            <div className="flex items-end flex-col gap-y-[4px]">
              <p className="m-0 m-m text-fs-8 text-gry-100 ">
                {languageData.cartTour.taxesText}
              </p>

              <span className="m-b text-black flex gap-x-[2px] items-center">
                <p className="m-0 text-fs-12">MXN </p>
                <p className="m-0 text-fs-16">
                  $
                  {Math.floor(itemHotel.price)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(itemHotel.price % 1).toFixed(2).slice(2)}</sup>
                </p>
              </span>

              {/* PYC */}
              {/* <p className="text-fs-8 m-b text-bl-100 m-0">
                    {languageData.containerModalHotel.policies}
                  </p> */}
            </div>
          </div>

          <div className="mt-[24px]">
            <p className="m-0 text-or-100 text-fs-10 m-s-b mb-4">
              {languageData.itinerary.roomsYouReserved}
            </p>

            {/* CONTAINER ROOMS */}
            <div className="bg-gry-50 rounded-lg p-4">
              {itemHotel.rooms &&
                itemHotel.rooms.map((roomInfo, index) => (
                  <div
                    key={index}
                    className={`${
                      itemHotel.rooms.length - 1 !== index &&
                      "border-b border-gry-70 pb-[19px] mb-[19px]"
                    } flex flex-col gap-y-16px`}
                  >
                    {/* ROOMS NAME */}
                    <h3 className="m-0 text-black m-b text-fs-12">
                      x{roomInfo.quantity} {roomInfo.name}
                    </h3>

                    <div className="flex gap-x-8 gap-y-[8px] flex-wrap">
                      {roomInfo.occupancies &&
                        roomInfo.occupancies.map((roomBed, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-y-2 items-start"
                          >
                            <div className="flex gap-x-1 items-center">
                              {/* ROOM NUMBER */}
                              <p className="m-o text-fs-8 m-s-b text-gry-100 flex gap-x-[3px]">
                                {languageData.itinerary.detailsPayment.room}{" "}
                                {index + 1}
                              </p>

                              {/* RESERVATION NUMBER */}
                              <p className="sm:hidden flex items-center gap-x-1 py-1 px-2 rounded-sm bg-grn-50 text-center text-fs-8 m-b text-grn-100 m-0">
                                {languageData.confirmation.reservationNo}
                                <span>#{roomBed.reference}</span>
                              </p>
                            </div>

                            <div className="flex items-center gap-x-4">
                              {/* TOTAL ADULTS AND CHILDREN */}
                              <div className="flex items-center gap-[4px]">
                                <img
                                  className="w-[14px] h-[14px]"
                                  src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                                  width={14}
                                  height={14}
                                  alt="icon-adult-b"
                                />

                                <span className="flex gap-x-[4px] text-fs-10 text-gry-100 m-s-b">
                                  {roomBed.adults}{" "}
                                  {languageData.modalHotel.adults}{" "}
                                  {roomBed.children}{" "}
                                  {languageData.modalHotel.children}
                                </span>
                              </div>

                              {/* ROOMS LIST DETAILS */}
                              <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {roomBed.beds &&
                                  roomBed.beds.map((bed, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center gap-x-1"
                                    >
                                      <Image
                                        className="w-[9px] h-[9px]"
                                        src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                                        alt="RoomIcon"
                                        width={9}
                                        height={9}
                                      />
                                      <span className="text-grey-card-hotel-i">
                                        {bed.number} {bed.type}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            </div>

                            {/* POLICY CANCELATION */}
                            {roomBed.cancelPolicies &&
                              roomBed.cancelPolicies.cancellationCode && (
                                <div className="flex items-center gap-x-2">
                                  <Image
                                    src={`${process.env.NEXT_PUBLIC_URL}icons/${
                                      roomBed.cancelPolicies
                                        .cancellationCode === "NOR"
                                        ? "error/error-r.svg"
                                        : "done/done-g.svg"
                                    }`}
                                    width={10}
                                    height={10}
                                    alt={`${
                                      roomBed.cancelPolicies
                                        .cancellationCode === "NOR"
                                        ? "error icon confirmation"
                                        : "done icon confirmation"
                                    }`}
                                    className="w-[10px] h-[10px]"
                                  />
                                  <p
                                    className={`m-0 text-fs-10 m-s-b ${
                                      roomBed.cancelPolicies
                                        .cancellationCode === "NOR"
                                        ? "text-gry-100"
                                        : "text-grn-100"
                                    }`}
                                  >
                                    {roomBed.cancelPolicies.cancellationCode ===
                                    "NOR"
                                      ? languageData.itinerary.nonRefundable
                                      : languageData.itinerary.refundable}
                                  </p>
                                </div>
                              )}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
