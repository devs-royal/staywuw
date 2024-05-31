import Image from "next/image";
import OrderingHotel from "../Listing/OrderingHotel";
import { Button, Dialog, Slide } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import ListingHotelContext from "../../context/ListingHotelContext";

import "../../../assets/styles/mobile/DialogSearchHotel.css";
import CloseIcon from "../../../assets/icons/hotel/modal/close_active.svg";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DialogOrderHotel(props) {
  const { open, onClose } = props;
  const { orderHotel } = useContext(ListingHotelContext);

  // CLOSE DIALOG CHANGE ORDER
  const initialOrderHotel = useRef(orderHotel);
  useEffect(() => {
    if (open) {
      initialOrderHotel.current = orderHotel;
    }
  }, [open]);

  useEffect(() => {
    if (orderHotel !== initialOrderHotel.current) {
      onClose();
    }
  }, [orderHotel]);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description container"
    >
      <div className="m-component-info-room">
        <Button className="d-flex width100 justify-content-end">
          <Image src={CloseIcon} alt="close icon" className="close-icon" onClick={onClose} />
        </Button>

        <div className="container-dialog-order">
          <OrderingHotel />
        </div>
      </div>
    </Dialog>
  );
}
