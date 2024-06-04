"use client";

import { createContext, useState } from "react";
const BookingContext = createContext();

const BookingProviderContext = ({ children }) => {
  const [step, setStep] = useState(1);
  const [termsAccept, setTermsAccept] = useState(false);
  const [policyAccept, setPolicyAccept] = useState(false);
  const [buttonActive, setIsButtonActive] = useState(false);
  const [countNumber, setCountNumber] = useState(null);
  const [progressCount, setProgressCount] = useState(null);
  const [infoReservation, setInfoReservation] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <BookingContext.Provider
      value={{
        step,
        handleStepChange,
        termsAccept,
        setTermsAccept,
        policyAccept,
        setPolicyAccept,
        buttonActive,
        setIsButtonActive,
        progressCount,
        setProgressCount,
        countNumber,
        setCountNumber,
        infoReservation,
        setInfoReservation,
        openDialog,
        setOpenDialog,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProviderContext };
