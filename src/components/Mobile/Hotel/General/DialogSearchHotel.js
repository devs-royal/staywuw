import Image from "next/image";
import { Dialog, Slide } from "@mui/material";
import React, { useState, lazy, useEffect, Suspense } from "react";

import { toggleIOSScroll } from "../../../../config/Ios/DetectIsIos";

import "../../../../assets/styles/mobile/DialogSearchHotel.css";
import CloseIcon from "../../../../assets/icons/hotel/modal/close_active.svg";
import RoomOutlinedIcon from "../../../../assets/icons/utils/searchBox/location-autocomplete.svg";

const SearchHotel = lazy(() => import("../../../Search/SearchHotel"));

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchHotelMobile(props) {
  const { open, onClose, onHotelChange } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    onHotelChange(selectedOption);
  }, [selectedOption]);

  // CLOSE DIALOG
  const closeDialog = () => {
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
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="m-component-info-search dialog-container">
        <div className="height100 ps-4 pe-4">
          <div className="d-flex justify-content-end">
            <button className="p-0 align-items-end bg-transparent border-0">
              <Image src={CloseIcon} alt="Close Icon" className="close-icon" onClick={onClose} />
            </button>
          </div>

          <div className="m-input-search-hotel d-flex align-items-center justify-content-center">
            <Image src={RoomOutlinedIcon} alt="Room Outlined Icon" className="icon-location-home-dialog" />
            <Suspense fallback={null}>
              <SearchHotel
                closeDialog={closeDialog}
                onSelectSearch={setSelectedOption}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
