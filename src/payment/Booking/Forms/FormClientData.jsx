"use client";

import validator from "validator";
import { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { PaymentContext } from "../../context/PaymentContext";

export default function FormClientData() {
  const {
    email,
    setEmail,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    phoneNumber,
    setPhoneNumber,
  } = useContext(PaymentContext);

  const { languageData } = useContext(LanguageContext);

  const [validation, setValidation] = useState({
    email: { valid: true, touched: false },
    firstName: { valid: true, touched: false },
    lastName: { valid: true, touched: false },
    phoneNumber: { valid: true, touched: false },
  });

  const phoneRegex = /^\d{0,10}$/;
  const nameRegexIndividual = /^[A-Za-z ]{1,40}$/;

  const handleFieldChange = (field, setter) => (e) => {
    const value = e.target.value;
    if (field === "phoneNumber" && !phoneRegex.test(value)) return;
    if (
      (field === "firstName" || field === "lastName") &&
      !nameRegexIndividual.test(value)
    )
      return;

    setter(value);
    setValidation((prev) => ({
      ...prev,
      [field]: { ...prev[field], touched: true },
    }));
  };

  const handleBlur = (field, value) => () => {
    let isValid = true;
    switch (field) {
      case "email":
        isValid = validator.isEmail(value) || value === "";
        break;
      case "firstName":
      case "lastName":
        isValid = nameRegexIndividual.test(value) || value === "";
        break;
      case "phoneNumber":
        isValid = phoneRegex.test(value) || value === "";
        break;
      default:
        break;
    }
    setValidation((prev) => ({
      ...prev,
      [field]: { valid: isValid, touched: true },
    }));
  };

  return (
    <div className="w-full bg-white rounded-2xl pt-[2rem] pb-[3rem] px-[1.8rem]">
      <div className="m-b text-fs-20 text-black">
        {languageData.booking.clientData.titleForm}
      </div>

      <div className="flex justify-between gap-[1.5rem] items-end max-md:flex-col">
        <div className="flex flex-col w-full h-full">
          <label
            htmlFor="firstName"
            className="mt-[22px] m-b text-fs-12 text-gry-100"
          >
            {languageData.booking.clientData.textName}{" "}
            <span className="text-red-100">*</span>
          </label>
          <input
            type="text"
            className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] appearance-none focus:outline-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
            placeholder={languageData.booking.clientData.placeholderName}
            value={firstName}
            onChange={handleFieldChange("firstName", setFirstName)}
            onBlur={handleBlur("firstName", firstName)}
            required
          />
        </div>

        <div className="flex flex-col w-full h-full">
          <label
            htmlFor="lastName"
            className="mt-[16px] m-b text-fs-12 text-gry-100"
          >
            {languageData.booking.clientData.textLastName}{" "}
            <span className="text-red-100">*</span>
          </label>
          <input
            className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] appearance-none border border-[#ebebeb] focus:outline-none placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
            placeholder={languageData.booking.clientData.placeholderLastName}
            value={lastName}
            onChange={handleFieldChange("lastName", setLastName)}
            onBlur={handleBlur("lastName", lastName)}
            required
          />
        </div>
      </div>

      <div className="flex justify-between gap-[1.5rem] items-start">
        <div className="flex flex-col w-full h-full">
          <label
            htmlFor="email"
            className="mt-[16px] m-b text-fs-12 text-gry-100"
          >
            {languageData.booking.clientData.textEmail}
            <span className="text-red-100">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] appearance-none border border-[#ebebeb] focus:outline-none  placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
            placeholder={languageData.booking.clientData.placeholderEmail}
            value={email}
            onChange={handleFieldChange("email", setEmail)}
            onBlur={handleBlur("email", email)}
            required
          />

          {!validation.email.valid && validation.email.touched && (
            <div className="bg-red-50 rounded-lg px-[10px] py-[20px] border border-red-70 tm-s-b">
              {languageData.booking.invalidEmail}
            </div>
          )}
        </div>

        <div className="flex flex-col w-full h-full">
          <label
            htmlFor="phoneNumber"
            className="mt-[16px] m-b text-fs-12 text-gry-100"
          >
            {languageData.booking.clientData.textPhone}{" "}
            <span className="text-red-100">*</span>
          </label>
          <input
            className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] appearance-none border border-[#ebebeb] focus:outline-none placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
            placeholder={languageData.booking.clientData.placeholderPhone}
            value={phoneNumber}
            onChange={handleFieldChange("phoneNumber", setPhoneNumber)}
            onBlur={handleBlur("phoneNumber", phoneNumber)}
            required
          />
          {!validation.phoneNumber.valid && validation.phoneNumber.touched && (
            <div className="bg-red-50 rounded-lg px-[10px] py-[20px] border border-red-70 tm-s-b">
              {languageData.booking.invalidPhone}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
