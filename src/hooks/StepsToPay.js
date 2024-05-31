import React, { useContext } from "react";

import LanguageContext from "../language/LanguageContext";
import "../assets/styles/web/StepsPayment.css"

export function StepsToPayments({step, handleStepChange}) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="container-steps-payment">
      <div className={`${step && step >= 1 ? 'activated' : 'inactivated'} steps-payment`} role="button" onClick={()=>handleStepChange(1)}>
        <span className={`${step && step >= 1 ? 'activated' : 'inactivated'} steps-number`}>1</span>

        {languageData.payment.titleItinerary}
      </div>

      <span className={`${step && step >= 2 ? 'activated' :'inactivated'} line-steps-payment`} />

      <div className={`${step && step >= 2 ? 'activated' : 'inactivated'} steps-payment`} role="button" onClick={()=>handleStepChange(2)}>
        <span className={`${step && step >= 2 ? 'activated' : 'inactivated'} steps-number`}>2</span>

        {languageData.payment.titlePayment}
      </div>

      <span className={`${step && step === 3 ? 'activated' :'inactivated'} line-steps-payment`} />

      <div className={`${step && step === 3 ? 'activated' : 'inactivated'} steps-payment`}>
        <span className={`${step && step === 3 ? 'activated' : 'inactivated'} steps-number`}>3</span>

        {languageData.payment.titleConfirmations}
      </div>
    </div>
  );
}

export function StepsToPaymentsM({step, handleStepChange}) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="container-steps-payment">
      <div className={`${step && step >= 1 ? 'activated' : 'inactivated'} steps-payment`} role="button" onClick={()=>handleStepChange(1)}>
        <span className={`${step && step >= 1 ? 'activated' : 'inactivated'} steps-number`}>1</span>

        {languageData.payment.titleItinerary}
      </div>

      <span className={`${step && step >= 2 ? 'activated' :'inactivated'} line-steps-payment`} />

      <div className={`${step && step >= 2 ? 'activated' : 'inactivated'} steps-payment`} role="button" onClick={()=>handleStepChange(2)}>
        <span className={`${step && step >= 2 ? 'activated' : 'inactivated'} steps-number`}>2</span>

        {languageData.payment.titlePayment}
      </div>

      <span className={`${step && step === 3 ? 'activated' :'inactivated'} line-steps-payment`} />

      <div className={`${step && step === 3 ? 'activated' : 'inactivated'} steps-payment`}>
        <span className={`${step && step === 3 ? 'activated' : 'inactivated'} steps-number`}>3</span>

        {languageData.payment.titleConfirmations}
      </div>
    </div>
  );
}
