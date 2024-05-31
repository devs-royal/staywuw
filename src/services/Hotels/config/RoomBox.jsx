"use client"
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect, useContext, useRef } from "react";

import RoomMenu from "./RoomMenu";
import LanguageContext from "../../../language/LanguageContext";

function Room({listing=false ,OnApply }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalRooms, setTotalRooms] = useState(1);
  const [totalPeople, setTotalPeople] = useState({ adults: 2, children: 0 });

  const { languageData } = useContext(LanguageContext);
  useEffect(() => {
    const roomData = JSON.parse(localStorage.getItem("roomData"));

    if (roomData) {
      setTotalRooms(roomData.length);
    }
  }, []);

  const handleRoomData = (roomData) => {
    OnApply(roomData);
  };

  const roomPlural = (room) => {
    if (room == 1) {
      return "room";
    } else {
      return "rooms";
    }
  };

  const adultPlural = (adult) => {
    if (adult == 1) {
      return "textAdult";
    } else {
      return "textAdults";
    }
  };

  const childrenPlural = (children) => {
    if (children == 1) {
      return "textChild";
    } else {
      return "textChildren";
    }
  };

    // FUNCTION TO CLOSE MENU
    const ref = useRef(null);

    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
  
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    // END FUNCTION TO CLOSE MENU

  return (
    <div ref={ref} className={` border-2 border-gray-200 rounded py-2.5 px-4 relative w-full  h-[54px] ${listing === false && 'lg:w-[296px]'} `}>
      <Dropdown style={{minWidth:"293px"}} show={showDropdown} onClose={() => setShowDropdown(false)}>
        <Dropdown.Toggle
          onClick={() => setShowDropdown(!showDropdown)}
          className="!flex border-0 bg-transparent p-0"
        >
          <span className="flex items-center gap-2 border-r-2 border-gry-70 pr-3.5">
            <img
              className="h-4 w-4 invert"
              src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon room`}
            />
            <div className="flex flex-col items-start">
              <span className="text-fs-10 m-s-b text-gry-70">
                {languageData.SearchBox.tabHotel.rooms}
              </span>

              <span className="m-s-b text-fs-12 text-gry-100">
                {totalRooms} {languageData.modalHotel[roomPlural(totalRooms)]}
              </span>
            </div>
          </span>{" "}
          <span className="flex items-center gap-2 pl-3.5">
            {/* <Person2OutlinedIcon className="icon-person-search" /> */}
            <img
              className="h-3.5 w-3.5 invert"
              src="https://sandboxmexico.com/assets/icons/adult/adult-b.svg"
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon adult`}
            />
            <div className="flex flex-col items-start">
              <span className="text-fs-10 m-s-b text-gry-70">
                {languageData.SearchBox.tabTour.people}
              </span>

              <span className="m-s-b text-fs-12 text-gry-100">
                {`${totalPeople.adults} ${
                  languageData.itinerary.tourItinerary[
                    adultPlural(totalPeople.adults)
                  ]
                }`}{" "}
                {`${totalPeople.children} ${
                  languageData.itinerary.tourItinerary[
                    childrenPlural(totalPeople.children)
                  ]
                }`}
              </span>
            </div>
          </span>
        </Dropdown.Toggle>

        {showDropdown === true && (
          <Dropdown.Menu className="border-0 w-11/12 z-[3] p-0">
            {/* <div className="equilateral-triangle-bottom"></div> */}
            <RoomMenu
              showRoom={handleRoomData}
              showDrop={setShowDropdown}
              people={setTotalPeople}
              roomsTotal={setTotalRooms}
              onClose={setShowDropdown}
            />
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
}

export default Room;
