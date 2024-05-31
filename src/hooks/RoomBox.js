import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState, useEffect } from "react";

import RoomMenu from "../hooks/RoomMenu";

import BedSharpIcon from "../assets/icons/utils/searchBox/room-autocomplete.svg";
import Person2OutlinedIcon from "../assets/icons/utils/searchBox/person-autocomplete.svg";

function Room({ OnApply }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalRooms, setTotalRooms] = useState(1);
  const [totalPeople, setTotalPeople] = useState(
    typeof window !== "undefined" ? localStorage.getItem("totalPeople") || 2 : 2
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

  return (
    <>
      <Dropdown show={showDropdown} onClose={() => setShowDropdown(false)}>
        <Dropdown.Toggle
          onClick={() => setShowDropdown(!showDropdown)}
          className="dropdown-room"
        >
          <span style={{ padding: "0 10px" }}>
            <Image className="icon-room-search" src={BedSharpIcon} alt="BedSharpIcon" />
            <span className="room-capacity">{totalRooms}</span>
          </span>{" "}
          <span style={{ padding: "0 10px" }}>|</span>
          <span className="person-search" style={{ padding: "0 10px" }}>
            <Image className="icon-person-search" src={Person2OutlinedIcon} width={16} height={16} alt="Person2OutlinedIcon" />
            <span className="room-capacity">{totalPeople}</span>
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-container">
          <div className="equilateral-triangle-bottom"></div>
          <RoomMenu
            showRoom={handleRoomData}
            showDrop={setShowDropdown}
            people={setTotalPeople}
            roomsTotal={setTotalRooms}
          />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Room;
