import React, { createContext, useState } from "react";

const StepperContext = createContext();

const StepperProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const [termsAccept, setTermsAccept] = useState(false);
  const [policyAccept, setPolicyAccept] = useState(false);
  const [buttonActive, setIsButtonActive] = useState(false);
  const [countNumber, setCountNumber] = useState(null);
  const [progressCount, setProgressCount] = useState(null);

  const [infoReservation, setInfoReservation] = useState(null);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <StepperContext.Provider
      value={{
        step,
        handleStepChange,
        setStep,
        setTermsAccept,
        setPolicyAccept,
        termsAccept,
        policyAccept,
        buttonActive,
        setIsButtonActive,
        countNumber,
        setCountNumber,
        progressCount,
        setProgressCount,
        infoReservation,
        setInfoReservation,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export { StepperContext, StepperProvider };
