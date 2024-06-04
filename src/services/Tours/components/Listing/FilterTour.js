import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useState, useContext, useEffect } from "react";

import { getFilterTours } from "./allFilters";
import { orderData } from "../../context/orderData";
import LanguageContext from "@/language/LanguageContext";
import { filterStart, getFilters } from "./filtersTours";
import IconStar from "../../../../assets/icons/utils/others/Star-filter.svg";

// MUI SLIDER REMOVE
import { Slider } from "@mui/material";

export default function FilterTour(props) {
  const [isOpen, setIsOpen] = useState(true);
  //Props
  const { auxTourData, setAuxTourData, tourData, setChangeTours, orderTour } =
    props;
  const [filters, setFilters] = useState(getFilters(auxTourData));
  //Union de todos los filtros
  const [allFilters, setAllFilters] = useState({
    checkbox: [],
    stars: [],
    priceRange: [],
  });
  const [filtersStarts, setFiltersStars] = useState(filterStart);
  const [auxStart, setAuxStart] = useState(0);
  const [rangeValue, setRangeValue] = useState([3500, 10000]);
  const [range, setRange] = useState(["", ""]);

  //Para usar los 4 filtrados ,checkbox, estrellas, precios en rango y desde hasta
  useEffect(() => {
    setAuxTourData(orderData(getFilterTours(tourData, allFilters), orderTour));
    setChangeTours(Math.floor(Math.random() * 100) + 1);
  }, [allFilters]);

  //filtro de ordenamiento
  useEffect(() => {
    if (auxTourData) {
      const sortedData = orderData(auxTourData, orderTour);
      setAuxTourData(sortedData);
      setChangeTours(Math.floor(Math.random() * 100) + 1);
    }
  }, [orderTour]);

  // Filters PRICE MAX & MIN
  const handleInputChange = (index, value) => {
    // Verifica si el valor es numérico con punto decimal
    if (value === "" || (!isNaN(value) && !isNaN(parseFloat(value)))) {
      const newRange = [...range]; // Crea una copia del estado actual
      newRange[index] = value; // Actualiza el valor correspondiente
      setRange(newRange); // Actualiza el estado
    }
  };

  const handleApplyClick = () => {
    // Si el valor mínimo es mayor que el máximo, invierte los valores
    if (
      range[0] !== "" &&
      range[1] !== "" &&
      parseFloat(range[0]) > parseFloat(range[1])
    ) {
      setRange([range[1], range[0]]);
    }

    if (range[0] !== "" || range[1] !== "") {
      let min =
        range[0] === "" ? Number.MIN_SAFE_INTEGER : parseFloat(range[0]);
      let max =
        range[1] === "" ? Number.MAX_SAFE_INTEGER : parseFloat(range[1]);
      const updatedFilters = { ...allFilters };
      updatedFilters.priceRange = [min, max];
      // Establecer el nuevo valor de allFilters
      setAllFilters(updatedFilters);
    }
  };
  //Filters  Value Range
  const handleChange = (event, newValue) => {
    setRangeValue(newValue);
    const updatedFilters = { ...allFilters };
    updatedFilters.priceRange = newValue;
    // Establecer el nuevo valor de allFilters
    setAllFilters(updatedFilters);
  };
  //Filters Stars and Category
  const handleCheckbox = (event, type) => {
    const {
      target: { checked, name },
    } = event;
    const [key, group] = name.split("_");

    // Hacer una copia del objeto de filtros
    const newFilters =
      type === "checkbox" ? { ...filters } : { ...filtersStarts };
    //Hacer una copia del arreglo de elementos del grupo
    const newItems = [...newFilters[group].items];
    // // Modificar el objeto específico en la copia
    newItems[key] = { ...newItems[key], checked };

    if ((parseInt(key) === 0) & (checked === true)) {
      newItems.forEach((item, index) => {
        if (index !== parseInt(key)) {
          item.checked = false;
        }
      });
    } else {
      newItems[0].checked = false;
    }

    if (newItems.filter((item) => item.checked === true).length === 0) {
      newItems.forEach((item, index) => {
        if (index !== 0) {
          item.checked = false;
        } else {
          item.checked = true;
        }
      });
    }
    // Actualizar el estado con la copia modificada
    newFilters[group] = { ...newFilters[group], items: newItems };
    if (type === "checkbox") {
      setFilters(newFilters);
    } else {
      setFiltersStars(newFilters);
    }

    const values = newItems
      .filter((item) => item.checked !== false)
      .map((item) => item.value);

    const updatedFilters = { ...allFilters };
    updatedFilters[type] = values;
    // Establecer el nuevo valor de allFilters
    setAllFilters(updatedFilters);
  };

  const [showMore, setShowMore] = useState({});
  const handleShowMore = (group) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [group]: !prevShowMore[group],
    }));
  };
  const { languageData } = useContext(LanguageContext);

  const handleClickReset = () => {
    const newFilterStart = {
      ...filterStart,
      stars: { items: [{ ...filterStart.stars.items[0], checked: true }] },
    };
    setFilters(getFilters(tourData));
    setFiltersStars(newFilterStart);
    setRangeValue([3500, 10000]);
    setRange(["", ""]);
    setAllFilters({
      checkbox: [],
      stars: [],
      priceRange: [],
    });

    setAuxTourData(orderData(getFilterTours(tourData, allFilters), orderTour));
    setChangeTours(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <>
      <div className="border border-[#ebebeb] rounded-lg shadow-3xl h-auto w-full mt-[25px] p-[24px]">
        <div className="flex justify-between mb-[10px]">
          <h7 className="flex align-center m-b text-fs-16">
            {languageData.titlesFilterTour.filterResults}
          </h7>
          <button
            className="text-bl-100 m-b text-fs-12"
            onClick={handleClickReset}
          >
            {languageData.titlesFilterTour.reset}
          </button>
        </div>

        <div className="w-full border-t border-[#ebebeb]"></div>

        {/* ACCORDION RANGE PRICE */}
        {/* <Accordion defaultExpanded className="cont-accordion-filter-tour">
          <AccordionSummary
            className="accordion-summary-filter-tour"
            expandIcon={<ExpandMoreIcon />}
          >
            <h6 className="title-filters-accordion-tour">
              {languageData.titlesFilterTour.priceRange}
            </h6>
          </AccordionSummary>

          <AccordionDetails>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column gap-2">
                <span className="text-grey-filter-tour-s">
                  {languageData.titlesFilterTour.minimum}
                </span>
                <span className="text-grey-filter-tour-s">
                  ${rangeValue[0].toLocaleString()}
                </span>
              </div>

              <div className="d-flex flex-column gap-2">
                <span className="text-grey-filter-tour-s">
                  {languageData.titlesFilterTour.maximum}
                </span>
                <span className="text-grey-filter-tour-s">
                  ${rangeValue[1].toLocaleString()}
                </span>
              </div>
            </div>

            <Box sx={{ width: "100%" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={rangeValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                className="slider-filter-range-price"
                min={0}
                max={40000}
              />
            </Box>

            <div className="d-flex justify-content-between">
              <div className="min-and-max-cont">
                <span className="text-grey-filter-tour-s">
                  {languageData.SearchBox.tabTour.from}
                </span>
                <input
                  type="text"
                  className="cont-number-range-price"
                  placeholder={languageData.SearchBox.tabTour.from}
                  value={range[0]}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                />
              </div>
              <div className="min-and-max-cont">
                <span className="text-grey-filter-tour-s">
                  {languageData.titlesFilterTour.to}
                </span>
                <input
                  type="text"
                  className="cont-number-range-price"
                  placeholder={languageData.titlesFilterTour.to}
                  value={range[1]}
                  onChange={(e) => handleInputChange(1, e.target.value)}
                />
              </div>
            </div>
          </AccordionDetails>

          <AccordionActions>
            <button
              className="btn-apply-range-price hover:bg-bl-100 hover:!text-white"
              onClick={handleApplyClick}
            >
              {languageData.containerFilterHotel.button}
            </button>
          </AccordionActions>
        </Accordion> */}

        <Disclosure defaultOpen={isOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <h6 className="m-b text-fs-14">
                  {languageData.titlesFilterTour.priceRange}
                </h6>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
                {/* <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-gry-100 m-m text-fs-12">
                      {languageData.titlesFilterTour.minimum}
                    </span>
                    <span className="text-gry-100 m-m text-fs-12">
                      ${rangeValue[0].toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-gry-100 m-m text-fs-12">
                      {languageData.titlesFilterTour.maximum}
                    </span>
                    <span className="text-gry-100 m-m text-fs-12">
                      ${rangeValue[1].toLocaleString()}
                    </span>
                  </div>
                </div> */}

                {/* PENDIENTE MUI SLIDER */}
                {/* <div className="w-full">
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={rangeValue}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    className="!text-bl-100"
                    min={0}
                    max={40000}
                  />
                </div> */}

                {/*END PENDIENTE MUI SLIDER */}

                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-fs-12 text-gry-100 m-m">
                      {languageData.SearchBox.tabTour.from}
                    </span>
                    <input
                      type="text"
                      className="border border-gry-70 rounded text-fs-13 py-[6px] px-[15px] w-[100px]"
                      placeholder={languageData.SearchBox.tabTour.from}
                      value={range[0]}
                      onChange={(e) => handleInputChange(0, e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-fs-12 text-gry-100 m-m">
                      {languageData.titlesFilterTour.to}
                    </span>
                    <input
                      type="text"
                      className="border border-gry-70 rounded text-fs-13 py-[6px] px-[15px] w-[100px]"
                      placeholder={languageData.titlesFilterTour.to}
                      value={range[1]}
                      onChange={(e) => handleInputChange(1, e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-end">
                  <button
                    className="px-[25px] py-[9px] rounded-full m-b text-bl-100 border border-bl-100 mt-[8px] hover:bg-bl-100 hover:!text-white"
                    onClick={handleApplyClick}
                  >
                    {languageData.containerFilterHotel.button}
                  </button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/*END ACCORDION RANGE PRICE */}

        <div className="w-full border-t border-[#ebebeb]"></div>

        <>
          {Object.keys(filters).map((filterGroup, index) => {
            const filterItems = filters[filterGroup];
            const maxItems = showMore[filterGroup]
              ? filterItems.items.length
              : filterItems.length;
            return (
              // ACCORDION CATEGORY
              <>
                {/* <Accordion
                  defaultExpanded
                  disableGutters
                  className="cont-accordion-filter-tour"
                  key={`${filterGroup}-${index}`}
                >
                  <AccordionSummary
                    className="accordion-summary-filter-tour"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}a-content`}
                    id={`panel${index + 1}a-header`}
                  >
                    <h6 className="title-filters-accordion-tour">
                      {
                        languageData.titlesFilterTour[
                          filters[filterGroup].title
                        ]
                      }
                    </h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    {filterItems.items
                      .slice(0, maxItems)
                      .map((filterItem, index) => {
                        return (
                          <div className="d-flex gap-2 mb-1 ">
                            <input
                              id="all-category-a"
                              type="checkbox"
                              name={`${index}_${filterGroup}_${filterItem.value}`}
                              value={filterItem.value}
                              onChange={(event) =>
                                handleCheckbox(event, "checkbox")
                              }
                              checked={filterItem.checked}
                              className="filters-tour-checkbox"
                            />
                            <label
                              for="all-category-a"
                              className="text-black-filter-s cont-checkbox-cursor"
                            >
                              {languageData.optionsFilterTour[filterItem.label]
                                ? languageData.optionsFilterTour[
                                    filterItem.label
                                  ]
                                : filterItem.label}
                            </label>
                          </div>
                        );
                      })}

                    {filterItems.items.length > 4 && (
                      <Accordion className="cont-accordion-filter-tour">
                        <AccordionSummary
                          // expandIcon={<ExpandMoreIcon />}
                          className="cont-accordion-filter-tour-see-more"
                        >
                          <h7>
                            <u
                              className="text-blue-filter-tour-s"
                              onClick={() => handleShowMore(filterGroup)}
                            >
                              {showMore[filterGroup] ? (
                                <>
                                  {languageData.containerFilterTour.showLess}{" "}
                                  
                                </>
                              ) : (
                                <>
                                  {languageData.containerFilterTour.showMore}{" "}
                                  
                                </>
                              )}
                            </u>
                          </h7>
                        </AccordionSummary>
                      </Accordion>
                    )}
                  </AccordionDetails>
                </Accordion> */}
                <Disclosure defaultOpen={isOpen}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                        <h6 className="m-b text-fs-14">
                          {
                            languageData.titlesFilterTour[
                              filters[filterGroup].title
                            ]
                          }
                        </h6>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5`}
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
                        {filterItems.items
                          .slice(0, maxItems)
                          .map((filterItem, index) => {
                            return (
                              <div className="flex gap-2 mb-1 ">
                                <input
                                  id="all-category-a"
                                  type="checkbox"
                                  name={`${index}_${filterGroup}_${filterItem.value}`}
                                  value={filterItem.value}
                                  onChange={(event) =>
                                    handleCheckbox(event, "checkbox")
                                  }
                                  checked={filterItem.checked}
                                  className="h-[17px] w-[17px] cursor-pointer"
                                />
                                <label
                                  for="all-category-a"
                                  className="cursor-pointer m-m text-fs-15 text-black"
                                >
                                  {languageData.optionsFilterTour[
                                    filterItem.label
                                  ]
                                    ? languageData.optionsFilterTour[
                                        filterItem.label
                                      ]
                                    : filterItem.label}
                                </label>
                              </div>
                            );
                          })}
                        <Disclosure defaultOpen={!isOpen}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                <h6>
                                  <u
                                    className="text-bl-100 text-fs-14 m-b"
                                    onClick={() => handleShowMore(filterGroup)}
                                  >
                                    {showMore[filterGroup] ? (
                                      <>
                                        {
                                          languageData.containerFilterTour
                                            .showLess
                                        }{" "}
                                        {/* <ArrowUpIcon /> */}
                                      </>
                                    ) : (
                                      <>
                                        {
                                          languageData.containerFilterTour
                                            .showMore
                                        }{" "}
                                        {/* <ArrowIcon /> */}
                                      </>
                                    )}
                                  </u>
                                </h6>
                                <ChevronUpIcon
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-bl-100`}
                                  onClick={() => handleShowMore(filterGroup)}
                                />
                              </Disclosure.Button>
                            </>
                          )}
                        </Disclosure>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </>
              // END ACCORDION CATEGORY
            );
          })}
        </>

        <div className="w-full border-t border-[#ebebeb]"></div>

        {/* ACCORDION STARS */}

        {/* <Accordion defaultExpanded className="cont-accordion-filter-tour">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="accordion-summary-filter-tour"
          >
            <h6 className="title-filters-accordion-tour">
              {languageData.titlesFilterHotel.Star}
            </h6>
          </AccordionSummary>
          <AccordionDetails>
            <div className="d-flex gap-4">
              <div
                className={
                  auxStart > 2
                    ? "cont-stars-filter-tour-two"
                    : "cont-stars-filter-tour"
                }
              >
                {filtersStarts.stars.items.length > 0 &&
                  filtersStarts.stars.items.map((values, key) => (
                    <div
                      key={key}
                      className={
                        key === 0 || key === 5
                          ? "d-flex gap-2"
                          : "d-flex gap-1 mb-1"
                      }
                    >
                      <input
                        id="all-stars-a"
                        type="checkbox"
                        name={`${key}_stars_${values.value}`}
                        value={values.value}
                        onChange={(event) => handleCheckbox(event, "stars")}
                        checked={values.checked}
                        className="filters-tour-checkbox"
                      />
                      <label
                        for="all-stars-a"
                        className={
                          key > 0
                            ? "star-center-gap cont-checkbox-cursor"
                            : "text-black-filter-s cont-checkbox-cursor"
                        }
                      >
                        {key > 0 ? (
                          [...Array(values.value)].map((value, index) => (
                            <Image src={IconStar} alt="IconStar" key={index} />
                          ))
                        ) : (
                          <span>
                            {languageData.optionsFilterHotel.allStart}
                          </span>
                        )}
                      </label>
                      {auxStart < 2 && key > 2 && setAuxStart(3)}
                    </div>
                  ))}
              </div>
            </div>
          </AccordionDetails>
        </Accordion> */}

        <Disclosure defaultOpen={isOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <h6 className="text-fs-14 m-b">
                  {languageData.titlesFilterHotel.Star}
                </h6>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
                <div className="flex gap-4">
                  <div
                    className={
                      auxStart > 2
                        ? "flex flex-col gap-[7px]"
                        : ""
                    }
                  >
                    {filtersStarts.stars.items.length > 0 &&
                      filtersStarts.stars.items.map((values, key) => (
                        <div
                          key={key}
                          className={
                            key === 0 || key === 5
                              ? "flex gap-2"
                              : "flex gap-1 mb-1"
                          }
                        >
                          <input
                            id="all-stars-a"
                            type="checkbox"
                            name={`${key}_stars_${values.value}`}
                            value={values.value}
                            onChange={(event) => handleCheckbox(event, "stars")}
                            checked={values.checked}
                            className="h-[17px] w-[17px] cursor-pointer"
                          />
                          <label
                            for="all-stars-a"
                            className={
                              key > 0
                                ? "flex items-center gap-[4px]"
                                : "text-fs-15 m-m cursor-pointer"
                            }
                          >
                            {key > 0 ? (
                              [...Array(values.value)].map((value, index) => (
                                <Image
                                  src={IconStar}
                                  alt="IconStar"
                                  key={index}
                                />
                              ))
                            ) : (
                              <span>
                                {languageData.optionsFilterHotel.allStart}
                              </span>
                            )}
                          </label>
                          {auxStart < 2 && key > 2 && setAuxStart(3)}
                        </div>
                      ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="w-full border-t border-[#ebebeb]"></div>
      </div>
    </>
  );
}
