import Image from "next/image";
import React, { useContext } from "react";

import LanguageContext from "../../language/LanguageContext";

import MarkDeclined from "../../assets/icons/hotel/modal/mark-decline-card.svg";

export default function AlertTextBooking(props) {
  const { showAlert } = props;

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      {/* The payment has been processed or the reservation has been completed. */}
      {showAlert && showAlert.message === "CUB" && (
        <div className="alert-pay-declined ">
          <div className="alert-text-declined flex gap-2">
            <Image src={MarkDeclined} alt="MarkDeclined" /> {languageData.alertsPayment.declined}
          </div>

          <div className="alert-subtext-declined">
            {languageData.alertsPayment.textDeclined}
          </div>
        </div>
      )}

      {/* Hotel availability was lost, you still need to send the name of the hotel. */}
      {showAlert && showAlert.message === "UAH" && (
        <div className="alert-unavailable-data">
          <div className="alert-text-declined flex gap-2">
            <Image src={MarkDeclined} alt="MarkDeclined" />{" "}
            {languageData.alertsPayment.unavailable}
          </div>

          <div className="alert-subtext-declined">
            {languageData.alertsPayment.unavailableText1} {showAlert.hotel}{" "}
            {languageData.alertsPayment.unavailableText2}
          </div>
        </div>
      )}

      {/* Price overrun */}
      {showAlert && showAlert.message === "PHC" && (
        <div className="alert-unavailable-data">
          <div className="alert-text-declined flex gap-2">
            <Image src={MarkDeclined} alt="MarkDeclined" /> {languageData.alertsPayment.alertPrice}
          </div>

          <div className="alert-subtext-declined">
            {languageData.alertsPayment.alertPriceText}
          </div>
        </div>
      )}

      {showAlert && showAlert.message === "MPE" && (
        <div className="alert-amount-exceeded">
          <div className="alert-text-amount">
            <Image src={MarkDeclined} alt="MarkDeclined"/>
            {languageData.alertsPayment.alertAmount}
          </div>

          <div className="alert-subtext-declined">
            {languageData.alertsPayment.alertAmountText}
          </div>
        </div>
      )}

      {showAlert && showAlert.message === "PEC" && (
        <div className="alert-unavailable-data">
          <div className="alert-text-declined flex gap-2">
            <Image src={MarkDeclined} alt="MarkDeclined" />{" "}
            {languageData.alertsPayment.alertPassengers}
          </div>

          <div className="alert-subtext-declined">
            {languageData.alertsPayment.alertPassengersText}
          </div>
        </div>
      )}

      {/* GENERIC ALERT */}
      {showAlert && showAlert.status === 500 && (
        <div className="alert-pay-declined">
          <div className="alert-text-declined flex gap-2">
            <Image src={MarkDeclined} alt="MarkDeclined" />{" "}
            {languageData.alertsPayment.alertGeneral}
          </div>

          <div className="alert-subtext-declined">
            {languageData.alertsPayment.alertGeneralText}
          </div>
        </div>
      )}

      {/* GENERIC ALERT */}
      {showAlert && showAlert.status === 402 && (
        <div className="alert-pay-declined">
          <div className="alert-text-declined flex gap-2">
            <Image src={MarkDeclined} alt="MarkDeclined" />{" "}
            {languageData.alertsPayment.alertGeneral}
          </div>

          <div className="alert-subtext-declined">
            {languageData.alertsPayment.paymentFailed}
          </div>
        </div>
      )}

      {/* MAX PRICE */}
      {showAlert && showAlert.status === 400 && (
        <div className="alert-pay-declined">
          <div className="alert-text-declined flex gap-2">
            <Image src={MarkDeclined} alt="MarkDeclined" />{" "}
            {languageData.alertsPayment.alertGeneral}
          </div>

          {/* <div className="alert-subtext-declined">{showAlert.message}</div> */}
        </div>
      )}

      {/* CONEKTA ERROR */}
      {showAlert && showAlert.object === "error" && (
        <div className="alert-unavailable-data">
          <div className="alert-text-declined flex gap-2">
            <Image src={MarkDeclined} alt="MarkDeclined" />{" "}
            {languageData.alertsPayment.dataIncorrect}
          </div>
          <div className="alert-subtext-declined">
            {languageData.alertsPayment.dataIncorrectText}
          </div>
        </div>
      )}
    </>
  );
}
