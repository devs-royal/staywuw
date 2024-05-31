import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "../../language/LanguageContext";

import ImageNoFoundEn from "../../assets/images/others/image-not-found.jpg";
import ImageNoFoundEs from "../../assets/images/others/image-not-found-es.jpg";
import ImageNoFoundEnD from "../../assets/images/others/image-not-found-d.jpg";
import ImageNoFoundEsD from "../../assets/images/others/image-not-found-d-es.jpg";

export function ImageNotFound() {
  const [languageActual, setLanguageActual] = useState("es");
  
  const {language} = useContext(LanguageContext) 

  useEffect(() => {
    const actualLanguage = language;
    if (actualLanguage) {
      setLanguageActual(actualLanguage);
    }
  }, [language]);

  return languageActual === "es" ? <img className="object-fit-cover width100 height100 rounded-start" src={ImageNoFoundEs} alt={ImageNoFoundEs}/> : <img className="object-fit-cover width100 height100 rounded-start" src={ImageNoFoundEn} alt={ImageNoFoundEn}/>;
}

export function ImageNotFoundModalHotel() {
  const [languageActual, setLanguageActual] = useState("es");
  const {language} = useContext(LanguageContext) 

  useEffect(() => {
    const actualLanguage = language;
    if (actualLanguage) {
      setLanguageActual(actualLanguage);
    }
  }, [language]);

  return languageActual === "es" ? <img className="object-fit-cover width100 image-modal-hotel selected-image" src={ImageNoFoundEsD} alt={ImageNoFoundEsD}/> : <img className="object-fit-cover width100 image-modal-hotel selected-image" src={ImageNoFoundEnD} alt={ImageNoFoundEnD}/>;
}
