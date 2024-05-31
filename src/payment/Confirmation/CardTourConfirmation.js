import moment from "moment";
import Image from "next/image";
import React, { useContext } from "react";

import { PluralPeople } from "../Utils/PluralPeople";
import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";

import IconLocationBorder from "../../assets/icons/utils/others/location-border.svg";
import LocationIcon from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

export default function CardTourConfirmation(props) {
  const { itemActivity } = props;

  const isMobile = useIsMobile();
  const { languageData } = useContext(LanguageContext);

  // DAY OF WEEK
  const dayOfWeek = moment(itemActivity.date).format("dddd");

  return (
    itemActivity && (
      <div className="father-tour-card-i">
        <Image
          className="icon-location-border"
          src={IconLocationBorder}
          alt="IconLocationBorder"
        />
        {/* {
        isMobile && (<h3>hola</h3>)
      } */}
        <div className="father-container-tour-i">
          <div className="date-itinerary">
            <span className="text-tour-or-i">
              {languageData.dayOfWeek[dayOfWeek]}
            </span>
            <span className="text-loc-tour-grey-i">{itemActivity.date}</span>
            <span className="text-loc-tour-grey-i">|</span>
            <span className="text-loc-tour-grey-i">02:00pm</span>
          </div>

          {/* ITINERARY CARD */}

          <div className="container-tour-i">
            {!isMobile && (
              <div className="cont-img-card-hotel">
                <img
                  className="image-tour-i"
                  src="https://sandboxmexico.com/assets/banners/desktop/banner-about-us.webp"
                  alt="tour-test-banner-abaut-us"
                />
              </div>
            )}

            {isMobile && (
              <>
                <div className="d-flex">
                  <div className="cont-img-card-hotel">
                    <img
                      className="image-tour-i"
                      src="https://sandboxmexico.com/assets/banners/desktop/banner-about-us.webp"
                      alt="tour-test-banner-abaut-us"
                    />
                  </div>

                  <div className="d-flex gap-2 flex-column width8 cont-name-hotel-and-location">
                    <h2 className="title-card-ini">{itemActivity.name}</h2>

                    <div className="cont-name-location-tour gap-2">
                      <div className="d-flex d-grid gap-2 icon-location-and-text">
                        <div>
                          <Image
                            className="icons-size-m"
                            src={LocationIcon}
                            alt="LocationIcon"
                          />
                        </div>

                        <span>{itemActivity.address}</span>
                      </div>

                      <div className="d-flex d-grid gap-2 text-grey-card-hotel-i">
                        <img
                          className="icons-size-m"
                          src="https://sandboxmexico.com/assets/icons/adult/adult-b.svg"
                          alt="icon-adult"
                        ></img>
                        <span className="text-tour-grey-i-m">
                          {/* 2 adultos, 2 niños */}
                          {itemActivity.peoples}{" "}
                          <PluralPeople people={itemActivity.peoples} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="container-description-tour-card-i">
              {!isMobile && (
                <h2 className="title-card-ini">{itemActivity.name}</h2>
              )}

              <div className="cont-location-hours-price-tour-card">
                {!isMobile && (
                  <div className="cont-name-location-tour">
                    <div className="d-flex d-grid gap-2 icon-location-and-text">
                      <div>
                        <Image
                          className="icons-size-m"
                          src={LocationIcon}
                          alt="LocationIcon"
                        />
                      </div>

                      <span>{itemActivity.address}</span>
                    </div>

                    <div className="d-flex d-grid gap-2 text-grey-card-hotel-i">
                      <img
                        className="icons-size-m"
                        src="https://sandboxmexico.com/assets/icons/adult/adult-b.svg"
                        alt="icon-adult"
                      ></img>

                      <span>
                        {itemActivity.peoples}{" "}
                        <PluralPeople people={itemActivity.peoples} />
                      </span>
                    </div>
                  </div>
                )}

                <div className="mobile-tour-test-two">
                  <div className="cont-hours-tour">
                    <span className="text-grey-card-hotel-i">
                      {languageData.confirmation.cardTour.duration}
                    </span>
                    <span className="text-tour-black-s">
                      {itemActivity.duration}
                    </span>
                  </div>

                  <div className="cont-price-taxes-tour">
                    <span className="text-grey-card-hotel-i">
                      {languageData.modalTourOptions.taxes}
                    </span>
                    <span className="text-tour-black-m text-nowrap">
                      MXN $
                      {Math.floor(itemActivity.price)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(itemActivity.price % 1).toFixed(2).slice(2)}</sup>
                    </span>

                    {itemActivity.cancelPolicies &&
                      itemActivity.cancelPolicies.length > 0 && (
                        <span className="text-tour-bl-i-s">
                          {languageData.containerModalHotel.policies}
                        </span>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
