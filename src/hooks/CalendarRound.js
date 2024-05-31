import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/l10n/es.js";
import React, { useEffect, useRef, useContext } from "react";
import LanguageContext from "../language/LanguageContext";

export default function CalendarRound({ onDatesChange }) {
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleDatesChange = (selectedRoundArr) => {
      if (selectedRoundArr.length === 2) {
        onDatesChange(selectedRoundArr);
        localStorage.setItem("selectedRound", JSON.stringify(selectedRoundArr));
      }
    };

    const storedDates = localStorage.getItem("selectedRound");
    const options = {
      mode: "range",
      dateFormat: "d/m/y",
      minDate: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
      maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
      inline: false,
      onChange: handleDatesChange,
      locale: {
        rangeSeparator: " - ", // Modificar el separador de rango de fechas
        separator: " - ", // Modificar el separador entre las fechas individuales del rango
        // Resto de las opciones de localización
      },
    };

    if (storedDates) {
      const selectedRound = JSON.parse(storedDates);
      options.defaultDate = selectedRound;
    }

    flatpickr(calendarRef.current, options);
  }, []);

  const { languageData } = useContext(LanguageContext);

  return (
    <input
      className="MuiAutocomplete-root MuiAutocomplete-hasPopupIcon Autocomplete-box css-gcwvw8-MuiAutocomplete-root calendar-results"
      type="text"
      ref={calendarRef}
      placeholder={languageData.SearchBox.tabTransportation.autoCompleteArrival}
      id="check-in"
    />
  );
}
