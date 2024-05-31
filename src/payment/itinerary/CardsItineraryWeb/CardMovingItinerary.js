import moment from "moment";
import Image from "next/image";
import { Card } from "@mui/material";
import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";

import LanguageContext from "../../../language/LanguageContext";

import ImageLine from "../../../assets/images/itinerary/itinerary-250.svg";
import ImageTransports from "../../../assets/images/itinerary/itinerary-transfer.svg";
import RoomOutlinedIcon from "../../../assets/icons/utils/searchBox/location-autocomplete.svg";
import Person2OutlinedIcon from "../../../assets/icons/utils/searchBox/person-autocomplete.svg";

export default function CardMovingItinerary(props) {
  const { itemMoving } = props;

  const { languageData } = useContext(LanguageContext);

  const dateFormatDay = moment(itemMoving.date).format("DD/MM/YY");

  // OBTEIN DAY OF WEEK
  const dayOfWeek = moment(itemMoving.date).format("dddd");

  return (
    <>
      <Row>
        <Col sm={2} className="col-location-itinerary">
          <div className="date-moving-itinerary">
            {" "}
            {languageData.dayOfWeek[dayOfWeek]}{" "}
          </div>

          <div className="itinerary-date-all">
            <div className="date-moving-calendar">{dateFormatDay}</div>
            <div className="time-moving-itinerary">{itemMoving.time}</div>

            <div className="location-moving-itinerary">
              {itemMoving.destination}
            </div>

            <img
              src={ImageLine}
              alt={languageData.allAlt.altRoyalVacations}
              className="image-line-transports"
            />
          </div>
        </Col>

        <Col sm={10}>
          <Card className="card-itinerary-moving">
            <Row className="row-card-itinerary container">
              <Col sm={3} className="image-carousel-itinerary">
                <div className="title-card-itinerary">
                  {languageData.itinerary.movingItinerary.titleTransportation}
                </div>
                <img
                  src={ImageTransports}
                  alt={languageData.allAlt.altRoyalVacations}
                  className="image-transport-itinerary"
                />
              </Col>

              <Col sm={4} className="card-itinerary-col">
                <div className="itinerary-card-titles padding-bottom">
                  {itemMoving.vehicleType}
                </div>

                <div className="text-info-itinerary padding-bottom">
                  {languageData.itinerary.movingItinerary.textModel}{" "}
                  {itemMoving.vehicleModel}
                </div>

                <div className="type-travel-itinerary">
                  <div className="subtitle-data-itinerary">
                    {languageData.itinerary.movingItinerary.textTrip}
                  </div>

                  <div className="type-travel-transports-itinerary">
                    {itemMoving.round === "10"
                      ? [languageData.itinerary.movingItinerary.optionRound]
                      : itemMoving.round === "01"
                      ? [languageData.itinerary.movingItinerary.optionSimple]
                      : [languageData.itinerary.movingItinerary.optionOther]}
                  </div>
                </div>

                <div className="v-line-itinerary" />
              </Col>

              <Col sm={5} className="card-itinerary-col2">
                <div className="itinerary-check-moving padding-bottom">
                  <div className="subtitle-data-itinerary">
                    {languageData.itinerary.movingItinerary.textArrival}
                  </div>

                  <div className="rh-confirmation">
                    {dateFormatDay} | {itemMoving.time}
                  </div>
                </div>

                <div className="itinerary-location padding-bottom">
                  <Image src={RoomOutlinedIcon} alt="RoomOutlinedIcon" />
                  <div className="text-info-itinerary p-icon-left">
                    {languageData.itinerary.movingItinerary.textAirport}
                  </div>
                </div>

                <div className="people-card-itinerary">
                  <Image src={Person2OutlinedIcon} alt="Person2OutlinedIcon" width={16} height={16} />
                  <div className="info-people-moving-itinerary">
                    {languageData.itinerary.movingItinerary.textPassengers}{" "}
                    {itemMoving.passengers}
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
