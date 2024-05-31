"use client";
import LanguageContext from "@/language/LanguageContext";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export function LimitPriceAlert() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="rounded-md bg-red-50 p-4 w-[25rem]">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {languageData.alertsPayment.alertAmount}
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p className="m-0 text-wrap">
              {languageData.alertsPayment.alertAmountText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReservationFailed() {
  const { isFailedReservation, setIsFailedReservation } = useContext(RoomsHotelContext);
  const { languageData } = useContext(LanguageContext);

  return (
    isFailedReservation && (
      <>
        <div
          className="absolute w-full h-full backdrop-brightness-50 left-0 bottom-0 z-[3]"
          onClick={() => setIsFailedReservation(false)}
        />

        <a
          className="sticky mx-auto bottom-2/4 w-max bg-white rounded-lg z-[4] p-6 flex flex-col justify-center items-center no-underline"
          href="tel:8009530342"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-max flex gap-y-3 flex-col justify-center items-center cursor-pointer gap-x-2.5">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}royal/logo.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} logo`}
              width={200}
              height={100}
            />

            <p className="m-s-b text-fs-16 m-0 text-bl-100">
              {languageData.Alerts.hotel.title}
            </p>

            <div className="flex items-center gap-x-1 justify-center">
              <img
                src={`${process.env.NEXT_PUBLIC_URL}icons/tel/tel-b.svg`}
                alt="icon-telephone"
                width="20px"
                height="20px"
              />

              <span className="hover:!text-or-100 no-underline text-black">
                {languageData.navBar.contact}{" "}
                <span className="m-b">{languageData.footer.contact.phone}</span>
              </span>
            </div>
          </div>
        </a>
      </>
    )
  );
}
