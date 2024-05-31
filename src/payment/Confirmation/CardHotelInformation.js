import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";

import ModalShare from "../../utils/booking/ModalShare";
import CardTourConfirmation from "./CardTourConfirmation";
import CardHotelConfirmation from "./CardHotelConfirmation";
import LanguageContext from "../../language/LanguageContext";
import CardMovingConfirmation from "./CardMovingConfirmation";

export function CardHotelInformation(props) {
  const { dataConfirmation } = props;
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <div>
        <hr />

        <Row className="pb-4">
          <Col sm={2}>
            <h5>
              <strong> {languageData.confirmation.startText}</strong>
            </h5>
          </Col>

          <Col sm={6}>
            <h5>
              {languageData.confirmation.yourDestination}{" "}
              <strong>{dataConfirmation.items[0].destination}</strong>
            </h5>
          </Col>

          <Col sm={3}>
            <ModalShare />
          </Col>

          <Col sm={1} />
        </Row>

        {dataConfirmation.items.map((item, index) => {
          if (item.type === "transport") {
            return <CardMovingConfirmation key={index} itemMoving={item} />;
          } else if (item.type === "activity") {
            return <CardTourConfirmation key={index} itemActivity={item} />;
          } else if (item.type === "hotel") {
            return <CardHotelConfirmation key={index} itemHotel={item} />;
          }
          return null;
        })}
      </div>
    </>
  );
}
