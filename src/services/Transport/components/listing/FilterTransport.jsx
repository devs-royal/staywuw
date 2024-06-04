import { Disclosure } from "@headlessui/react";
import LanguageContext from "@/language/LanguageContext";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect, useContext } from "react";

import PriceTransport from "./PriceTransport";
import { filterDataTransport } from "../../config/filterDataTransport";
import ListingTransportContext from "../../context/ListingTransportContext";

export default function FilterTransport() {
  const { languageData } = useContext(LanguageContext);
  const [filters, setFilters] = useState(filterDataTransport);
  const { setSelectedFilters } = useContext(ListingTransportContext);

  useEffect(() => {
    const newSelectedFilters = {};

    filters.forEach((filterGroup) => {
      newSelectedFilters[filterGroup.name.toLowerCase()] = filterGroup.options
        .filter((option) => option.checked)
        .map((option) => option.value);
    });
    
    setSelectedFilters(newSelectedFilters);
  }, [filters, setSelectedFilters]);

  const handleCheckboxChange = (categoryIndex, optionIndex) => {
    setFilters((prevFilters) => {
      return prevFilters.map((category, idx) => {
        if (idx === categoryIndex) {
          const optionsUpdated = category.options.map((option, i) => {
            if (optionIndex === i) {
              return { ...option, checked: !option.checked };
            } else if (category.options[optionIndex].value === -1) {
              return { ...option, checked: false };
            } else {
              return option.value === -1
                ? { ...option, checked: false }
                : option;
            }
          });

          const noOptionSelected = !optionsUpdated.some(
            (option) => option.checked && option.value !== -1
          );
          if (noOptionSelected) {
            optionsUpdated.forEach((option, i) => {
              if (option.value === -1) {
                optionsUpdated[i] = { ...option, checked: true };
              }
            });
          }

          return { ...category, options: optionsUpdated };
        }
        return category;
      });
    });
  };

  return (
    <>
      <div className="mt-4 p-6 border border-[#EBEBEB] rounded-md bg-white">
        {/*TEXT FILTER RESULT AND BTN RESET */}
        <div className="flex justify-between mb-[12.5px]">
          <span className="text-fs-16 m-b">
            {languageData.titlesFilterTour.filterResults}
          </span>

          {/* RESET BTN STYLES */}
          {/* <button className="text-bl-100 text-fs-12 m-s-b">
            {languageData.titlesFilterTour.reset}
          </button> */}
        </div>

        <div className="border-t w-full mb-[12.5px]" />

        {/* ACCORDION  RANGE PRICE */}
        <PriceTransport />

        {/*END ACCORDION  RANGE PRICE */}
        <div className="border-t w-full mb-[12.5px] mt-[12.5px]" />

        {filters.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <h3 className="m-s-b text-fs-14">
                      {languageData.filterTransport[category.name]}
                    </h3>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
                    <div
                      className={`${
                        category.name === "category"
                          ? "flex flex-col gap-2"
                          : "grid grid-cols-3 gap-2"
                      }`}
                    >
                      {category.options.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className="inline-flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            checked={option.checked}
                            onChange={() =>
                              handleCheckboxChange(categoryIndex, optionIndex)
                            }
                            className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer"
                          />
                          {category.name != "category" && (
                            <span className="m-m text-fs-12 cursor-pointer text-black">
                              {option.label === "Todos"
                                ? languageData.optionsFilterHotel.allStart
                                : option.label}
                            </span>
                          )}
                          {category.name === "category" && (
                            <span className="m-m text-fs-12 cursor-pointer text-black">
                              {languageData.filterTransport[option.label]}
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </>
  );
}
