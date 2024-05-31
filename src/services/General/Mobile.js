import React, { useContext } from "react";
import Logo from "../../assets/images/logos/logo-royal-vacations-white.svg";

import LanguageContext from "../../language/LanguageContext";

export default function Mobile() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          textAlign: "center",
          background: "rgb(39, 67, 166)",
          color: "white",
          padding: "5rem 0",
          display: "flex",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <img
          src={Logo}
          alt={languageData.allAlt.altRoyalVacations}
          style={{ width: "281px" }}
        />
        <br />
        <div
          className="container"
          style={{ fontSize: "11px", padding: "1rem 1rem" }}
        >
          {languageData.mobile.informationMobile}
        </div>
      </div>
    </div>
  );
}
