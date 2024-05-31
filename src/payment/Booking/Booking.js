import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";

import ClientData from "./ClientData";
import { ActivityForm } from "./ActivityForm";
import { FormClientRH } from "./ClientDataRH";
import PaymentConektaF from "./PaymentConektaF";
import AlertTextBooking from "./AlertTextBooking";
import LanguageContext from "../../language/LanguageContext";
import { FormDataProvider } from "../context/FormDataContext";
// import { getCombinedActivitys } from "../Services/PaybokingServices.js";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import { SkeletonActivitiesTourP } from "../../utils/skeleton/SkeletonActivitiesTourP.js";

import IconRoyal from "../../assets/icons/utils/payment/icon-royal-vacations.svg";

export default function Booking(props) {
  const { dataItinerary, changeButton } = props;

  const [userData, setUserData] = useState({});
  const [showAlert, setShowAlert] = useState(null);
  const [hotelRH, setRoomsRH] = useState([]);
  const [formActivityItems, setFormActivityItems] = useState(null);
  const [activityPreBooking, setActivityPreBooking] = useState(null);

  // const [isRH, setRH] = useState(false);
  // const isMobile = useIsMobile();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [showAlert]);

  // CLIENT DATA
  const handleUserDataChange = (data) => {
    setUserData(data);
  };

  // RH DATA
  const handleRHChange = (data) => {
    setRoomsRH(data);
  };

  const handleAlertDataChange = (data) => {
    setShowAlert(data);
    scrollToTop();
  };

  const { languageData } = useContext(LanguageContext);

  const fetchData = async () => {
    try {
      const url = "/v1/pre-booking/";
      const searchParams = new URLSearchParams(window.location.search);
      const cartId = searchParams.get("uid");
      const response = await axiosWithInterceptor.get(`${url}${cartId}`);
      setActivityPreBooking(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(activityPreBooking);

  return (
    <FormDataProvider>
      <div>
        {/* SHOW ALERTS MSG */}
        <AlertTextBooking showAlert={showAlert} />

        <div className="display-booking">
          <Image
            className="icon-royal-itinerary"
            src={IconRoyal}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
          />
          <h1 className="booking-title-page">
            {languageData.booking.titleVacations}
          </h1>
        </div>

        <h2 className="booking-subtitle-page">
          {languageData.booking.subtitleComplete}
        </h2>

        <Row className="container-form-payment">
          <Col sm={12} className="forms-col">
            {/* Passing the handleUserDataChange function as a prop */}

            <ClientData onUserDataChange={handleUserDataChange} />

            <FormClientRH
              dataItinerary={dataItinerary.items}
              onRHDataChange={handleRHChange}
            />

            {activityPreBooking && activityPreBooking.length > 0 && (
              <div className="form-activity">
                <h2 className="title-data-h">
                  {languageData.paymentActivities.activities}
                </h2>
                <ActivityForm
                  activityPreBooking={activityPreBooking}
                  setFormActivityItems={setFormActivityItems}
                />
              </div>
            )}

            {!activityPreBooking && <SkeletonActivitiesTourP />}

            <PaymentConektaF
              hotelRH={hotelRH}
              userData={userData}
              changeButton={changeButton}
              onAlertDataChange={handleAlertDataChange}
              formActivityItems={formActivityItems}
            />
          </Col>
          {/* {isMobile ? (
            <BookingDetails itemSummary={dataItinerary.summary} />
          ) : (
            <Col sm={3} className="details-payment-col-right">
              <h3 className="itinerary-details-payment">
                {languageData.booking.textBooking}
              </h3>
              <DetailsPayment itemSummary={dataItinerary.summary} />
              <Card className="margin-icon-top" />
            </Col>
          )} */}
        </Row>
      </div>
    </FormDataProvider>
  );
}
