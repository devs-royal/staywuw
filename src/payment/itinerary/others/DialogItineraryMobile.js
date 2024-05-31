import Image from "next/image";
import { Dialog, Slide } from "@mui/material";
import React, { Suspense, lazy, useContext } from "react";

import ReservationShortInfo from "./DetailReservation";
import { StepperContext } from "../../context/steeperContext";

import IconShowMore from "../../../assets/icons/utils/payment/show_more.svg";
import "@/assets/styles/mobile/AppMobile.css"
import "@/assets/styles/mobile/PaymentMobile.css"
import "@/assets/styles/mobile/DialogSearchHotel.css"
const DetailsPayment = lazy(() => import("./DetailsPayment"));

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});
export function DialogItineraryMobile(props) {
  const { open, onClose, dataItinerary, setChangeButton } = props;
  const { step, handleStepChange } = useContext(StepperContext);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      className="!m-0"
    >
      <div className={`m-component-p-top ${step !==  3 && '!h-full'}`}>
        <div className="container-dialog">
          {/* CLOSE DIALOG */}
          <div className="circle-open-dialog-m" onClick={() => onClose()}>
            <div className="icons-close-dialog-container">
              <Image className="icons-close-dialog" src={IconShowMore} width={14} height={7}/>
            </div>
          </div>

          {/* TITLES */}

          {step !== 3 ? (
            <Suspense fallback={null}>
              <DetailsPayment
                data={dataItinerary}
                step={step}
                setChangeButton={setChangeButton}
                handleStepChange={handleStepChange}
                onClose={()=>onClose()}
              />
            </Suspense>
          ) : (
            <ReservationShortInfo dataItinerary={dataItinerary}/>
          )}
        </div>
      </div>
    </Dialog>
  );
}
