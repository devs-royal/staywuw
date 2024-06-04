"use client";

import { Combobox } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { DisabledInputTransportRelated } from "../../utils/DisabledInputTransport";

export function SearchDestinationB({
  isListing,
  selectDestinationA,
  selectDestinationB,
  setSelectDestinationB,
  destinationBLocal,
}) {
  const { languageData } = useContext(LanguageContext);
  const [query, setQuery] = useState("");

  // CLEAN INPUT
  useEffect(() => {
    if (query === "") {
      setSelectDestinationB(null);
    }
  }, [query]);

  useEffect(() => {
    if (destinationBLocal) {
      setQuery(destinationBLocal.label);
      setSelectDestinationB(destinationBLocal);
    }
  }, [destinationBLocal]);

  // CLEAN INPUT IF CHANGE DESTINATION A
  useEffect(() => {
    if (!selectDestinationA) {
      setQuery("");
      setSelectDestinationB(null);
    }
  }, [selectDestinationA]);

  const handleLetter = (event) => {
    setQuery(event.target.value);
  };

  // FILTER TRANSPORT
  const filterRelates =
    query === ""
      ? selectDestinationA
        ? selectDestinationA.related
        : ""
      : selectDestinationA &&
        selectDestinationA.related.filter((related) => {
          return related.label.toLowerCase().includes(query.toLowerCase());
        });

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

  // SET DESTINATION A TO LOCAL STORAGE
  const selectNewDestinationB = (destination) => {
    const getSearchTransport = JSON.parse(
      localStorage.getItem("searchTransport")
    );

    if (getSearchTransport) {
      getSearchTransport.destinationB = destination;
      localStorage.setItem(
        "searchTransport",
        JSON.stringify(getSearchTransport)
      );
    }
  };

  return selectDestinationA && selectDestinationA.related.length > 0 ? (
    <Combobox
      as="div"
      value={selectDestinationB}
      onChange={setSelectDestinationB}
      className={`${isListing ? "w-full" : "max-lg:w-full"}`}
    >
      <div className="relative">
        <Combobox.Button
          className={`${
            isListing ? "w-full" : "max-lg:w-full"
          } focus:outline-none`}
        >
          <img
            className="absolute left-4 bottom-0 top-0 my-auto W-[16px] h-[20px]"
            width="16px"
            height="20px"
            src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
            alt="transport-b"
          />

          <p className="m-0 top-2.5 left-[2.5rem] absolute text-gry-70 m-m text-fs-10">
            {languageData.SearchBox.tabTransport.to}
          </p>

          <Combobox.Input
            className={`placeholder:m-m placeholder:text-gry-70 m-b font-extrabold h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[30px] pr-4 pl-[2.4rem] shadow-sm focus:outline-none text-fs-12 ${
              isListing ? "w-full" : "w-full lg:w-[260px]"
            }`}
            onChange={(event) => handleLetter(event)}
            displayValue={(related) => related?.label}
            placeholder={languageData.SearchBox.tabHotel.textDestination}
          />
          <Combobox.Options className="px-2 absolute z-[2] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filterRelates.map((related, index) => (
              <Combobox.Option
                key={index}
                value={related}
                className="text-gry-100 m-m text-fs-12 cursor-pointer text-start py-[6px]"
                onClick={() => selectNewDestinationB(related)}
              >
                <p className="m-0">{getDestination(query, related.label)}</p>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox.Button>
      </div>
    </Combobox>
  ) : (
    <DisabledInputTransportRelated isListing={isListing} languageData={languageData} />
  );
}
