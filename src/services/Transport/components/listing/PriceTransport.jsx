import { Disclosure } from "@headlessui/react";
import React, { useState, useContext } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import LanguageContext from "@/language/LanguageContext";
import ListingTransportContext from "../../context/ListingTransportContext";

export default function PriceTransport() {
  const { languageData } = useContext(LanguageContext);
  const { setPricing } = useContext(ListingTransportContext);
  const [isOpen, setIsOpen] = useState(true);
  const [tempPricing, setTempPricing] = useState({ min: "", max: "" });

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setTempPricing((prevPricing) => ({ ...prevPricing, [name]: value }));
  };

  const handlePricingFilters = (event) => {
    event.preventDefault();
    setPricing(tempPricing);
  };

  return (
    <>
      <Disclosure defaultOpen={isOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span className="m-s-b text-fs-14">
                {languageData.titlesFilterTour.priceRange}
              </span>
              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
              {/* NUMBER FROM  */}
              <div className="flex justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-gry-100 m-m text-fs-10">
                    {languageData.SearchBox.tabTour.from}
                  </span>
                  <input
                    type="number"
                    name="min"
                    className="w-[132px] border border-gry-70 rounded m-m text-fs-12 text-black py-[6px] px-[16px]"
                    placeholder={languageData.SearchBox.tabTour.from}
                    value={tempPricing.min}
                    onChange={handlePriceChange}
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-gry-100 m-m text-fs-10">
                    {languageData.titlesFilterTour.to}
                  </span>
                  <input
                    type="number"
                    name="max"
                    className="w-[132px] border border-gry-70 rounded m-m text-fs-12 text-black py-[6px] px-[16px]"
                    placeholder={languageData.titlesFilterTour.to}
                    value={tempPricing.max}
                    onChange={handlePriceChange}
                  />
                </div>
              </div>
              {/*END NUMBER FROM  */}

              {/* BTN APPLY RANGE PRICE */}
              <div className="flex justify-end mt-3">
                <button
                  type="button"
                  className="rounded-full text-fs-12 bg-white px-[25px] py-[8.5px] m-b text-bl-100 shadow-sm !border !border-bl-100 hover:!bg-bl-100 hover:!text-white"
                  onClick={handlePricingFilters}
                >
                  {languageData.containerFilterHotel.button}
                </button>
              </div>
              {/* BTN APPLY RANGE PRICE */}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
