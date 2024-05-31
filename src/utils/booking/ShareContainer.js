import React, { useContext, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";

import LanguageContext from "../../language/LanguageContext";

// import RoyalMail from "../../assets/icons/utils/payment/email-m.svg";
// import RoyalShareLink from "../../assets/icons/utils/payment/clip-link.svg";
// import RoyalWhatsapp from "../../assets/icons/utils/payment/whatsapp-m.svg";
// import RoyalMailActive from "../../assets/icons/utils/payment/email-active-m.svg";
// import RoyalShareLinkActive from "../../assets/icons/utils/payment/clip-link-active.svg";
// import RoyalWhatsappActive from "../../assets/icons/utils/payment/whatsapp-active-m.svg";

export function ShareContainer({
  smShow,
  handleCloseModal,
}) {
  const { languageData } = useContext(LanguageContext);

  const [activeIcon, setActiveIcon] = useState(null);
  const [buttonText, setButtonText] = useState(languageData.shareLink.copyLink);
  const storageLanguage = localStorage.getItem("language");

  const setMessage = () => {
    switch (storageLanguage) {
      case "es":
        return "Hola, te comparto mi itinerario. ";
      case "en":
        return "Hello, I share my itinerary with you. ";
      default:
        return "Hola, te comparto mi itinerario. ";
    }
  };
  
  const handleMouseOver = (icon) => {
    setActiveIcon(icon);
  };

  const handleMouseOut = () => {
    setActiveIcon(null);
  };

  const handleWhatsAppClick = () => {
    const currentURL = window.location.href;
    const message = setMessage();
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message + currentURL
    )}`;

    window.open(whatsappLink, "_blank");
  };

  const handleEmailClick = () => {
    const currentURL = window.location.href;
    const subject = storageLanguage === 'es' ? 'PENDIENTE MENSAJE POR PARTE DE MARKETING' : 'PENDING MESSAGE FROM MARKETING';
    const message = setMessage();
    const emailLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message + currentURL)}`;

    window.location.href = emailLink;
  };

  const handleCopyClick = () => {
    const currentURL = window.location.href;
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = currentURL;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setActiveIcon("link");
    setButtonText(languageData.shareLink.copy); // Change the button text

    setTimeout(() => {
      setActiveIcon(null);
      setButtonText(languageData.shareLink.copyLink); // Reset the button text
    }, 2000);
  };


  return (
    smShow && (
      <div className="modal">
        <Modal
          size="sm"
          id="modal-share-links"
          show={smShow}
          onHide={handleCloseModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="display-modal-share">
            <div className="title-share-link-m">
              {languageData.shareLink.titleShareModal}
            </div>
            <Row className="card-shared-icon">
              <Col sm={4} className="styles-columns-share-m">
                <>
                  <div
                    className="info-media-share flex flex-col items-center"
                    onClick={handleWhatsAppClick}
                    onMouseEnter={() => handleMouseOver("whatsapp")}
                    onMouseLeave={handleMouseOut}
                  >
                    <img
                      src={
                        activeIcon === "whatsapp"
                          ? `${process.env.NEXT_PUBLIC_URL}icons/whats/whats-b-o.svg`
                          : `${process.env.NEXT_PUBLIC_URL}icons/whats/whats-b.svg`
                      }
                      alt={languageData.allAlt.media.altWhatsapp}
                      className="wtp-share"
                    />
                    <div
                      className="styles-names-share-m"
                      style={{
                        color:
                          activeIcon === "whatsapp" ? "#ff8637" : "#1E1E1E",
                      }}
                    >
                      {languageData.shareLink.whatsApp}
                    </div>
                  </div>
                </>
              </Col>
              <Col sm={4} className="styles-columns-share-m">
                <>
                  <div
                    className="info-media-share flex flex-col items-center"
                    onClick={handleEmailClick}
                    onMouseEnter={() => handleMouseOver("mail")}
                    onMouseLeave={handleMouseOut}
                  >
                    <img
                      src={activeIcon === "mail" ? `${process.env.NEXT_PUBLIC_URL}icons/mail/mail-b-o.svg` : `${process.env.NEXT_PUBLIC_URL}icons/mail/mail-b.svg`}
                      alt={languageData.allAlt.media.altMail}
                      className="mail-share"
                    />
                    <div
                      className="styles-names-share-m"
                      style={{
                        color: activeIcon === "mail" ? "#ff8637" : "#1E1E1E",
                      }}
                    >
                      {languageData.shareLink.email}
                    </div>
                  </div>
                </>
              </Col>
              <Col sm={4} className="styles-columns-share-m">
                <>
                  <div
                    className="info-media-share flex flex-col items-center"
                    onClick={handleCopyClick}
                    onMouseEnter={() => handleMouseOver("link")}
                    onMouseLeave={handleMouseOut}
                  >
                    <img
                      src={
                        activeIcon === "link"
                          ? `${process.env.NEXT_PUBLIC_URL}icons/link/link-b-o.svg`
                          : `${process.env.NEXT_PUBLIC_URL}icons/link/link-b.svg`
                      }
                      alt={languageData.allAlt.media.altLink}
                      className="media-share"
                    />
                    <div
                      className="styles-names-share-m"
                      style={{
                        color: activeIcon === "link" ? "#ff8637" : "#1E1E1E",
                      }}
                    >
                      {buttonText}
                    </div>
                  </div>
                </>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    )
  );
}
