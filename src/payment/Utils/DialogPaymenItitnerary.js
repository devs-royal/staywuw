import Image from "next/image";
import { CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";

import ModalShare from "../../utils/booking/ModalShare";
import LanguageContext from "../../language/LanguageContext";
import { useIsMobileNew } from "../../config/Mobile/isMobile";
import { ShareContainer } from "../../utils/booking/ShareContainer";
import { StepperContext } from "../context/steeperContext";
import { DialogItineraryMobile } from "../itinerary/others/DialogItineraryMobile";

import IconShowLess from "../../assets/icons/hotel/modal/show_less.svg";
import IconRightBl from "../../assets/icons/utils/payment/right-bl.svg";
import IconShowLessW from "../../assets/icons/utils/payment/show_less_w.svg";
import IconShareW from "../../assets/icons/utils/payment/share-w.svg";

export function DialogPaymentItinerary(props) {
  const { handleStepChange, reservationData, step, setChangeButton } = props;
  const { languageData } = useContext(LanguageContext);

  const reservationType = (type) => {
    switch (type) {
      case "hotel":
        return "hotel";
      default:
        return "hotel";
    }
  };

  const [openDialog, setOpenDialog] = useState(false);
  const {
    termsAccept,
    policyAccept,
    buttonActive,
    progressCount,
    countNumber,
  } = useContext(StepperContext);

  const isMobile = useIsMobileNew();
  const [smShow, setSmShow] = useState(false);

  const paymentReservation = () => {
    setChangeButton(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <>
      {reservationData && (
        <div className="box-inferior booking-container">
          {step !== 3 ? (
            <div className="container-info-mobile-itinerary">
              <div
                className="circle-open-dialog-m"
                onClick={() => setOpenDialog(true)}
              >
                <Image className="icon-show-less !w-1/2" src={IconShowLess} width={14} height={7}/>
              </div>

              <div className="d-flex flex-column ps-2 pe-2">
                <div className="type-reservation-payment-m">
                  {
                    languageData.navigation[
                      reservationType(reservationData.items[0].type)
                    ]
                  }

                  <span className="reservation-name-m">
                    {reservationData.items[0].name}
                  </span>
                </div>

                {/* Dialog  */}
                <div className="d-flex justify-content-between mt-3">
                  <div className="total-price-reservation-m">Total</div>

                  <div className="m-i-price-c">
                    <span>MXN</span>
                    <span className="price-number-itinerary-m">
                      $
                      {Math.floor(reservationData.summary.totalCurrentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                    </span>
                    <sup>
                      {(reservationData.summary.totalCurrentPrice % 1)
                        .toFixed(2)
                        .slice(2)}
                    </sup>{" "}
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  {step === 1 && (
                    <ModalShare
                      itinerary={true}
                      className="modal-style-share"
                    />
                  )}

                  {isMobile && step === 2 && (
                    <ModalShare
                      itinerary={true}
                      className="modal-style-share"
                    />
                  )}

                  {step === 1 && (
                    <button
                      onClick={() => handleStepChange(step + 1)}
                      className="next-steep-button-itinerary"
                    >
                      {languageData.itinerary.detailsPayment.completePayment}
                      <Image src={IconRightBl} />
                    </button>
                  )}

                  {step === 2 && (
                    <div>
                      <button
                        onClick={() => paymentReservation()}
                        type="submit"
                        className={`button-payment-details  ${
                          !policyAccept || !termsAccept || !buttonActive
                            ? "disabled"
                            : ""
                        } ${
                          policyAccept && termsAccept
                            ? "add-padding-container"
                            : "disabled-padding-button"
                        } `}
                        disabled={
                          !policyAccept || !termsAccept || !buttonActive
                        }
                      >
                        {languageData.booking.paymentConekta.buttonForms}{" "}
                        {policyAccept && termsAccept && (
                          <div className="position-relative d-inline-flex justify-content-center">
                            <CircularProgress
                              variant="determinate"
                              value={progressCount}
                              id="circle-count"
                            />

                            <div className="count-number">{countNumber}</div>
                          </div>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="container-confirmation">
              <div
                className="circle-open-dialog-c"
                onClick={() => setOpenDialog(true)}
              >
                <Image className="icon-show-less !w-1/2" src={IconShowLessW} />
              </div>

              <div className="d-flex flex-column">
                <span className="total-confirmation-text">Totall</span>

                <div className="total-confirmation-text">
                  MXN $
                  <span className="total-confirmation-price">
                    <span>
                      {Math.floor(reservationData.summary.totalCurrentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                    </span>
                    <sup>
                      {(reservationData.summary.totalCurrentPrice % 1)
                        .toFixed(2)
                        .slice(2)}
                    </sup>{" "}
                  </span>
                </div>
              </div>

              <bottom
                onClick={() => setSmShow(!smShow)}
                className="share-confirmation"
              >
                <Image className="share-icon-confirmed" src={IconShareW} />
                Compartir
              </bottom>
            </div>
          )}
        </div>
      )}

      <ShareContainer
        smShow={smShow}
        handleCloseModal={() => setSmShow(!smShow)}
      />

      <DialogItineraryMobile
        open={openDialog}
        onClose={() => setOpenDialog(!openDialog)}
        setChangeButton={setChangeButton}
        dataItinerary={reservationData}
        setSmShow={() => setSmShow(true)}
      />
    </>
  );
}
