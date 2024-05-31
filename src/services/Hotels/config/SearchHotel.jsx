import _ from "lodash";
import Image from "next/image";
import { useState, useEffect, useMemo, useContext } from "react";
import {
  Grid,
  TextField,
  Autocomplete,
  Typography,
  ListSubheader,
} from "@mui/material";

import { useIsMobile } from "../../../configs/isMobile";
import LanguageContext from "../../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import Hotels from "../../assets/icons/utils/navigation/hotel.svg";
import IconLocation from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

const API_ENDPOINT = `v1/destinations/search`;

function SearchDestination(props) {
  const { closeDialog, onSelectSearch } = props;
  const isMobile = useIsMobile();
  const { languageData } = useContext(LanguageContext);
  const [dataSearch, setDataSearch] = useState(
    JSON.parse(localStorage.getItem("dataSearch")) || null
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
    <Autocomplete
      // open
      className="search-autocomplete custom-autocomplete"
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.label}
      groupBy={(option) => option.category} // Agrupa por categoría
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
        <TextField
          className="textField-box-result"
          {...params}
          placeholder={languageData.SearchBox.tabHotel.textDestination}
        />
      )}
      renderOption={(props, option) => {
        return (
          <li key={option.key} {...props}>
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
              {params.group === "Destinos" ? (
                <Image
                  src={IconLocation}
                  alt="IconLocation"
                  style={{ marginRight: "8px" }}
                />
              ) : (
                <Image
                  src={Hotels}
                  alt="Hotels"
                  style={{ marginRight: "8px" }}
                />
              )}
              <Typography variant="subtitle1">{params.group}</Typography>
            </ListSubheader>
            {params.children}
          </li>
        );
      }}
    />
  );
}

export default SearchDestination;
