import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";

import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import IconRoyal from "../../assets/icons/utils/payment/icon-royal-vacations.svg";

export function AlertRate(props) {
  const { alertShowRate, infoDataRate, cartUid } = props;
  const { languageData } = useContext(LanguageContext);

  const [smShow, setSmShow] = useState(false);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  useEffect(() => {
    if (alertShowRate === true) {
      handleOpenModal();
    }
  }, [alertShowRate]);

  const handleUpdatePrice = async () => {
    const requestPayload = {
      items: infoDataRate.priceChanges.map((change) => ({
        type: "hotel",
        id: change.id,
        items: [
          {
            type: "room",
            id: change.items.id,
            price: change.items.price,
          },
        ],
      })),
    };

    try {
      const url = `v1/carts/${cartUid}/update-prices`;
      const response = await axiosWithInterceptor.post(url, requestPayload);
      if (response) {
      }
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="modal">
        <Modal
          size="sm"
          id="modal-alert-rate"
          show={smShow}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header></Modal.Header>
          <Modal.Body className="display-modal-rate">
            <Image src={IconRoyal} alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`} className="icon-royal-modal-rate" />
            <div className="title-modal-rate">
              {languageData.alertsPayment.rateTitle}
            </div>

            <div className="text-rate-modal">
              {languageData.alertsPayment.rateText}
            </div>

            <div className="service-change-rate">
              <ul>
                {infoDataRate && infoDataRate.priceChanged &&
                  infoDataRate.priceChanges.map((service, index) => (
                    <li key={index}>{service.name}</li>
                  ))}
              </ul>
            </div>

            <div className="line-rate-modal" />
            <div>
              <button
                className="button-rate-modal"
                type="button"
                onClick={() => handleUpdatePrice()}
              >
                {languageData.alertsPayment.buttonRate}
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export function AlertLoad() {
  const { languageData } = useContext(LanguageContext);
  const [smShow, setSmShow] = useState(false);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  const handleIconClick = () => {
    if (!smShow) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }
  };
  return (
    <div>
      <div className={`styles-button-share ${smShow ? "active" : ""}`}>
        <div className="button-share-itinerary" onClick={handleOpenModal}>
          {languageData.alertsPayment.rateAlert}
        </div>
        <div className="button-share-link" onClick={handleIconClick}></div>
      </div>

      <div className="modal">
        <Modal
          size="sm"
          id="modal-alert-rate-load"
          show={smShow}
          onHide={handleCloseModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header></Modal.Header>
          <Modal.Body className="display-modal-rate">
            <Image src={IconRoyal} alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`} className="icon-royal-modal-load-r" />
            <div className="title-modal-load-r">
              {languageData.alertsPayment.textAlert.PE}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export function AlertUpdate(props) {
  const { priceChanged } = props;

  const [smShow, setSmShow] = useState(false);
  const { languageData } = useContext(LanguageContext);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  useEffect(() => {
    if (priceChanged === true) {
      handleOpenModal();
    }
  }, []);
  return (
    <>
      {smShow === true && (
        <div className="modal">
          <Modal
            size="sm"
            id="modal-alert-rate-update"
            show={smShow}
            onHide={handleCloseModal}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="display-modal-rate-update">
              <Image src={IconRoyal} alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`} className="icon-royal-modal-rate" />
              <div className="title-modal-rate-update">
                {languageData.alertsPayment.updatePrice}
              </div>
              <div className="text-rate-modal-update">
                {languageData.alertsPayment.rateReservation}
              </div>
              <div className="line-rate-modal-update"></div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}

export function AlertNoAvailability(props) {
  const { isNoAvailability } = props;
  const [smShow, setSmShow] = useState(false);
  const { languageData } = useContext(LanguageContext);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  useEffect(() => {
    if (isNoAvailability === true) {
      handleOpenModal();
    }
  }, []);

  return (
    <>
      <div className="modal">
        <Modal
          size="sm"
          id="modal-alert-rate-update"
          show={smShow}
          onHide={handleCloseModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="display-modal-rate-update">
            <Image src={IconRoyal} alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`} className="icon-royal-modal-rate" />
            <div className="title-modal-rate-update">
              {languageData.confirmation.bookingData.alertNoAvailability}
            </div>
            <div className="text-rate-modal-update">
              {languageData.confirmation.bookingData.alertNoAvailabilityText}
            </div>
            <div className="line-rate-modal-update"></div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
