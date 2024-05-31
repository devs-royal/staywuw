import Image from "next/image";
import React, { useContext } from "react";
import DialogActions from "@mui/material/DialogActions";
import { Button, Dialog, Fab, Slide } from "@mui/material";

import FiltersHotels from "../../utils/FiltersHotels";
import "../../../assets/styles/mobile/DialogSearchHotel.css";
import LanguageContext from "../../../../language/LanguageContext";

import CloseIcon from "../../../assets/icons/hotel/modal/close_active.svg";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DialogFilterHotel(props) {
  const { open, onClose } = props;
  const { languageData } = useContext(LanguageContext);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description container"
    >
      <div className="m-component-info-room">
        <Button className="d-flex width100 justify-content-end">
          <Image src={CloseIcon} alt="CloseIcon" className="close-icon" onClick={onClose} />
        </Button>

        <FiltersHotels />

        <DialogActions className="button-calendar-apply d-flex flex-column justify-content-center">
          <div className="m-line-search-hotel mb-3" />

          <Fab
            variant="extended"
            className="button-search-page-search"
            onClick={onClose}
          >
            {languageData.SearchBox.tabHotel.roomBox.buttonApply}
          </Fab>
        </DialogActions>
      </div>
    </Dialog>
  );
}
