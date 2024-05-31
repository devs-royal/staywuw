"use client";

// import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import React, { useState, useEffect, useContext, Suspense, lazy } from "react";

import {
  StepperContext,
  StepperProvider,
} from "./context/steeperContext";
import Booking from "./Booking/Booking";
import Itinerary from "./itinerary/Itinerary";
import SkeletonPay from "../utils/skeleton/SkeletonPay";
import { useToken } from "../config/context/AuthContext";
import LanguageContext from "../language/LanguageContext";
import { useCartAxios } from "../components/Cart/CartAxios";
import { scrollToTop } from "../utils/pageConfig/scrollToTop";
import { useIsMobile, useIsMobileNew } from "../config/Mobile/isMobile";
import { StepsToPayments, StepsToPaymentsM } from "../hooks/StepsToPay";
import axiosWithInterceptor from "../config/Others/axiosWithInterceptor";
import ConfirmReservation from "./Confirmation/ConfirmReservation";
import { BannerState } from "../components/bannerJsx/bannerPaymentConfirmed";
import { DialogPaymentItinerary } from "./Utils/DialogPaymenItitnerary";

import "../assets/styles/web/App.css";
import "../assets/styles/web/Tour.css";
import "../assets/styles/web/Hotel.css";
import "../assets/styles/web/Payment.css";
import "../assets/styles/mobile/PaymentMobile.css";
import BannerConfirmationT from "@/components/bannerJsx/bannerConfirmationT";

// import Logo from "../assets/images/logos/logo-royal-vacations-text.png";

const DetailsPayment = lazy(() =>
  import("./itinerary/others/DetailsPayment")
);
const ReservationShortInfo = lazy(() =>
  import("./itinerary/others/DetailReservation")
);

export default function Payment() {
  const { token } = useToken();
  const [data, setData] = useState(null);
  const [errorAlertBooking, setErrorAlertBooking] = useState(false);

  const [showClr, setShowClr] = useState(null);
  const { itineraryData, cartData } = useCartAxios();
  const isMobile = useIsMobile();
  const isMobileNew = useIsMobileNew();
  const [changeButton, setChangeButton] = useState(0);

  useEffect(() => {
    const loadConektaScripts = () => {
      const script1 = document.createElement("script");
      script1.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
      script1.type = "text/javascript";
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = "https://cdn.conekta.io/js/latest/conekta.js";
      script2.type = "text/javascript";
      document.body.appendChild(script2);
    };

    loadConektaScripts();

    const unloadConektaScripts = () => {
      const scripts = document.querySelectorAll("script[src*='conekta.js']");
      scripts.forEach((script) => {
        script.parentNode.removeChild(script);
      });
    };

    return () => {
      unloadConektaScripts();
    };
  }, []);

  // LOADING SKELETON SHOW SCREEN
  const [skeletonShow, setSkeletonShow] = useState(true);

  const { languageData } = useContext(LanguageContext);
  const [hasACtivities, setHasActivities] = useState(false);

  useEffect(() => {
    scrollToTop();

    if (token) {
      fetchData();
    }
  }, [token, itineraryData]);

  const fetchData = async () => {
    setData(null);
    setSkeletonShow(true);
    try {
      const url = "/v1/carts/";
      const searchParams = new URLSearchParams(window.location.search);
      const cartId = searchParams.get("uid");
      const response = await axiosWithInterceptor.get(
        `${url}${cartId}/schedule`
      );

      const filterDataItinerary = response.data.items.filter(
        (objeto) => objeto.type === "activity"
      );

      if (filterDataItinerary.length > 0) {
        setHasActivities(true);
      }

      setData(response.data);
      setSkeletonShow(false);
    } catch (error) {
      // console.eror(error);

      if (error.response) {
        const errorMessage = error.response.data;

        switch (error.response.status) {
          case 404:
            setShowClr(errorMessage);
            break;
          case 500:
            setErrorAlertBooking(true);
            break;
        }

        if (error.response.data.message === "CNF") {
          localStorage.removeItem("uid-cart");
          localStorage.removeItem("cartData");
        }
      } else if (error.message === "Network Error") {
        setErrorAlertBooking(true);
      }

      setData(null);
      setSkeletonShow(false);
    }
  };

  // const history = useHistory();
  const handleStart = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    // history.push(baseUrl);
  };

  return (
    <>
      {/* <SkeletonPay /> */}
      {data && (
        <StepperProvider>
          <StepperContext.Consumer>
            {({ step, handleStepChange }) => (
              <div className="personal-container background-payment-step">
                {!isMobileNew && step !== 3 && (
                  <div className="grey-container" />
                )}
                <Container>
                  {step === 3 && <BannerState />}

                  <div className="container-payment-steeps-info">
                    <div className="width100 container-steeps-payment">
                      <>
                        {step >= 1 && step <= 3 ? (
                          <div className="row-steeper-i p-0">
                            {isMobile ? (
                              <StepsToPaymentsM
                                step={step}
                                handleStepChange={handleStepChange}
                              />
                            ) : (
                              <StepsToPayments
                                step={step}
                                handleStepChange={handleStepChange}
                              />
                            )}
                          </div>
                        ) : null}
                      </>

                      {data && data.items && (
                        <div className="m-min-h mb-3">
                          {step === 1 && <Itinerary dataItinerary={data} />}
                          {step === 2 && (
                            <Booking
                              dataItinerary={data}
                              step={step}
                              handleStepChange={handleStepChange}
                              changeButton={changeButton}
                              hasACtivities={hasACtivities}
                            />
                          )}
                          {step === 3 && <ConfirmReservation />}
                        </div>
                      )}
                    </div>

                    {!isMobileNew && (
                      <div className="details-payment-left d-flex justify-content-end">
                        <Suspense fallback={null}>
                          {step === 3 ? (
                            <ReservationShortInfo />
                          ) : (
                            <DetailsPayment
                              data={data}
                              step={step}
                              handleStepChange={handleStepChange}
                            />
                          )}
                        </Suspense>
                      </div>
                    )}
                  </div>
                  {step === 3 && (<BannerConfirmationT/>)}
                </Container>

                {isMobileNew && data && data.items && (
                  <DialogPaymentItinerary
                    handleStepChange={handleStepChange}
                    reservationData={data}
                    step={step}
                    setChangeButton={setChangeButton}
                  />
                )}
              </div>
            )}
          </StepperContext.Consumer>
        </StepperProvider>
      )}

      {!data && skeletonShow && <SkeletonPay />}

      {showClr && (showClr.message === "CLR" || showClr.message === "CNF") && (
        <Container className="container-itinerary-no-data">
          <h2 className="itinerary-no-show">
            {languageData.cart.subtitleItinerary}
          </h2>
          <p className="itinerary-no-text padding-bottom">
            {languageData.cart.textMessage}
          </p>
          <button className="button-start-itinerary" onClick={handleStart}>
            {languageData.cart.buttonPay}
          </button>
        </Container>
      )}

      {errorAlertBooking === true && (
        <Container className="container-itinerary-no-data">
          <img
            className="name-logo m-0"
            // width="auto"
            // height="auto"
            // src={Logo}
            // src={`${process.env.NEXT_PUBLIC_URL}royal/logo.svg`}
            src={`${process.env.NEXT_PUBLIC_URL}royal/principal-logo.svg`}
            alt={process.env.NEXT_PUBLIC_NAME_COMPANY}
          />
          <h2 className="itinerary-no-show">
            {languageData.Alerts.itinerary.title}
          </h2>
          <p className="itinerary-no-text padding-bottom">
           {languageData.Alerts.itinerary.contact} 800 953 0342
          </p>
        </Container>
      )}
    </>
  );
}
