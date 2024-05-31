import React, {
  useContext,
} from "react";
import { CircularProgress } from "@mui/material";

import {
  DescriptionHotel,
  TourDescription,
  TransportDescription,
} from "./TypeReservation";
import ModalShare from "../../../utils/booking/ModalShare";
import LanguageContext from "../../../language/LanguageContext";
import { useIsMobileNew } from "../../../config/Mobile/isMobile";
import { StepperContext } from "../../context/steeperContext";

import IconCreditCart from "../../../assets/images/others/credit-card.svg";
import IconRightBlack from "../../../assets/icons/utils/payment/right-bl.svg";
import LogoFlyRoyal from "../../../assets/icons/utils/payment/icon-royal-vacations.svg";
import Image from "next/image";

import "../../../../src/assets/styles/web/Tour.css"
import "@/assets/styles/mobile/PaymentMobile.css"
import "@/assets/styles/mobile/AppMobile.css"
export default function DetailsPayment(props) {
  const { data, step, handleStepChange, setChangeButton, onClose } = props;

  const isMobile = useIsMobileNew();
  const { languageData } = useContext(LanguageContext);

  const {
    termsAccept,
    policyAccept,
    buttonActive,
    countNumber,
    progressCount,
  } = useContext(StepperContext);

  const paymentReservation = () => {
    if (isMobile) {
      onClose();
    }
    setChangeButton(Math.floor(Math.random() * 100) + 1);
  };

  const nextStep = () => {
    if (isMobile) {
      onClose();
    }
    handleStepChange(step + 1);
  };

  return (
    <>
      <div className="father-info-itinerary">
        {/* TITLE AND LOGO */}
        {data && (
          <>
            <div className="cont-icon-logo-details-payment">
              <Image
                src={LogoFlyRoyal}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
              />
              {/* TEXT PAYMENT DETAILS /LP 15-02-24 */}
              <span className="text-black-info-i">{languageData.itinerary.paymentDetails}</span>
            </div>

            {/* INFO PRICE AND TOTAL*/}
            <div className="cont-info-price-info-itinerary">
              <div className="info-hotel-flex-colum">
                {data.summary.hotels.length > 0 && (
                  <DescriptionHotel hotel={data.summary.hotels} />
                )}

                {data.summary.activities.length > 0 && (
                  <TourDescription tours={data.summary.activities} />
                )}

                {data.summary.transportations.length > 0 && (
                  <TransportDescription tours={data.summary.transportations} />
                )}

                <div
                  className={`info-hotel-flex-colum-border ${isMobile && "border-0"
                    }`}
                >
                  {/* TEXT TAXES /LP 15-02-24  */}
                  <span className="text-grey-info-i">{languageData.booking.taxes}</span>
                  <div className="spa-bet-col">
                    <div className="spa-bet">
                      <span className="text-black-info-i-s iva">IVA</span>
                      <span className="text-black-info-i-m">
                        $
                        {Math.floor(data.summary.taxes)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .
                        <sup>
                          {(data.summary.taxes % 1).toFixed(2).slice(2)}
                        </sup>
                      </span>
                    </div>
                  </div>
                </div>

                {!isMobile && (
                  <div className="info-hotel-flex-colum">
                    <div className="spa-bet">
                      <span className="text-black-info-i-g">Total</span>
                      <span className="text-black-info-i">
                        $
                        {Math.floor(data.summary.totalCurrentPrice)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .
                        <sup>
                          {(data.summary.totalCurrentPrice % 1)
                            .toFixed(2)
                            .slice(2)}
                        </sup>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="container-next-step width100">
              {/* ICONS PAYMENTS */}
              <div className="cont-icons-payments-itinerary">
                {/* <IconCreditCart className="icons-payments-tour" /> */}
                <Image
                  src={IconCreditCart}
                  alt="icons credit carts"
                />
              </div>

              {isMobile && (
                <div className="info-hotel-flex-colum">
                  <div className="spa-bet">
                    <span className="text-black-info-i-g">Total</span>
                    <span className="text-black-info-i">
                      $
                      {Math.floor(data.summary.totalCurrentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                      <sup>
                        {(data.summary.totalCurrentPrice % 1)
                          .toFixed(2)
                          .slice(2)}
                      </sup>
                    </span>
                  </div>
                </div>
              )}

              {/* COMPLETE PAYMENT */}

              {step > 0 && step <= 2 && (
                <div className="cont-share-to-complete-payment">
                  {step === 1 && (
                    <ModalShare
                      itinerary={true}
                      className="modal-style-share"
                    />
                  )}

                  {isMobile && step === 2 && (
                    <ModalShare
                      itinerary={true}
                      className="modal-style-share"
                    />
                  )}

                  {step === 1 && (
                    <div
                      className="complete-payment-i"
                      onClick={() => nextStep()}
                    >
                      <span className="text-black-info-i-m">
                        {/* TEXT COMPLETE PAYMENT  /LP-15-02-24*/}
                        {languageData.itinerary.detailsPayment.completePayment}
                      </span>

                      <Image
                        src={IconRightBlack}
                        alt="icon right"
                      />
                    </div>
                  )}

                  {step === 2 && isMobile && (
                    <div>
                      <button
                        type="submit"
                        onClick={() => paymentReservation()}
                        className={`button-payment-details ${!policyAccept || !termsAccept || !buttonActive
                            ? "disabled"
                            : ""
                          } ${policyAccept && termsAccept
                            ? "add-padding-container"
                            : "disabled-padding-button"
                          } `}
                        disabled={
                          !policyAccept || !termsAccept || !buttonActive
                        }
                      >
                        {languageData.booking.paymentConekta.buttonForms}{" "}
                        {policyAccept && termsAccept && (
                          <div className="position-relative d-inline-flex justify-content-center">
                            <CircularProgress
                              variant="determinate"
                              value={progressCount}
                              id="circle-count"
                            />
                            <div className="count-number">{countNumber}</div>
                          </div>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

// HOLD DETAILS PAYMENT
// <div className="container-details-payment">
//   <div className="divider-details-info">

//     {/* DATA HOTELS */}
//     {itemSummary.hotels && (
//       <>
//         <div className="titles-details">
//           {languageData.itinerary.detailsPayment.hotelPayment}
//         </div>

//         {itemSummary.hotels.map((hotel, index) => (
//           <ul className="list-details-payment p-0" key={index}>
//             {/* NAME HOTEL HOTEL */}
//             <li className="details-hotels-text">{hotel.name}</li>

//             {/* ROOMS NAMES & PRICE INDIVIDUAL */}
//             {hotel.rooms.map((room, index) => (
//               <Row className="row-divider" key={index}>
//                 <Col sm={8} className="col-divider-hotel-payment p-0">
//                   <div className="details-room-text">{room.name}</div>
//                 </Col>

//                 <Col sm={4} className="col-price-unit p-0">
//                   <div className="price-payment-hotel">
//                     $
//                     {Math.floor(room.currentPrice)
//                       .toLocaleString("es-MX", { currency: "MXN" })
//                       .replace(".00", "")}
//                     .
//                     <sup>{(room.currentPrice % 1).toFixed(2).slice(2)}</sup>
//                   </div>

//                   {/* CHANGE PRICE UPDATE */}
//                   {room.previousPrice && (
//                     <div className="update-price-before">
//                       $
//                       {Math.floor(room.previousPrice)
//                         .toLocaleString("es-MX", { currency: "MXN" })
//                         .replace(".00", "")}
//                       .
//                       <sup>
//                         {(room.previousPrice % 1).toFixed(2).slice(2)}
//                       </sup>
//                     </div>
//                   )}
//                 </Col>
//               </Row>
//             ))}
//           </ul>
//         ))}
//       </>
//     )}

//     {/* {itemSummary.hotels && (
//       <Row className="row-divider">
//         <Col sm={8} className="col-divider-hotel-payment">
//           <div className="titles-details">
//             {languageData.itinerary.detailsPayment.hotelPayment}
//           </div>
//           <ul className="list-details-payment">
//             {itemSummary.hotels.rooms.map((hotelName, index) => (
//               <li key={index} className="details-hotels-text">
//                 {hotelName}
//               </li>
//             ))}
//           </ul>
//         </Col>
//         <Col sm={4} className="col-price-unit">
//           <div className="price-payment-hotel">
//             $
//             {Math.floor(itemSummary.hotels.totalCurrentPrice)
//               .toLocaleString("es-MX", { currency: "MXN" })
//               .replace(".00", "")}
//             .
//             <sup>
//               {(itemSummary.hotels.totalCurrentPrice % 1)
//                 .toFixed(2)
//                 .slice(2)}
//             </sup>
//           </div>

//           CHANGE PRICE UPDATE
//           <div className="update-price-before">$00,000.<sup>00</sup></div>
//         </Col>
//       </Row>
//     )} */}

//     {/* DATA ACTIVITIES */}
//     {itemSummary.activities && (
//       <Row className="row-divider">
//         <Col sm={8} className="col-divider-tour-payment">
//           <div className="titles-details">
//             {languageData.itinerary.detailsPayment.tourPayment}
//           </div>
//           <ul className="list-details-payment">
//             {itemSummary.activities.names && itemSummary.activities.names.map((hotelName, index) => (
//               <li key={index} className="details-Tours-text">
//                 {hotelName}
//               </li>
//             ))}
//           </ul>
//         </Col>

//         <Col sm={4} className="col-price-tour">
//           <span className="price-payment-tour">
//             $
//             {Math.floor(itemSummary.activities.totalCurrentPrice)
//               .toLocaleString("es-MX", { currency: "MXN" })
//               .replace(".00", "")}
//             .
//             <sup>
//               {(itemSummary.activities.totalCurrentPrice % 1)
//                 .toFixed(2)
//                 .slice(2)}
//             </sup>
//           </span>
//         </Col>
//       </Row>
//     )}

//     {/* DATA TRANSPORT */}
//     {itemSummary.transportations && (
//       <Row className="row-divider">
//         <Col sm={8} className="col-divider-moving-payment">
//           <div className="titles-details">
//             {languageData.itinerary.detailsPayment.transferPayment}
//           </div>
//           <ul className="list-details-payment">
//             {itemSummary.transportations.names && itemSummary.transportations.names.map((hotelName, index) => (
//               <li key={index} className="details-Moving-text">
//                 {hotelName}
//               </li>
//             ))}
//           </ul>
//         </Col>

//         <Col sm={4} className="col-price-moving">
//           <span className="price-payment-moving">
//             $
//             {Math.floor(itemSummary.transportations.totalCurrentPrice)
//               .toLocaleString("es-MX", { currency: "MXN" })
//               .replace(".00", "")}
//             .
//             <sup>
//               {(itemSummary.transportations.totalCurrentPrice % 1)
//                 .toFixed(2)
//                 .slice(2)}
//             </sup>
//           </span>
//         </Col>
//       </Row>
//     )}

//     {/* DATA TAXES */}
//     <Row className="row-divider-taxes">
//       <Col sm={8} className="col-divider-taxes-payment">
//         <div className="taxes-details-payment">
//           {languageData.itinerary.detailsPayment.taxesPayment}
//         </div>
//       </Col>

//       <Col sm={4} className="col-price-moving">
//         <span className="price-payment-moving">
//           $
//           {Math.floor(itemSummary.taxes)
//             .toLocaleString("es-MX", { currency: "MXN" })
//             .replace(".00", "")}
//           .<sup>{(itemSummary.taxes % 1).toFixed(2).slice(2)}</sup>
//         </span>
//       </Col>
//     </Row>
//   </div>

//   {/* PRICE TOTAL */}
//   <div className="h-line-payment" />
//   <Row className="m-3">
//     <Col sm={4} className="col-divider-hotel-payment p-0">
//       <span className="total-price-payment">
//         {languageData.itinerary.detailsPayment.total}
//       </span>
//     </Col>

//     <Col sm={8} className="text-right p-0">
//       <span className="letter-price-payment">
//         {languageData.itinerary.detailsPayment.letterPrice}
//       </span>
//       <span className="price-payment">
//         $
//         {Math.floor(itemSummary.totalCurrentPrice)
//           .toLocaleString("es-MX", { currency: "MXN" })
//           .replace(".00", "")}
//         .
//         <sup>{(itemSummary.totalCurrentPrice % 1).toFixed(2).slice(2)}</sup>
//       </span>

//       {/* CHANGE PRICE UPDATE */}
//       {itemSummary.totalPreviousPrice && (
//         <div className="update-price-before">
//           $
//           {Math.floor(itemSummary.totalPreviousPrice)
//             .toLocaleString("es-MX", { currency: "MXN" })
//             .replace(".00", "")}
//           .
//           <sup>
//             {(itemSummary.totalPreviousPrice % 1).toFixed(2).slice(2)}
//           </sup>
//         </div>
//       )}
//     </Col>
//   </Row>
// </div>
