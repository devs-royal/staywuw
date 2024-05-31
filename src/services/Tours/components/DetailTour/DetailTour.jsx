"use client";

import React, { useContext } from "react";
import { TotalStars } from "@/components/General/Stars";

import GalleryTour from "./GalleryTour";
import LanguageContext from "@/language/LanguageContext";

export default function DetailTour({ tourData }) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div>
      <div className="flex flex-wrap">
        {tourData.typologies.map((value, index) => (
          <div
            key={index}
            className="bg-gry-50 text-gry-100 p-2 w-fit rounded-full mt-4 text-fs-10 m-b"
          >
            {value.description}
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        {/* NAME HOTEL */}
        <div>
          <h1 className="m-b text-fs-28 pt-2">{tourData.name}</h1>
          <TotalStars
            stars={tourData.starRating}
            className="text-fs-8 gap-[1px]"
          />

          {tourData.address && tourData.address !== "NA" && (
            <div className="mt-3 flex mb-[6]">
              <img
                src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
                alt="location"
                width={14}
                height={14}
              />
              <div className="m-m text-fs-13 ml-1 text-gry-70">
                {tourData.address}
              </div>
            </div>
          )}
        </div>

        {/* PRICING */}
        <div className="max-md:hidden flex flex-col items-center">
          <div className="m-b text-[#1a202c]">
            <sup className="text-fs-12">{languageData.cartTour.from}</sup>{" "}
            <span className="text-fs-24">MXN</span>{" "}
            <span className="text-fs-24">
              $
              {Math.floor(tourData.price)
                .toLocaleString("es-MX", { currency: "MXN" })
                .replace(".00", "")}
              .
              <sup className="">
                {(tourData.price % 1).toFixed(2).slice(2)}{" "}
              </sup>
            </span>
          </div>

          {tourData.discount < 0 && (
            <div className="text-fs-12 text-center m-b mt-[5px]">
              <span className="text-gry-100 pr-2">
                MXN $
                {Math.floor(tourData.originalPrice)
                  .toLocaleString("es-MX", { currency: "MXN" })
                  .replace(".00", "")}
                .
                <sup className="">
                  {(tourData.originalPrice % 1).toFixed(2).slice(2)}{" "}
                </sup>
              </span>
              <span className="text-red-100 m-b">{tourData.discount}%</span>
            </div>
          )}

          <div
            className={`bg-grn-30 text-grn-100 p-1 w-fit rounded-md text-fs-8 m-b ${
              tourData.discount < 0 && "mt-[5px]"
            }`}
          >
            {languageData.cart.taxes}
          </div>
        </div>
      </div>

      <GalleryTour images={tourData.images} />
    </div>
  );
}
