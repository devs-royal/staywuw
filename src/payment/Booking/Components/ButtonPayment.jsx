import { useContext, useEffect } from "react";

import LanguageContext from "@/language/LanguageContext";
import { PaymentContext } from "@/payment/context/PaymentContext";

export default function ButtonPayment() {
  const { languageData } = useContext(LanguageContext);

  // STATES CONTEXT PAYMENT
  const { policyChecked, setPolicyChecked, termsChecked, setTermsChecked } =
    useContext(PaymentContext);

  // FUNCTIONS CHANGE POLICY
  const handlePolicyChange = () => {
    setPolicyChecked(!policyChecked);
  };

  // FUNCTIONS CHANGE TERMS
  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);
  };

  return (
    <div className="flex justify-between items-center">
      {/* TERMS & CONDITIONS */}
      <div className="flex flex-col gap-y-[9px]">
        {/* INPUT POLICY */}
        <div className="flex gap-x-2 items-center">
          <input
            className="max-md:mt-[3px]"
            type="checkbox"
            id="policy"
            name="policy"
            checked={policyChecked}
            onChange={handlePolicyChange}
            required
          />{" "}
          <label
            htmlFor="policy"
            className="m-m text-gry-100 text-fs-14 flex flex-wrap gap-[3px]"
          >
            {languageData.booking.paymentConekta.textClauses}
            <a
              className="text-bl-100 no-underline"
              target="_blank"
              rel="noopener noreferrer"
              href={process.env.REACT_APP_URL_SITE + "/conditions"}
            >
              {languageData.booking.paymentConekta.conditions}
            </a>
          </label>
        </div>

        {/* INPUT TERMS */}
        <div className="flex gap-x-2 items-center">
          <input
            className="max-md:mt-[3px]"
            type="checkbox"
            id="terms"
            name="terms"
            checked={termsChecked}
            onChange={handleTermsChange}
            required
          />{" "}
          <label
            htmlFor="terms"
            className="m-m text-gry-100 text-fs-14 flex flex-wrap gap-[3px]"
          >
            {languageData.booking.paymentConekta.textClauses}{" "}
            <a
              className="text-bl-100 no-underline"
              target="_blank"
              rel="noopener noreferrer"
              href={process.env.REACT_APP_URL_SITE + "/privacy"}
            >
              {languageData.booking.paymentConekta.privacy}
            </a>
          </label>
        </div>
      </div>

      {/* BUTTON AND COUNT PAY */}
      <div className="flex justify-end my-[1rem] mx-0 max-md:hidden">
        <button
          type="submit"
          className="border-transparent bg-yw-100 text-black text-fs-16 rounded-full m-b flex items-center gap-[5px] px-[64px] py-[13px] hover:bg-yw-110"
        >
          {languageData.booking.paymentConekta.buttonForms}{" "}
        </button>
      </div>
    </div>
  );
}
