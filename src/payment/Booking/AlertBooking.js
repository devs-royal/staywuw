import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";

import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";

export default function AlertBooking(props) {
  const { show, handleClose, animationData, alertText } = props;

  const isMobile = useIsMobile();
  const { languageData } = useContext(LanguageContext);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      id={isMobile ? "m-loading-modal" : "d-loading-modal"}
    >
      <Modal.Body>
        <Lottie animationData={animationData} />
        <div className="m-text-loading">
          {languageData.alertsPayment.textAlert[alertText]}
        </div>
      </Modal.Body>
    </Modal>
  );
}
