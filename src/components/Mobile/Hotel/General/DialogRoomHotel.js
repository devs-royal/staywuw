import Image from "next/image";
import { Dialog, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";

import RoomMenu from "../../../../hooks/RoomMenu";

import CloseIcon from "../../../../assets/icons/hotel/modal/close_active.svg";
import BedSharpIcon from "../../../../assets/icons/utils/searchBox/room-autocomplete.svg";
import Person2OutlinedIcon from "../../../../assets/icons/utils/searchBox/person-autocomplete.svg";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MobileRoomHotel(props) {
  const { OnApply, open, onClose, totalPeopleData, isModal } = props;

  const [totalRooms, setTotalRooms] = useState(1);
  const [totalPeople, setTotalPeople] = useState(2);

  useEffect(() => {
    const roomData = JSON.parse(localStorage.getItem("roomData"));
    const roomDataModal = JSON.parse(localStorage.getItem("roomDataSecondary"));
    const peopleData = localStorage.getItem("totalPeople");
    const peopleDataModal = localStorage.getItem("totalPeopleSecondary");

    if (isModal) {
      if (peopleDataModal) {
        setTotalPeople(peopleDataModal);
      } else {
        if (peopleData) {
          setTotalPeople(peopleData);
        }
      }

      if (roomDataModal) {
        setTotalRooms(roomDataModal.length);
      } else {
        if (roomData) {
          setTotalRooms(roomData.length);
        }
      }
    } else {
      if (roomData) {
        setTotalRooms(roomData.length);
      }
      if (peopleData) {
        setTotalPeople(peopleData);
      }
    }
  }, []);

  const handleRoomData = (roomData) => {
    OnApply(roomData);
  };

  const handlePeopleData = (peopleData) => {
    if (isModal) {
      totalPeopleData(peopleData);
    }
    setTotalPeople(peopleData);
  };

  const closeDialog = (closeDialog) => {
    onClose(closeDialog);
  };

  const closeDialogIcon = () => {
    onClose(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="m-component-info-room">
        <div className="m-container-dialog-room ps-3 pe-3">
          <div className="width100 d-flex justify-content-end">
            <button className="p-0 align-items-end bg-transparent border-0">
              <Image src={CloseIcon} alt="Close Icon" className="close-icon" onClick={closeDialogIcon} />
            </button>
          </div>

          <div className="m-input-search-hotel d-flex">
            <span className="width4" style={{ padding: "0 10px" }}>
              <Image src={BedSharpIcon} alt="Bed Sharp Icon" className="icon-room-search" />
              <span className="room-capacity">{totalRooms}</span>
            </span>

            <span
              className="person-search d-flex align-items-center "
              style={{ padding: "0 10px" }}
            >
              <span style={{ padding: "0 10px" }}>|</span>
              <Image src={Person2OutlinedIcon} alt="Person 2 Outlined Icon" width={16} height={16} className="icon-person-search" />
              <span className="room-capacity">{totalPeople}</span>
            </span>
          </div>
        </div>

        <RoomMenu
          people={handlePeopleData}
          roomsTotal={setTotalRooms}
          onClose={closeDialog}
          showRoom={handleRoomData}
          isModal={isModal}
        ></RoomMenu>
      </div>
    </Dialog>
  );
}
