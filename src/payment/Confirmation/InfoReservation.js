import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";

import LanguageContext from "../../language/LanguageContext";

export default function InfoReservation(props) {
  const { dataBooking, dataPayment } = props;

  const { languageData } = useContext(LanguageContext);

  return (
    <Row className="margin-bottom">
      {/* RESERVATION DATA */}
      <Col sm={8}>
        <div className="t-data-booking">
          {languageData.confirmation.bookingData.titleBookingData}
        </div>

        <div className="container-detail-reservation">
          <Col>
            <div className="title-detail-b">
              {languageData.confirmation.bookingData.nameTitular}
            </div>
            <div className="subtitle-detail-b">{dataBooking.name}</div>

            <div className="title-detail-b">
              {languageData.confirmation.bookingData.phone}
            </div>
            <div className="subtitle-detail-b">{dataBooking.phone}</div>

            <div className="title-detail-b">
              {languageData.confirmation.bookingData.email}
            </div>
            <div className="subtitle-detail-b">{dataBooking.email}</div>

            <div className="title-detail-b">
              {languageData.confirmation.bookingData.typePayment}
            </div>
            <div className="subtitle-detail-b">{dataPayment.type}</div>
          </Col>

          <Col>
            <div className="num-detail-b">
              {languageData.confirmation.bookingData.numberConfirmation}
            </div>
            <div style={{ color: "#EB741E" }} className="num-detail-b">
              {" "}
              <strong>#{dataBooking.reference}</strong>
            </div>
          </Col>
        </div>
      </Col>

      {/* RESERVATION PAY */}
      <Col sm={4}>
        <div className="t-data-booking">
          {languageData.confirmation.bookingData.titlePay}
        </div>

        <div className="container-data-reservation">
          <div className="title-data-b">
            {languageData.confirmation.bookingData.nameCard}
          </div>
          <div className="subtitle-data-b">{dataPayment.titular}</div>

          <div className="title-data-b">
            {languageData.confirmation.bookingData.numberCard}
          </div>
          <div className="subtitle-data-b">
            xxxx xxxx xxxx {dataPayment.cardDigits}
          </div>

          <div className="title-data-b">
            {languageData.confirmation.bookingData.dateBooking}
          </div>
          <div className="subtitle-data-b">{dataBooking.date}</div>

          <div className="title-data-b">
            {languageData.confirmation.bookingData.reference}
          </div>
          <div className="subtitle-data-b">{dataPayment.reference}</div>
        </div>
      </Col>
    </Row>
  );
}
