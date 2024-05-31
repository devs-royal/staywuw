"use client";

import  { useEffect, useState } from "react";
import LanguageContext from "./LanguageContext";
import { es } from "./es";
import { en } from "./en";

function LanguageProvider(props) {
  const [language, setLanguage] = useState("en");

  const [currency, setCurrency] =useState("MXN");

  useEffect(()=>{
    const storedLanguage = localStorage.getItem("language") || "en";
    setLanguage(storedLanguage);
    
    const currencyData = sessionStorage.getItem("selectedCurrency");
    setCurrency(currencyData);
  },[])

  const languageData = language === "es" ? es : en;

  const value = {
    language,
    setLanguage,
    languageData,
    currency
  };

  return (
    <LanguageContext.Provider value={value}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
