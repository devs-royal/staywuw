import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PriceHotels from "./PriceHotels";
import LanguageContext from "../../../language/LanguageContext";
import ListingHotelContext from "../context/ListingHotelContext";
import { initialFilters } from "./filtersHotelJson";


export default function FiltersHotels({listing=false}) {
  const [showMore, setShowMore] = useState({});
  const { languageData } = useContext(LanguageContext);
  const [filters, setFilters] = useState(initialFilters);
  const { setSelectedFilters } = useContext(ListingHotelContext);

  //   UPDATE FILTERS SELECTED
  useEffect(() => {
    const newSelectedFilters = {};
    Object.keys(filters).forEach((filterGroup) => {
      newSelectedFilters[filterGroup] = filters[filterGroup].items
        .filter((item) => item.checked)
        .map((item) => item.value);
    });

    setSelectedFilters(newSelectedFilters);
  }, [filters]);

  // CHANGE FILTERS
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

  //   SHOW MORE
  const handleShowMore = (group) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [group]: !prevShowMore[group],
    }));
  };

  return (
    <>
      <div className={`${listing === false && 'container-all-filters'}`}>
        <div className="p-2">
          <div className="filter-title !text-fs-17 d-flex width100 align-items-start">
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
              : filterItems.length;
            return (
              <div key={`${filterGroup}-${index}`}>
                <div className="h-line" />
                <Accordion
                  defaultExpanded
                  disableGutters
                  className="accordion-filter"
                >
                  <AccordionSummary
                    className="accordion-summary-filters"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}a-content`}
                    id={`panel${index + 1}a-header`}
                  >
                    <div
                      className="filter-subtitle !text-fs-15"
                      variant="p"
                      sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      {languageData.titlesFilterHotel[
                        filters[filterGroup].title
                      ]
                        ? languageData.titlesFilterHotel[
                            filters[filterGroup].title
                          ]
                        : filters[filterGroup].title}
                    </div>
                  </AccordionSummary>

                  <AccordionDetails>
                    <FormGroup>
                      {filterItems.items
                        .slice(0, maxItems)
                        .map((filterItem, index) => {
                          return (
                            <FormControlLabel
                              key={`${filterGroup}-${index}${filterItem.value}`}
                              label={
                                languageData.optionsFilterHotel[
                                  filterItem.label
                                ]
                                  ? languageData.optionsFilterHotel[
                                      filterItem.label
                                    ]
                                  : filterItem.label
                              }
                              sx={{ marginBottom: 0 }}
                              control={
                                <Checkbox
                                  name={`${filterGroup}_${filterItem.value}`}
                                  value={filterItem.value}
                                  onChange={(event) =>
                                    handleCheckbox(event, filterGroup)
                                  }
                                  checked={filterItem.checked}
                                />
                              }
                            />
                          );
                        })}
                      {filterItems.items.length > 4 && (
                        <>
                          <button
                            className="button-shoMore"
                            variant="text"
                            color="primary"
                            onClick={() => handleShowMore(filterGroup)}
                          >
                            {showMore[filterGroup] ? (
                              <div className="flex justify-start items-center !text-fs-13">
                                <div>{languageData.showOptions.showLess} </div>
                                <div>
                                  <img
                                    className="ml-2"
                                    src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/up-100.svg`}
                                    alt="ArrowUpIcon"
                                    width={12}
                                    height={12}
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-start items-center !text-fs-13">
                                <div>{languageData.showOptions.showMore} </div>
                                <div>
                                  <img
                                    className="ml-2"
                                    src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-100.svg`}
                                    alt="ArrowUpIcon"
                                    width={12}
                                    height={12}
                                  />
                                </div>
                              </div>
                            )}
                          </button>
                        </>
                      )}
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
