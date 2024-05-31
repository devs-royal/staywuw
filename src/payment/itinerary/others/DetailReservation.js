import Image from "next/image";
import React, { useContext } from "react";

import LanguageContext from "../../../language/LanguageContext";
import { useIsMobileNew } from "../../../config/Mobile/isMobile";
import { StepperContext } from "../../context/steeperContext";
import { SkeletonConfirmPaymentDetails } from "../../../utils/skeleton/SkeletonConfirmPaymentDetails";

import IconCheck from "../../../assets/icons/utils/others/check.svg";
import IconShareW from "../../../assets/icons/utils/payment/share-w.svg";
import "../../../assets/styles/mobile/TourMobile.css"

export default function ReservationShortInfo(props) {
  const isMobile = useIsMobileNew();
  const { setSmShow, dataItinerary } = props;

  const { infoReservation } = useContext(StepperContext);
  const { languageData } = useContext(LanguageContext);

  return (
    // <SkeletonConfirmPaymentDetails/>
    infoReservation ? (
      <>
        <div className="cont-confirmation-info-father">
          <div className="cont-confirmation-info-green">
            <div className="flex gap-x-[2px] items-start">
              <Image src={IconCheck} />
              <span className="text-confirm-black-m">
                {languageData.confirmation.confirmationNumber}
              </span>
            </div>

            <div className="text-confirm-grey ">
              {infoReservation.booking.reference}
            </div>

            <div className="text-confirm-black-s">
              {languageData.confirmation.textInformative}
            </div>
          </div>

          <div className="cont-reservation-details">
            <div className="text-confirm-black">
              {languageData.confirmation.reservationDetails}
            </div>

            <div className="space-bet-confirmation">
              <div className="fle-colum-confirmation">
                <span className="text-confirm-grey-m">
                  {languageData.confirmation.titular}
                </span>
                <span className="text-confirm-grey-s">
                  {infoReservation.booking.name}
                </span>
              </div>

              <div className="fle-colum-confirmation">
                <span className="text-confirm-grey-m">
                  {languageData.confirmation.bookingData.typePay}
                </span>
                <span className="text-confirm-grey-s">
                  {infoReservation.payment.type}
                </span>
              </div>
            </div>

            <div className="fle-colum-confirmation">
              <span className="text-confirm-grey-m">
                {languageData.confirmation.email}
              </span>
              <email className="text-confirm-grey-s">
                {infoReservation.booking.email}
              </email>
            </div>

            <div className="fle-colum-confirmation">
              <span className="text-confirm-grey-m">
                {languageData.confirmation.phone}
              </span>
              <tel className="text-confirm-grey-s">
                {infoReservation.booking.phone}
              </tel>
            </div>
          </div>

          <div className="cont-payments-information">
            <div className="text-confirm-black">
              {languageData.confirmation.infoPayment}
            </div>

            <div className="space-bet-confirmation">
              <div className="fle-colum-confirmation">
                <span className="text-confirm-grey-m">
                  {languageData.confirmation.titular}
                </span>
                <span className="text-confirm-grey-s">
                  {infoReservation.payment.titular}
                </span>
              </div>
              <div className="fle-colum-confirmation mr-[30px]">
                <span className="text-confirm-grey-m">
                  {" "}
                  {languageData.confirmation.bookingData.titleBookingData}
                </span>
                <span className="text-confirm-grey-s">
                  xxxx xxxx xxxx {infoReservation.payment.cardDigits}
                </span>
              </div>
            </div>

            <div className="space-bet-confirmation">
              <div className="fle-colum-confirmation">
                <span className="text-confirm-grey-m">
                  {" "}
                  {languageData.confirmation.bookingData.dateBooking}
                </span>
                <span className="text-confirm-grey-s">
                  {infoReservation.booking.date}
                </span>
              </div>

              <div className="fle-colum-confirmation">
                <span className="text-confirm-grey-m">
                  {" "}
                  {languageData.confirmation.bookingData.reference}
                </span>
                <span className="text-confirm-grey-s">
                  {infoReservation.payment.reference}
                </span>
              </div>
            </div>
          </div>

          <div className="border-button-conf"></div>

          <div className="cont-cancellation-doubts">
            <div className="cancellations-info-confirm">
              <span className="text-confirm-black-xs">
                {languageData.confirmation.cancellations}
              </span>
              <span className="text-confirm-grey-xs">
                {languageData.confirmation.cancellationsText}
              </span>
            </div>
            <a
              className="button-you-have-doubts"
              href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
              target="_blank"
              rel="noopener noreferrer"
            >
              {languageData.confirmation.doubts}
            </a>
          </div>
        </div>

        {isMobile && dataItinerary && (
          <>
            <div className="container-confirmation">
              <div className="d-flex flex-column">
                <span className="total-confirmation-text">Total</span>

                <div className="total-confirmation-text">
                  MXN $
                  <span className="total-confirmation-price">
                    <span>
                      {Math.floor(dataItinerary.summary.totalCurrentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                    </span>
                    <sup>
                      {(dataItinerary.summary.totalCurrentPrice % 1)
                        .toFixed(2)
                        .slice(2)}
                    </sup>{" "}
                  </span>
                </div>
              </div>

              <bottom onClick={setSmShow} className="share-confirmation">
                <Image src={IconShareW} className="share-icon-confirmed" />
                Compartir
              </bottom>
            </div>
          </>
        )}
      </>
    ) : (
      <SkeletonConfirmPaymentDetails />
    )
  );
}
