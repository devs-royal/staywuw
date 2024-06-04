"use client";

import { createContext, useState } from "react";
const PaymentContext = createContext();

const PaymentProviderContext = ({ children }) => {
  // CLIENT DATA
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // CREDIT CARD
  const [cvvCard, setCvvCard] = useState("");
  const [nameCard, setNameCard] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [expirationYear, setExpirationYear] = useState(null);
  const [expirationMonth, setExpirationMonth] = useState(null);
  const [policyChecked, setPolicyChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [isCVV, setIsCVV] = useState(false);

  // ACTIVITIES
  const [formActivityItems, setFormActivityItems] = useState(null);

  // RATE HAWK
  const [hotelRH, setRoomsRH] = useState([]);

  return (
    <PaymentContext.Provider
      value={{
        email,
        setEmail,
        lastName,
        setLastName,
        firstName,
        setFirstName,
        phoneNumber,
        setPhoneNumber,
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
        policyChecked,
        setPolicyChecked,
        termsChecked,
        setTermsChecked,
        isCVV,
        setIsCVV,
        formActivityItems,
        setFormActivityItems,
        hotelRH,
        setRoomsRH,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentProviderContext };
