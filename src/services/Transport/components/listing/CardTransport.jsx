"use client";

import "swiper/css";
import "swiper/css/pagination";

import React, { useContext, useState } from "react";

import ModalTransport from "../modal/ModalTransport";
import LanguageContext from "@/language/LanguageContext";
import CancelPolicyTransport from "../ToolTip/CancelPolicyTransport";
import ListingTransportContext from "../../context/ListingTransportContext";

export default function CardTransport() {
  const [openModal, setOpenModal] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(null);
  const { languageData } = useContext(LanguageContext);
  const { dataTransportF } = useContext(ListingTransportContext);
  const [selectedTransport, setSelectedTransport] = useState(null);

  const openCartDetails = (transport) => {
    setSelectedTransport(transport);
    setOpenModal(true);
  };

  return (
    <>
      {dataTransportF &&
        dataTransportF.map((transport, index) => (
          <div key={index}>
            <div className="shadow-3xl flex border border-gry-50 rounded-lg mb-[10px] bg-white w-full gap-2 my-[20px] max-lg:flex-col lg:h-[194px] max-sm:max-h-[35rem]">
              <div className="w-[30%] relative max-lg:w-full max-lg:h-[225px]">
                <img
                  className="w-full h-full object-contain"
                  src={transport.image}
                  alt="card"
                />

                <div className="absolute bottom-0 w-[100%] h-[13%] bg-black text-white m-b text-fs-12 flex items-center justify-center rounded-bl-lg max-lg:rounded-none">
                  {transport.type === "private" ? languageData.CardHomeTransport.private : languageData.CardHomeTransport.shared}
                </div>
              </div>

              <div className="w-[70%] p-[20px] max-lg:w-full flex justify-between max-md:flex-col">
                <div className="flex flex-col w-full">
                  <h2 className="text-fs-18 m-b mb-0 truncate">
                    {transport.label}
                  </h2>

                  <div className="flex flex-col lg:flex-row w-full">
                    <div className="w-full lg:w-[80%] flex flex-col justify-evenly">
                      <div className="pt-2 pb-[1.2rem]">
                        <span className="text-gry-70 m-b text-fs-12 mr-[8px]">
                          {languageData.CardHomeTransport.typeTrip}
                        </span>
                        <span className="text-fs-14 m-b">
                          {transport.round === false ? languageData.CardHomeTransport.roundTrip : languageData.CardHomeTransport.oneWay }
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex flex-col gap-2">
                          <div className="text-fs-12 flex text-gry-100 items-center text-nowrap truncate">
                            <img
                              className="mr-[5px]"
                              src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                              width={18}
                              height={18}
                              alt="card adult"
                            />{" "}
                            {transport.places} {languageData.CardHomeTransport.people}
                          </div>

                          <div className="text-fs-12 flex text-gry-100 items-center text-nowrap truncate">
                            <img
                              className="mr-[5px]"
                              src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                              width={16}
                              height={16}
                              alt="card baggage"
                            />{" "}
                            {transport.hand_suitcase} {languageData.CardHomeTransport.handLuggage}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="text-fs-12 flex text-gry-100 items-center text-nowrap truncate">
                            <img
                              className="mr-[5px]"
                              src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
                              width={18}
                              height={18}
                              alt="card transport"
                            />{" "}
                            {transport.type === "private"
                              ? languageData.CardHomeTransport.privateService
                              : languageData.CardHomeTransport.sharedService}
                          </div>

                          <div className="text-fs-12 flex text-gry-100 items-center text-nowrap truncate">
                            <img
                              className="mr-[5px]"
                              src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                              width={16}
                              height={16}
                              alt="card baggage"
                            />{" "}
                            {transport.large_suitcase} {languageData.CardHomeTransport.suitcases}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col flex items-end gap-[4px] max-md:flex-row max-md:justify-between max-md:border-t max-md:border-gry-50 max-md:mt-[10px] max-md:pt-[10px max-md:items-center">
                  <div className="flex-col flex items-end gap-[4px]">
                    <div className="pt-1 flex items-center gap-[8px]">
                      <span className="m-m text-fs-12">MXN</span>{" "}
                      <span className="m-b text-fs-20 ">
                        {" "}
                        $
                        {Math.floor(transport.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .<sup>{(transport.price % 1).toFixed(2).slice(2)}</sup>
                      </span>
                    </div>

                    <div
                      onMouseOver={() => setOpenPolicy(index)}
                      onMouseLeave={() => setOpenPolicy(null)}
                    >
                      <span className="relative text-center text-fs-10 m-s-b text-bl-100 cursor-pointer">
                        {languageData.containerModalHotel.policies}
                        {openPolicy === index && <CancelPolicyTransport cancellation={transport.cancellation} />}
                      </span>
                    </div>

                    <div className="m-b bg-[#E0FEF0] text-grn-100 text-fs-10  py-[4px] px-[8px] rounded md:mb-3">
                      {languageData.cartTour.taxesText}
                    </div>
                  </div>

                  <button
                    className="bg-yw-100 py-[10px] px-[50px] rounded-full m-b text-fs-12 hover:bg-yw-110 max-sm:px-[20px]"
                    onClick={() => openCartDetails(transport)}
                  >
                    {languageData.CardHomeTransport.reserveBtn}
                  </button>

                  {selectedTransport && selectedTransport.id === transport.id && openModal && (
                    <ModalTransport
                      isOpen={openModal}
                      onClose={() => setOpenModal(false)}
                      transport={selectedTransport}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}