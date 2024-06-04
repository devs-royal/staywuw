"use client";

import React, { createContext, useState } from "react";

const DetailTourContext = createContext();

export const DetailTourProvider = ({ children }) => {
  const [dataTour, setDataTour] = useState(null);
  const [dayTour, setDayTour] = useState(null);
  const [hourTour, setHourTour] = useState(null);
  const [codeNameTour, setCodeNameTour] = useState(null);
  const [selectModality, setSelectModality] = useState(null);

  return (
    <DetailTourContext.Provider
      value={{
        dataTour,
        setDataTour,
        dayTour,
        setDayTour,
        hourTour,
        setHourTour,
        selectModality,
        setSelectModality,
        codeNameTour,
        setCodeNameTour,
      }}
    >
      {children}
    </DetailTourContext.Provider>
  );
};

export default DetailTourContext;
