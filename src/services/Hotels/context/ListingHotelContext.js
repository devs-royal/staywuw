"use client";

import React, { createContext, useEffect, useState } from "react";
import {
  fetchHotelDetailsByKeys,
  fetchPostHotels,
} from "../config/axiosService";
import {
  applyFilters,
  combineHotelData,
  sortAndFilterHotels,
} from "../utils/hotelUtils";

const ListingHotelContext = createContext();

export const ListingHotelProvider = ({ children }) => {
  const [orderHotel, setOrderHotel] = useState(2);
  const [mapHotels, setMapHotels] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [pricing, setPricing] = useState({ min: "", max: "" });
  const [combinedHotelData, setCombinedHotelData] = useState(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHotelsToShow, setTotalHotelsToShow] = useState(10);
  const [totalFilteredHotels, setTotalFilteredHotels] = useState(0);

  const hotelsPerPage = 10;  

  useEffect(() => {
    const fetchAndLogHotelDetails = async () => {
      if (mapHotels && mapHotels.length > 0) {
        const filteredSortedHotels = sortAndFilterHotels(
          applyFilters(mapHotels, selectedFilters, pricing),
          orderHotel
        );
        setTotalFilteredHotels(filteredSortedHotels.length);

        // RANGE HOTELS
        const startIndex = (currentPage - 1) * hotelsPerPage;
        const endIndex = Math.min(
          startIndex + totalHotelsToShow,
          filteredSortedHotels.length
        );

        const hotelsToFetchDetails = filteredSortedHotels.slice(
          startIndex,
          endIndex
        );
        const keys = hotelsToFetchDetails.map((hotel) => hotel.key);

        try {
          const hotelDetails = await fetchHotelDetailsByKeys(keys);
          const combinedData = combineHotelData(
            hotelsToFetchDetails,
            hotelDetails
          );
          setCombinedHotelData(combinedData);
          setIsLoading(false);
        } catch (error) {
          console.error("Error al buscar detalles de hoteles:", error);
          setCombinedHotelData([]);
        }
      }
    };

    fetchAndLogHotelDetails();
  }, [
    mapHotels,
    orderHotel,
    selectedFilters,
    pricing,
    currentPage,
    totalHotelsToShow,
  ]);

  const handleFetchPostHotels = async (requestBody) => {
    try {
      const data = await fetchPostHotels(requestBody);
      setMapHotels(data.mapHotels);
    } catch (error) {
      // console.eror(error);
      setCombinedHotelData([]);
    }
  };

  const handleShowMore = () => {
    setIsLoading(true);
    setTotalHotelsToShow(totalHotelsToShow + hotelsPerPage);
  };

  // PAGINATION
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalPages = Math.ceil(totalFilteredHotels / hotelsPerPage);

  return (
    <ListingHotelContext.Provider
      value={{
        orderHotel,
        setOrderHotel,
        handleFetchPostHotels,
        selectedFilters,
        setSelectedFilters,
        pricing,
        setPricing,
        combinedHotelData,
        setCombinedHotelData,
        setCurrentPage,
        currentPage,
        handleShowMore,
        hotelsPerPage,
        totalHotelsToShow,
        mapHotels,
        totalFilteredHotels,
        handlePageChange,
        totalPages,
        setTotalHotelsToShow,
        isLoading
      }}
    >
      {children}
    </ListingHotelContext.Provider>
  );
};

export default ListingHotelContext;
