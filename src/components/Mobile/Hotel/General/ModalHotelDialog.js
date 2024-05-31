import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Dialog, Slide, Snackbar } from "@mui/material";

import LanguageContext from "../../../../language/LanguageContext";
import { TotalOccupanciesModal } from "../../../../payment/config/totalOccupants";

import IconShowMore from "../../../../assets/icons/utils/payment/show_more.svg";
import CloseDialogLine from "../../../../assets/images/others/line-close-dialog-w.png";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ReservationDetailsDialog(props) {
  const [open, setOpen] = useState(false);
  const {
    openDialog,
    closeDialog,
    rooms,
    deleteRoom,
    handleReserveNow,
    totalPrice,
    selectedRooms,
    showAlert,
  } = props;
  const { languageData } = useContext(LanguageContext);

  const removeRoom = (index) => {
    deleteRoom(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (showAlert && showAlert.message === "MPE") {
      setOpen(true);
    }
  }, [showAlert]);

  return (
    <Dialog
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="m-component-p-top d-flex flex-column justify-content-between">
        <div className="container-dialog">
          <div className="close-dialog-button"
          onClick={closeDialog}
          >
            <Image src={CloseDialogLine} alt="CloseDialogLine" className="line-dialog" /> 
            <div className="icons-close-dialog-container">
              <Image src={IconShowMore} alt="Icon Show More" className="icons-close-dialog" />
            </div>
          </div>

          <div className="card-reservation-details gap-4 ps-3 pe-3">
            <div className="d-flex width100 justify-content-between mt-3 hight1">
              <h2 className="m-container-modal-title">
                {languageData.detailHotel.detail}
              </h2>
            </div>

            <div className="m-rooms-selected-dialog">
              {rooms &&
                rooms.length > 0 &&
                rooms.map((room, index) => (
                  <div
                    key={index}
                    className="m-card-room-info p-4 d-flex flex-column rounded-2 border border-1"
                  >
                    <div className="gap-3 d-flex justify-content-between align-items-start">
                      <span className="booking-title modal-dialog width6">
                        {room.name}
                      </span>

                      <div
                        className="booking-deleted"
                        onClick={() => removeRoom(index)}
                      >
                        {languageData.detailHotel.buttonDelete}
                      </div>
                    </div>

                    <li className="booking-li">
                      {room.eatingPlan}
                    </li>

                    {room.facilities && (
                      <li className="booking-li">{room.facilities}</li>
                    )}
                  </div>
                ))}
            </div>
          </div>

          <div className="card-hotel-booking-dialog justify-content-evenly">
            <div className="container-modal-price d-flex flex-column">
              <span className="m-nights-person dialog-nights">
                <TotalOccupanciesModal
                  language={languageData}
                  details={selectedRooms}
                ></TotalOccupanciesModal>
              </span>

              <span className="modal-hotel-price dialog-nights">
                {languageData.detailHotel.priceText}
                <span className="card-hotel-price-number">
                  {Math.floor(totalPrice)
                    .toLocaleString("es-MX", {
                      currency: "MXN",
                    })
                    .replace(".00", "")}
                  .
                  <sup className="sup-price-card">
                    {(totalPrice % 1).toFixed(2).slice(2)}
                  </sup>
                </span>
              </span>

              <div className="card-hotel-taxes dialog-nights">
                {languageData.detailHotel.taxesText}
              </div>
            </div>

            <button
              className={`room-add-button`}
              onClick={() => handleReserveNow()}
            >
              {languageData.modalArrive.buttonArrive}
            </button>
          </div>

          <Snackbar open={open} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              <div className="alert-text-amount">
                {languageData.alertsPayment.alertAmount}
              </div>

              <div className="alert-subtext-declined">
                {languageData.alertsPayment.alertAmountText}
              </div>
            </Alert>
          </Snackbar>
        </div>
      </div>
    </Dialog>
  );
}
