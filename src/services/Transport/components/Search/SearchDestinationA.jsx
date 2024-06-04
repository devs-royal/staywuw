"use client";

import { Combobox } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { getTransportation } from "../../Api/requestTransport";
import { DisabledInputTransport } from "../../utils/DisabledInputTransport";

export function SearchDestinationA({
  isListing,
  selectedAutoComplete,
  setSelectDestinationA,
  selectDestinationA,
  destinationALocal,
  setSelectDestinationB,
}) {
  const { language, languageData } = useContext(LanguageContext);
  const [isSearch, setIsSearch] = useState(false);

  const [destinations, setDestinations] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (destinationALocal) {
      setSelectDestinationA(destinationALocal);
      setQuery(destinationALocal.label);
    }
  }, [destinationALocal]);

  // GET ZONES AND CLEAN INPUT IF CHANGE AUTO COMPLETE
  useEffect(() => {
    if (selectedAutoComplete) {
      setIsSearch(true);
      const selectTransport = async (destinationId, language) => {
        const response = await getTransportation(destinationId, language);
        setDestinations(response);
        setIsSearch(false);
      };
      selectTransport(selectedAutoComplete.id, language);
    } else {
      setDestinations(null);
      setSelectDestinationA(null);
      setQuery("");
    }
  }, [selectedAutoComplete]);

  const handleLetter = (event) => {
    if (event.target.value !== "") {
      setQuery(event.target.value);
    }
    if (event.target.value.length < 3) {
      setQuery("");
      setSelectDestinationA(null);
      setSelectDestinationB(null);
    }
  };

  // CLEAN INPUT
  useEffect(() => {
    if (query === "") {
      setSelectDestinationA(null);
    }
  }, [query]);

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

  // FILTER TRANSPORT
  const filterTransport =
    query === ""
      ? destinations
        ? destinations.zones
        : ""
      : destinations &&
        destinations.zones.filter((destination) => {
          return destination.label.toLowerCase().includes(query.toLowerCase());
        });

  // SET DESTINATION A TO LOCAL STORAGE
  const selectNewDestinationA = (destination) => {
    setSelectDestinationB(null);
    const getSearchTransport = JSON.parse(
      localStorage.getItem("searchTransport")
    );
    if (getSearchTransport) {
      getSearchTransport.destinationA = destination;
      getSearchTransport.destinationB = null;
      localStorage.setItem(
        "searchTransport",
        JSON.stringify(getSearchTransport)
      );
    }
  };

  return selectedAutoComplete ? (
    // INPUT TRANSPORT
    <Combobox
      as="div"
      value={selectDestinationA}
      onChange={setSelectDestinationA}
      className={`${isListing ? "w-full" : "max-lg:w-full"}`}
    >
      <div className="relative">
        <Combobox.Button
          className={`${
            isListing ? "w-full" : "max-lg:w-full"
          } focus:outline-none `}
        >
          <img
            className="absolute left-4 bottom-0 top-0 my-auto w-[16px] h-[20px]"
            width="16px"
            height="20px"
            src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
            alt="transport-b"
          />

          <p className="m-0 top-2.5 left-[2.5rem] absolute text-gry-70 m-m text-fs-10">
            {languageData.SearchBox.tabTransport.from}
          </p>
          <Combobox.Input
            className={`placeholder:m-m placeholder:text-gry-70 m-b font-extrabold h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[30px] pr-4 pl-[2.4rem] shadow-sm focus:outline-none text-fs-12 ${
              isListing ? "w-full" : "w-full lg:w-[260px]"
            }`}
            onChange={(event) => handleLetter(event)}
            displayValue={(person) => person?.label}
            placeholder={
              isSearch
                ? "Buscando rutas..."
                : languageData.SearchBox.tabHotel.textDestination
            }
          />

          <Combobox.Options className="px-2 absolute z-[2] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {destinations &&
              filterTransport &&
              filterTransport.map((destination, index) => (
                <Combobox.Option
                  key={index}
                  value={destination}
                  className="text-gry-100 m-m text-fs-12 cursor-pointer text-start py-[6px]"
                  onClick={() => selectNewDestinationA(destination)}
                >
                  <p className="m-0">
                    {getDestination(query, destination.label)}
                  </p>
                </Combobox.Option>
              ))}
            {!destinations && !isSearch && (
              <p className="m-0 text-start cursor-auto">
                {languageData.SearchBox.tabHotel.textResults}
              </p>
            )}
          </Combobox.Options>
        </Combobox.Button>
      </div>
    </Combobox>
  ) : (
    // INPUT DISABLED TRANSPORT
    <DisabledInputTransport isListing={isListing} languageData={languageData} isSearch={isSearch} />
  );
}
