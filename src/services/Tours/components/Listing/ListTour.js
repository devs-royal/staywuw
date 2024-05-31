import React from "react";
// import ListingTour from "../../tour/components/Listing/ListingTour";
import { TourProvider } from "../../context/ListingTourContext";
import ListingTour from "./ListingTour";

export default function ListTour() {
  return (
    <TourProvider>
      <ListingTour />
    </TourProvider>
  );
}
