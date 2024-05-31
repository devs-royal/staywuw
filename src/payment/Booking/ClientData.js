import validator from "validator";
import { Form } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";

import LanguageContext from "../../language/LanguageContext";

export default function ClientData(props) {
  const { languageData } = useContext(LanguageContext);

  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const phoneRegex = /^\d{0,10}$/;
  const nameRegexIndividual = /^[A-Za-z ]{1,40}$/;

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    if (nameRegexIndividual.test(value) || value === "") {
      setFirstName(value);
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    if (nameRegexIndividual.test(value) || value === "") {
      setLastName(value);
    }
  };

  // EMAIL VERIFICATION
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleEmailBlur = () => {
    const value = email;
    if (validator.isEmail(value) || value === "") {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    setIsEmailValidated(true);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (phoneRegex.test(value) || value === "") {
      setPhoneNumber(value);
    }
  };

  useEffect(() => {
    const isFormValid =
      nameRegexIndividual.test(firstName) &&
      nameRegexIndividual.test(lastName) &&
      (validator.isEmail(email) || email === "") &&
      (phoneRegex.test(phoneNumber) || phoneNumber === "");

    if (isFormValid) {
      const userData = {
        firstName,
        lastName,
        email,
        phoneNumber,
      };
      props.onUserDataChange(userData);
    }
  }, [firstName, lastName, email, phoneNumber]);

  return (
    <>
      <div className="form-client">
        <div className="title-data">
          {languageData.booking.clientData.titleForm}
        </div>

        <div className="container-input-form-payment align-items-end">
          <div className="d-flex flex-column width100 height100">
            <Form.Label htmlFor="firstName" className="subtitle-name-client">
              {languageData.booking.clientData.textName}{" "}
              <span className="input-obligations">*</span>
            </Form.Label>

            <input
              id="firstName"
              className="enter-data-client"
              placeholder={languageData.booking.clientData.placeholderName}
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>

          <div className="d-flex flex-column width100 height100">
            <Form.Label htmlFor="lastName" className="subtitle-data-client">
              {languageData.booking.clientData.textLastName}{" "}
              <span className="input-obligations">*</span>
            </Form.Label>

            <input
              id="lastName"
              className="enter-data-client"
              placeholder={languageData.booking.clientData.placeholderLastName}
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
        </div>

        <div className="container-input-form-payment align-items-start">
          <div className="d-flex flex-column width100 height100">
            <Form.Label htmlFor="email" className="subtitle-data-client">
              {languageData.booking.clientData.textEmail}
              <span className="input-obligations">*</span>
            </Form.Label>

            <input
              id="email"
              type="email"
              className="enter-data-client"
              placeholder={languageData.booking.clientData.placeholderEmail}
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur} // Nuevo evento onBlur
            />
            {isEmailValidated && !isEmailValid && (
              <div className="alert alert-danger">
                {languageData.booking.invalidEmail}
              </div>
            )}
          </div>

          <div className="d-flex flex-column width100 height100">
            <Form.Label htmlFor="phoneNumber" className="subtitle-data-client">
              {languageData.booking.clientData.textPhone}{" "}
              <span className="input-obligations">*</span>
            </Form.Label>

            <input
              id="phoneNumber"
              className="enter-data-client"
              placeholder={languageData.booking.clientData.placeholderPhone}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
