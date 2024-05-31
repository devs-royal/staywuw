import Image from "next/image";
import React, { useContext } from "react";

import { Others } from "../../config/Others/imagesBanners";
import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";

// import { StepperContext } from "../../config/context/steeperContext";
import TestIBanner from "../../assets/images/others/Test-banner-confirm.jpg";

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
  const isMobile = useIsMobile();
  const { languageData } = useContext(LanguageContext);
  // const { infoReservation } = useContext(StepperContext);

  // const imageBanner = infoReservation && infoReservation.state && infoReservation.state.image ? infoReservation.state.image[0] : null;

  return (
    <div className="success-reservation-images d-flex flex-column">
      <Image
        className={isMobile ? "m-destination-image" : ""}
        style={{aspectRatio: '660/149'}}
        // src={dataConfirmation.state.image}
        src={TestIBanner}
        alt="hotel reservation"
      />
      <div className="m-pdg-con p-4 success-reservation-text d-flex flex-column align-items-center justify-content-center text-center gap-2">
        <h5 className="confirmed-reservation-title">
          <strong> {languageData.confirmation.successPaymentTitle} </strong>
        </h5>
        <h2 className="confirmed-reservation-subtitle">
          {languageData.confirmation.successPaymentText}{" "}
          {/* {dataConfirmation.items[0].destination}! */}
        </h2>
      </div>
    </div>
  );
}
