"use client";
import { lodgings } from "../../Api/requestHotel";
import { useToken } from "@/config/context/AuthContext";
import { LodgingsView } from "./LodgingView";
import { useEffect, useState } from "react";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { shuffleHotelTypes } from "../../config/shuffleHotelTypes";

export default function LodgingHotel({ selectionId }) {
  const token = useToken();
  const shuffleTypes = shuffleHotelTypes;

  const [shuffleHotel, setShuffleHotel] = useState(null);

  useEffect(() => {
    const hotelList = shuffleTypes.find((item) => item[selectionId]);
    if (hotelList && hotelList[selectionId]) {
      setShuffleHotel(hotelList[selectionId]);
    } else {
      setShuffleHotel(null);
    }
  }, [token, selectionId]);

  return <LodgingsView hotels={shuffleHotel} />;
}
