import Image from "next/image";
import React, { useState, useContext } from "react";

import { ShareContainer } from "./ShareContainer";
import LanguageContext from "../../language/LanguageContext";

import ShareIcon from "../../assets/icons/utils/payment/share.svg";
import ShareOr from "../../assets/icons/utils/payment/share-or.svg";
import ShareActiveIcon from "../../assets/icons/utils/payment/share-active.svg";

export default function ModalShare({ itinerary = false }) {
  const { languageData } = useContext(LanguageContext);

  const [smShow, setSmShow] = useState(false);
  const [iconActive, setIconActive] = useState(false);

  // const [activeIcon, setActiveIcon] = useState(null);
  // const [buttonText, setButtonText] = useState(languageData.shareLink.copyLink);

  // const storageLanguage = localStorage.getItem("language");

  // const setMessage = () => {
  //   switch (storageLanguage) {
  //     case "es":
  //       return "Hola, te comparto mi itinerario. ";
  //     case "en":
  //       return "Hello, I share my itinerary with you. ";
  //     default:
  //       return "Hola, te comparto mi itinerario. ";
  //   }
  // };

  const handleOpenModal = () => {
    setSmShow(true);
    setIconActive(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
    setIconActive(false);
  };

  const handleIconClick = () => {
    if (!smShow) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }
  };

  return (
    <div className="m-fit">
      <div className={`styles-button-share ${smShow ? "active" : ""}`}>
        <div
          className={`${
            itinerary === true && "share-itinerary-text"
          } button-share-itinerary`}
          onClick={handleOpenModal}
        >
          {languageData.shareLink.titleShare}
        </div>
        <div
          className={`button-share-link ${iconActive ? "active" : ""}`}
          onClick={handleIconClick}
        >
          {itinerary ? (
            <Image src={ShareOr} alt="share orange"/>
          ) : iconActive ? (
            <Image src={ShareActiveIcon} alt="share active"/>
          ) : (
            <Image src={ShareIcon} alt="share icon"/>
          )}
        </div>
      </div>
      <ShareContainer smShow={smShow} handleCloseModal={handleCloseModal} />
    </div>
  );
}
