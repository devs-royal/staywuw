import moment from "moment";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";

import Room from "../../hooks/RoomBox";
import SearchHotel from "./SearchHotel";
import Calendar from "../../hooks/Calendar";
import {
  DialogConfigSearchHotel,
  DialogConfigRoomHotel,
  DialogCalendarConfig,
} from "../Mobile/Hotel/General/DialogConfig";
import LanguageContext from "../../language/LanguageContext";
import { useIsMobile } from "../../config/Mobile/isMobile";

import DateRangeIcon from "../../assets/icons/utils/searchBox/calendar-autocomplete.svg";
import RoomOutlinedIcon from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

export default function ResultHotelModal({ closeModal }) {
  const isMobile = useIsMobile();

  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);
  const [selectedDates, setSelectedDates] = useState([
    moment().add(2, "days").toDate(),
    moment().add(5, "days").toDate(),
  ]);
  const [selectedOption, setSelectedOption] = useState(null);

  const [validFirstDay, setValidFirstDay] = useState(null);
  const [validSecondDay, setValidSecondDay] = useState(null);

  useEffect(() => {
    const storedSelectedDates = localStorage.getItem("selectedDates");
    if (storedSelectedDates) {
      setSelectedDates(JSON.parse(storedSelectedDates));

      const newDateformat = JSON.parse(storedSelectedDates);
      const checkInSet = moment(newDateformat[0]).format("YYYY-MM-DD");
      setValidFirstDay(checkInSet);
      const checkOutSet = moment(newDateformat[1]).format("YYYY-MM-DD");
      setValidSecondDay(checkOutSet);
    }

    const storedRoomData = localStorage.getItem("roomData");
    if (storedRoomData) {
      const parsedRoomData = JSON.parse(storedRoomData);
      setRoomData(parsedRoomData);
    }

    const dataSearch = localStorage.getItem("dataSearch");
    if (dataSearch) {
      const dataSearchParse = JSON.parse(dataSearch);
      setSelectedOption(dataSearchParse);
    }
  }, []);

  const handleDateChange = (selectedDates) => {
    setSelectedDates(selectedDates);

    if (selectedDates && selectedDates.length >= 2) {
      const checkInSet = moment(selectedDates[0]).format("YYYY-MM-DD");
      setValidFirstDay(checkInSet);
      localStorage.setItem("validFirstDay", checkInSet);

      const checkOutSet = moment(selectedDates[1]).format("YYYY-MM-DD");
      setValidSecondDay(checkOutSet);
      localStorage.setItem("validSecondDay", checkOutSet);
    }

    localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
  };

  const sendAutocomplete = () => {
    const FormatCheckIn = selectedDates[0];
    const CheckIn = moment(FormatCheckIn).format("YYYY-MM-DD");
    const FormatCheckOut = selectedDates[1];
    const CheckOut = moment(FormatCheckOut).format("YYYY-MM-DD");

    const codeRoomData = encodeURIComponent(JSON.stringify(roomData));

    const requestBody = {
      destination: selectedOption.label,
      code: selectedOption.key,
      type: selectedOption.type,
      "check-in": CheckIn,
      "check-out": CheckOut,
      occupancies: codeRoomData,
    };

    const query = new URLSearchParams(requestBody).toString();

    setTimeout(() => {
      // history.push(`/resultHotel?${query}`);
      window.location.reload();
    }, 1000);
  };

  const { languageData } = useContext(LanguageContext);

  const seeLess = () => {
    closeModal(false);
  };

  return (
    <>
      <Row className="row-home-search mobile-search">
        <Col sm={4} className="styles-input-location-search position-relative">
          {isMobile ? (
              <DialogConfigSearchHotel
                destinationSelected={setSelectedOption}
              />
          ) : (
            <>
              <Image src={RoomOutlinedIcon} alt="RoomOutlinedIcon" className="icon-location-home"/>
              <span className="span-location-home-r">
                {languageData.SearchBox.tabHotel.autocomplete}
              </span>
              <SearchHotel
                closeDialog={null}
                onSelectSearch={setSelectedOption}
              />
            </>
          )}
        </Col>

        <Col sm={3} className="style-relative-date position-relative">
          {isMobile ? (
            <DialogCalendarConfig
              onDateChange={handleDateChange}
              validFirstDay={validFirstDay}
              validSecondDay={validSecondDay}
            ></DialogCalendarConfig>
          ) : (
            <>
              <Image src={DateRangeIcon} alt="DateRangeIcon" className="icon-date-home" />
              <span className="span-date-home-r">
                {languageData.SearchBox.tabHotel.date}
              </span>
              <Calendar onDateChange={handleDateChange} isModal={true} />
            </>
          )}
        </Col>

        <Col sm={3} className="style-relative-room position-relative">
          <span className="span-rooms-home-modal">
            {languageData.SearchBox.tabHotel.rooms}
          </span>
          
          {isMobile ? (
            <DialogConfigRoomHotel OnApply={setRoomData} />
          ) : (
            <Room id="new-search-modal" OnApply={setRoomData} />
          )}
        </Col>

        <Col sm={2} className="d-flex justify-content-evenly">
          <button
            className={`button-search-page-search ${
              !selectedOption ? "disabled" : ""
            }`}
            variant="contained"
            color="primary"
            size="large"
            onClick={sendAutocomplete}
            disabled={!selectedOption}
            sx={{ mt: 2 }}
          >
            {languageData.SearchBox.tabHotel.buttonSearch}
          </button>

          {isMobile && (
            <button
              onClick={() => seeLess()}
              className="carousel-button-transport bg-transparent"
            >
              {languageData.modalHotel.showLess}
            </button>
          )}
        </Col>
      </Row>
    </>
  );
}
