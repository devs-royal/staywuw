import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import moment from "moment";

import {
  DialogCalendarConfig,
  DialogConfigRoomHotel,
  DialogConfigSearchHotel,
} from "../General/DialogConfig";
import LanguageContext from "../../../../language/LanguageContext";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import animationData from "../../../../assets/animations/animated-page-transitions.json";

const Lottie = lazy(() => import("lottie-react"));

export default function MSearchHotel(props) {
  const { closeDialog } = props;
  const { languageData } = useContext(LanguageContext);

  // const history = useHistory();

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);

  const [showModal, setShowModal] = useState(false);
  const [validFirstDay, setValidFirstDay] = useState(null);
  const [validSecondDay, setValidSecondDay] = useState(null);

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

    if (storedValidFirstDay) {
      setValidFirstDay(storedValidFirstDay);
    }

    if (storedValidSecondDay) {
      setValidSecondDay(storedValidSecondDay);
    }

    if (selectedDates) {
      //test
    }

    const storedRoomData = localStorage.getItem("roomData");
    if (storedRoomData) {
      const parsedRoomData = JSON.parse(storedRoomData);
      setRoomData(parsedRoomData);
    }
  }, [validFirstDay, validSecondDay]);

  useEffect(() => {
    const dataSearch = localStorage.getItem("dataSearch");
    if (dataSearch) {
      setSelectedOption(dataSearch);
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
    setShowModal(true);
    closeDialog(false);
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
      // history.push(`/resultHotel?${query}`);
      setShowModal(false);
    }, 1500);
  };

  return (
    <>
      <div className="d-flex flex-column gap-3 mt-3">
        <div className="d-flex flex-column gap-3">
          <DialogConfigSearchHotel destinationSelected={setSelectedOption} />

          <DialogCalendarConfig
            onDateChange={handleDateChange}
            validFirstDay={validFirstDay}
            validSecondDay={validSecondDay}
          />

          <DialogConfigRoomHotel OnApply={setRoomData} />
        </div>

        <div className="d-flex justify-content-center">
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
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop modal-loading">
          <div className="modal-box">
            <Suspense fallback={<div></div>}>
              <Lottie
                className="transition-royal"
                animationData={animationData}
              />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
}
