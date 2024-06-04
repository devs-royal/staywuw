import { ShareContainer } from "@/utils/booking/ShareContainer";
import Image from "next/image";
import { BookingContext } from "../context/BookingContext";
import { useContext } from "react";
import LanguageContext from "@/language/LanguageContext";

export function TotalPriceBL({ smShow, handleCloseModal, handleIconClick }) {
  const { infoReservation } = useContext(BookingContext);
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="hidden lg:flex justify-between mt-[1.6rem] w-full py-[0.9rem] pl-[40px] !pr-4 bg-bl-100 rounded-bl-[2.4rem] !pr-4 !rounded-br-lg">
      <span className="flex items-center gap-x-1 text-white m-b text-fs-14">
        {languageData.confirmation.bookingData.numberConfirmation}:
        <div className="h-[20px] !px-2 !py-1 bg-grn-10 rounded text-fs-10 m-b text-grn-100 text-center">
          {infoReservation.booking.reference}
        </div>
      </span>

      <div className="flex flex-row gap-4 items-center">
        <span className="flex gap-x-2 text-white m-b text-fs-16 items-center">
          {languageData.confirmation.total}

          <p className="text-fs-20 m-0">
            $
            {Math.floor(infoReservation.totalPrice)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .<sup>{(infoReservation.totalPrice % 1).toFixed(2).slice(2)}</sup>
          </p>
        </span>

        <button
          className="bg-or-100 rounded-full flex gap-2 py-2 px-4"
          onClick={handleIconClick}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}icons/share/share-w.svg`}
            alt="icon-share"
            width={16}
            height={18}
          />

          <span className="m-b text-white text-fs-12">
            {languageData.shareLink.titleShare}
          </span>
        </button>

        <ShareContainer smShow={smShow} handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );
}
