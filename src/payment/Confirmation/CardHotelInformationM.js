import React, { useContext } from "react";

import ModalShare from "../../utils/booking/ModalShare";
import CardTourConfirmation from "./CardTourConfirmation";
import LanguageContext from "../../language/LanguageContext";
import CardMovingConfirmation from "./CardMovingConfirmation";
import { CardHotelConfirmationM } from "./CardHotelConfirmationM";

export function CardHotelInformationM(props) {
  const { dataConfirmation } = props;
  const { languageData } = useContext(LanguageContext);
  const maxLength = 16;
  return (
    <>
      <div className="d-flex justify-content-between pt-4 pb-2 align-items-center">
        <h5 className="destination-text-c-h">
          {languageData.confirmation.yourDestination}
          <span className="destination-c-h">
            {dataConfirmation.items[0].destination.length > maxLength
              ? " "+dataConfirmation.items[0].destination.substring(0, maxLength) +
                "..."
              : dataConfirmation.items[0].destination}
          </span>
        </h5>

        <ModalShare />
      </div>

      <div>
        <h5 className="destination-c-h">
          <strong> {languageData.confirmation.startText}</strong>
        </h5>
      </div>

      {dataConfirmation.items.map((item, index) => {
        switch (item.type) {
          case "transport":
            return <CardMovingConfirmation key={index} itemMoving={item} />;

          case "activity":
            return <CardTourConfirmation key={index} itemActivity={item} />;

          case "hotel":
            return <CardHotelConfirmationM key={index} itemHotel={item} />;

          default:
            return null;
        }
      })}
    </>
  );
}
