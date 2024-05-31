import _ from "lodash";
import React, { useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";

import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

const API_ENDPOINT = `v1/destinations/search`;

export default function AutocompleteHotel() {
  const [input, setInput] = useState("");

  const storedDataSearch =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("dataSearch")
      : null;

  const [selectedItem, setSelectedItem] = useState(
    storedDataSearch ? JSON.parse(storedDataSearch) : null
  );
  const [results, setResults] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (input.length < 3 || !isOpen) {
      setResults({});
      setIsOpen(false);
      return;
    }
    if (!selectedItem) {
      handleSearch();
    }
  }, [input, isOpen, selectedItem]);

  const handleSearch = async () => {
    const searchTerm = input.replace(/ /g, "+");

    try {
      const url = `${API_ENDPOINT}?searchTerm=${searchTerm}`;
      const response = await axiosWithInterceptor.get(url);
      const groupedResults = response.data.results.reduce((acc, item) => {
        acc[item.type] = acc[item.type] || [];
        acc[item.type].push(item);
        return acc;
      }, {});
      setResults(groupedResults);
      setIsOpen(Object.keys(groupedResults).length > 0);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults({});
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
    setSelectedItem(null);
    setIsOpen(true);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setInput(item.label);
    localStorage.setItem("dataSearch", JSON.stringify(item));
    setIsOpen(false);
  };

  const highlightMatch = (text) => {
    const searchTerm = typeof input === "string" ? input : "";

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

  return (
    <div className="w-full max-w-md mx-auto lg:w-[296px]">
      <div className="relative">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
          alt="Location Icon"
          className="w-5 h-5 mr-2 absolute top-[18px] left-[7px]"
        />
        <label
          htmlFor="search-input"
          className="m-b absolute top-[11px] left-[32px] text-fs-10 text-gry-70 "
        >
          Destinos
        </label>
        <Combobox value={selectedItem} onChange={handleSelect}>
          <Combobox.Input
            className="placeholder:m-m placeholder:text-gry-70 m-b font-extrabold w-full lg:w-[290px] h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[22px] pr-4 pl-[32px] shadow-sm focus:outline-none text-fs-12"
            onChange={handleChange}
            displayValue={(item) => (item ? item.label : "")}
            placeholder={!input ? "Buscar hotel o destino" : ""}
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
            <Combobox.Options className="scroll-page-blue p-0 absolute z-[2] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-gray-300 ring-opacity-5 focus:outline-none sm:text-sm">
              {Object.entries(results).map(([type, items]) => (
                <div key={type}>
                  <div className="px-3 py-2 text-lg font-semibold text-gray-700">
                    {type === "hotel" ? (
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
                    <Combobox.Option key={item.key} value={item}>
                      {({ active }) => (
                        <div
                          className={`p-2 ${
                            active ? "bg-gry-30" : "text-gray-900"
                          }`}
                          onClick={() => handleSelect(item)}
                        >
                          {highlightMatch(item.label)}
                        </div>
                      )}
                    </Combobox.Option>
                  ))}
                </div>
              ))}
            </Combobox.Options>
          </Transition>
        </Combobox>
      </div>
    </div>
  );
}
