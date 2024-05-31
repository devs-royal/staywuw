import Image from "next/image";
import React, { useContext } from "react";
import { Dialog, Slide } from "@mui/material";

import LanguageContext from "../../language/LanguageContext";

import IconCreditCard from "../../assets/images/others/credit-card.svg";
import IconShowMore from "../../assets/icons/utils/payment/show_more.svg";
import CloseDialogLine from "../../assets/images/others/line-close-dialog-w.png"

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function DialogBooking(props) {
  const { open, closeDialog, itemSummary } = props;
  const { languageData } = useContext(LanguageContext);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="m-component-p-top h-full">
        <div className="container-dialog">
          <div className="close-dialog-button" onClick={closeDialog}>
            <img src={CloseDialogLine} alt="CloseDialogLine" className="line-dialog" />
            <div className="icons-close-dialog-container">
              <Image src={IconShowMore} alt="IconShowMore" className="icons-close-dialog" />
            </div>
          </div>

          <div className="container-dialog-booking">
            <span className="title-dialog-booking">
              {languageData.booking.textBooking}
            </span>

            <div className="d-flex flex-column">
              <span className="type-reservation-title">
                {languageData.itinerary.hotelItinerary.titleHotel}
              </span>

              <ul>
                {itemSummary.hotels.map((hotel, index) => (
                  <div
                    key={index}
                    className="d-flex flex-column gap-2 width100"
                  >
                    <li className="reservation-name-booking">{hotel.name}</li>

                    <span>
                      {hotel.rooms.map((room, item) => (
                        <div
                          key={item}
                          className="d-flex justify-content-between mb-2"
                        >
                          <div className="room-name-booking">
                           - <span>{room.name}</span>
                          </div>

                          <div className="price-room-booking">
                            <span>MXN</span>
                            <span>
                              $
                              {Math.floor(room.currentPrice)
                                .toLocaleString("es-MX", { currency: "MXN" })
                                .replace(".00", "")}
                              .
                            </span>
                            <sup>
                              {(room.currentPrice % 1).toFixed(2).slice(2)}
                            </sup>
                          </div>
                        </div>
                      ))}
                    </span>
                  </div>
                ))}
              </ul>

              <div className="total-iva-booking">
                <span className="taxes-title">
                  {languageData.booking.taxes}
                </span>

                <ul className="list-taxes-booking">
                  <li className="taxes-information">
                    <div className="d-flex justify-content-between">
                      <span className="taxes-subtitle">
                        {languageData.booking.iva}
                      </span>
                      
                      <div className="prices-taxes">
                        <span>
                          $
                          {Math.floor(itemSummary.taxes)
                            .toLocaleString("es-MX", { currency: "MXN" })
                            .replace(".00", "")}
                          .
                        </span>
                        <sup>{(itemSummary.taxes % 1).toFixed(2).slice(2)}</sup>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-dialog-booking">
              <Image src={IconCreditCard} alt="IconCreditCard" className="m-credit-c-d" />
              <div className="">
                <div className="m-i-total-c">Total:</div>
                <div className="m-i-price-c">
                  <span>MXN</span>
                  <span>
                    $
                    {Math.floor(itemSummary.totalCurrentPrice)
                      .toLocaleString("es-MX", { currency: "MXN" })
                      .replace(".00", "")}
                    .
                  </span>
                  <sup>
                    {(itemSummary.totalCurrentPrice % 1).toFixed(2).slice(2)}
                  </sup>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
