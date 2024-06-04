import React, { useContext } from "react";

// import LanguageContext from "../language/LanguageContext";
import Image from "next/image";
import LanguageContext from "@/language/LanguageContext";

import BannerListingTour from "../../../../assets/icons/utils/others/test-image-listing-tour.webp";

export default function ImageListingTour() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="relative flex items-center justify-center h-[270px] mb-[1rem] rounded-lg">
      <Image
        className="h-full w-full object-cover absolute rounded-lg"
        src={BannerListingTour}
        alt="banner listing tour"
        width="100%"
        height="100%"
      />
      <div className="flex flex-col text-white items-center absolute">
        <h2 className="m-s-b text-fs-32 max-sm:text-fs-28 text-center">
          {languageData.bannerListingTour.TourMexico}
        </h2>
        <span className="m-s-b text-fs-20">
          {languageData.cartTour.from}
        </span>
        <h2 className="text-fs-34 m-s-b">
          $400.00 <span> MXN</span>
        </h2>
      </div>
    </div>
  );
}
