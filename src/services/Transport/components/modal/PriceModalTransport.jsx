"use client";

import Image from "next/image";
import { useContext } from "react";

import TransportPriceCart from "./TransportPriceCart";
import ModalTransportContext from "../../context/ModalTransportContext";
import LanguageContext from "@/language/LanguageContext";

export default function PriceModalTransport(props) {
  const { transport } = props;
  const { passenger } = useContext(ModalTransportContext);
  const { languageData } = useContext(LanguageContext);
  return (
    <div className=" w-1/2 max-md:w-full">
      <div className="m-[16px] ">
        {/* CART VEHICLE*/}
        <div className="border border-[#ebebeb] rounded-lg p-[16px] mb-[24px] flex flex-col gap-[8px]">
          <span className="m-s-b text-fs-20 ">{transport.label}</span>

          <div className="py-[8px] px-[16px] text-white bg-black rounded-full w-fit text-fs-12">
            {transport.type === "shared" ? languageData.filterTransport.shared : languageData.filterTransport.private}
          </div>

          <img
            src={transport.image}
            alt="img-transport"
            className="w-[100%] h-[150px] object-cover"
          />

          <div className="flex flex-wrap gap-[8px]">
            {/* PASSENGERS */}
            <div className="flex gap-[8px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-bl.svg`}
                alt="icon adult blue"
                width={12.8}
                height={13.4}
              />

              <span className="text-fs-12 m-m">
                {passenger}/{transport.places} {languageData.modalArrive.subtitlePeople}
              </span>
            </div>

            {/* SUITE CASES */}
            <div className="flex gap-[8px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-bl.svg`}
                alt="icon baggage blue"
                width={10.6}
                height={12.3}
              />
              <span className="text-fs-12 m-m">
                {transport.hand_suitcase / transport.places} {languageData.CardHomeTransport.handLuggage}
              </span>
            </div>

            {/* LARGE SUITE CASES */}
            <div className="flex gap-[8px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-bl.svg`}
                alt="icon baggage blue"
                width={10.6}
                height={12.3}
              />
              <span className="text-fs-12 m-m">
                {transport.large_suitcase / transport.places} {languageData.CardHomeTransport.suitcases}
              </span>
            </div>

            {/* USB */}
            <div className="flex gap-[8px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/general/usb.svg`}
                alt="icon usb"
                width={16}
                height={16}
              />
              <span className="text-fs-12 m-m">{languageData.ModalTransport.charger}</span>
            </div>

            {/* A/C */}
            <div className="flex gap-[8px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/air/air-bl.svg`}
                alt="icon air blue"
                width={13.3}
                height={13.3}
              />
              <span className="text-fs-12 m-m">{languageData.ModalTransport.airConditioning}</span>
            </div>

            <div className="flex gap-[8px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/general/usb.svg`}
                alt="icon usb"
                width={16}
                height={16}
              />
              <span className="text-fs-12 m-m">{languageData.ModalTransport.travelInsurance}</span>
            </div>

            <div className="flex gap-[8px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/general/child-care.svg`}
                alt="icon child-care"
                width={12.8}
                height={13.4}
              />
              <span className="text-fs-12 m-m">{languageData.ModalTransport.babySeat}</span>
            </div>
          </div>

          <div className="bg-grn-30 py-[8px] px-[15px] rounded-bl-lg">
            <span className="text-grn-100 m-s-b text-fs-12">
              {transport.type === "private" ? (
                languageData.ModalTransport.privateService
              ) : (
                languageData.ModalTransport.sharedService
              )}
            </span>
          </div>
        </div>

        {/* PRICE */}
        <TransportPriceCart transport={transport} />
      </div>
    </div>
  );
}
