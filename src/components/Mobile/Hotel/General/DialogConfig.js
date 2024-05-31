import Image from "next/image";
import React, { Suspense, lazy, useContext, useEffect, useState } from "react";

import LanguageContext from "../../../../language/LanguageContext";
import { ParseDateRangeDate } from "../../../../payment/config/totalOccupants";

import BedSharpIconMH from "../../../../assets/icons/utils/searchBox/room-active.svg";
import BedSharpIcon from "../../../../assets/icons/utils/searchBox/room-autocomplete.svg";
import Person2OutlinedIconMH from "../../../../assets/icons/utils/searchBox/adult-active.svg";
import DateRangeIconModal from "../../../../assets/icons/utils/searchBox/calendar-active.svg";
import DateRangeIcon from "../../../../assets/icons/utils/searchBox/calendar-autocomplete.svg";
import RoomOutlinedIcon from "../../../../assets/icons/utils/searchBox/location-autocomplete.svg";
import Person2OutlinedIcon from "../../../../assets/icons/utils/searchBox/person-autocomplete.svg";

const MobileRoomHotel = lazy(() => import("./DialogRoomHotel"));
const SearchHotelMobile = lazy(() => import("./DialogSearchHotel"));
const OpenDialogCalendar = lazy(() => import("./DialogCalendar"));

export function DialogConfigSearchHotel({ destinationSelected }) {
  const { languageData } = useContext(LanguageContext);
  const [selectedOption, setSelectedOption] = useState(
    JSON.parse(localStorage.getItem("dataSearch"))
  );
  const [dialogOpen, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const setMobileHotel = (onHotelChange) => {
    setSelectedOption(onHotelChange);
    destinationSelected(onHotelChange);
  };

  return (
    <>
      <div
        className="input-search-hotel d-flex gap-1 align-items-center"
        onClick={handleOpenDialog}
      >
        <Image src={RoomOutlinedIcon} alt="Room Outlined Icon" className="m-icon-out-line" />
        <span
          className={
            selectedOption
              ? "text-input-search-hotel"
              : "text-input-search-hotel-placeHolder"
          }
        >
          {selectedOption
            ? selectedOption.label
            : languageData.SearchBox.tabHotel.textDestination}
        </span>
      </div>

      {dialogOpen && (
        <Suspense fallback={null}>
          <SearchHotelMobile
            open={dialogOpen}
            onClose={() => setOpenDialog(false)}
            onHotelChange={setMobileHotel}
          />
        </Suspense>
      )}
    </>
  );
}

// Dialog calendar
export function DialogCalendarConfig(props) {
  const {
    onDateChange,
    validFirstDay,
    validSecondDay,
    isModal = false,
  } = props;
  const { languageData } = useContext(LanguageContext);

  const [dialogCalendar, setDialogCalendar] = useState(false);
  const datesSelected = (dates) => {
    onDateChange(dates);
  };

  return (
    <>
      <div
        className={
          isModal
            ? "modal-input-dates-range d-flex gap-1 align-items-center"
            : "input-search-hotel d-flex gap-1 align-items-center"
        }
        onClick={() => {
          setDialogCalendar(true);
        }}
      >
        {isModal ? (
          <Image
            src={DateRangeIconModal}
            alt="Date RangeIcon Modal"
            className="m-icon-calendar"
          />
        ) : (
          <Image
            src={DateRangeIcon}
            alt="DateRangeIcon"
            className="icon-room-search"
          />
        )}

        <span
          className={
            validFirstDay && validSecondDay
              ? "text-input-search-hotel"
              : "text-input-search-hotel-placeHolder"
          }
        >
          {validFirstDay && validSecondDay ? (
            <ParseDateRangeDate
              validFirstDay={validFirstDay}
              validSecondDay={validSecondDay}
            />
          ) : (
            languageData.SearchBox.tabHotel.dateText
          )}
        </span>
      </div>

      {dialogCalendar && (
        <Suspense fallback={null}>
          <OpenDialogCalendar
            open={dialogCalendar}
            onClose={() => setDialogCalendar(false)}
            onDateChange={datesSelected}
            validFirstDay={validFirstDay}
            validSecondDay={validSecondDay}
          />
        </Suspense>
      )}
    </>
  );
}

export function DialogConfigRoomHotel(props) {
  const { OnApply } = props;
  const [openRoomDialog, setOpenRoomDialog] = useState(false);
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);
  const handledOpenRoomDialog = () => {
    setOpenRoomDialog(true);
  };

  const [totalPeople, setTotalPeople] = useState(2);
  useEffect(() => {
    const peoples = localStorage.getItem("totalPeople") || 2;
    setTotalPeople(peoples);
  });

  useEffect(() => {
    const totalRoom = JSON.parse(localStorage.getItem("roomData"));
    if (totalRoom) {
      setRoomData(totalRoom);
    }
  }, []);

  const applyDataRoom = (data) => {
    setRoomData(data);
    OnApply(data);
  };
  return (
    <>
      <div className="input-search-hotel" onClick={handledOpenRoomDialog}>
        <span className="input-room d-flex">
          <div className="d-flex gap-2 align-items-center">
            <Image
              src={BedSharpIcon}
              alt="BedSharp Icon MH"
              className="icon-room-search"
            />
            <span className="input-people">{roomData.length}</span>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <span style={{ padding: "0 10px" }}>|</span>
            <Image src={Person2OutlinedIcon} alt="Person2OutlinedIcon" width={16} height={16} className="icon-person-search" />
            <span className="input-people">{totalPeople}</span>
          </div>
        </span>
      </div>

      {openRoomDialog && (
        <Suspense fallback={null}>
          <MobileRoomHotel
            open={openRoomDialog}
            onClose={setOpenRoomDialog}
            OnApply={applyDataRoom}
            isModal={false}
          />
        </Suspense>
      )}
    </>
  );
}

export function DialogConfigRoomHotelModal({ applyRoomData }) {
  const [openRoomDialog, setOpenRoomDialog] = useState(false);
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);
  const handledOpenRoomDialog = () => {
    setOpenRoomDialog(true);
  };

  const [totalPeople, setTotalPeople] = useState(2);
  useEffect(() => {
    const peoples = localStorage.getItem("totalPeople") || 2;
    setTotalPeople(peoples);
  }, []);

  useEffect(() => {
    const totalRoom = JSON.parse(localStorage.getItem("roomData"));
    if (totalRoom) {
      setRoomData(totalRoom);
    }
  }, []);

  const updateRoomData = (data) => {
    setRoomData(data);
    applyRoomData(data);
  };

  return (
    <>
      <div
        className="d-flex m-container-total-people"
        onClick={handledOpenRoomDialog}
      >
        <span style={{ padding: "0 10px" }}>|</span>

        <div className="d-flex gap-2 align-items-center">
          <Image
            src={Person2OutlinedIconMH}
            alt="BedSharpIconMH"
            className="m-icon-total-people"
          />
          <span className="input-people">{totalPeople}</span>
        </div>

        <span style={{ padding: "0 10px" }}>|</span>

        <div className="d-flex gap-2 align-items-center">
          <Image
            src={BedSharpIconMH}
            alt="BedSharp Icon MH"
            className="m-icon-total-people"
          />
          <span className="input-people">{roomData.length}</span>
        </div>
      </div>

      {openRoomDialog && (
        <Suspense fallback={null}>
          <MobileRoomHotel
            open={openRoomDialog}
            onClose={setOpenRoomDialog}
            OnApply={updateRoomData}
            totalPeopleData={setTotalPeople}
            isModal={true}
          />
        </Suspense>
      )}
    </>
  );
}
