import { useContext } from "react";

import CardPaymentT from "@/payment/Utils/CardPaymentT";
import ButtonPayment from "../Components/ButtonPayment";
import LanguageContext from "@/language/LanguageContext";
import { PaymentContext } from "@/payment/context/PaymentContext";

export default function FormCreditCard() {
  const { languageData } = useContext(LanguageContext);
  const {
    cvvCard,
    setCvvCard,
    nameCard,
    setNameCard,
    numberCard,
    setNumberCard,
    expirationYear,
    setExpirationYear,
    expirationMonth,
    setExpirationMonth,
    setIsCVV,
  } = useContext(PaymentContext);

  const cvvCardRegex = /^\d{0,4}$/;
  const nameRegex = /^[A-Za-z ]{1,27}$/;

  const handleNameCardChange = (e) => {
    const value = e.target.value;
    if (nameRegex.test(value) || value === "") {
      setNameCard(value);
    }
  };

  const handleNumberCardChange = (e) => {
    const value = e.target.value;
    const cardNumber = value.replace(/\D/g, "");
    const truncatedCardNumber = cardNumber.slice(0, 16);

    setNumberCard(truncatedCardNumber);
  };

  const handleExpirationChange = (event) => {
    const { value } = event.target;
    const [month, year] = value.split("/");
    setExpirationMonth(month);
    setExpirationYear(20 + year);
  };

  const handleCvvCardChange = (e) => {
    const value = e.target.value;
    if (cvvCardRegex.test(value) || value === "") {
      setCvvCard(value);
    }
  };

  return (
    <>
      <div className="py-[2rem] px-[1.5rem] bg-white mt-[2.5rem] mb-[1.6rem] rounded-[19px] max-lg:p-[1rem]">
        <div className="m-b text-fs-21 text-black">
          {languageData.booking.paymentConekta.titleForm}
        </div>

        <div className="flex gap-[2rem] mt-[1.2rem] max-xl:flex-col max-md:mb-[1.7rem]">
          <div className="w-full flex justify-center">
            <CardPaymentT />
          </div>

          <div className="flex flex-col justify-center gap-3 w-full">
            {/* CARDHOLDER */}
            <div className="block">
              <label htmlFor="nameCard" className="m-s-b text-fs-13 mb-[.5rem]">
                {languageData.booking.paymentConekta.textNameTitular}{" "}
                <span className="text-red-100">*</span>
              </label>

              <input
                // id="nameCard"
                className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] text-black border border-[#ebebeb] focus:outline-none placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
                data-conekta="card[name]"
                placeholder={
                  languageData.booking.paymentConekta.placeholderNameTitular
                }
                value={nameCard}
                onChange={handleNameCardChange}
                required
              />
            </div>

            {/* CARD NUMBER */}
            <div className="block">
              <label htmlFor="numberCard" className="m-b text-fs-12 mb-[.5rem]">
                {languageData.booking.paymentConekta.textNumberCard}{" "}
                <span className="text-red-100">*</span>
              </label>

              <div className="relative">
                <input
                  // id="numberCard"
                  className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] text-black border border-[#ebebeb] focus:outline-none placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
                  data-conekta="card[number]"
                  placeholder={
                    languageData.booking.paymentConekta.placeholderNumberCard
                  }
                  value={numberCard}
                  onChange={handleNumberCardChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              {/* EXPIRATION DATE */}
              <div className="flex flex-col">
                <label
                  htmlFor="expirationDate"
                  className="mt-0 m-s-b text-fs-13 mb-[.5rem]"
                >
                  {languageData.booking.paymentConekta.textDate}{" "}
                  <span className="text-red-100">*</span>
                </label>

                <input
                  className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] text-black border border-[#ebebeb] focus:outline-none placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
                  placeholder={
                    languageData.booking.paymentConekta.placeholderDate
                  }
                  maxLength="5"
                  pattern="\d{2}/\d{2}"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^\d/]/g, "");
                    if (
                      e.target.value.length === 2 &&
                      !e.target.value.includes("/")
                    ) {
                      e.target.value = e.target.value + "/";
                    }
                  }}
                  onChange={handleExpirationChange}
                  required
                />
              </div>

              {/* CVV */}
              <div className="flex flex-col">
                <label
                  htmlFor="cvvCard"
                  className="mt-0 m-s-b text-fs-13 mb-[.5rem]"
                >
                  {languageData.booking.paymentConekta.textCvv}{" "}
                  <span className="text-red-100">*</span>
                </label>

                <input
                  // id="cvvCard"
                  className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] text-black border border-[#ebebeb] focus:outline-none placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
                  data-conekta="card[cvc]"
                  placeholder={languageData.booking.paymentConekta.textCvv}
                  value={cvvCard}
                  onChange={handleCvvCardChange}
                  onFocus={() => setIsCVV(true)}
                  onBlur={() => setIsCVV(false)}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BUTTON PAYMENT AND TERMS & CONDITIONS */}
        <ButtonPayment />
      </div>

      {/* IT IS NOT SHOW TO THE USER BUT WE USE IT FOR OUT DATA */}
      <div className="hidden">
        <input
          type="text"
          defaultValue={String(expirationMonth)}
          data-conekta="card[exp_month]"
          placeholder="month"
        />

        <input
          type="text"
          defaultValue={String(expirationYear)}
          data-conekta="card[exp_year]"
          placeholder="year"
        />
      </div>
    </>
  );
}
