import React, { Suspense, lazy, useContext, useEffect, useState } from "react";

// import { SearchTourDialog } from "./SearchTourDialog";
import LanguageContext from "../../../../language/LanguageContext";
import { CalendarTourDialog } from "./CalendarTourDialog";

const SearchTourDialog = lazy(() => import("../General/SearchTourDialog"));

export function SearchTourMobile(props) {
  const { onSelectTour } = props;
  const { languageData } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const searchTour = JSON.parse(localStorage.getItem("searchTour"));
    if (searchTour) {
      setSelectedOption(searchTour.label);
    }
  }, []);

  const tourSelected = (value) => {
    if (value) {
      onSelectTour(value);
      setSelectedOption(value.label);
    }
  };
  return (
    <>
      <div className="input-search-hotel" onClick={() => setOpen(true)}>
        <span
          className={`ms-3 ${
            selectedOption
              ? "text-input-search-hotel"
              : "text-input-search-hotel-placeHolder"
          }`}
        >
          {selectedOption
            ? selectedOption
            : languageData.SearchBox.tabTour.destinationText}
          {/* {languageData.SearchBox.tabTour.destinationText} */}
        </span>
      </div>
      {open === true && (
        <Suspense fallback={null}>
          {" "}
          <SearchTourDialog
            open={open}
            onSelectTour={tourSelected}
            closeDialog={() => setOpen(!open)}
          />
        </Suspense>
      )}
    </>
  );
}

export function CalendarTourMobile(props) {
  // const { onDateChange } = props;
  const { languageData } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="input-search-hotel" onClick={() => setOpen(true)}>
        <span className={`ms-3 text-input-search-hotel-placeHolder`}>
          {languageData.SearchBox.tabTransportation.autoCompleteArrival}
        </span>
      </div>
      {open === true && <CalendarTourDialog open={open} closeDialog={()=>setOpen(!open)}/>}
    </>
  );
}
