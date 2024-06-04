"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

import LanguageContext from "../../../language/LanguageContext";
import { BookingContext } from "@/payment/context/BookingContext";
import { SkeletonConfirmPaymentDetails } from "../../../utils/skeleton/SkeletonConfirmPaymentDetails";

export default function ReservationShortInfo(props) {
  const { setSmShow, dataItinerary } = props;

  const { infoReservation } = useContext(BookingContext);
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return infoReservation ? (
    <>
      <div className="flex py-[32px] px-[24px] flex-col items-start gap-y-[32px] rounded-[8px] w-full lg:shadow-[1px_0px_20px_1px_rgba(189,183,183,0.75)] lg:mb-[35px] h-max top-0 right-0 bg-white lg:mt-[3.2rem]">
        <div className="flex !p-4 flex-col bg-grn-20 !border border-grn-100 gap-y-2 lg:gap-y-4 rounded-[8px] w-full">
          <div className="flex gap-x-[8px] items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/check/check-g.svg`}
              alt="check icon reservation"
              width={16}
              height={16}
            />

            <span className="text-fs-16 text-black m-b left-[8px]">
              {languageData.confirmation.confirmationNumber}
            </span>
          </div>

          <div className="text-gry-100 text-fs-24 m-b">
            {infoReservation.booking.reference}
          </div>

          <div className="text-black text-fs-12 m-s-b">
            {languageData.confirmation.textInformative}
          </div>
        </div>

        <div className="flex flex-col !gap-y-4 w-full">
          <div className="text-black text-fs-20 m-b ">
            {languageData.confirmation.reservationDetails}
          </div>

          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.titular}
              </span>

              <span className="m-m text-fs-12 text-gry-100">
                {infoReservation.booking.name}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.bookingData.typePay}
              </span>

              <span className="m-m text-fs-12 text-gry-100">
                {infoReservation.payment.type}
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="m-s-b text-fs-12 text-gry-100">
              {languageData.confirmation.email}
            </span>

            <email className="m-m text-fs-12 text-gry-100">
              {infoReservation.booking.email}
            </email>
          </div>

          <div className="flex flex-col">
            <span className="m-s-b text-fs-12 text-gry-100">
              {languageData.confirmation.phone}
            </span>

            <tel className="m-m text-fs-12 text-gry-100">
              {infoReservation.booking.phone}
            </tel>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-4">
          <div className="m-b text-fs-20 text-black">
            {languageData.confirmation.infoPayment}
          </div>

          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.titular}
              </span>

              <span className="m-m text-fs-12 text-gry-100">
                {infoReservation.payment.titular}
              </span>
            </div>

            <div className="flex flex-col mr-[30px]">
              <span className="m-s-b text-fs-12 text-gry-100">
                {" "}
                {languageData.confirmation.bookingData.titleBookingData}
              </span>
              <span className="m-m text-fs-12 text-gry-100">
                xxxx xxxx xxxx {infoReservation.payment.cardDigits}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.bookingData.dateBooking}
              </span>

              <span className="m-m text-fs-12 text-gry-100">
                {infoReservation.booking.date}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.bookingData.reference}
              </span>

              <span className="m-m text-fs-12 text-gry-100">
                {infoReservation.payment.reference}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full !border border-gry-50 h-auto" />

        <div className="w-full flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-[4px]">
            <span className="text-black text-fs-10 m-b mb-[4px]">
              {languageData.confirmation.cancellations}
            </span>

            <span className="text-fs-10 m-s-b text-gry-100">
              {languageData.confirmation.cancellationsText}
            </span>
          </div>

          <a
            className="!border border-bl-100 !py-2 !px-4 rounded-full text-center text-bl-100 bg-white no-underline	text-fs-12 m-b w-max"
            href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
            target="_blank"
            rel="noopener noreferrer"
          >
            {languageData.confirmation.doubts}
          </a>
        </div>
      </div>

      {dataItinerary && (
        <>
          <div className="sticky bottom-0 lg:hidden flex justify-between py-[1.5rem] px-[1.5rem] bg-bl-100 rounder-t-xl items-center">
            <div className="d-flex flex-column gap-y-1">
              <span className="text-white text-fs-16 m-b">Total</span>

              <div className="flex items-end gap-x-1 text-white m-b">
                <p className="mb-[3px] text-fs-14">MXN</p>
                <p className="text-fs-20 m-0">
                  $
                  {Math.floor(dataItinerary.summary.totalCurrentPrice)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .
                  <sup>
                    {(dataItinerary.summary.totalCurrentPrice % 1)
                      .toFixed(2)
                      .slice(2)}
                  </sup>
                </p>
              </div>
            </div>

            <bottom
              onClick={setSmShow}
              className="rounded-full py-[6.8px] bg-or-100 !px-4 flex items-center gap-x-2 text-white text-fs-10 m-b"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/share/share-w.svg`}
                alt="share icon reservation"
                className="!w-4 h-[18px]"
                width={14}
                height={18}
              />
              {languageData.shareLink.titleShare}
            </bottom>
          </div>
        </>
      )}
    </>
  ) : (
    <SkeletonConfirmPaymentDetails />
  );
}
