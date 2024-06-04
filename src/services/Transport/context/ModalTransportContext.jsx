"use client";

import React, { createContext, useState } from "react";

const ModalTransportContext = createContext();

export const ModalTransportProvider = ({ children }) => {
  const [departureTime, setDepartureTime] = useState(null);
  const [comebackTime, setComebackTime] = useState(null);

  const [departureDate, setDepartureDate] = useState(null);
  const [comebackDate, setComebackDate] = useState(null);

  const [passenger, setPassenger] = useState(0);

  return (
    <ModalTransportContext.Provider
      value={{
        passenger,
        setPassenger,
        departureDate,
        setDepartureDate,
        comebackDate,
        setComebackDate,
        departureTime,
        setDepartureTime,
        comebackTime,
        setComebackTime,
      }}
    >
      {children}
    </ModalTransportContext.Provider>
  );
};

export default ModalTransportContext;
