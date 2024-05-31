import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import "../../assets/styles/web/CardPayment.css";
import LanguageContext from "../../language/LanguageContext";

import FondBackIcon from "../../assets/icons/utils/others/font-royal.png";
import ChipCard from "../../assets/icons/utils/payment/chip-card.svg";
import RoyalLetterIcon from "../../assets/icons/utils/others/royal-letter.svg";
import IconLogo from "../../assets/icons/utils/payment/icon-logo-transparent.svg";
import MasterCardIcon from "../../assets/icons/utils/payment/master-card.svg";
import AmexIcon from "../../assets/icons/utils/payment/american-express.svg";
import VisaIcon from "../../assets/icons/utils/payment/visa.svg";

const numberCardDefault = "xxxxxxxxxxxxxxxx";

export default function CardPayment(props) {
  const [isBack, setIsBack] = useState(false);
  const { languageData } = useContext(LanguageContext);

  const {
    isCVV,
    nameCard,
    expirationMonth,
    expirationYear,
    cvvCard,
    numberCard,
    cardType,
  } = props;

  const cartTypeSvg = () => {
    if (cardType) {
      switch (cardType) {
        case "Visa":
          return <Image className="type-card-payment" src={VisaIcon} />;
        case "MasterCard":
          return <Image className="type-card-payment" src={MasterCardIcon} />;
        case "Amex":
          return <Image className="type-card-payment" src={AmexIcon} />;
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

  //   const numberSpace = () => {
  //     let result = ["xxxx", "xxxx", "xxxx", "xxxx"];
  //     let numberCardCl = [];
  //     let actualNumberCard = numberCard && numberCard;
  //     for (let i = 0; i < actualNumberCard.length; i += 4) {
  //       numberCardCl.push(actualNumberCard.slice(i, i + 4) + " ");
  //     }

  //     if (numberCardCl.length > 3) {
  //       result[result.length - 1] = numberCardCl[numberCardCl.length - 1];
  //     }
  //     return result;
  //   };

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
    // setIsBack((prevStat) => !prevStat);
    if (card) {
      rotateCard();
    }

    // const changeI = ((prevStat) => !prevStat);
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
      className="container-cards-payment"
      //   onClick={() => changeCard()}
      id="card-payment"
    >
      {isBack === false && (
        <>
          <Image className="icon-logo-transparent" src={IconLogo} alt="logo transparent cart"/>

          <div className="front-card">
            <Image className="chip-icon" src={ChipCard} alt="chip icon"/>

            <div className="number-card">
              {numberSpace().map((value, item) => (
                <div key={item} className="d-flex">
                  {value}
                </div>
              ))}
            </div>

            <div className="general-info-card">
              <div className="info-personal-card">
                <div className="titular-name">
                  <span className="title">
                    {languageData.booking.paymentConekta.cardPayment.cardHolder}
                  </span>
                  <span className="titular-info">
                    {nameCard && nameCard !== ""
                      ? nameCard
                      : languageData.booking.paymentConekta.cardPayment
                          .nameAndSurname}
                  </span>
                </div>

                <div className="due-date">
                  <span className="title">
                    {
                      languageData.booking.paymentConekta.cardPayment
                        .expirationDate
                    }
                  </span>
                  <span className="titular-info">{`${
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
            className="font-back-card"
          />
          <Image className="royal-name-card-back" src={RoyalLetterIcon} alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon letter`}/>

          <div className="back-card">
            <div className="d-flex flex-column py-4 hight100 width100">
              <div className="withe-container" />

              <div className="d-flex width100 justify-content-end position-relative pe-4">
                <div className="d-flex flex-column mt-4 gap-2 width3">
                  <span className="cvv-text-card">CVV</span>
                  <div
                    className={`${
                      !cvvCard && "cv-content-example"
                    } cvv-content`}
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
