import Image from "next/image";
import React, { useContext } from "react";

import { Others } from "../../config/Others/imagesBanners";
import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
import { BookingContext } from "@/payment/context/BookingContext";

export function BannerPaymentConfirmed() {
  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();

  return (
    <picture className="content-image-comunication">
      <a href="tel:8009530342" target="_blank" rel="noopener noreferrer">
        <Image
          className={isMobile ? "image-confirmed-payment-b" : ""}
          src={Others.bannerConfirmPayment.image}
          alt={Others.bannerConfirmPayment.alt}
          width="100%"
          height="82%"
        />
        <div className="position-new-titles-listing">
          <h2 className="text-image-new-h2-call">
            {languageData.titleBanners[Others.bannerConfirmPayment.title]}
          </h2>
          <h4 className="text-image-nex-h4-call">
            {languageData.titleBanners[Others.bannerConfirmPayment.paragraph]}{" "}
            <span className="span-new-text">
              {languageData.titleBanners.titleNumber}
            </span>
          </h4>
        </div>
      </a>
    </picture>
  );
}

export function BannerState() {
  // const isMobile = useIsMobile();
  const { languageData } = useContext(LanguageContext);
  const { infoReservation } = useContext(BookingContext);

  return (
    <div className="w-full flex flex-col">
      <Image
        className="max-md:h-[11rem] w-full object-cover"
        src={infoReservation.state.image[0]}
        alt="hotel reservation"
        width={1167}
        height={227}
      />

      <div className="flex flex-col py-7 !px-4 bg-bl-100 items-center rounded-b-lg gap-y-1 md:gap-y-4">
        <div className="md:hidden flex bg-white rounded-full w-full py-2 px-4 mb-[2px] items-center justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
            alt="infotype stay-wuw"
            width={16}
            height={14}
            className="!w-4 h-3.5 mr-[4px]"
          />

          <p className="m-0 m-s-b text-fs-12 text-gry-100 mr-[2px]">
            {languageData.confirmation.bookingData.numberConfirmation}
          </p>

          <p className="m-0 py-1 px-2 rounded bg-grn-30 text-grn-100 m-b text-fs-14">
            {infoReservation.booking.reference}
          </p>
        </div>

        <h5 className="m-b text-white text-fs-20 md:text-fs-28 text-center">
          {languageData.confirmation.successPaymentTitle}
        </h5>

        <h2 className="text-white text-fs-12 md:text-fs-16 m-m text-center">
          {languageData.confirmation.successPaymentText}{" "}
        </h2>
      </div>
    </div>
  );
}
