import _ from "lodash";
import { useState, useEffect, useMemo, useContext } from "react";
import {
  Grid,
  TextField,
  Autocomplete,
  Typography,
  ListSubheader,
} from "@mui/material";

import { useIsMobile } from "@/config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

import "../../../assets/styles/general/SearchHotel.css";
const API_ENDPOINT = `v1/destinations/search`;

function SearchHotel(props) {
  const { closeDialog, onSelectSearch, listing = false } = props;
  const isMobile = useIsMobile();
  const { languageData } = useContext(LanguageContext);
  // const [dataSearch, setDataSearch] = useState(
  //   JSON.parse(localStorage.getItem("dataSearch")) || null
  // );
  const storedDataSearch =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("dataSearch")
      : null;
  const [dataSearch, setDataSearch] = useState(
    storedDataSearch ? JSON.parse(storedDataSearch) : null
  );

  const [inputAutocomplete, setInputAutocomplete] = useState("");
  const [optionsSearch, setOptions] = useState([]);

  const searchLocation = inputAutocomplete.trim();
  const isEmpty = searchLocation === "";
  const AutocompleteFetch = useMemo(
    () =>
      _.debounce(async (inputAutocomplete) => {
        try {
          const response = await axiosWithInterceptor.get(API_ENDPOINT, {
            params: {
              searchTerm: inputAutocomplete,
            },
          });
          const newOptions = response.data.results.map((item) => {
            let category;
            if (item.type === "destination") {
              category = "Destinos";
            } else if (item.type === "hotel") {
              category = "Hoteles";
            }
            return { ...item, category };
          });

          setOptions(newOptions);
        } catch (error) {
          console.error(error);
        }
      }, 400),
    []
  );
  useEffect(() => {
    if (inputAutocomplete.length >= 3) {
      AutocompleteFetch(inputAutocomplete);
    }
  }, [inputAutocomplete, AutocompleteFetch]);

  useEffect(() => {
    localStorage.setItem("dataSearch", JSON.stringify(dataSearch));
    onSelectSearch(dataSearch);
  }, [dataSearch, onSelectSearch]);

  //Devuelve los Palabras en color Naranja en el Search
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
          <span style={{ color: "#EB741E" }}>{items[index]}</span>
        </span>
      )
    );
  };

  const clickInput = (newValueAutocomplete) => {
    setDataSearch(newValueAutocomplete);
    if (newValueAutocomplete !== null) {
      setTimeout(() => {
        if (isMobile) closeDialog();
      }, 100);
    }
  };
  // TEST OPEN LIST
  return (
    <div
      className={`${
        listing == false && "lg:w-[290px]"
      } border-2 border-gray-200 rounded py-2.5 px-4 flex items-center h-[53px] relative w-full`}
    >
      <p className="text-fs-10 m-s-b text-gry-70 m-0 absolute top-[6px] left-[43px]">
        {languageData.SearchBox.tabHotel.autocomplete}
      </p>
      <Autocomplete
        // open={true}
        className="text-white m-m text-fs-12 scroll-page-blue absolute top-[11px] !w-[90%]"
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.label}
        groupBy={(option) => option.category} // Agrupa por categoríaF
        options={optionsSearch}
        isOptionEqualToValue={(option, value) => option.key === value.key}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={dataSearch}
        noOptionsText={
          dataSearch || isEmpty === true
            ? ""
            : languageData.SearchBox.tabHotel.textResults
        }
        onChange={(event, newValueAutocomplete) => {
          clickInput(newValueAutocomplete);
        }}
        onInputChange={(event, newInputValue) => {
          setInputAutocomplete(newInputValue);
        }}
        renderInput={(params) => (
          <div className="flex gap-x-2 items-center" id="destination-search">
            {listing == false && (
              <img
                src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                className="h-4 w-4 invert"
                alt="location icon"
              ></img>
            )}
            <div className="flex flex-col w-full">
              <TextField
                className="!m-m !text-fs-12 truncate"
                {...params}
                placeholder={languageData.SearchBox.tabHotel.textDestination}
              />
            </div>
          </div>
        )}
        renderOption={(props, option) => {
          return (
            <li key={option.key} {...props} id="list-destination-home-hotel">
              <Grid container alignItems="center">
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
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
        renderGroup={(params) => {
          return (
            <li key={params.group}>
              <ListSubheader
                style={{
                  display: "flex",
                  background: "#EFEFEF",
                }}
              >
                {/* {params.group === "Destinos" ? (
                  <IconLocation style={{ marginRight: "8px" }} />
                ) : (
                  <Hotels style={{ marginRight: "8px" }} />
                )} */}
                <Typography variant="subtitle1">{params.group}</Typography>
              </ListSubheader>
              {params.children}
            </li>
          );
        }}
      />
    </div>
  );
}

export default SearchHotel;
