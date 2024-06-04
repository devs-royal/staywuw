import moment from "moment";
import Image from "next/image";
import React, { useContext } from "react";

import { PluralPeople } from "../Utils/PluralPeople";
import LanguageContext from "../../language/LanguageContext";

export default function CardTourConfirmation(props) {
  const { itemActivity } = props;

  const { languageData } = useContext(LanguageContext);

  // DAY OF WEEK
  const dayOfWeek = moment(itemActivity.date).format("dddd");

  return (
    itemActivity && (
      <div className="flex items-start gap-x-2">
        <Image
          className="w-[12px]"
          src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-border.svg`}
          alt="IconLocationBorder"
          width={12}
          height={192}
        />

        <div className="flex flex-col gap-y-[20px] items-start max-sm:w-full">
          <div className="flex gap-x-[5px] m-b text-fs-16">
            <span className="text-or-100 ">
              {languageData.dayOfWeek[dayOfWeek]}
            </span>

            <span className="text-gry-70">{itemActivity.date}</span>
            <span className="text-gry-70">|</span>
            <span className="text-gry-70">02:00pm</span>
          </div>

          {/* ITINERARY CARD */}
          <div className="p-4 max-sm:pl-5 max-sm:pr-[34px] max-sm:py-4 bg-white rounded-lg h-auto max-sm:flex max-sm:flex-col max-sm:w-full">
            <div className="flex gap-x-8">
              {/* IMAGE TOUR */}
              <img
                className="w-[133px] h-[117px] object-cover rounded-lg"
                src={itemActivity.image ? itemActivity.image : ""}
                alt="gallery tour"
                width={133}
                height={117}
              />

              <div className="flex flex-col gap-y-4 justify-center">
                {/* TITLE */}
                <h2 className="m-b text-fs-16 text-black">
                  {itemActivity.name}
                </h2>

                <div className="flex gap-x-[24px]">
                  <div className="flex gap-x-6 items-start">
                    {/* LEFT INFORMATION */}
                    <div className="flex flex-col gap-y-[1]">
                      <div className="flex gap-x-1 items-start">
                        <Image
                          className="w-[11px] h-[14px]"
                          src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                          alt="LocationIcon"
                          width={11}
                          height={14}
                        />

                        <span className="m-s-b text-fs-10 text-gry-100">
                          {itemActivity.address}
                        </span>
                      </div>

                      <div className="flex gap-x-1 items-center">
                        <img
                          className="w-[14px] h-[14px]"
                          src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                          alt="icon-adult"
                          width={14}
                          height={14}
                        ></img>

                        <span className="m-s-b text-fs-10 text-gry-100">
                          {itemActivity.peoples}{" "}
                          <PluralPeople people={itemActivity.peoples} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* INFORMATION DESKTOP */}
                  <div className="hidden sm:flex sm:gap-x-[95px] ">
                    {/* RIGHT INFORMATION */}
                    <div className="flex flex-col gap-y-1">
                      <p className="m-0 text-fs-8 text-gry-100 m-s-b">
                        {languageData.confirmation.cardTour.duration}
                      </p>
                      <h3 className="m-0 text-fs-12 text-black m-s-b">
                        {itemActivity.duration}
                      </h3>
                    </div>

                    {/* PRICE TOUR */}
                    <div className="flex flex-col gap-y-1 items-start mr-[26px]">
                      <p className="text-fs-8 text-gry-100 m-s-b">
                        {languageData.modalTourOptions.taxes}
                      </p>

                      <div className="text-black m-s-b flex gap-x-[2px] items-center">
                        <h3 className="text-fs-12 m-0">MXN</h3>
                        <h3 className="text-fs-16 m-0">
                          {Math.floor(itemActivity.price)
                            .toLocaleString("es-MX", { currency: "MXN" })
                            .replace(".00", "")}
                          .
                          <sup>
                            {(itemActivity.price % 1).toFixed(2).slice(2)}
                          </sup>
                        </h3>
                      </div>

                      {itemActivity.cancelPolicies &&
                        itemActivity.cancelPolicies.length > 0 && (
                          <span className="text-bl-100 !text-fs-8 cursor-pointer m-s-b !block max-lg:!text-left text-center">
                            {languageData.containerModalHotel.policies}
                          </span>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INFORMATION MOBILE */}
            <div className="sm:hidden border-t border-gry-70 mt-2 pt-[16px] w-full flex justify-between">
              {/* RIGHT INFORMATION */}
              <div className="flex flex-col gap-y-1">
                <p className="m-0 text-fs-8 text-gry-100 m-s-b">
                  {languageData.confirmation.cardTour.duration}
                </p>
                <h3 className="m-0 text-fs-12 text-black m-b">
                  {itemActivity.duration}
                </h3>
              </div>

              {/* PRICE TOUR */}
              <div className="flex flex-col gap-y-1 items-start mr-[26px]">
                <p className="text-fs-8 text-gry-100 m-s-b">
                  {languageData.modalTourOptions.taxes}
                </p>

                <div className="text-black m-s-b flex gap-x-[2px] items-center">
                  <h3 className="text-fs-12 m-0">MXN</h3>
                  <h3 className="text-fs-16 m-0">
                    {Math.floor(itemActivity.price)
                      .toLocaleString("es-MX", { currency: "MXN" })
                      .replace(".00", "")}
                    .<sup>{(itemActivity.price % 1).toFixed(2).slice(2)}</sup>
                  </h3>
                </div>

                {itemActivity.cancelPolicies &&
                  itemActivity.cancelPolicies.length > 0 && (
                    <span className="text-bl-100 !text-fs-8 cursor-pointer m-s-b !block max-lg:!text-left text-center">
                      {languageData.containerModalHotel.policies}
                    </span>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
