import React, { useContext } from "react";

import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";

// import LanguageContext from "../../../language/LanguageContext";

// import { useTourContext } from "../../Context/ListingTourContext";

// import { ReactComponent as IconRoyal } from "../../../assets/icons/utils/payment/icon-royal-vacations.svg";
// import { ReactComponent as IconCallW } from "../../../assets/icons/utils/navigation/call-center-w.svg";

export function BannerDestinationTour(props) {
  const { destination } = props;
  // const { totalResults } = useTourContext();
  const { languageData } = useContext(LanguageContext);

  return (
    <picture
      className="inline-block h-[13rem] min-h-[13rem] relative w-full "
      data-aos="fade-right"
    >
      <div className="h-full w-full relative">
        <img
          className="h-full object-cover object-center brightness-90 z-[1]"
          width="100%"
          src={destination.image}
          alt="banner-tour-listing"
          data-aos-anchor-placement="top-center"
        />
        <div className=" bg-gradient-to-r from-bl-100 from-10% via-[#6796ee] via-30% absolute top-0 h-full w-full" />
      </div>
      <div className="flex flex-col bottom-[27%] left-[8%] max-md:bottom-[37%] absolute gap-y-[4px] z-[3]">
        <Container>
          <h2 className="text-white flex flex-col m-b text-fs-56 justify-between m-0 w-full max-xl:text-fs-40 max-lg:text-fs-30 max-md:text-fs-24">
            <span>
              {/* <IconRoyal className="icon-banner-t-l" />*/}{" "}
              {destination.name}, {destination.country}
            </span>
            <span className="m-m text-fs-16 mt-[12px] w-full max-md:text-fs-12">
              {languageData.bannerTour.subtitleBannerTour}
            </span>
          </h2>
        </Container>

        {/* <div className="d-flex flex-column ps-5">
          <h4 className="total-tours-list">{totalResults} </h4>
          <h4 className="subtitle-tour-ban">
            <span>Excursiones y actividades</span>

            <div className="number-call-banner-t">
              <IconCallW className="icon-call-b-t" />
              <span>998 134 2286</span>{" "}
            </div>
          </h4>
        </div> */}
      </div>
    </picture>
  );
}
