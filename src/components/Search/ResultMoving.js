import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Round from "../Moving/Round";
import HotelAirport from "../Moving/HotelAirport";
import AirportHotel from "../Moving/AirportHotel";
import React, { useState, useContext } from "react";

import LanguageContext from "../../language/LanguageContext";

export default function ResultMoving() {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  let componentToRender = null;

  if (selectedValue === "option1") {
    componentToRender = <AirportHotel />;
  } else if (selectedValue === "option2") {
    componentToRender = <HotelAirport />;
  } else if (selectedValue === "option3") {
    componentToRender = <Round />;
  }
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <RadioGroup
        className="radio-button-moving"
        aria-label="radio-buttons"
        name="radio-buttons-group"
        value={selectedValue}
        onChange={handleChange}
      >
        <FormControlLabel
          value="option1"
          control={<Radio className="ratio-button-text" />}
          className="ratio-button-text"
          label={languageData.SearchBox.tabTransportation.typeAirport}
        />

        <FormControlLabel
          value="option2"
          control={<Radio className="ratio-button-text" />}
          className="ratio-button-text"
          label={languageData.SearchBox.tabTransportation.typeHotel}
        />

        <FormControlLabel
          value="option3"
          control={<Radio className="ratio-button-text" />}
          className="ratio-button-text"
          label={languageData.SearchBox.tabTransportation.typeTravel}
        />
      </RadioGroup>
      {componentToRender}
    </>
  );
}