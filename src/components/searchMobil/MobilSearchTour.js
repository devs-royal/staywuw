import moment from "moment";

import React, { useState, useContext, useEffect } from "react";

import CalendarDay from "../../hooks/CalendarDay";
import SearchTour from "../../components/Search/SearchTour";
import LanguageContext from "../../language/LanguageContext";
import PersonsActivities from "../../utils/tour/PersonsActivities";

export default function MobilSearchTour() {
  const [roomData, setRoomData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const { languageData, language } = useContext(LanguageContext);

  useEffect(() => {
    const storedSelectedDate = localStorage.getItem("selectedDate");

    if (storedSelectedDate) {
      setSelectedDate(JSON.parse(storedSelectedDate));
    }
  }, []);

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
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
      const newTabURL = `/${language}/mx/${selectedOption.destination}-${selectedOption.country}/tours/${selectedOption.codeName}?${query}`;
      window.open(newTabURL, "_blank");
    } else {
      const newURL = `/${language}/mx/${selectedOption.codeName}-${selectedOption.country}/tours?${query}`;
      window.location.href = newURL;
    }
  };

  return (
    <div className="!p-5 shadow-3xl">
      <div className="flex flex-col gap-y-3">
        <SearchTour onSelectTour={setSelectedOption} listing={true} />

        <CalendarDay onDateChange={handleDateChange} listing={true} />

        <PersonsActivities OnApply={setRoomData} listing={true} />

        <div className="flex justify-center mb-[30px] relative">
          <button
            className={`bg-or-100 rounded-[42px] text-white m-b my-[10px] text-fs-14 py-[8px] px-[30px] w-full hover:bg-or-110 flex gap-[10px] justify-center items-center ${
              !selectedOption || !selectedDate ? "disabled" : ""
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
        </div>
      </div>
    </div>
  );
}
