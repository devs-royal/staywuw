import React, { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import { orderingTour } from "../../Config/orderingTour";
import { useTourContext } from "../../context/ListingTourContext";

export default function OrderingTour() {
  const { languageData } = useContext(LanguageContext);
  const { orderTour, setOrderTour, updatePage } = useTourContext();

  const handleOrderingFilters = (event) => {
    const selectedValue = +event.target.value;
    setOrderTour(selectedValue);
    updatePage(1);
  };

  return (
    <>
      {orderingTour.items.length > 0 && (
        <div className="relative">
          <label
            htmlFor="location"
            className="m-m text-gry-100 text-fs-10 absolute top-[12px] left-[18px] "
          >
            {languageData.filtersHotel.order}
          </label>
          <select
            className="pt-[1.2rem] mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bl-70 sm:text-sm sm:leading-6 text-fs-14"
            value={orderTour}
            onChange={(event) => handleOrderingFilters(event)}
          >
            {orderingTour.items.map((item, index) => (
              <option key={index} value={item.value}>
                {languageData.orderByTour[item.label]}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}
