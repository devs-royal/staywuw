"use client";

import React, { createContext, useContext, useState } from "react";

import { orderData } from "./orderData";

const TourContext = createContext();

export const useTourContext = () => {
  return useContext(TourContext);
};

export const TourProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [orderTour, setOrderTour] = useState(1);
  const [tourData, setTourData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [tourInfo, setTourInfo] = useState(null);
  const [tourPrice, setTourPrice] = useState(0);

  const updateTourData = (newData) => {
    const sortedData = orderData(newData, orderTour);
    if (sortedData) {
      setTourData(sortedData);
      setTotalResults(sortedData.activities.length);
    }
  };

  const updatePage = (newPage) => {
    setCurrentPage(newPage);
  };

  // useEffect(() => {
  //   if (tourData) {
  //     const sortedData = orderData(tourData, orderTour);
  //     setTourData(sortedData);
  //     setTotalResults(sortedData.length);
  //   }
  // }, [orderTour]);

  const contextValue = {
    tourData,
    currentPage,
    filters,
    updateTourData,
    updatePage,
    setFilters,
    orderTour,
    setOrderTour,
    totalResults,
    setTourData,
    tourInfo,
    setTourInfo,
    setCurrentPage,
    tourPrice, 
    setTourPrice
  };

  return (
    <TourContext.Provider value={contextValue}>{children}</TourContext.Provider>
  );
};
