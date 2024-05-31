import _ from "lodash";
import Image from "next/image";
import React, { useState, useEffect, useMemo, useContext } from "react";
import { Grid, TextField, Autocomplete, Typography } from "@mui/material";

import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import "../../assets/styles/general/SearchHotel.css";

const API_ENDPOINT = `v1/activity`;
function SearchTour({ closeDialog, onSelectTour, listing = false }) {

  const storedSearchTour =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("searchTour")
      : null;
  const [searchTour, setDataSearch] = useState(
    storedSearchTour ? JSON.parse(storedSearchTour) : null
  );

  const isMobile = useIsMobile();
  const [inputAutocomplete, setInputAutocomplete] = useState("");
  const [optionsSearch, setOptions] = useState([]);
  const isOptionEqualToValue = (option, value) =>
    option.value === value.value && option.key === value.key;

  const searchLocation = inputAutocomplete.trim();
  const isEmpty = searchLocation === "";

  const AutocompleteFetch = useMemo(
    () =>
      _.debounce(async (inputAutocomplete) => {
        try {
          const response = await axiosWithInterceptor.get(
            `${API_ENDPOINT}/${inputAutocomplete}`
          );
          setOptions(response.data.activities);
        } catch (error) {
          console.error(error);
        }
      }, 400),
    []
  );

  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    if (inputAutocomplete.length >= 3) {
      AutocompleteFetch(inputAutocomplete);
    }
  }, [inputAutocomplete, AutocompleteFetch]);

  useEffect(() => {
    localStorage.setItem("searchTour", JSON.stringify(searchTour));
    onSelectTour(searchTour);
  }, [searchTour, onSelectTour]);

  const clickInput = (newValueAutocomplete) => {
    setDataSearch(newValueAutocomplete);
    if (newValueAutocomplete !== null) {
      setTimeout(() => {
        if (isMobile) closeDialog();
      }, 100);
    }
  };

  const getDestination = (inputValue, label) => {
    const wordEscapade = inputValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(wordEscapade, "gi");
    label = label.replace(",", " ");
    const parts = label.split(regex);
    const items = label.match(regex);
    if (!items) {
      return parts;
    }
    return parts.map((parts, index) =>
      index === parts.length - 1 ? (
        parts
      ) : (
        <span key={index}>
          {parts}
          <span style={{ color: "#2743a6 ", fontWeight: 800 }}>
            {items[index]}
          </span>
        </span>
      )
    );
  };

  return (
    <div className={`border-2 border-gray-200 rounded py-2.5 px-4 flex items-center h-[53px] relative ${listing ? 'w-full' : 'w-full lg:w-[290px]'}`}>
      <span className="text-fs-10 m-s-b text-gry-70 m-0 absolute top-[6px] left-[43px]">
        {languageData.SearchBox.tabTour.autoDestination}
      </span>

      <Autocomplete
        // open
        // id="autocomplete-tour"
        className="text-white m-m text-fs-12 scroll-page-blue absolute top-[11px] !w-[90%]"
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.label}
        filterOptions={(x) => x}
        options={optionsSearch}
        isOptionEqualToValue={isOptionEqualToValue}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={searchTour}
        noOptionsText={
          searchTour || isEmpty === true
            ? ""
            : languageData.SearchBox.tabTour.text
        }
        onChange={(event, newValueAutocomplete) => {
          clickInput(newValueAutocomplete);
        }}
        onInputChange={(event, newInputValue) => {
          setInputAutocomplete(newInputValue);
        }}
        renderInput={(params) => (
          <div className="flex gap-x-2 items-center" id="destination-search">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
              width={16}
              height={16}
              className="h-4 w-4 invert"
              alt="icon-location"
            />
            <div className="flex flex-col w-full">
              <TextField
                className="!m-m !text-fs-12 p-0"
                {...params}
                placeholder={languageData.SearchBox.tabTour.destinationText}
              />
            </div>
          </div>
        )}
        renderOption={(props, option) => {
          return (
            <li {...props}>
              <Grid container alignItems="center">
                <Grid item sx={{ display: "flex", width: 30 }}>
                  {option.type === "destination" ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                      alt="icon location"
                      width={16}
                      height={16}
                      className="icon-location-tour"
                    />
                  ) : (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
                      width={16}
                      height={16}
                      alt="icon tour"
                    />
                  )}
                </Grid>

                <Grid
                  item
                  sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
                >
                  <Typography
                    className="option-response"
                    variant="body1"
                    id="OptionAutocomplete"
                  >
                    {getDestination(inputAutocomplete, option.label)}
                    {/* {option.label} */}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
    </div>
  );
}

export default SearchTour;
