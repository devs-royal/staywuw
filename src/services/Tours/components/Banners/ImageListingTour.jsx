import React, { useContext } from "react";

// import LanguageContext from "../language/LanguageContext";
import Image from "next/image";
import LanguageContext from "@/language/LanguageContext";

import BannerListingTour from "../../../../assets/icons/utils/others/test-image-listing-tour.webp";

export default function ImageListingTour() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="cont-test-image-listing-tour">
      <Image
        className="image-test-listing-tour"
        src={BannerListingTour}
        alt="banner listing tour"
        width="100%"
        height="100%"
      />
      <div className="cont-text-image-listing-tour">
        <h2 className="text-white-image-listing-tour">
          {languageData.bannerListingTour.TourMexico}
        </h2>
        <span className="text-white-image-listing-tour-s">
          {languageData.cartTour.from}
        </span>
        <h2 className="text-white-image-listing-tour-m">
          $400.00 <span> MXN</span>
        </h2>
      </div>
    </div>
  );
}
