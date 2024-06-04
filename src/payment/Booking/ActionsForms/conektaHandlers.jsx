"use client";

import { useContext } from "react";
import { sendPaymentRequest } from "../Api/paymentApi";

export const conektaErrorResponseHandler = (response, setAnimationData, closeModalAfterDelay) => {
  console.log("error", response);
  setAnimationData("FailureData");
  closeModalAfterDelay();
};

export const conektaSuccessResponseHandler = (token, paymentData, setAnimationData, handleStepChange, closeModalAfterDelay) => {
  paymentData.token = token.id;

  sendPaymentRequest(paymentData)
    .then((response) => {
      console.log("Payment processed successfully.", response);
      setAnimationData("SuccessData");
      setTimeout(() => {
        handleStepChange(3);
        closeModalAfterDelay();
      }, 3000);
    })
    .catch((error) => {
      console.log("There was an error processing the payment.", error);
      setAnimationData("FailureData");
      closeModalAfterDelay();
    });
};

export const handleSubmitPayment = (event, paymentData, setAnimationData, handleStepChange, closeModalAfterDelay) => {
  event.preventDefault();

  const form = event.target;

  setAnimationData("LoadingData");

  window.Conekta.Token.create(
    form,
    (token) => conektaSuccessResponseHandler(token, paymentData, setAnimationData, handleStepChange, closeModalAfterDelay),
    (response) => conektaErrorResponseHandler(response, setAnimationData, closeModalAfterDelay)
  );
};
