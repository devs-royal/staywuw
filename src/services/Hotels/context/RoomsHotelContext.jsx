"use client";

import React, { createContext, useState } from "react";
import { postRoomsToAPI } from "../Api/requestHotel";

const RoomsHotelContext = createContext();

export const RoomsHotelProvider = ({ children }) => {
  const [roomsData, setRoomsData] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [requestBodyRooms, setRequestBodyRooms] = useState(null);
  const [keyHotel, setKeyHotel] = useState(null);
  const [isFailedReservation, setIsFailedReservation] = useState(false);
  
  const handleFetchPostRooms = async (requestBody) => {
    setRoomsData(null);
    try {
      const responseData = await postRoomsToAPI(requestBody);
      setRoomsData(responseData);
      setKeyHotel(responseData.key);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RoomsHotelContext.Provider
      value={{
        selectedRooms,
        setSelectedRooms,
        handleFetchPostRooms,
        roomsData,
        setRoomsData,
        requestBodyRooms,
        setRequestBodyRooms,
        keyHotel,
        setKeyHotel,
        isFailedReservation,
        setIsFailedReservation,
      }}
    >
      {children}
    </RoomsHotelContext.Provider>
  );
};

export default RoomsHotelContext;
