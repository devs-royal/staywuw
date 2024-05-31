import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";

import LanguageContext from "../../../../language/LanguageContext";

import IconLeft from "../../../../assets/icons/utils/navigation/left.svg";
import IconSpanish from "../../../../assets/icons/utils/others/spanish.svg";
import IconEnglish from "../../../../assets/icons/utils/others/english.svg";
import IconSpanishT from "../../../../assets/icons/utils/others/spanishT.svg";
import IconEnglishT from "../../../../assets/icons/utils/others/englishT.svg";
import IconDoneActive from "../../../../assets/icons/utils/navigation/done_active.svg";

export function SelectLanguage() {
  const { languageData } = useContext(LanguageContext);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleClose = () => setShowOffcanvas(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const setEspLanguage = () => {
    setShowOffcanvas(false);
    setTimeout(() => {
      handledValue("es");
    }, 10);
  };
  const setCurrencyUS = () => {
    setShowOffcanvas(false);
    setTimeout(() => {
      handledValue("en");
    }, 10);
  };

  const handledValue = (value) => {
    if (language !== value) {
      setLanguage(value);
      localStorage.setItem("language", value);
      window.location.reload();
    }
  };
  const storedLanguage = localStorage.getItem("language");

  useEffect(() => {
    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
  }, [storedLanguage, language, setLanguage]);

  return (
    <>
      <button
        className="border border-0 p-0 bg-transparent"
        variant="primary"
        onClick={handleToggle}
      >
        {language === "es" && <Image src={IconSpanish} alt="IconSpanish" />}
        {language === "en" && <Image src={IconEnglish} alt="IconEnglish" />}
        {/* {language === "fr" && <IconFR />} */}
      </button>

      <Offcanvas show={showOffcanvas} placement="end">
        <Offcanvas.Header className="flex-column align-items-start">
          <button
            className="border border-0 bg-transparent p-0"
            onClick={handleClose}
          >
            <Image src={IconLeft} alt="IconLeft"/>
          </button>

          <Offcanvas.Title>{languageData.language.language}</Offcanvas.Title>
        </Offcanvas.Header>

        <div className="m-line-offCanvas" />

        <Offcanvas.Body className="d-flex flex-column gap-4">
          <button onClick={setEspLanguage} className="m-currency-list">
            <span className="icon-check-language">
              {language === "es" && <Image src={IconDoneActive} alt="IconDoneActive"/>}
            </span>
            <Image src={IconSpanishT} alt="IconSpanishT"/>
            {languageData.language.ESP}
          </button>
          <button onClick={setCurrencyUS} className="m-currency-list">
            <span className="icon-check-language">
              {language === "en" && <Image src={IconDoneActive} alt="IconDoneActive" />}
            </span>
            <Image src={IconEnglishT} alt="IconEnglishT" />
            {languageData.language.EN}
          </button>

          {/* BUTTON FRENCH LANGUAGE */}
          {/* <button onClick={setCurrencyUSC} className="m-currency-list">
            <span className="icon-check-language">
              {language === "fr" && <IconDoneActive />}
            </span>
            <IconFR />
            {languageData.language.FR}
          </button> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
