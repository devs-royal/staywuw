import moment from "moment";
import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";

import {
  DialogCalendarConfig,
  DialogConfigRoomHotelModal,
} from "../Mobile/Hotel/General/DialogConfig";

import Room from "../../hooks/RoomUpdate";
import Calendar from "../../hooks/Calendar";
import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";

import SearchIon from "../../assets/icons/hotel/modal/search.svg";
import DateRangeIcon from "../../assets/icons/utils/searchBox/calendar-active.svg";

export default function SearchRoom(props) {
  const isMobile = useIsMobile();

  const { onDataUpdate, setChangeDate, changeDate } = props;

  const { languageData } = useContext(LanguageContext);
  const [selectedDates, setSelectedDates] = useState(null);
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [validFirstDay, setValidFirstDay] = useState(null);
  const [validSecondDay, setValidSecondDay] = useState(null);

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

    if (selectedDates && selectedDates.length >= 2) {
      const checkInSet = moment(selectedDates[0]).format("YYYY-MM-DD");
      setValidFirstDay(checkInSet);
      setCheckIn(checkInSet);
      localStorage.setItem("validFirstDay", checkInSet);

      const checkOutSet = moment(selectedDates[1]).format("YYYY-MM-DD");
      setValidSecondDay(checkOutSet);
      setCheckOut(checkOutSet);
      localStorage.setItem("validSecondDay", checkOutSet);
    }

    localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
  };

  //   IF LOCAL STORAGE selectedDates && roomData
  useEffect(() => {
    const dataSelectDates = localStorage.getItem("selectedDates");

    if (dataSelectDates) {
      const parsedDates = JSON.parse(dataSelectDates);

      const checkInSet = moment(parsedDates[0]).format("YYYY-MM-DD");
      setCheckIn(checkInSet);
      setValidFirstDay(checkInSet);
      localStorage.setItem("validFirstDay", checkInSet);

      const checkOutSet = moment(parsedDates[1]).format("YYYY-MM-DD");
      setCheckOut(checkOutSet);
      setValidSecondDay(checkOutSet);
      setSelectedDates(dataSelectDates);
      localStorage.setItem("validSecondDay", checkOutSet);
    }

    const dataRoom = localStorage.getItem("roomData");

    if (dataRoom) {
      const jsonDataRoom = JSON.parse(dataRoom);
      setRoomData(jsonDataRoom);
    }
  }, []);

  const handleUpdateDates = () => {
    // SAVE LOCAL STORAGE UPDATE
    const storedData = JSON.parse(localStorage.getItem("requestBody"));
    const updatedCheckIn = moment(selectedDates[0]).format("YYYY-MM-DD");
    const updatedCheckOut = moment(selectedDates[1]).format("YYYY-MM-DD");
    if (storedData) {
      storedData["check-in"] = updatedCheckIn;
      storedData["check-out"] = updatedCheckOut;
      storedData["occupancies"] = roomData;
      localStorage.setItem("requestBody", JSON.stringify(storedData));
    }

    const requestData = {
      checkIn: checkIn,
      checkOut: checkOut,
      occupancies: roomData,
    };

    if (onDataUpdate) {
      onDataUpdate(requestData);
    }

    if (changeDate > 0) {
      setChangeDate(Math.floor(Math.random() * 100) + 1);
    } else {
      setChangeDate(1);
    }
  };

  return (
    <div className="row-update-hotel">
      <div className="calendar-update-hotel">
        {isMobile ? (
          <DialogCalendarConfig
            onDateChange={handleDateChange}
            validFirstDay={validFirstDay}
            validSecondDay={validSecondDay}
            isModal={true}
          />
        ) : (
          <>
            <Image src={DateRangeIcon} alt="DateRangeIcon" className={isMobile ? "m-icon-calendar" : ""} />
            <Calendar onDateChange={handleDateChange} isModal={true} />
          </>
        )}
      </div>

      {isMobile ? (
        <div className="widthA">
          <DialogConfigRoomHotelModal applyRoomData={setRoomData} />
        </div>
      ) : (
        <div className="room-select-modal-hotel">
          <Room OnApply={setRoomData} />
        </div>
      )}

      <div className="new-filter-button">
        <button
          className={`button-update-hotel ${
            !validFirstDay || !validSecondDay ? "disabled" : ""
          }`}
          variant="contained"
          color="primary"
          size="large"
          onClick={handleUpdateDates}
          disabled={!validFirstDay || !validSecondDay}
          sx={{ mt: 2 }}
        >
          {isMobile ? <Image src={SearchIon} alt="SearchIon" /> : languageData.modalSearchHotel.buttonModal}
        </button>
      </div>
    </div>
  );
}
