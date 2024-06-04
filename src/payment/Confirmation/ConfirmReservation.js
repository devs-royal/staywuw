import React, { useState, useEffect, useContext } from "react";

import { TotalPriceBL } from "./TotalPriceBl";
import { BookingContext } from "../context/BookingContext";
import ConfirmationEmail from "../Email/ConfirmationEmail";
import { scrollToTop } from "@/utils/pageConfig/scrollToTop";
import { useCartAxios } from "../../components/Cart/CartAxios";
import CardsItinerary from "../itinerary/others/CardsItinerary";
import { fetchDataConfirmation } from "../Api/fetchDataItinerary";
import SkeletonConfirmPay from "@/utils/skeleton/SkeletonConfirmPay";
import { StepsToPayments, StepsToPaymentsM } from "@/hooks/StepsToPay";
import ReservationShortInfo from "../itinerary/others/DetailReservation";
import { BannerState } from "@/components/bannerJsx/bannerPaymentConfirmed";
import BannerConfirmationT from "@/components/bannerJsx/bannerConfirmationT";

export default function ConfirmReservation() {
  const { fetchData, setCartData, setItinerary, setTotalItemsInCart } =
    useCartAxios();

  const [smShow, setSmShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dataConfirmation, setDataConfirmation] = useState(null);
  const { setInfoReservation, handleStepChange } = useContext(BookingContext);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  const handleIconClick = () => {
    if (!smShow) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }
  };

  useEffect(() => {
    scrollToTop();
    fetchDataConfirmation(
      setDataConfirmation,
      setInfoReservation,
      setIsLoading,
      sendConfirmationEmail,
      handleEmptyClear
    );
  }, []);

  const sendConfirmationEmail = (requestBody) => {
    ConfirmationEmail({ requestBody });
  };

  const handleEmptyClear = () => {
    fetchData(null);
    setItinerary(null);
    setTotalItemsInCart(null);
    setCartData(null);
  };

  return (
    <>
      {/* <SkeletonConfirmPay /> */}
      {isLoading && <SkeletonConfirmPay />}

      <>
        {dataConfirmation && (
          <>
            {/* BANNER STATE CONFIRMATION */}
            <BannerState />

            <div className="flex min-h-[42rem] ">
              {/* LEFT INFORMATION */}
              <div className="w-full lg:w-[68%] xl:w-[90%] lg:pr-[20px]">
                {/* STEPS */}
                <div className="h-auto mt-[31.6px] mb-[28px] lg:mt-[4rem] lg:mb-[6rem] p-0">
                  <StepsToPaymentsM
                    step={3}
                    handleStepChange={handleStepChange}
                  />
                  <StepsToPayments
                    step={3}
                    handleStepChange={handleStepChange}
                  />
                </div>

                <CardsItinerary dataItinerary={dataConfirmation} />
              </div>

              {/* RIGHT INFORMATION */}
              <div className="hidden lg:flex lg:w-[35%] xl:pl-[49px] pl-[9px]">
                <ReservationShortInfo />
              </div>
            </div>

            {/* TOTAL PRICE CONFIRMATION */}
            <TotalPriceBL
              smShow={smShow}
              handleCloseModal={handleCloseModal}
              handleIconClick={handleIconClick}
            />

            {/* BOTTOM BANNER CONFIRMATION */}
            <BannerConfirmationT />
          </>
        )}
      </>
    </>
  );
}
