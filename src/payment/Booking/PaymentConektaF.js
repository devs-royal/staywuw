import React, {
  useState,
  useEffect,
  useContext,
  Suspense,
  lazy,
  useRef,
} from "react";
import { Form } from "react-bootstrap";
import { CircularProgress } from "@mui/material";

import { StepperContext } from "../context/steeperContext";
import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import { AlertRate } from "./AlertRate";

import SuccessData from "../../assets/animations/success.json";
import FailureData from "../../assets/animations/failure.json";
import LoadingData from "../../assets/animations/loadingFly.json";

import { handleErrorsAxios } from "../../config/Logger/handleErrors";
import { useIsMobileNew } from "../../config/Mobile/isMobile";

const AlertBooking = lazy(() => import("./AlertBooking"));
const CardPayment = lazy(() => import("../Utils/CardPayment"));

export default function PaymentConektaF(props) {
  const { userData, onAlertDataChange, hotelRH, changeButton, formActivityItems } = props;

  const [showModal, setShowModal] = useState(false);
  const [animationData, setAnimationData] = useState(LoadingData);
  const [alertText, setAlertText] = useState("PP");
  const [uid, setUid] = useState(null);

  const { languageData } = useContext(LanguageContext);

  const [nameCard, setNameCard] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [cvvCard, setCvvCard] = useState("");

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [progress, setProgress] = useState(10);
  const [alertRateVisible, setAlertRateVisible] = useState(false);
  const [dataRate, setDataRate] = useState(null);

  const [isUserDataValid, setIsUserDataValid] = useState(false);

  // Función para simular el clic en el botón
  const buttonRef = useRef(null);
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  useEffect(() => {
    if (changeButton > 0) {
      // handleSubmit({ preventDefault: () => { } });
      handleClick();
    }
  }, [changeButton]);

  const {
    handleStepChange,
    setTermsAccept,
    setPolicyAccept,
    setIsButtonActive,
    setCountNumber,
    setProgressCount,
  } = useContext(StepperContext);

  useEffect(() => {
    if (hotelRH === null) {
      checkUserDataAndCardData();
    } else {
      checkUserDataCardDataRH();
    }
  }, [userData, nameCard, numberCard, cvvCard, hotelRH]);

  const checkUserDataAndCardData = () => {
    let validate =
      userData &&
      userData.firstName &&
      userData.lastName &&
      userData.email &&
      userData.phoneNumber &&
      nameCard &&
      numberCard &&
      cvvCard;
    if (validate) {
      setIsUserDataValid(true);
    } else {
      setIsUserDataValid(false);
    }
  };

  const checkUserDataCardDataRH = () => {
    let validate =
      hotelRH.filter((hotel) => hotel.type === "ch" && hotel.age).length ===
        hotelRH.filter((hotel) => hotel.type === "ch").length &&
      hotelRH.filter((hotel) => hotel.firstName && hotel.lastName).length ===
        hotelRH.length &&
      userData &&
      userData.firstName &&
      userData.lastName &&
      userData.email &&
      userData.phoneNumber &&
      nameCard &&
      numberCard &&
      cvvCard;
    if (validate) {
      setIsUserDataValid(true);
    } else {
      setIsUserDataValid(false);
    }
  };

  const checkboxStyle = {
    cursor: isUserDataValid ? "pointer" : "not-allowed",
    color: isUserDataValid ? "black" : "lightgray",
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const cartId = searchParams.get("uid");
    setUid(cartId);
  }, []);

  const cvvCardRegex = /^\d{0,4}$/;
  const nameRegex = /^[A-Za-z ]{1,27}$/;

  const handleNameCardChange = (e) => {
    const value = e.target.value;
    setIsCVV(false);
    if (nameRegex.test(value) || value === "") {
      setNameCard(value);
    }
  };

  const handleNumberCardChange = (e) => {
    setIsCVV(false);
    const value = e.target.value;
    const cardNumber = value.replace(/\D/g, "");
    const truncatedCardNumber = cardNumber.slice(0, 16);

    setNumberCard(truncatedCardNumber);

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

  const handleCvvCardChange = (e) => {
    const value = e.target.value;
    setIsCVV(true);
    if (cvvCardRegex.test(value) || value === "") {
      setCvvCard(value);
    }
  };

  // LOGIC CONEKTA
  const conektaSuccessResponseHandler = (token) => {
    const firstName = userData.firstName;
    const lastName = userData.lastName;
    const email = userData.email;
    const phoneNumber = userData.phoneNumber;
    const lastFourDigits = numberCard.substring(numberCard.length - 4);

    axiosWithInterceptor
      .post("v1/payment", {
        token: token.id,
        name: firstName,
        lastname: lastName,
        email: email,
        phone: phoneNumber,
        currency: "MXN",
        cartId: uid,
        cardTitular: nameCard,
        cardNumber: lastFourDigits,
        ...(hotelRH ? { guests: hotelRH } : {}),
        ...(formActivityItems ? { items: formActivityItems } : {}),
        // ...(required ? {
        //   items: [
        //     {
        //       type: 'activity',
        //       id: '153697',
        //       details: [
        //         {
        //           id: 'comentarios-65df5f8ba9dc34.42369804',
        //           value: '',
        //         }
        //       ]
        //     }
        //   ]
        //  } : {}),
      })
      .then((response) => {
        setAnimationData(SuccessData);
        setAlertText("PE");
        setTimeout(() => {
          setShowModal(false);
          handleStepChange(3);
        }, 3000);
      })
      .catch((error) => {
        handleErrorsAxios(error);
        setAnimationData(FailureData);
        setAlertText("PF");
        setTermsChecked(false);
        setPolicyChecked(false);
        setPolicyAccept(false);
        setTermsAccept(false);
        setTimeout(() => {
          setShowModal(false);
        }, 3000);

        // LIST ALERTS
        if (
          error.response &&
          [400, 402, 404, 500].includes(error.response.status)
        ) {
          onAlertDataChange(error.response.data);
        }
      });
  };

  const conektaErrorResponseHandler = (response) => {
    setAnimationData(FailureData);
    setAlertText("PF");
    setTermsChecked(false);
    setPolicyChecked(false);
    setPolicyAccept(false);
    setTermsAccept(false);

    setTimeout(() => {
      onAlertDataChange(response);
      setShowModal(false);
    }, 3000);
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setShowModal(true);
    setAnimationData(LoadingData);
    setAlertText("PP");
    // event.preventDefault();
    const form = event.target;
    window.Conekta.Token.create(
      form,
      conektaSuccessResponseHandler,
      conektaErrorResponseHandler
    );
    event.preventDefault();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [expirationMonth, setExpirationMonth] = useState(null);
  const [expirationYear, setExpirationYear] = useState(null);

  const handleExpirationChange = (event) => {
    setIsCVV(false);
    const { value } = event.target;
    const [month, year] = value.split("/");
    setExpirationMonth(month);
    setExpirationYear(20 + year);
  };

  // VALIDATE CHECKBOX

  const [policyChecked, setPolicyChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [requestMade, setRequestMade] = useState(false);

  const handlePolicyChange = () => {
    setIsCVV(false);
    setPolicyAccept(!policyChecked);
    setPolicyChecked(!policyChecked);
  };

  const handleTermsChange = () => {
    setIsCVV(false);
    setTermsAccept(!termsChecked);
    setTermsChecked(!termsChecked);
  };

  useEffect(() => {
    if (requestMade === false) {
      checkStatus();
    }
  }, [policyChecked, termsChecked]);

  // Function to handle the request and countdown
  const checkStatus = () => {
    setAlertRateVisible(false);

    if ((policyChecked || termsChecked) && !requestMade) {
      setRequestMade(true);
      startCountdown();

      axiosWithInterceptor
        .get(`v1/carts/${uid}/validate`)
        .then((response) => {
          if (response.status === 204) {
            setIsButtonEnabled(true);
            setIsButtonActive(true);
          }
          if (response.status === 200) {
            openModalRate();
            setDataRate(response.data);
          }

          setDataRate(response.data);
        })
        .catch((error) => {
          console.error(error);
          handleErrorsAxios(error);
        });
    } else {
      setIsButtonEnabled(false);
      setIsButtonActive(false);
    }
  };

  useEffect(() => {
    if (policyChecked || termsChecked) {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 3
        );
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [policyChecked, termsChecked]);

  const startCountdown = () => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      setIsButtonEnabled(false);
      setCountdown(30);
      setTermsChecked(false);
      setPolicyChecked(false);
      setPolicyAccept(false);
      setTermsAccept(false);
      setRequestMade(false);
      setProgress(10);
    }, 30000);
  };

  const openModalRate = () => {
    setAlertRateVisible(true);
  };

  // OTHERS FUNCTIONS

  const conektaPublicKey = process.env.NEXT_PUBLIC_CONEKTA_KEY;
  window.Conekta.setPublicKey(conektaPublicKey);

  const [cardType, setCardType] = useState(null);
  const [isCVV, setIsCVV] = useState(false);

  // handled countUp
  const isMobile = useIsMobileNew();

  useEffect(() => {
    if (isMobile) {
      if (countdown) {
        setCountNumber(countdown);
      }
      if (progress) {
        setProgressCount(progress);
      }
    }
  }, [countdown, progress]);
  return (
    <>
      <form
        method="POST"
        name="paymentForm"
        id="card-form"
        onSubmit={handleSubmit}
      >
        <div className="form-payment">
          <div className="title-payment-form">
            {languageData.booking.paymentConekta.titleForm}
          </div>

          <div className="container-payment-information">
            <div className="card-payment-info-back-front">
              <Suspense fallback={null}>
                <CardPayment
                  isCVV={isCVV}
                  nameCard={nameCard}
                  expirationMonth={expirationMonth}
                  expirationYear={expirationYear}
                  cvvCard={cvvCard}
                  numberCard={numberCard}
                  cardType={cardType}
                />
              </Suspense>
            </div>

            <div className="form-data-card-payment d-flex flex-column justify-content-center gap-3 width100">
              <div className="d-block">
                <Form.Label htmlFor="nameCard" className="name-client-card">
                  {languageData.booking.paymentConekta.textNameTitular}{" "}
                  <span className="input-obligations">*</span>
                </Form.Label>

                <input
                  id="nameCard"
                  className="enter-data-client"
                  data-conekta="card[name]"
                  placeholder={
                    languageData.booking.paymentConekta.placeholderNameTitular
                  }
                  value={nameCard}
                  onChange={handleNameCardChange}
                  required
                />
              </div>

              <div className="d-block">
                <Form.Label
                  htmlFor="numberCard"
                  className="subtitle-name-client payment"
                >
                  {languageData.booking.paymentConekta.textNumberCard}{" "}
                  <span className="input-obligations">*</span>
                </Form.Label>

                <div className="position-relative">
                  <input
                    id="numberCard"
                    className="enter-data-client"
                    data-conekta="card[number]"
                    placeholder={
                      languageData.booking.paymentConekta.placeholderNumberCard
                    }
                    value={numberCard}
                    onChange={handleNumberCardChange}
                    required
                  />
                  {/* <div className="icon-card-pay">{getCardIcon()}</div> */}
                </div>
              </div>

              <div className="d-flex justify-content-between gap-2">
                <div className="d-flex flex-column">
                  <Form.Label
                    htmlFor="expirationDate"
                    className="subtitle-name-client payment"
                  >
                    {languageData.booking.paymentConekta.textDate}{" "}
                    <span className="input-obligations">*</span>
                  </Form.Label>

                  <input
                    className="enter-data-client"
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

                <div className="d-flex flex-column">
                  <Form.Label
                    htmlFor="cvvCard"
                    className="subtitle-name-client payment"
                  >
                    {languageData.booking.paymentConekta.textCvv}{" "}
                    <span className="input-obligations">*</span>
                  </Form.Label>

                  <input
                    id="cvvCard"
                    className="enter-data-client"
                    data-conekta="card[cvc]"
                    placeholder={languageData.booking.paymentConekta.textCvv}
                    value={cvvCard}
                    onChange={handleCvvCardChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            {/* TERMS & CONDITIONS */}
            <div>
              <div className="d-flex gap-2">
                <input
                  type="checkbox"
                  id="policy"
                  name="policy"
                  checked={policyChecked}
                  onChange={handlePolicyChange}
                  style={checkboxStyle}
                  disabled={!isUserDataValid}
                />{" "}
                <label
                  htmlFor="policy"
                  className="clauses"
                  style={{
                    cursor: isUserDataValid ? "pointer" : "not-allowed",
                  }}
                >
                  {languageData.booking.paymentConekta.textClauses}
                  <a
                    className="label-link-payment"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={process.env.REACT_APP_URL_SITE + "/conditions"}
                  >
                    {languageData.booking.paymentConekta.conditions}
                  </a>
                </label>
              </div>

              <div className="d-flex gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={termsChecked}
                  onChange={handleTermsChange}
                  style={checkboxStyle}
                  disabled={!isUserDataValid}
                />{" "}
                <label
                  htmlFor="terms"
                  className="clauses"
                  style={{
                    cursor: isUserDataValid ? "pointer" : "not-allowed",
                  }}
                >
                  {languageData.booking.paymentConekta.textClauses}{" "}
                  <a
                    className="label-link-payment"
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
            <div className="payment-styles">
              <button
                type="submit"
                ref={buttonRef}
                className={`button-payment-details ${
                  !policyChecked || !termsChecked || !isButtonEnabled
                    ? "disabled"
                    : ""
                } ${
                  policyChecked && termsChecked
                    ? "add-padding-container hover:bg-yw-110"
                    : "disabled-padding-button"
                }`}
                disabled={!policyChecked || !termsChecked || !isButtonEnabled}
              >
                {languageData.booking.paymentConekta.buttonForms}{" "}
                {policyChecked && termsChecked && (
                  <div className="position-relative d-inline-flex justify-content-center">
                    <CircularProgress
                      variant="determinate"
                      value={progress}
                      id="circle-count"
                    />
                    <div className="count-number">{countdown}</div>
                  </div>
                )}
              </button>

              {/* COUNT */}
              {/* <div className="count-down">
                {policyChecked && termsChecked && (
                  <>
                    <span className="payment-in-text">
                      {languageData.payment.paymentIn}
                    </span>
                    <div className="position-relative d-inline-flex justify-content-center">
                      <CircularProgress
                        variant="determinate"
                        value={progress}
                      />
                      <div className="count-number">{countdown}</div>
                    </div>
                  </>
                )}
              </div> */}
            </div>
          </div>
        </div>

        {/* IT IS NOT SHOWN TO THE USER BUT WE USE IT FOR OUT DATA */}
        <div className="d-none">
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
      </form>

      {/* ALERTS BOOKING */}
      <Suspense fallback={null}>
        {showModal && (
          <AlertBooking
            show={showModal}
            handleClose={handleCloseModal}
            animationData={animationData}
            alertText={alertText}
          />
        )}
      </Suspense>

      <AlertRate
        alertShowRate={alertRateVisible}
        infoDataRate={dataRate}
        cartUid={uid}
      />
    </>
  );
}
