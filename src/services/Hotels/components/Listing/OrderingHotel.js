import React, { useContext } from "react";

import { ordering } from "../../config/filters";
import LanguageContext from "../../../../language/LanguageContext";
import ListingHotelContext from "../../context/ListingHotelContext";

export default function OrderingHotel() {
  const { languageData } = useContext(LanguageContext);
  const { orderHotel, setOrderHotel, setCurrentPage } =
    useContext(ListingHotelContext);

  const handleOrderingFilters = (event) => {
    const selectedValue = +event.target.value;

    setOrderHotel(selectedValue);
    setCurrentPage(1);
  };

  return (
    <>
      {ordering.items.length > 0 && (
        <div className="relative">
          <label
            htmlFor="location"
            className="m-m text-gry-100 text-fs-10 absolute top-[12px] left-[18px] "
          >
            {languageData.filtersHotel.order}
          </label>
          <select
            className="pt-[1.2rem] mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bl-70 sm:text-sm sm:leading-6 text-fs-14"
            value={orderHotel}
            onChange={(event) => handleOrderingFilters(event)}
          >
            {ordering.items.map((item, index) => (
              <option key={index} value={item.value}>
                {languageData.orderByHotel[item.label]}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}
