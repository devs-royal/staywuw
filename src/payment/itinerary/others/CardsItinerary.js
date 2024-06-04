import React, { useContext } from "react";

import { BookingContext } from "@/payment/context/BookingContext";
import CardTourItinerary from "../CardsItineraryWeb/CardTourItinerary";
import CardHotelItinerary from "../CardsItineraryWeb/CardHotelItinerary";
import CardMovingItinerary from "../CardsItineraryWeb/CardMovingItinerary";
import CardTourConfirmation from "@/payment/Confirmation/CardTourConfirmation";
import CardHotelConfirmation from "@/payment/Confirmation/CardHotelConfirmation";

export default function CardsItinerary(props) {
  const { dataItinerary } = props;
  const { step } = useContext(BookingContext);

  return (
    <div className="flex flex-col gap-y-6">
      {dataItinerary.items.map((item, index) => {
        if (item.type === "transport") {
          return <CardMovingItinerary />;
        } else if (item.type === "activity") {
          return (
            <div key={index}>
              {step === 1 ? (
                <CardTourItinerary key={index} itemActivity={item} />
              ) : (
                <CardTourConfirmation key={index} itemActivity={item} />
              )}
            </div>
          );
        } else if (item.type === "hotel") {
          return (
            <div key={index}>
              {step === 1 ? (
                <>
                  <CardHotelItinerary itemHotel={item} />
                </>
              ) : (
                <CardHotelConfirmation itemHotel={item} />
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
