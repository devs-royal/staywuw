import Image from "next/image";
import React, { Suspense, lazy } from "react";
import { Dialog, Slide } from "@mui/material";

import CloseIcon from "../../../../assets/icons/hotel/modal/close_active.svg";
import RoomOutlinedIcon from "../../../../assets/icons/utils/searchBox/location-autocomplete.svg";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SearchTour = lazy(() => import("../../../Search/SearchTour"));

export default function SearchTourDialog(props) {
  const { open, closeDialog, onSelectTour } = props;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description container"
    >
      <div className="m-component-info-search dialog-container">
        <div className="height100 ps-4 pt-4 pe-4">
          <div className="d-flex width100 justify-content-end">
            <Image src={CloseIcon} alt="close icon" onClick={() => closeDialog(false)} />
          </div>

          {/* INPUT SEARCH TOUR */}
          <div className="m-input-search-hotel d-flex align-items-center justify-content-center">
            <Image src={RoomOutlinedIcon} alt="icon room" className="icon-location-home-dialog" />
            <Suspense fallback={null}>
              <SearchTour closeDialog={() => closeDialog(false)} onSelectTour={onSelectTour} />
            </Suspense>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
