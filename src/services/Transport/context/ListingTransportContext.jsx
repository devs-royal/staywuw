"use client";

import React, { createContext, useState, useEffect } from "react";

import {
  filterByOrderHotel,
  filterBySelectedFilters,
} from "../utils/transportUtils";

const ListingTransportContext = createContext();

export const ListingTransportProvider = ({ children }) => {
  const [orderHotel, setOrderHotel] = useState(2);
  const [dataTransport, setDataTransport] = useState(null);
  const [dataTransportF, setDataTransportF] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [pricing, setPricing] = useState({ min: "", max: "" });

  useEffect(() => {
    if (dataTransport) {
      let filteredData = [...dataTransport];
      filteredData = filterByOrderHotel(filteredData, orderHotel);
      filteredData = filterBySelectedFilters(
        filteredData,
        selectedFilters,
        pricing
      );
      setDataTransportF(filteredData);
    }
  }, [orderHotel, selectedFilters, pricing, dataTransport]);

  return (
    <ListingTransportContext.Provider
      value={{
        dataTransport,
        setDataTransport,
        selectedFilters,
        setSelectedFilters,
        pricing,
        setPricing,
        orderHotel,
        setOrderHotel,
        dataTransportF,
      }}
    >
      {children}
    </ListingTransportContext.Provider>
  );
};

export default ListingTransportContext;
