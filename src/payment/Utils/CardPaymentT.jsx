import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { PaymentContext } from "../context/PaymentContext";
import VisaIcon from "../../assets/icons/utils/payment/visa.svg";
import ChipCard from "../../assets/icons/utils/payment/chip-card.svg";
import FondBackIcon from "../../assets/icons/utils/others/font-royal.png";
import AmexIcon from "../../assets/icons/utils/payment/american-express.svg";
import MasterCardIcon from "../../assets/icons/utils/payment/master-card.svg";

const numberCardDefault = "xxxxxxxxxxxxxxxx";

export default function CardPaymentT() {
  const [isBack, setIsBack] = useState(false);
  const [cardType, setCardType] = useState(null);
  const { languageData } = useContext(LanguageContext);

  const {
    isCVV,
    nameCard,
    expirationMonth,
    expirationYear,
    cvvCard,
    numberCard,
  } = useContext(PaymentContext);

  const handleNumberCardChange = () => {
    const truncatedCardNumber = numberCard.slice(0, 16);

    if (truncatedCardNumber === "") {
      setCardType(null);
    } else if (truncatedCardNumber.startsWith("4")) {
      setCardType("Visa");
    } else if (truncatedCardNumber.startsWith("5")) {
      setCardType("MasterCard");
    } else if (truncatedCardNumber.startsWith("3")) {
      setCardType("Amex");
    }
  };

  useEffect(() => {
    handleNumberCardChange();
  }, [numberCard]);

  const cartTypeSvg = () => {
    if (cardType) {
      switch (cardType) {
        case "Visa":
          return (
            <Image
              className="h-[1.5rem] w-auto"
              alt="type-card-payment"
              src={VisaIcon}
            />
          );
        case "MasterCard":
          return (
            <Image
              className="h-[1.5rem] w-auto"
              alt="type-card-payment"
              src={MasterCardIcon}
            />
          );
        case "Amex":
          return (
            <Image
              className="h-[1.5rem] w-auto"
              alt="type-card-payment"
              src={AmexIcon}
            />
          );
        default:
          return "";
      }
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (isCVV === true) {
      setIsBack(isCVV);
      changeCard();
    } else {
      changeCard();
    }
  }, [isCVV]);

  const numberSpace = () => {
    let result = [];
    let actualNumberCard = numberCard ? numberCard : numberCardDefault;
    for (let i = 0; i < actualNumberCard.length; i += 4) {
      if (result.length <= 4) {
        result.push(actualNumberCard.slice(i, i + 4) + " ");
      }
    }
    return result;
  };

  const card = document.getElementById("card-payment");

  const changeCard = () => {
    if (card) {
      rotateCard();
    }
  };

  const rotateCard = () => {
    if (!isBack) {
      card.style.transform = "rotateY(180deg)";
    } else {
      card.style.transform = "rotateY(0deg)";
    }
    setIsBack(!isBack);
  };

  return (
    <div
      className="w-full h-[15em] flex relative bg-gradient-to-r from-[#6c87e9] to-[#2743a6] rounded-l-xl rounded-tr-[1.8rem] rounded-br-xl transition-transform duration-500 transform-style-preserve-3d max-xl:w-[88%] max-md:w-full"
      id="card-payment"
    >
      {isBack === false && (
        <>
          <Image
            className="absolute top-0 right-[3px] h-[96%] w-auto opacity-10 max-md:h-[90%]"
            width={44}
            height={44}
            src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw-wt.svg`}
            alt="logo transparent cart"
          />

          <div className="w-full h-auto backface-hidden relative flex flex-col justify-end gap-[3rem] items-center mt-[2rem] mx-[16px] mb-[1.6rem] rotate-y-0">
            <Image
              className="absolute left-0 top-0 w-[2.6rem] h-auto opacity-80 !shadow-[0_9px_24px_1px_rgba(0,0,0,0.58)]"
              src={ChipCard}
              alt="chip icon"
            />

            <div className="m-b text-fs-24 text-white w-full flex justify-start gap-[0.5rem] tracking-[3px] max-2xl:gap-[1rem] max-md:text-fs-21 max-md:gap-[0.4rem]">
              {numberSpace().map((value, item) => (
                <div key={item} className="flex">
                  {value}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center w-full gap-[2rem]">
              <div className="flex gap-[2rem]">
                <div className="flex flex-col">
                  <span className="m-m text-fs-12 text-[#cbcbcb]">
                    {languageData.booking.paymentConekta.cardPayment.cardHolder}
                  </span>
                  <span className="m-b text-fs-13 text-[#cbcbcb]">
                    {nameCard && nameCard !== ""
                      ? nameCard
                      : languageData.booking.paymentConekta.cardPayment
                          .nameAndSurname}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="m-m text-fs-12 text-[#cbcbcb]">
                    {
                      languageData.booking.paymentConekta.cardPayment
                        .expirationDate
                    }
                  </span>
                  <span className="m-b text-fs-13 text-[#cbcbcb]">{`${
                    expirationMonth ? expirationMonth : "MM"
                  }/${expirationYear ? expirationYear : "YY"}`}</span>
                </div>
              </div>

              {cartTypeSvg()}
            </div>
          </div>
        </>
      )}

      {isBack === true && (
        <>
          <Image
            src={FondBackIcon}
            alt="font back card"
            className="absolute w-full h-full rounded-l-xl rounded-tr-[1.8rem] rounded-br-xl"
          />
          {/* src={RoyalLetterIcon} */}
          <Image
            className="absolute bottom-[13px] right-[32px] w-[9rem] h-auto scale-x-[-1] max-md:bottom-[13px] max-md:right-[32px] max-md:w-[7rem]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/general/principal-logo-blank.svg`}
            width={22}
            height={22}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon letter`}
          />

          <div className="w-full h-auto flex justify-center items-center rotate-y-180 backface-hidden">
            <div className="flex flex-col py-4 h-full w-full justify-center">
              <div className="bg-black w-full h-[3rem]" />

              <div className="flex w-full justify-end relative pr-4">
                <div className="flex flex-col mt-4 gap-2 w-[30%]">
                  <span className="text-end m-m text-white text-fs-12">
                    CVV
                  </span>
                  <div
                    className={`${
                      !cvvCard && "text-[#cbcbcb]"
                    } bg-white rounded-lg h-[2rem] w-full text-black m-b text-fs-16 text-center flex items-center justify-center py-[1.5rem] px-0`}
                  >
                    {cvvCard ? cvvCard : "Ej. 123"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
