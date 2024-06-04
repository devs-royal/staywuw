"use client";

import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useState, useContext, useEffect } from "react";

import CalendarDay from "../../hooks/CalendarDay";
import SearchTour from "../../components/Search/SearchTour";
import LanguageContext from "../../language/LanguageContext";
import PersonsActivities from "../../utils/tour/PersonsActivities";

export default function ResultTour() {
  const router = useRouter();
  const [roomData, setRoomData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const { languageData, language } = useContext(LanguageContext);

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
    }
  }, []);

  const sendAutocomplete = () => {
    const FormatDateStart = selectedDate[0];
    const dateStart = moment(FormatDateStart).format("YYYY-MM-DD");
    // setShowModal(true);

    const requestBody = {
      codeNameTour: selectedOption.codeName,
      destination: selectedOption.label,
      code: selectedOption.key,
      type: selectedOption.type,
      dateStart: dateStart,
      adults: roomData[0].adults,
      children: roomData[0].children,
    };

    const query = new URLSearchParams(requestBody).toString();
    if (selectedOption.type === "activity") {
      window.open(
        `/${language}/mx/${selectedOption.destination}-${selectedOption.country}/tours/${selectedOption.codeName}?${query}`,
        "_blank"
      );
    } else {
      const newURL = `/${language}/mx/${selectedOption.codeName}-${selectedOption.country}/tours?${query}`;
      router.push(newURL);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-white gap-2.5 rounded-lg p-6 shadow-3xl max-lg:w-[391px]">
      <SearchTour onSelectTour={setSelectedOption} />
      <CalendarDay onDateChange={handleDateChange} />
      <PersonsActivities OnApply={setRoomData} />

      <>
        <button
          className={`w-full lg:w-auto rounded-[50px] flex gap-2 items-center justify-center m-b text-fs-12 text-white py-[20px] px-4 ${
            !selectedOption || !selectedDate
              ? "bg-or-50"
              : "bg-or-100 hover:!bg-or-110"
          }`}
          variant="contained"
          color="primary"
          size="large"
          onClick={sendAutocomplete}
          disabled={!selectedOption || !selectedDate}
          sx={{ mt: 2 }}
        >
          {languageData.SearchBox.tabTour.button}
          <img
            className="h-4 w-4"
            src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-w.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon search`}
          />
        </button>
      </>
    </div>
  );
}
