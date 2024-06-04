"use client";

import ListingHotelW from "./ListingHotelW";
import { calculateNights } from "../../utils/calculateNights";
import { calculateTotalPeople } from "../../utils/peopleCalculator";

export default function Hotels() {

  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  // SUM PEOPLE
  const ocp = searchParams
    ? JSON.parse(decodeURIComponent(searchParams.get("occupancies")))
    : null;

  const totalPeople = calculateTotalPeople(ocp);

  // CALCULATE NIGHTS
  const checkIn = searchParams ? searchParams.get("check-in") : null;
  const checkOut = searchParams ? searchParams.get("check-out") : null;

  const numNights = calculateNights(checkIn, checkOut);

  return (
    <ListingHotelW totalPeople={totalPeople} numNights={numNights} />
  );
}
