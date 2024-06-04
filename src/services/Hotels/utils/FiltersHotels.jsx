import React, { useEffect, useState, useContext } from "react";

import PriceHotels from "./PriceHotels";
import LanguageContext from "../../../language/LanguageContext";
import ListingHotelContext from "../context/ListingHotelContext";
import { initialFilters } from "./filtersHotelJson";

export default function FiltersHotels({ listing = false }) {
  const [showMore, setShowMore] = useState({});
  const { languageData } = useContext(LanguageContext);
  const [filters, setFilters] = useState(initialFilters);
  const { setSelectedFilters } = useContext(ListingHotelContext);

  // Update selected filters
  useEffect(() => {
    const newSelectedFilters = {};
    Object.keys(filters).forEach((filterGroup) => {
      newSelectedFilters[filterGroup] = filters[filterGroup].items
        .filter((item) => item.checked)
        .map((item) => item.value);
    });
    setSelectedFilters(newSelectedFilters);
  }, [filters]);

  // Change filters
  const handleCheckbox = (event, filterGroup) => {
    const { name, checked } = event.target;
    const value = parseInt(name.split("_")[1], 10);

    setFilters((prevFilters) => {
      let newItems = prevFilters[filterGroup].items.map((item) => {
        if (item.value === -1 && value !== -1) {
          return { ...item, checked: false };
        } else if (item.value === value) {
          return { ...item, checked };
        } else if (value === -1) {
          return { ...item, checked: item.value === -1 };
        }
        return item;
      });

      const isSelected = newItems.some((item) => item.checked);

      if (!isSelected) {
        newItems = newItems.map((item) => {
          if (item.value === -1) {
            return { ...item, checked: true };
          }
          return item;
        });
      }

      const updatedFilterGroup = {
        ...prevFilters[filterGroup],
        items: newItems,
      };

      return {
        ...prevFilters,
        [filterGroup]: updatedFilterGroup,
      };
    });
  };

  // Show more toggle
  const handleShowMore = (group) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [group]: !prevShowMore[group],
    }));
  };

  return (
    <>
      <div className={`${listing === false && "container-all-filters"}`}>
        <div className="p-2">
          <div className="filter-title text-fs-17 flex w-full items-start">
            {languageData.containerFilterHotel.titleFilter}
          </div>
          <div className="h-line" />
          <PriceHotels />
        </div>

        <div>
          {Object.keys(filters).map((filterGroup, index) => {
            const filterItems = filters[filterGroup];
            const maxItems = showMore[filterGroup]
              ? filterItems.items.length
              : 4;
            return (
              <div key={`${filterGroup}-${index}`}>
                <div className="h-line" />
                <div className="accordion-filter my-4">
                  <div
                    className="accordion-summary-filters flex justify-between items-center cursor-pointer"
                    onClick={() => handleShowMore(filterGroup)}
                  >
                    <div className="filter-subtitle text-fs-15 font-bold">
                      {languageData.titlesFilterHotel[
                        filters[filterGroup].title
                      ]
                        ? languageData.titlesFilterHotel[
                            filters[filterGroup].title
                          ]
                        : filters[filterGroup].title}
                    </div>
                    <span className="ml-2">
                      <img
                        src={`/icons/arrows/${
                          showMore[filterGroup] ? "up" : "down"
                        }-100.svg`}
                        alt="Expand Icon"
                        width={24}
                        height={24}
                      />
                    </span>
                  </div>

                  <div className="accordion-details">
                    <div className="form-group">
                      {filterItems.items.slice(0, maxItems).map((filterItem, index) => (
                        <div
                          className="form-control-label flex items-center mb-2"
                          key={`${filterGroup}-${index}${filterItem.value}`}
                        >
                          <input
                            type="checkbox"
                            name={`${filterGroup}_${filterItem.value}`}
                            value={filterItem.value}
                            onChange={(event) =>
                              handleCheckbox(event, filterGroup)
                            }
                            checked={filterItem.checked}
                            className="mr-2"
                          />
                          <label className="text-sm">
                            {languageData.optionsFilterHotel[filterItem.label]
                              ? languageData.optionsFilterHotel[filterItem.label]
                              : filterItem.label}
                          </label>
                        </div>
                      ))}
                      {filterItems.items.length > 4 && (
                        <button
                          className="button-showMore text-primary text-sm flex items-center mt-2"
                          onClick={() => handleShowMore(filterGroup)}
                        >
                          {showMore[filterGroup] ? (
                            <div className="flex items-center">
                              <span>{languageData.showOptions.showLess}</span>
                              <img
                                className="ml-2"
                                src={`/icons/arrows/up-100.svg`}
                                alt="ArrowUpIcon"
                                width={12}
                                height={12}
                              />
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <span>{languageData.showOptions.showMore}</span>
                              <img
                                className="ml-2"
                                src={`/icons/arrows/down-100.svg`}
                                alt="ArrowDownIcon"
                                width={12}
                                height={12}
                              />
                            </div>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
