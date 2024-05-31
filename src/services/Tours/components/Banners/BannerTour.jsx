import LanguageContext from "@/language/LanguageContext";
import React, { useContext } from "react";

// import LanguageContext from "../../../language/LanguageContext";

// import { useTourContext } from "../../Context/ListingTourContext";

// import { ReactComponent as IconRoyal } from "../../../assets/icons/utils/payment/icon-royal-vacations.svg";
// import { ReactComponent as IconCallW } from "../../../assets/icons/utils/navigation/call-center-w.svg";

export function BannerDestinationTour(props) {
  const { destination } = props;
  // const { totalResults } = useTourContext();
  const { languageData } = useContext(LanguageContext);

  return (
    <picture className="tour-image-new-listing " data-aos="fade-right">
      <div className="back-img-banner-gradient">
        <img
          className="h-full cover-center-img filter-background-t back-img-banner-gradient-img"
          width="100%"
          src={destination.image}
          alt="banner-tour-listing"
          
          data-aos-anchor-placement="top-center"
        />
      </div>
      <div className="banner-tour-l d-flex container">
        <h2 className="title-destination-tour">
          <span>
            {/* <IconRoyal className="icon-banner-t-l" />*/} {destination.name},{" "}
            {destination.country}
          </span>
          <span className="title-r-tour-b">
            {languageData.bannerTour.subtitleBannerTour}
          </span>
        </h2>

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
