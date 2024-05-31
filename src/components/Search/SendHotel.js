import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";

import {
  DialogConfigSearchHotel,
  DialogConfigRoomHotel,
  DialogCalendarConfig,
} from "../Mobile/Hotel/General/DialogConfig";

import Room from "../../hooks/RoomBox";
import SearchHotel from "./SearchHotel";
import Calendar from "../../hooks/Calendar";
import { useIsMobile } from "../../config/Mobile/isMobile";
import AnimationFly from "../../utils/others/AnimationFly";
import LanguageContext from "../../language/LanguageContext";
import AnimationFlyMobile from "../../utils/others/AnimationFlyMobile";

import DateRangeIcon from "../../assets/icons/utils/searchBox/calendar-autocomplete.svg";
import RoomOutlinedIcon from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

export default function SendHotel() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [validFirstDay, setValidFirstDay] = useState(null);
  const [validSecondDay, setValidSecondDay] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);
  const { languageData, language } = useContext(LanguageContext);


  useEffect(() => {
    const storedSelectedDates = localStorage.getItem("selectedDates");
    const storedValidFirstDay = localStorage.getItem("validFirstDay");
    const storedValidSecondDay = localStorage.getItem("validSecondDay");
    const dataSearch = localStorage.getItem("dataSearch");

    if (dataSearch) {
      const parsedDataSearch = JSON.parse(dataSearch);
      setSelectedOption(parsedDataSearch);
    }

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
  }, [validFirstDay, validSecondDay]);

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

  // SEND LINK SECOND LISTING
  const sendAutocomplete = () => {
    setShowModal(true);
    const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));
    const requestBody = {
      destination: selectedOption.label,
      code: selectedOption.key,
      type: selectedOption.type,
      "check-in": validFirstDay,
      "check-out": validSecondDay,
      occupancies: encodedRoomData,
    };
    const query = new URLSearchParams(requestBody).toString();

    setTimeout(() => {
      // router.push(`/resultHotel?${query}`);
      router.push(`${language}/hotel/results?${query}`);
      setShowModal(false);
      window.location.reload();
    }, 1500);
  };
  // const { languageData } = useContext(LanguageContext);

  return (
    <>
      <Row className="row-home-search">
        <Col sm={4} className="styles-input-location-search position-relative">
          <span className="span-location-home-r">
            {languageData.SearchBox.tabHotel.autocomplete}
          </span>
          {isMobile ? (
            <DialogConfigSearchHotel destinationSelected={setSelectedOption} />
          ) : (
            <>
              <Image className="icon-location-home" src={RoomOutlinedIcon} alt="RoomOutlinedIcon" />
              <SearchHotel onSelectSearch={setSelectedOption} />
            </>
          )}
        </Col>

        <Col sm={3} className="margin-mobile-search position-relative">
          <span className="span-date-home-r">
            {languageData.SearchBox.tabHotel.date}
          </span>
          {isMobile ? (
            <DialogCalendarConfig
              validFirstDay={validFirstDay}
              validSecondDay={validSecondDay}
              onDateChange={handleDateChange}
            />
          ) : (
            <>
              <Image className="icon-date-home" src={DateRangeIcon} alt="DateRangeIcon" />
              <Calendar onDateChange={handleDateChange} />
            </>
          )}
        </Col>

        <Col sm={3} className="margin-mobile-search position-relative">
          <span className="span-rooms-home-r">
            {languageData.SearchBox.tabHotel.rooms}
          </span>
          {isMobile ? (
            <DialogConfigRoomHotel OnApply={setRoomData} />
          ) : (
            <Room OnApply={setRoomData} />
          )}
        </Col>

        <Col sm={2} className="center-grid-mobile">
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

      {isMobile ? (
        <>{showModal && <AnimationFlyMobile />}</>
      ) : (
        <>{showModal && <AnimationFly />}</>
      )}
    </>
  );
}
