import moment from "moment";
import Image from "next/image";
import Lottie from "lottie-react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

import Room from "../../hooks/RoomBox";
import Calendar from "../../hooks/Calendar";
import SearchHotel from "../../components/Search/SearchHotel";
import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import animationData from "../../assets/animations/animated-page-transitions.json";

import DateRangeIcon from "../../assets/icons/utils/searchBox/calendar-autocomplete.svg";
import RoomOutlinedIcon from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

const API_POST = `v1/hotels/availability?order-by=1`;

export default function ResultHotel() {
  const history = useHistory();
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);
  const [selectedDates, setSelectedDates] = useState(null);

  const [validFirstDay, setValidFirstDay] = useState(null);
  const [validSecondDay, setValidSecondDay] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedSelectedDates = localStorage.getItem("selectedDates");
    const storedValidFirstDay = localStorage.getItem("validFirstDay");
    const storedValidSecondDay = localStorage.getItem("validSecondDay");

    if (storedSelectedDates) {
      setSelectedDates(JSON.parse(storedSelectedDates));
    }

    if (selectedDates) {
      //test
    }

    if (storedValidFirstDay) {
      setValidFirstDay(storedValidFirstDay);
    }

    if (storedValidSecondDay) {
      setValidSecondDay(storedValidSecondDay);
    }

    const storedRoomData = localStorage.getItem("roomData");
    if (storedRoomData) {
      const parsedRoomData = JSON.parse(storedRoomData);
      setRoomData(parsedRoomData);
    }
  }, []);

  const handleDateChange = (selectedDates) => {
    setSelectedDates(selectedDates);
    localStorage.setItem("selectedDates", JSON.stringify(selectedDates));

    if (selectedDates && selectedDates.length >= 2) {
      const FormatCheckIn = selectedDates[0];
      const CheckIn = moment(FormatCheckIn).format("YYYY-MM-DD");
      setValidFirstDay(CheckIn);
      localStorage.setItem("validFirstDay", CheckIn);

      const FormatCheckOut = selectedDates[1];
      const CheckOut = moment(FormatCheckOut).format("YYYY-MM-DD");
      setValidSecondDay(CheckOut);
      localStorage.setItem("validSecondDay", CheckOut);
    }
  };

  const sendAutocomplete = () => {
    const requestBody = {
      code: selectedOption.key,
      type: selectedOption.type,
      "check-in": validFirstDay,
      "check-out": validSecondDay,
      occupancies: roomData,
    };

    localStorage.setItem("requestBody", JSON.stringify(requestBody));

    setShowModal(true);

    axiosWithInterceptor
      .post(API_POST, requestBody)
      .then((response) => {
        setTimeout(() => {
          history.push(`/hotels`, { data: response.data });
          setShowModal(false);
        }, 100);
        // history.push(`/hotels?checkin=${CheckIn}&checkout=${CheckOut}`, { data: response.data });
      })
      .catch((error) => {
        console.error(error);
        setShowModal(false);
        history.push(`/hotels`);
      });
  };

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <Row className="row-home-search">
        <Col sm={4} className="styles-input-location-search">
          <Image src={RoomOutlinedIcon} alt="RoomOutlinedIcon" className="icon-location-home"/>
          <span className="span-location-home-r">
            {languageData.SearchBox.tabHotel.autocomplete}
          </span>
          <SearchHotel closeDialog={null} onSelectSearch={setSelectedOption} />
        </Col>

        <Col sm={3} className="margin-mobile-search">
          <Image src={DateRangeIcon} alt="DateRangeIcon" className="icon-date-home" />
          <span className="span-date-home-r">
            {languageData.SearchBox.tabHotel.date}
          </span>
          <Calendar onDateChange={handleDateChange} />
        </Col>

        <Col sm={3} className="margin-mobile-search">
          <span className="span-rooms-home-r">
            {languageData.SearchBox.tabHotel.rooms}
          </span>
          <Room OnApply={setRoomData} />
        </Col>

        <Col sm={2}>
          <button
            className={`button-search-page-search ${
              !selectedOption || !validFirstDay || !validSecondDay
                ? "disabled"
                : ""
            }`}
            variant="contained"
            color="primary"
            size="large"
            onClick={sendAutocomplete}
            disabled={!selectedOption || !validFirstDay || !validSecondDay}
            sx={{ mt: 2 }}
          >
            {languageData.SearchBox.tabHotel.buttonSearch}
          </button>
        </Col>
      </Row>

      {showModal && (
        <div className="modal-backdrop modal-loading">
          <div className="modal-box">
            <Lottie
              className="transition-royal"
              animationData={animationData}
            />
          </div>
        </div>
      )}
    </>
  );
}
