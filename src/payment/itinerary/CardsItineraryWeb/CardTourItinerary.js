import moment from "moment";
import Image from "next/image";
import { CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";

import { useIsMobile } from "../../../config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";
import { useCartAxios } from "../../../components/Cart/CartAxios";
import { TooltipDown } from "../../../components/ToolTip/TooltipDown";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

import CloseIcon from "../../../assets/alerts/close.svg";
import IconLocationBorder from "../../../assets/icons/utils/others/location-border.svg";
import LocationIcon from "../../../assets/icons/utils/searchBox/location-autocomplete.svg";

export default function TourCardItinerary({ itemActivity }) {
  const isMobile = useIsMobile();
  const { fetchData } = useCartAxios();
  const [loader, setLoader] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const { languageData } = useContext(LanguageContext);

  const cancelRemove = () => {
    if (isRemove) {
      setIsRemove(false);
    }
  };

  const searchParams = new URLSearchParams(window.location.search);
  const cartUid = searchParams.get("uid");

  // const handleRemoveTour = async (cardTourID) => {
  //   setLoader(true);
  //   try {
  //     const response = await axiosWithInterceptor.delete(
  //       `v1/carts/${cartUid}/activity/${cardTourID}`
  //     );
  //     if (response.data) {
  //       fetchData(cartUid);
  //       setIsRemove(false);
  //       setLoader(false);
  //     }
  //   } catch (error) {
  //     console.eror(error);
  //     setLoader(false);
  //   }
  // };

  const handleRemoveTour = (cardTourID) => {
    setLoader(true);
    const reservationRemove = async () => {
      axiosWithInterceptor
        .delete(`v1/carts/${cartUid}/activity/${cardTourID}`)
        .then((response) => {
          fetchData(cartUid);
          setIsRemove(false);
          setLoader(false);
        })
        .catch((error) => {
          console.error(error);
          setLoader(false);
        })
        .finally(() => {
          // setLoader(false);
        });
    };
    reservationRemove();
  };

  // DAY OF WEEK
  const dayOfWeek = moment(itemActivity.date).format("dddd");
  const url = process.env.REACT_APP_URL_SITE + "/policy";

  return (
    itemActivity && (
      <>
        <div className="father-tour-card-i">
          <Image
            className="icon-location-border"
            src={IconLocationBorder}
            alt="IconLocationBorder"
          />

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
              <div
                className="close-icon-tour-i"
                onClick={() => setIsRemove(true)}
              >
                <Image src={CloseIcon} alt="CloseIcon" />
              </div>

              {!isMobile && (
                <div className="cont-img-card-hotel">
                  <img
                    className="image-tour-i"
                    src={itemActivity.image ? itemActivity.image : ""}
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
                      <h2 className="title-card-ini">{itemActivity.title}</h2>

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
                            {itemActivity.tourists.map(
                              (tourist, index) =>
                                `${tourist.quantity} ${tourist.category}${
                                  index !== itemActivity.tourists.length - 1
                                    ? ","
                                    : ""
                                } `
                            )}
                            {/* 2 adultos, 2 niños */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="container-description-tour-card-i">
                {!isMobile && (
                  <h2 className="title-card-ini">{itemActivity.title}</h2>
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
                          {itemActivity.tourists &&
                            itemActivity.tourists.categories.map(
                              (tourist, index) =>
                                `${tourist.quantity} ${tourist.category}${
                                  index !== itemActivity.tourists.length - 1
                                    ? ","
                                    : ""
                                } `
                            )}
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
                        .
                        <sup>
                          {(itemActivity.price % 1).toFixed(2).slice(2)}
                        </sup>
                      </span>

                      {
                        itemActivity.cancelPolicies &&
                          itemActivity.cancelPolicies.length > 0 &&
                          itemActivity.cancelPolicies.map(
                            (cancelPolicy, index) => (
                              <TooltipDown
                                key={index}
                                // interactive
                                disableFocusListener
                                disableTouchListener
                                title={
                                  cancelPolicy ? (
                                    <React.Fragment>
                                      {
                                        languageData.roomsCancellations
                                          .percentage
                                      }{" "}
                                      {cancelPolicy.hours}{" "}
                                      {languageData.roomsCancellations.from}{" "}
                                      {`${cancelPolicy.penalty}${
                                        cancelPolicy.type === "percent"
                                          ? "%"
                                          : ""
                                      }`}
                                      {languageData.roomsCancellations.total}{" "}
                                      <a
                                        className="label-link"
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {languageData.roomsCancellations.terms}{" "}
                                      </a>
                                    </React.Fragment>
                                  ) : (
                                    <div>No data</div>
                                  )
                                }
                              >
                                <div className="tooltipUp-cancellations text-tour-bl-i-s">
                                  {languageData.containerModalHotel.policies}
                                </div>
                              </TooltipDown>
                            )
                          )

                        // <span className="text-tour-bl-i-s">
                        //   Politicas de cancelación
                        // </span>
                      }
                    </div>
                  </div>
                </div>
              </div>

              {isRemove && (
                <>
                  <div
                    className="container-remove-itinerary"
                    onClick={() => cancelRemove()}
                  />
                  <div
                    className="remove-reservation-itinerary"
                    onClick={() => handleRemoveTour(itemActivity.key)}
                  >
                    {languageData.cart.remove}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {loader && (
          <div className="progress-loader">
            <CircularProgress />
          </div>
        )}
      </>
    )
  );
}
