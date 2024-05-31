import React, { useState, useContext, useEffect } from "react";
// import { TextField } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  //   FormGroup,
  //   FormControlLabel,
  //   Checkbox,
  Button,
  Slider,
  Box,
} from "@mui/material";

// import LanguageContext from "../../../language/LanguageContext";

// import { ReactComponent as ArrowIcon } from "../../../assets/icons/tour/listing/down-arrow.svg"
// import { ReactComponent as ArrowUpIcon } from "../../../assets/icons/tour/listing/up-arrow.svg";
import IconStar from "../../../../assets/icons/utils/others/Star-filter.svg";
import { getFilterTours } from "./allFilters";
// import { getFilterTours } from "../Services/allFilters";
// import { orderData } from "../../context/tourUtils";
import { filterStart, getFilters } from "./filtersTours";
import { orderData } from "../../context/orderData";
import LanguageContext from "@/language/LanguageContext";
import Image from "next/image";

// import { orderData } from "../../Context/tourUtils";

// export default function FilterTour({ updateURL }) {
export default function FilterTour(props) {
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
      <div className="cont-filter-tour">
        <div className="d-flex justify-content-between cont-btn-reset-result">
          <h7 className="text-black-filter d-flex align-items-center">
            {languageData.titlesFilterTour.filterResults}
          </h7>
          <Button className="text-blue-filter-tour" onClick={handleClickReset}>
            {languageData.titlesFilterTour.reset}
          </Button>
        </div>

        <div className="line-filters-tour"></div>

        {/* ACCORDION RANGE PRICE */}
        <Accordion defaultExpanded className="cont-accordion-filter-tour">
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
            <Button
              className="btn-apply-range-price hover:bg-bl-100 hover:!text-white"
              onClick={handleApplyClick}
            >
              {languageData.containerFilterHotel.button}
            </Button>
          </AccordionActions>
        </Accordion>

        <div className="line-filters-tour"></div>

        <>
          {Object.keys(filters).map((filterGroup, index) => {
            const filterItems = filters[filterGroup];
            const maxItems = showMore[filterGroup]
              ? filterItems.items.length
              : filterItems.length;
            return (
              <Accordion
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
                    {languageData.titlesFilterTour[filters[filterGroup].title]}
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
                              ? languageData.optionsFilterTour[filterItem.label]
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
                                {/* <ArrowUpIcon /> */}
                              </>
                            ) : (
                              <>
                                {languageData.containerFilterTour.showMore}{" "}
                                {/* <ArrowIcon /> */}
                              </>
                            )}
                          </u>
                        </h7>
                      </AccordionSummary>
                    </Accordion>
                  )}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </>

        <div className="line-filters-tour"></div>

        {/* ACCORDION STARS */}

        <Accordion defaultExpanded className="cont-accordion-filter-tour">
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
            {/* <div className='d-flex gap-4'>
                        <div className='cont-stars-filter-tour'>

                            <div className='d-flex gap-1'>
                                <input id='all-stars-a' type='checkbox' />
                                <label for="all-stars-a" className='text-black-filter-s cont-checkbox-cursor'>Todos</label>
                            </div>

                            <div className='d-flex gap-1 mb-1'>
                                <input type='checkbox' id='five-stars' />
                                <label for="five-stars" className='star-center-gap cont-checkbox-cursor'>{[...Array(5)].map((value, index) => (
                                    <IconStar key={index} />
                                ))}</label>
                            </div>

                            <div className='d-flex gap-1 mb-1'>
                                <input type='checkbox' id='four-stars' />
                                <label for="four-stars" className='star-center-gap cont-checkbox-cursor'>{[...Array(4)].map((value, index) => (
                                    <IconStar key={index} />
                                ))}</label>
                            </div>
                        </div>

                        <div className='cont-stars-filter-tour-two'>
                            <div className='d-flex gap-1 mb-1'>
                                <input type='checkbox' id="three-stars" />
                                <label for="three-stars" className='star-center-gap cont-checkbox-cursor'>{[...Array(3)].map((value, index) => (
                                    <IconStar key={index} />
                                ))}</label>
                            </div>

                            <div className='d-flex gap-1 mb-1'>
                                <input type='checkbox' id='two-stars' />
                                <label for="two-stars" className='star-center-gap cont-checkbox-cursor'>{[...Array(2)].map((value, index) => (
                                    <IconStar key={index} />
                                ))}</label>
                            </div>

                            <div className='d-flex gap-1'>
                                <input type='checkbox' id='one-star' />
                                <label for="one-star" className='star-center-gap cont-checkbox-cursor'><IconStar /></label>
                            </div>
                        </div>
                        </div> */}
          </AccordionDetails>
        </Accordion>

        <div className="line-filters-tour"></div>
      </div>
    </>
  );
}
