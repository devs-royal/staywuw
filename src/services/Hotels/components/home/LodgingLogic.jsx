"use client";
import { useEffect, useState } from "react";

import { LodgingsView } from "./LodgingView";
import { useToken } from "@/config/context/AuthContext";
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
