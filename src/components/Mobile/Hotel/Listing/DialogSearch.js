import Image from "next/image";
import { Tab, Tabs } from "react-bootstrap";
import { Dialog, Slide } from "@mui/material";
import React, { forwardRef, useContext, useState } from "react";

import MSearchHotel from "./MSearchHotel";
import LanguageContext from "../../../../language/LanguageContext";

import "../../../../assets/styles/mobile/SearchHotelDialog.css";
// import { useLocation } from "react-router-dom/cjs/react-router-dom";
import CloseIcon from "../../../../assets/icons/hotel/modal/close_active.svg";

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DialogSearch(props) {
  const { openDialog, closeDialog } = props;

  const { languageData } = useContext(LanguageContext);
  // const location = useLocation();

  const [currentActiveIcon, setCurrentActiveIcon] = useState("");

  // GetIconActivation(location.pathname, setCurrentActiveIcon);

  const handleTabChange = (eventKey) => {
    setCurrentActiveIcon(eventKey);
  };

  return (
    <Dialog
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="m-component-info-room d-flex flex-column">
        <div className="d-flex justify-content-end">
          <button
            onClick={() => closeDialog(false)}
            className="p-0 align-items-end bg-transparent border-0"
          >
            <Image src={CloseIcon} alt="CloseIcon" className="close-icon" />
          </button>
        </div>

        <div className="container-dialog-search">
          <Tabs
            activeKey={currentActiveIcon}
            onSelect={handleTabChange}
            id="tab-search-home"
          >
            <Tab
              eventKey=""
              title={languageData.SearchBox.tabHotel.hotel}
              className="search-content-home mobile-version"
            >
              <div className="title-search-dialog">
                {languageData.SearchBox.tabHotel.titleText}
              </div>
              
                <MSearchHotel closeDialog={closeDialog} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Dialog>
  );
}
