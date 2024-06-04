import Image from "next/image";
import React, { useContext } from "react";

import ReservationShortInfo from "./DetailReservation";
import { BookingContext } from "@/payment/context/BookingContext";
import DetailsPayment from "./DetailsPayment";


export function DialogItineraryMobile(props) {
  const { dataItinerary, setChangeButton, setSmShow } = props;

  const { step, openDialog, setOpenDialog } = useContext(BookingContext);

  return (
    openDialog && (
      // backdrop-brightness-50
      <div className={`h-full sticky bottom-0 w-full z-[2]`}>
        <div className="!m-0 h-full lg:hidden">
          <div className={`pt-[41px] ${step !== 3 ? "!h-full flex items-end" : "h-auto"}`}>
            <div className={`bg-white !border border-gry-70 w-full relative ${step !== 3 ? 'h-fit' : 'h-full'}`}>
              {/* CLOSE DIALOG */}
              <div
                className="absolute w-[40px] h-[40px] rounded-full flex justify-center bg-white z-[3] items-center top-[-14px] left-0 right-0 mx-auto shadow-[0px_-12px_12px_-11px_rgba(0,0,0,0.75)] cursor-pointer"
                onClick={() => setOpenDialog(false)}
              >
                <Image
                  className="w-[14px] h-[7px] absolute top-[16px]"
                  alt="close-dialog-modal"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-70.svg`}
                  width={14}
                  height={7}
                />
              </div>

              {step !== 3 ? (
                <DetailsPayment
                  data={dataItinerary}
                  step={step}
                  setChangeButton={setChangeButton}
                />
              ) : (
                <ReservationShortInfo
                  setSmShow={setSmShow}
                  dataItinerary={dataItinerary}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
