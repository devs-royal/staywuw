"use client";
import flatpickr from "flatpickr";
import "flatpickr/dist/l10n/es.js";
import "flatpickr/dist/flatpickr.min.css";
import React, { useEffect, useRef, useContext } from "react";

import LanguageContext from "../language/LanguageContext";

function Calendar({ onDateChange, listing = false, hotelDetails = false }) {
  const calendarRef = useRef(null);
  // const language = localStorage.getItem("language") || "es";
  const language =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("language") || "es"
      : "es";

  useEffect(() => {
    const handleDateChange = (selectedDates) => {
      onDateChange(selectedDates);
      localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
    };

    const storedDates = localStorage.getItem("selectedDates");
    if (storedDates) {
      const selectedDates = JSON.parse(storedDates);
      const startDate = new Date(selectedDates[0]);
      const currentDate = new Date();

      // ACCEPT DATE SELECTED 0
      const minDate =
        startDate.getTime() - currentDate.getTime() < 48 * 60 * 60 * 1000
          ? startDate
          : new Date(currentDate.getTime() + 48 * 60 * 60 * 1000);

      flatpickr(calendarRef.current, {
        mode: "range",
        dateFormat: "d/m/y",
        minDate: minDate,
        maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
        inline: false,
        onChange: handleDateChange,
        locale: {
          ...flatpickr.l10ns[language],
          rangeSeparator: " - ",
          separator: " - ",
        },
        defaultDate: selectedDates,
        showMonths: window.innerWidth < 768 ? 1 : 2,
        disableMobile: true,
      });
    } else {
      flatpickr(calendarRef.current, {
        mode: "range",
        dateFormat: "d/m/y",
        minDate: new Date(new Date().getTime() + 48 * 60 * 60 * 1000),
        maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
        locale: {
          ...flatpickr.l10ns[language],
          rangeSeparator: " - ",
          separator: " - ",
        },
        showMonths: window.innerWidth < 768 ? 1 : 2,
        inline: false,
        onChange: handleDateChange,
        disableMobile: true,
      });
    }
  }, []);
  const { languageData } = useContext(LanguageContext);
  return (
    <div
      className={`${listing === false && "lg:w-[290px]"
        } border-2 border-gray-200 rounded py-2.5 px-4 flex items-center w-full `}
    >
      <div className="flex items-center gap-2 w-full">
        {listing === false && (
          <img
            className="h-[18px] w-4 invert"
            src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
          />
        )}
        <div className="flex relative w-full">
          <span className="absolute top-0 left-0 m-s-b text-fs-10 text-gry-70">
            {languageData.SearchBox.tabHotel.date}
          </span>

          <input
            className={`${hotelDetails && "bg-gry-30"
              } mt-3 m-b text-fs-12 focus:outline-none w-full cursor-pointer`}
            type="text"
            ref={calendarRef}
            placeholder={languageData.SearchBox.tabHotel.dateText}
          // id="check-in"
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
