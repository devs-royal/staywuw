import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Button, Dialog, Slide } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";

import LanguageContext from "../../../../language/LanguageContext";
import CalendarMobile from "../../../../config/Mobile/CalendarConfig";
import { ParseDateRangeDate } from "../../../../payment/config/totalOccupants";
import { toggleIOSScroll } from "../../../../config/Ios/DetectIsIos";

import CloseIcon from "../../../../assets/icons/hotel/modal/close.svg";
import DateRangeIcon from "../../../../assets/icons/utils/searchBox/calendar-autocomplete.svg";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OpenDialogCalendar(props) {
  const { open, onClose, onDateChange, validFirstDay, validSecondDay } = props;
  const { languageData } = useContext(LanguageContext);

  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  useEffect(() => {
    const storedDates = localStorage.getItem("selectedDates");
    if (storedDates) {
      const selectedDates = JSON.parse(storedDates);
      setSelectedDates(selectedDates);
    }
  }, []);

  const setNewRangeDate = () => {
    if (selectedDates) {
      selectedDates.forEach((date) => {
        if (typeof date === "object") {
          localStorage.setItem(
            "selectedDates",
            JSON.stringify(date.toISOString())
          );
        }
      });
      onDateChange(selectedDates);
    }
    onClose();
    toggleIOSScroll(false);
  };

  // IOS
  useEffect(() => {
    toggleIOSScroll(true);
  }, [open]);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description container"
    >
      <div className="m-component-info dialog-container">
        <div className="m-calendar-input ps-4 pe-4">
          <Button className="d-flex width100 justify-content-end">
            <Image className="close-icon" onClick={onClose} src={CloseIcon} alt="CloseIcon"/>
          </Button>

          <div className="m-input-search-hotel d-flex gap-1 align-items-center mt-3 mb-3">
            <Image className="icon-room-search" src={DateRangeIcon} alt="DateRangeIcon" />
            <span
              className={
                validFirstDay && validSecondDay
                  ? "text-input-search-hotel"
                  : "text-input-search-hotel-placeHolder"
              }
            >
              {validFirstDay && validSecondDay ? (
                // PARSE DATE
                <ParseDateRangeDate
                  validFirstDay={validFirstDay}
                  validSecondDay={validSecondDay}
                />
              ) : (
                languageData.SearchBox.tabHotel.dateText
              )}
            </span>
          </div>
        </div>

        <div className="container-calendar-m">
          <CalendarMobile onDateChange={handleDateChange} />
        </div>

        <DialogActions className="button-calendar-apply d-flex flex-column justify-content-center">
          <div className="m-line-search-hotel mb-3"></div>
          <button
            variant="extended"
            className={`button-search-page-search ${
              selectedDates.length <= 1 ? "disabled" : ""
            }`}
            onClick={setNewRangeDate}
            disabled={selectedDates.length <= 1}
          >
            {languageData.SearchBox.tabHotel.roomBox.buttonApply}
          </button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
