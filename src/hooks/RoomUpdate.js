import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import RoomMenu from "../hooks/RoomMenu";
import LanguageContext from "../language/LanguageContext";
import { useIsMobile } from "../config/Mobile/isMobile";

import BedSharpIcon from "../assets/icons/utils/searchBox/room-active.svg";
import Person2OutlinedIcon from "../assets/icons/utils/searchBox/adult-active.svg";

function RoomUpdate({ OnApply }) {
  const isMobile = useIsMobile();
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalRooms, setTotalRooms] = useState(1);
  const [totalChildren, setTotalChildren] = useState(
    localStorage.getItem("childrenHotel") || 0
  );

  const [totalAdults, setTotalAdults] = useState(
    localStorage.getItem("adultsHotel") || 2
  );

  useEffect(() => {
    const roomData = JSON.parse(localStorage.getItem("roomData"));

    if (roomData) {
      setTotalRooms(roomData.length);
    }
  }, []);

  const handleRoomData = (roomData) => {
    OnApply(roomData);
  };

  let totalPeople = 0;
  if (isMobile) {
    totalPeople = totalAdults + totalChildren;
  }

  const { languageData } = useContext(LanguageContext);

  return (
    <div>
      <Dropdown show={showDropdown} onClose={() => setShowDropdown(false)}>
        <Dropdown.Toggle
          onClick={() => setShowDropdown(!showDropdown)}
          className={isMobile ? "m-dropdown-room" : "dropdown-room"}
        >
          <span className="line-divided" style={{ padding: "0 10px" }}>
            |
          </span>
          <span className="styles-rooms-update" style={{ padding: "0 10px" }}>
            <Image src={Person2OutlinedIcon} className="margin-right-icon" alt="Person2OutlinedIcon"/>
            {isMobile ? (
              totalPeople
            ) : (
              <>
                {totalAdults}{" "}
                {totalAdults > 1
                  ? languageData.modalHotel.adults
                  : languageData.modalHotel.adult}{" "}
                {totalChildren >= 0
                  ? totalChildren +
                    " " +
                    (totalChildren === 1
                      ? languageData.modalHotel.child
                      : languageData.modalHotel.children)
                  : "0 " + languageData.modalHotel.children}
              </>
            )}
          </span>{" "}
          <span className="line-divided" style={{ padding: "0 10px" }}>
            |
          </span>
          <span className="styles-rooms-update" style={{ padding: "0 10px" }}>
            <Image src={BedSharpIcon} className="margin-right-icon" alt="BedSharpIcon" /> {totalRooms}{" "}
            {isMobile
              ? ""
              : totalRooms > 1
              ? languageData.modalHotel.rooms
              : languageData.modalHotel.room}
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-container">
          <div className="equilateral-triangle-bottom"></div>
          <RoomMenu
            showRoom={handleRoomData}
            showDrop={setShowDropdown}
            roomsTotal={setTotalRooms}
            children={setTotalChildren}
            adults={setTotalAdults}
            isModal={true}
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default RoomUpdate;
