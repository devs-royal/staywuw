import Image from "next/image";
import { Alert, Snackbar } from "@mui/material";
import React, { Suspense, lazy, useContext, useEffect, useState } from "react";

import { useCartAxios } from "../../../Cart/CartAxios";
import { MissingRooms } from "../../../../config/Hotel/ModalHotel";
import LanguageContext from "../../../../language/LanguageContext";
import { useShowContentHotel } from "../../../../pages/Modal/ModalHotel";
import axiosWithInterceptor from "../../../../config/Others/axiosWithInterceptor";
import { TotalOccupanciesModal } from "../../../../payment/config/totalOccupants";

import CloseDialogLine from "../../../../assets/images/others/line-close-dialog-w.png";
import IconShowLess from "../../../../assets/icons/hotel/modal/show_less.svg";

const API_ENDPOINT = `v1/carts/hotel`;
const ReservationDetailsDialog = lazy(() => import("./ModalHotelDialog"));

export function ShortInfoHotelModal(props) {
  const {
    selectedRooms,
    requestBody,
    handleShowContentChange,
    setSelectedRooms,
    isRoomSelected,
    totalRoomsSelected,
  } = props;

  const { fetchData } = useCartAxios();
  const { languageData } = useContext(LanguageContext);
  const { setShowContent } = useShowContentHotel();
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAlert, setShowAlert] = useState(null);
  const [open, setOpen] = useState(false);

  const handleReserveNow = async () => {
    try {
      const uidCart = localStorage.getItem("uid-cart");
      let cartId = "";

      if (uidCart) {
        const { uid } = JSON.parse(uidCart);
        cartId = uid;
      }

      const saveRequestCart = {
        key: requestBody.code,
        checkIn: requestBody["check-in"],
        checkOut: requestBody["check-out"],
        occupancies: selectedRooms.map((room) => ({
          rateCode: room.rateKey,
          roomCode: room.code,
          adults: room.adults,
          children: room.children || [],
          price: room.netPrice,
          boardCode: room.boardCode,
          hash:room.hash
        })),
      };

      if (cartId) {
        saveRequestCart.cart = cartId;
      }

      const response = await axiosWithInterceptor.post(
        API_ENDPOINT,
        saveRequestCart
      );

      const cartUid = response.data.cart;
      const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000;
      localStorage.setItem(
        "uid-cart",
        JSON.stringify({ uid: cartUid, expirationTime })
      );
      setShowContent(2);
      fetchData(cartUid);
    } catch (error) {
      if(error.response.data.message === "CNF"){
        localStorage.removeItem("uid-cart");
        localStorage.removeItem("cartData");
      }
      // console.eror(error);
      setShowAlert(error.response.data);
    }
    handleShowContentChange();
  };

  useEffect(() => {
    if (showAlert && showAlert.message === "MPE") {
      setOpen(true);
    }
  }, [showAlert]);

  const deleteRoom = (index) => {
    const newRooms = selectedRooms.filter((room, i) => i !== index);
    setSelectedRooms(newRooms);
    if (newRooms.length === 0) {
      setIsDialog(false);
    }
  };

  useEffect(() => {
    let sum = 0;
    selectedRooms.forEach((room) => {
      sum += parseFloat(room.price);
    });
    setTotalPrice(sum);
  }, [selectedRooms]);

  const [isDialog, setIsDialog] = useState(false);

  const openDialog = () => {
    if(selectedRooms.length > 0){
      setIsDialog(!isDialog);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="position-relative">
      {isRoomSelected && (
          <div className="tooltip-select-l">
            <MissingRooms
              roomsBySelected={totalRoomsSelected}
              addRoom={selectedRooms}
            />
          </div>
        )}
      <div
        className="line-open-dialog-hotel"
        onClick={openDialog}
      >
        <Image src={CloseDialogLine} alt="CloseDialogLine" className="line-icon-hotel"/>
        <Image src={IconShowLess} alt="Icon Show Less" className="show-less-icon-hotel" />
      </div>
      <Suspense fallback={null}>
          <ReservationDetailsDialog
            openDialog={isDialog}
            closeDialog={() => setIsDialog(false)}
            rooms={selectedRooms}
            deleteRoom={deleteRoom}
            handleReserveNow={handleReserveNow}
            totalPrice={totalPrice}
            // changeDate={changeDate}
            selectedRooms={selectedRooms}
            showAlert={showAlert}
          ></ReservationDetailsDialog>
        </Suspense>

      <div className="d-flex justify-content-between container">
        <div className="width7">
          <h2 className="m-container-modal-title">
            {languageData.detailHotel.detail}
          </h2>

          {selectedRooms && selectedRooms.length > 0 ? (
            // RESERVATION DETAILS
            selectedRooms.map((room, index) => (
              <div key={index} className="booking-reservation">
                <div className="d-flex align-items-start gap-1 justify-content-between">
                  <div className="booking-title">{room.name}</div>
                  <div
                    className="booking-deleted"
                    onClick={() => deleteRoom(index)}
                  >
                    {languageData.detailHotel.buttonDelete}
                  </div>
                </div>

                <li className="booking-li">
                  {room.eatingPlan}
                </li>
              </div>
            ))
          ) : (
            <span className="m-container-modal-empty-room">
              {languageData.detailHotel.addRoomMessage}
            </span>
          )}
        </div>

        <div className="d-flex flex-column align-items-center">
          <span className="m-nights-person">
            {/* PRICE, OCCUPANCIES AND PRICE ROOM */}
            <TotalOccupanciesModal
              // changeDate={changeDate}
              language={languageData}
              details={selectedRooms}
            ></TotalOccupanciesModal>
          </span>

          <div className="container-modal-price">
            <span className="modal-hotel-price">
              {languageData.detailHotel.priceText}
            </span>

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

            <div className="card-hotel-taxes">
              {languageData.detailHotel.taxesText}
            </div>
          </div>

          <div className="card-hotel-button-booking">
            <button
              className={`room-add-button mobile ${
                !selectedRooms.length > 0 ? "disabled" : ""
              }`}
              onClick={handleReserveNow}
              disabled={!selectedRooms.length > 0}
            >
              {languageData.modalArrive.buttonArrive}
            </button>
          </div>
        </div>

        {/* ALERT ROOMS LIMIT */}
        <Snackbar open={open} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
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
  );
}
