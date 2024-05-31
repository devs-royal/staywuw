import moment from "moment";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";

import SearchTour from "./SearchTour";
import CalendarDay from "../../hooks/CalendarDay";
import LanguageContext from "../../language/LanguageContext";
import PersonsActivities from "../../utils/tour/PersonsActivities";

import DateRangeIcon from "../../assets/icons/utils/searchBox/calendar-autocomplete.svg";
import RoomOutlinedIcon from "../../assets/icons/utils/searchBox/location-autocomplete.svg";
import Image from "next/image";

export default function ResultTourModal() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState([
    moment().add(3, "days").toDate(),
  ]);

  const [roomData, setRoomData] = useState([]);

  const history = useHistory();

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  useEffect(() => {
    const personsData = localStorage.getItem("personsData");

    if (personsData) {
      setRoomData(JSON.parse(personsData));
    } else {
      setRoomData([{ adults: 2, children: 0 }]);
    }

    const dateActivity = localStorage.getItem("calendarDay");

    if (dateActivity) {
      const dateArray = JSON.parse(dateActivity);
      const firstDate = dateArray[0];
      const dateFormatCalendar = moment(firstDate, moment.ISO_8601).format(
        "YYYY-MM-DD"
      );
      setSelectedDate([dateFormatCalendar]);
    } else {
      setSelectedDate([moment().add(3, "days").toDate()]);
    }
  }, []);

  const sendAutocomplete = () => {
    const FormatDateStart = selectedDate[0];
    const dateStart = moment(FormatDateStart).format("YYYY-MM-DD");

    const requestBody = {
      code: selectedOption.key,
      type: selectedOption.type,
      dateStart: dateStart,
      adults: roomData[0].adults,
      children: roomData[0].children,
    };

    // We convert the object to a string and append it to the URL
    const query = new URLSearchParams(requestBody).toString();

    setTimeout(() => {
      history.push(`/tours?${query}`);
    }, 1500);
  };

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <Row className="row-home-search">
        <Col sm={4}>
          <Image src={RoomOutlinedIcon} alt="RoomOutlinedIcon" className="icon-location-home" />
          <span className="span-location-home-r">
            {languageData.SearchBox.tabTour.autoDestination}
          </span>
          <SearchTour onSelectTour={setSelectedOption} />
        </Col>

        <Col sm={3}>
          <Image src={DateRangeIcon} alt="DateRangeIcon" className="icon-date-home" />
          <span className="span-date-home-r">
            {languageData.SearchBox.tabTour.date}
          </span>
          <CalendarDay onDateChange={handleDateChange} />
        </Col>

        <Col sm={3}>
          <PersonsActivities OnApply={setRoomData} />
          <span className="span-people-home-r">
            {languageData.SearchBox.tabTour.people}
          </span>
        </Col>

        <Col sm={2}>
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
            {languageData.SearchBox.tabTour.button}
          </button>
        </Col>
      </Row>
    </>
  );
}
