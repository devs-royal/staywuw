import _ from "lodash";
import { Combobox, Transition } from "@headlessui/react";
import React, { useState, useEffect, useMemo, useContext } from "react";

import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";


const API_ENDPOINT = `v1/activity`;
function SearchTour({ closeDialog, onSelectTour, listing = false }) {
  const storedSearchTour =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("searchTour")
      : null;

  const [searchTour, setDataSearch] = useState(
    storedSearchTour ? JSON.parse(storedSearchTour) : null
  );

  const [inputAutocomplete, setInputAutocomplete] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [optionsSearch, setOptions] = useState({});

  const AutocompleteFetch = useMemo(
    () =>
      _.debounce(async (inputAutocomplete) => {
        try {
          const response = await axiosWithInterceptor.get(
            `${API_ENDPOINT}/${inputAutocomplete}`
          );
          const groupedResults = response.data.activities.reduce(
            (acc, item) => {
              acc[item.type] = acc[item.type] || [];
              acc[item.type].push(item);
              return acc;
            },
            {}
          );
          setOptions(groupedResults);
          setIsOpen(Object.keys(groupedResults).length > 0);
          // setOptions(response.data.activities);
        } catch (error) {
          console.error(error);
        }
      }, 400),
    []
  );

  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    if (inputAutocomplete.length < 3 || !isOpen) {
      setOptions({});
      setIsOpen(false);
      return;
    }
    if (!searchTour) {
      AutocompleteFetch(inputAutocomplete);
    }
  }, [inputAutocomplete, AutocompleteFetch, isOpen]);

  useEffect(() => {
    if (searchTour) {
      localStorage.setItem("searchTour", JSON.stringify(searchTour));
      onSelectTour(searchTour);
      setInputAutocomplete(searchTour.label);
    } else {
      localStorage.setItem("searchTour", null);
      onSelectTour(null);
      setInputAutocomplete("");
    }
  }, [searchTour, onSelectTour]);

  const highlightMatch = (text) => {
    const searchTerm =
      typeof inputAutocomplete === "string" ? inputAutocomplete : "";

    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="text-or-100 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // LETTER FROM INPUT OR AUTOCOMPLETE
  const letterInput = (event) => {
    if (event.target.value !== "") {
      setInputAutocomplete(event.target.value);
      setIsOpen(true);
    } else {
      onSelectTour(null);
      setDataSearch(null);
    }
  };

  const handleSelect = (item) => {
    setDataSearch(item);
    setInputAutocomplete(item.label);
    setIsOpen(false);
  };

  return (
    <Combobox
      as="div"
      value={searchTour}
      onChange={setDataSearch}
      className="max-lg:w-full"
    >
      <div className="relative">
        <Combobox.Button
          className={`focus:outline-none ${
            listing ? "w-full" : "max-lg:w-full"
          } `}
        >
          <img
            className="absolute left-4 bottom-0 top-0 my-auto W-[16px] h-[20px]"
            width="16px"
            height="20px"
            src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
            alt="tour-b"
          />

          <p className="m-0 top-2.5 left-[2.5rem] absolute text-gry-70 m-m text-fs-10">
            {languageData.SearchBox.tabTour.autoDestination}
          </p>

          <Combobox.Input
            className={`placeholder:m-m placeholder:text-gry-70 m-b font-extrabold h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[22px] pr-4 pl-[2.4rem] shadow-sm focus:outline-none text-fs-12 ${
              listing ? "w-full" : "w-full lg:w-[290px]"
            }`}
            onChange={(event) => letterInput(event)}
            displayValue={(tour) => tour && tour.label}
            placeholder={languageData.SearchBox.tabTour.destinationText}
          />

          <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Combobox.Options
              className={`px-2 absolute z-[2] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
            >
              {Object.entries(optionsSearch).map(([type, items]) => (
                <div key={type}>
                  <div className="px-3 py-2 text-lg font-semibold text-gray-700 cursor-default">
                    {type === "activity" ? (
                      <div className="flex items-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}/icons/hotel/hotel-b.svg`}
                          alt="Hotel Icon"
                          className="w-5 h-5 mr-2"
                        />
                        <span>Hoteles</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
                          alt="Location Icon"
                          className="w-5 h-5 mr-2"
                        />
                        <span>Destinos</span>
                      </div>
                    )}
                  </div>
                  {items.map((item) => (
                    <Combobox.Option
                      key={item.key}
                      value={item}
                      onClick={() => handleSelect(item)}
                    >
                      {({ active }) => (
                        <div
                          className={`p-2 text-start ${
                            active ? "bg-gry-30" : "text-gray-900"
                          }`}
                        >
                          {highlightMatch(item.label)}
                        </div>
                      )}
                    </Combobox.Option>
                  ))}
                </div>
              ))}
              {Object.keys(optionsSearch).length === 0 && (
                <p className="m-0 text-start cursor-auto">
                  {languageData.SearchBox.tabTour.text}
                </p>
              )}
            </Combobox.Options>
          </Transition>
          {/* <Combobox.Options
            className={`px-2 absolute z-[2] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${
              filtersTours.length === 0 && "cursor-auto"
            }`}
          >
            {filtersTours.length > 0 &&
              filtersTours.map((option, index) => (
                <Combobox.Option
                  key={index}
                  value={option}
                  className="text-gry-100 m-m text-fs-12 cursor-pointer text-start flex gap-x-[5px] items-start my-3.5"
                >
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
                  <p className="m-0">
                    {getDestination(inputAutocomplete, option.label)}
                  </p>
                </Combobox.Option>
              ))}

            {optionsSearch.length === 0 && inputAutocomplete.length >= 3 && (
              <p className="m-0 text-start cursor-auto">
                {languageData.SearchBox.tabTour.text}
              </p>
            )}
          </Combobox.Options> */}
        </Combobox.Button>
      </div>
    </Combobox>
  );
}

export default SearchTour;
