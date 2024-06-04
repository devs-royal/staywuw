import { useContext } from "react";
import LanguageContext from "@/language/LanguageContext";

export function NotFoundDestination() {
  const {languageData} = useContext(LanguageContext);
  return (
    <div className="flex space-between items-center justify-around mt-4 sticky top-[9.25rem]">
      <div>
        <img
          alt={languageData.allAlt.altBannerNavigation}
          src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/NoAvailabilityHotels.svg`}
        />
      </div>

      <div>
        <div className="m-b text-fs-22 text-black">¡Ups!</div>
        <div className="m-s text-fs-18 text-[#1A202C] mt-2 mb-2">
          {languageData.filtersTour.noAvailability}
        </div>
      </div>
    </div>
  );
}
