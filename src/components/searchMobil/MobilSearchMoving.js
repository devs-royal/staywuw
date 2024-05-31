import React, { useState, useContext } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import MobilRound from "./MobilRound";
import MobilAirportHotel from "./MobilAirportHotel";
import MobilHotelAirport from "./MobilHotelAirport";

import LanguageContext from "../../language/LanguageContext";

export default function MobilSearchMoving() {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  let componentToRender = null;

  if (selectedValue === "option1") {
    componentToRender = <MobilAirportHotel />;
  } else if (selectedValue === "option2") {
    componentToRender = <MobilHotelAirport />;
  } else if (selectedValue === "option3") {
    componentToRender = <MobilRound />;
  }
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <FormControl component="fieldset">
        <div className="title-search-moving-mobile">
          {languageData.SearchBox.tabTransportation.titleTextMoving}
        </div>

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
      </FormControl>

      {componentToRender}
    </>
  );
}
