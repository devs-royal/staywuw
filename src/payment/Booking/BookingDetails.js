import Image from "next/image";
import React, { useContext, useState } from "react";

import { DialogBooking } from "./MDialogBooking";
import LanguageContext from "../../language/LanguageContext";

import OpenDialogLine from "../../assets/images/others/line-open-dialog.png";
import IconCreditCard from "../../assets/images/others/credit-card.svg";
import IconShowLess from "../../assets/icons/hotel/modal/show_less.svg";

export function BookingDetails(props) {
  const { itemSummary } = props;
  const { languageData } = useContext(LanguageContext);
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <div className="box-inferior booking-container" onClick={()=>setOpenDialog(true)}>
        <div className="button-open-booking">
          <img src={OpenDialogLine} alt="OpenDialogLine" style={{ width: "100%" }} />
          <Image src={IconShowLess} alt="IconShowLess" className="icon-show-less !w-[50%]" />
        </div>

        <div className="d-flex p-3">
          <div className="m-i-pay">
            <span className="m-d-pay">{languageData.booking.textBooking}</span>
            <div className="m-h-pay">
              {languageData.itinerary.hotelItinerary.titleHotel}
            </div>

            {itemSummary.hotels.slice(0, 5).map((hotel, index) => (
              <ul className="list-details-payment p-0" key={index}>
                {/* NAME HOTEL HOTEL */}
                <li className="m-hs-pay">{hotel.name}</li>
              </ul>
            ))}
          </div>

          <div className="m-i-pay-currency">
            <Image src={IconCreditCard} alt="IconCreditCard" className="m-credit-c" />
            <div className="m-i-margin-r">
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
                </sup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogBooking open={openDialog} closeDialog={()=> setOpenDialog(false)} itemSummary={itemSummary}/>
    </>
  );
}
