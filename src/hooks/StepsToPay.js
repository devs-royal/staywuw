import React, { useContext } from "react";

import LanguageContext from "../language/LanguageContext";

const Steps = [
  {
    label: "titleItinerary",
    value: 1,
  },
  {
    label: "titlePayment",
    value: 2,
  },
  {
    label: "titleConfirmations",
    value: 3,
  },
];

export function StepsToPayments({ step, handleStepChange }) {
  const { languageData } = useContext(LanguageContext);

  const handleStepsButton = (stepValue) => {
    if (step < 3) {
      if (stepValue < 3) {
        handleStepChange(stepValue);
      }
    }
  };

  return (
    <div className="xl:flex lg:hidden md:flex hidden md:items-center max-lg:justify-center">
      {Steps.map((stepValue, index) => (
        <div key={index} className="flex items-center">
          <button
            onClick={() => handleStepsButton(stepValue.value)}
            key={index}
            className={`focus:outline-none focus:ring-transparent relative py-2 px-4 rounded-[50px] flex items-center justify-center text-fs-14 m-s-b before:content[' '] before:absolute before:rounded-full before:w-[44px] before:h-[44px] before:p-2 before:border-4 before:bg-white before:left-0 ${
              step && step >= stepValue.value
                ? "bg-bl-100 text-white before:border-bl-100"
                : "bg-gry-50 text-gry-70 before:border-gry-50"
            } ${stepValue.value === 1 ? "w-[191px]" : "w-[228px]"} ${
              stepValue.value === 3 && "!cursor-default"
            }
            
            ${step === 3 && "!cursor-default"}`}
          >
            <span
              className={`absolute left-0 p-2 w-[44px] h-[44px] m-s-b text-fs-14 flex justify-center items-center ${
                step && step >= stepValue.value ? "text-or-100" : "text-gry-70"
              }`}
            >
              {stepValue.value}
            </span>
            {languageData.payment[stepValue.label]}
          </button>

          {/* DIVIDING LINE */}
          {Steps.length - 1 !== index && (
            <div
              className={`border-dashed border-2 w-[39px] ${
                step && step >= stepValue.value
                  ? "border-bl-100"
                  : "border-gry-50"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function StepsToPaymentsM({ step, handleStepChange }) {
  const { languageData } = useContext(LanguageContext);

  const handleStepsButton = (stepValue) => {
    if (step < 3) {
      if (stepValue < 3) {
        handleStepChange(stepValue);
      }
    }
  };
  
  return (
    <div className="xl:hidden lg:flex md:hidden flex items-center justify-center">
      {Steps.map((stepValue, index) => (
        <div key={index} className="flex items-center">
          <button
            onClick={() => handleStepsButton(stepValue.value)}
            className={`focus:outline-none focus:ring-transparent px-2 flex flex-col items-center gap-y-[2px] w-[72px]`}
          >
            <div
              className={`border-2 p-2 w-[32px] h-[32px] flex items-center justify-center m-s-b text-fs-14 bg-white rounded-full ${
                step && step >= stepValue.value
                  ? "border-bl-100 text-or-100"
                  : "border-gry-70 text-gry-70"
              }`}
            >
              {stepValue.value}
            </div>

            <span
              className={`m-s-b text-fs-12 ${
                step && step >= stepValue.value ? "text-bl-100" : "text-gry-70"
              }`}
            >
              {languageData.payment[stepValue.label]}
            </span>
          </button>

          {Steps.length - 1 !== index && (
            <span
              className={`border-[1px] border-dashed w-[39px] h-[1px] ${
                step && step >= stepValue.value
                  ? "border-bl-100"
                  : "border-gry-70"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
