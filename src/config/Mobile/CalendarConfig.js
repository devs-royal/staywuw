import React, { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";

function CalendarMobile({ onDateChange }) {
  const monthRefs = useRef([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const language = localStorage.getItem("language") || "es";

  useEffect(() => {
    const today = new Date();
    const threeDaysLater = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 3
    );
    const nextYear = new Date(
      today.getFullYear() + 1,
      today.getMonth(),
      today.getDate()
    );

    monthRefs.current.forEach((monthRef, index) => {
      flatpickr(monthRef, {
        inline: true,
        mode: "range",
        defaultDate: selectedDates,
        locale: {
          ...flatpickr.l10ns[language],
          rangeSeparator: " - ",
          separator: " - ",
        },
        minDate: threeDaysLater,
        showOtherMonths: false,
        maxDate: nextYear,
        onChange: (selectedDates) => {
          setSelectedDates(selectedDates);
          onDateChange(selectedDates);
        },
      });

      monthRef._flatpickr.jumpToDate(
        new Date(today.getFullYear(), today.getMonth() + index)
      );
    });
  }, [selectedDates]);

  useEffect(() => {
    const storedDates = localStorage.getItem("selectedDates");

    if (storedDates) {
      const selectedDates = JSON.parse(storedDates);
      const today = new Date();
      const nextYear = new Date(
        today.getFullYear() + 1,
        today.getMonth(),
        today.getDate()
      );
      const threeDaysLater = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 3
      );
      monthRefs.current.forEach((monthRef, index) => {
        flatpickr(monthRef, {
          inline: true,
          mode: "range",
          defaultDate: selectedDates,
          locale: {
            ...flatpickr.l10ns[language],
            rangeSeparator: " - ",
            separator: " - ",
          },
          minDate: threeDaysLater,
          showOtherMonths: false,
          maxDate: nextYear,
          onChange: (selectedDates) => {
            setSelectedDates(selectedDates);
            onDateChange(selectedDates);
          },
        });
        monthRef._flatpickr.jumpToDate(
          new Date(today.getFullYear(), today.getMonth() + index)
        );
      });
    }
  }, []);

  return (
    <div
      className="calendar-container d-flex flex-column"
      id="m-calendar-dialog"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="month-calendar">
          <div ref={(el) => (monthRefs.current[index] = el)}></div>
        </div>
      ))}
    </div>
  );
}

export default CalendarMobile;
