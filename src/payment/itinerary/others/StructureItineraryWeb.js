import React, { useContext } from /*useContext*/ "react";
import { StepperContext } from "../../context/steeperContext";
import CardTourConfirmation from "@/payment/Confirmation/CardTourConfirmation";
import CardHotelItinerary from "../CardsItineraryWeb/CardHotelItinerary";
import CardHotelConfirmation from "@/payment/Confirmation/CardHotelConfirmation";
import CardMovingItinerary from "../CardsItineraryWeb/CardMovingItinerary";
import CardTourItinerary from "../../../payment/itinerary/CardsItineraryWeb/CardTourItinerary";


export default function StructureItineraryWeb(props) {
  const { dataItinerary } = props;
  const { step } = useContext(StepperContext);

  return (
    <>
      {" "}
      {dataItinerary.items.map((item, index) => {
        if (item.type === "transport") {
          return <CardMovingItinerary key={index} itemMoving={item} />;
        } else if (item.type === "activity") {
          return (
            <div key={index}>
              {step === 1 ? (
                <CardTourItinerary key={index} itemActivity={item} />
              ) : (
                <CardTourConfirmation key={index} itemActivity={item} />
                // <div>test</div>
              )}
            </div>
          );
        } else if (item.type === "hotel") {
          return (
            <div key={index}>
              {
                step === 1 ? (
                  <CardHotelItinerary itemHotel={item} />
                ) : (
                  <CardHotelConfirmation itemHotel={item} />
                  // <div>test</div>
                )
                // <CardHotelItinerary itemHotel={item} />
              }
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
