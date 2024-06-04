"use client";

import Image from "next/image";
import React, { useState } from "react";

import { useCartAxios } from "../CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export default function CartTourT(props) {
  const { cartId, activity, setIsLoader, isLoader } = props;

  const { setItinerary, removeActivityById } = useCartAxios();
  const [loadingTours, setLoadingTours] = useState({});

  // TOTAL TOURIST
  const totalTourist = (tourists) => {
    return tourists.categories.reduce(
      (acc, person) => acc + person.quantity,
      0
    );
  };

  const [deleteTour, setDeleteTour] = useState({});

  const handleDelete = (tourId) => {
    const updatedShowDelete = { ...deleteTour };
    updatedShowDelete[tourId] = !updatedShowDelete[tourId];
    setDeleteTour(updatedShowDelete);
  };

  const removeTour = (tour) => {
    const activityId = tour.id;

    setIsLoader(true);
    setLoadingTours((prevLoadingTours) => ({
      ...prevLoadingTours,
      [tour.id]: true,
    }));

    axiosWithInterceptor
      .delete(`v1/carts/${cartId}/activity/${activityId}`)
      .then((response) => {
        removeActivityById(activityId);
        setDeleteTour({ ...deleteTour });
        setItinerary(Math.floor(Math.random() * 100) + 1);
        setLoadingTours({});
        setIsLoader(false);
      })
      .catch((error) => {
        setIsLoader(false);
        console.error("Error al eliminar la actividad:", error);
      });
  };

  return (
    <div>
      {/* CARD CART TOUR */}
      <div className="flex relative rounded-lg hover:bg-[#efefef] mb-3 mr-[16px] max-sm:w-[98%]">
        {/* deleteTour[activity.id] && */}
        {loadingTours[activity.id] && (
          <div className="absolute flex justify-center items-center w-full h-full backdrop-contrast-50">
            <div className="relative w-[8px] h-[8px] rounded-[5px] bg-bl-100 text-bl-100 animate-[dot-flashing_1s_infinite_linear_alternate] before:content-[' '] before:block before:absolute before:top-0 before:left-[15px] before:w-[8px] before:h-[8px] before:rounded-[5px] before:bg-bl-100 before:text-bl-100 before:animate-[dot-flashing_1s_infinite_alternate] before:delay-0 after:content-[' '] after:block after:absolute after:top-0 after:left-[30px] after:w-[8px] after:h-[8px] after:rounded-[5px] after:bg-bl-100 after:text-bl-100 after:animate-[dot-flashing_1s_infinite_alternate] after:delay-1000	dot-flashing" />
          </div>
        )}
        <div className="p-2 gap-4 flex justify-between w-full max-sm:w-[86%]">
          {/* IMAGE CART */}
          <img
            src={activity.image}
            alt="img-cart-tour"
            className="w-[100px] h-[100px] rounded-lg object-cover"
          />

          {/* INFO CART */}
          <div className="w-full leading-4 flex flex-col justify-center max-sm:w-[61%]">
            <span className="m-m text-gry-100 text-fs-12 truncate w-[187px] ">
              {activity.destination}
            </span>

            <span className="m-s-b text-fs-14 truncate w-[187px] max-sm:w-full">
              {activity.name}
            </span>

            <div className="flex gap-2 mb-[3px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                width={12}
                height={12}
                alt="icon-calendar"
              />

              <span className=" m-m text-gry-100 text-fs-12">
                {activity.date} | {activity.time}
              </span>
            </div>

            <span className="m-s-b text-fs-14 text-or-100 mb-[3px]">
              MXN ${activity.price}
            </span>

            <div className="flex gap-3">
              <div className="flex gap-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                  width={12}
                  height={12}
                  alt="icon-adult"
                />
                <span className=" m-m text-fs-12 text-gry-100">
                  {totalTourist(activity.tourists)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ICON DELETE */}

        {deleteTour[activity.id] ? (
          <div
            className={`${
              isLoader && "hidden"
            } transition duration-500 ease-in-out bg-red-100 w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
            onClick={(e) => {
              e.stopPropagation();
              removeTour(activity);
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
              handleDelete(activity.id);
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
      {/* END CART TOUR */}
    </div>
  );
}
