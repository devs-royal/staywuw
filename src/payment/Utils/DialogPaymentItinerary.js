import Image from "next/image";
import React, { useContext, useState } from "react";

import ModalShare from "../../utils/booking/ModalShare";
import { BookingContext } from "../context/BookingContext";
import LanguageContext from "../../language/LanguageContext";
import { useIsMobileNew } from "../../config/Mobile/isMobile";
import LoadingProgress from "@/components/General/LoadingProgress";
import { ShareContainer } from "../../utils/booking/ShareContainer";
import { DialogItineraryMobile } from "../itinerary/others/DialogItineraryMobile";

export function DialogPaymentItinerary(props) {
  const { handleStepChange, reservationData, step, setChangeButton } = props;
  const { languageData } = useContext(LanguageContext);

  const reservationType = (type) => {
    switch (type) {
      case "hotel":
        return "hotel";
      default:
        return "hotel";
    }
  };

  // NEW CONTEXT
  const {
    termsAccept,
    policyAccept,
    buttonActive,
    progressCount,
    countNumber,
    openDialog,
    setOpenDialog,
  } = useContext(BookingContext);

  // OLD CONTEXT
  // const {
  //   termsAccept,
  //   policyAccept,
  //   buttonActive,
  //   progressCount,
  //   countNumber,
  // } = useContext(StepperContext);

  const isMobile = useIsMobileNew();
  const [smShow, setSmShow] = useState(false);

  const paymentReservation = () => {
    setChangeButton(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <>
      {!openDialog && reservationData && (
        <div className="lg:hidden border-t-0 bg-white sticky bottom-0 left-0 w-full h-auto z-[2]">
          {step !== 3 ? (
            <div className="rounded-t-[12px] relative h-full pt-[1.2rem] pb-[1rem] px-[1.2rem] shadow-[0px_-4px_14px_-3px_rgb(0,0,0,52%)]">
              <div
                className="absolute top-[-16px] w-[3rem] h-[3rem] rounded-full left-0 right-0 mx-auto bg-white z-[3] shadow-[0px_-12px_12px_-11px] cursor-pointer"
                onClick={() => setOpenDialog(true)}
              >
                <Image
                  className="absolute top-[13px] left-0 right-0 mx-auto w-[14px] h-[7px]"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/up-70.svg`}
                  width={14}
                  height={7}
                  alt="show less icon"
                />
              </div>

              <div className="flex flex-col px-2">
                <div className="block pb-3 border-b border-gry-70">
                  <p className="mb-2 m-s-b text-fs-12 "></p>
                  {
                    languageData.navigation[
                      reservationType(reservationData.items[0].type)
                    ]
                  }

                  <p className="text-fs-10 text-gry-70 m-s-b m-0">
                    {reservationData.items[0].name}
                  </p>
                </div>

                {/* Dialog  */}
                <div className="flex justify-between mt-3">
                  <div className="text-fs-16 m-b ">Total</div>

                  <div className="m-b text-black">
                    <span className="text-fs-14 mr-[8px]">MXN</span>
                    <span className="text-fs-20">
                      $
                      {Math.floor(reservationData.summary.totalCurrentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                    </span>
                    <sup>
                      {(reservationData.summary.totalCurrentPrice % 1)
                        .toFixed(2)
                        .slice(2)}
                    </sup>{" "}
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  {step === 1 && (
                    <ModalShare itinerary={true} className="w-[30%]" />
                  )}

                  {isMobile && step === 2 && (
                    <ModalShare itinerary={true} className="w-[30%]" />
                  )}

                  {step === 1 && (
                    <button
                      onClick={() => handleStepChange(step + 1)}
                      className="py-[10px] px-[2.1rem] flex items-center justify-center bg-yw-100 border-0 rounded-full m-b text-nowrap gap-x-[0.3rem] text-fs-10"
                    >
                      {languageData.itinerary.detailsPayment.completePayment}
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/right-100.svg`}
                        width={6}
                        height={13}
                        alt="arrow right icon"
                      />
                    </button>
                  )}

                  {step === 2 && (
                    <div>
                      <button
                        onClick={() => paymentReservation()}
                        type="submit"
                        className={`" bg-yw-100 text-black text-fs-16 rounded-full m-b flex items-center gap-[5px] max-xl:py-[9px] max-xl:px-[54px] max-lg:py-[10px] max-lg:px-[32px] max-md:text-fs-13 max-md:m-b max-md max-md:h-auto"  ${
                          !policyAccept || !termsAccept || !buttonActive
                            ? "cursor-not-allowed bg-yw-50"
                            : "hover:bg-yw-110"
                        } ${
                          policyAccept && termsAccept
                            ? "py-[13px] px-[64px] max-md:py-[0.2rem] max-md:px-[2.1rem]"
                            : "py-[16px] px-[80px] max-md:py-[0.5rem] max-md:px-[2.1rem]"
                        } `}
                        disabled={
                          !policyAccept || !termsAccept || !buttonActive
                        }
                      >
                        {languageData.booking.paymentConekta.buttonForms}{" "}
                        {policyAccept && termsAccept && (
                          <div className="relative inline-flex justify-center md:hidden">
                            
                            <LoadingProgress
                              value={progressCount}
                              count={countNumber}
                              width={"w-[30px]"}
                              height={"h-[30px]"}
                            />
                          </div>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between px-6 pt-6 !pb-5 relative bg-bl-100 rounded-t-xl items-center">
              <div
                className="absolute left-0 right-0 mx-auto w-9 h-9 rounded-full bg-bl-100 top-[-14px] flex items-center justify-center"
                onClick={() => setOpenDialog(true)}
              >
                <Image
                  className="absolute top-[16px] w-[14px] h-[7px]"
                  alt="show less icon"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/up-w.svg`}
                  height={7}
                  width={14}
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <span className="m-b text-fs-16 text-white">Total</span>

                <div className="flex items-end gap-x-1 text-white m-b">
                  <p className="text-fs-14 mb-[3px]">MXN</p>
                  <p className="m-0 text-fs-20">
                    $
                    {Math.floor(reservationData.summary.totalCurrentPrice)
                      .toLocaleString("es-MX", { currency: "MXN" })
                      .replace(".00", "")}
                    .
                    <sup>
                      {(reservationData.summary.totalCurrentPrice % 1)
                        .toFixed(2)
                        .slice(2)}
                    </sup>{" "}
                  </p>
                </div>
              </div>

              <bottom
                onClick={() => setSmShow(!smShow)}
                className="bg-or-100 rounded-full px-4 py-2 flex items-center gap-x-2 text-white text-fs-12 m-b"
              >
                <Image
                  className="!w-4 h-[18px]"
                  alt="share icon modal"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/share/share-w.svg`}
                  width={16}
                  height={18}
                />
                {languageData.shareLink.share}
              </bottom>
            </div>
          )}
        </div>
      )}

      <ShareContainer
        smShow={smShow}
        handleCloseModal={() => setSmShow(!smShow)}
      />

      <DialogItineraryMobile
        setChangeButton={setChangeButton}
        dataItinerary={reservationData}
        setSmShow={() => setSmShow(true)}
      />
    </>
  );
}
