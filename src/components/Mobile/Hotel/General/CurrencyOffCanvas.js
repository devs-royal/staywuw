"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";

import LanguageContext from "../../../../language/LanguageContext";

import IconLeft from "../../../../assets/icons/utils/navigation/left.svg";
import IconMoney from "../../../../assets/icons/utils/navigation/money.svg";
import IconDoneActive from "../../../../assets/icons/utils/navigation/done_active.svg";

export default function CurrencyOffCanvas() {
  const { languageData } = useContext(LanguageContext);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleClose = () => setShowOffcanvas(false);
  const [currency, setCurrency] = useState("mxn");
  const setCurrencyMXN = () => {
    setShowOffcanvas(false);
    setCurrency("mxn");
  };

  useEffect(() => {}, [currency]);

  return (
    <>
      <button
        className="border border-0 p-0 bg-transparent"
        variant="primary"
        onClick={handleToggle}
      >
        <Image src={IconMoney} alt="IconMoney" />
      </button>

      <Offcanvas show={showOffcanvas} placement="end">
        <Offcanvas.Header className="flex-column align-items-start">
          <button
            className="border border-0 bg-transparent p-0"
            onClick={handleClose}
          >
            <Image src={IconLeft} alt="IconLeft" />
          </button>

          <Offcanvas.Title>{languageData.currency.currency}</Offcanvas.Title>
        </Offcanvas.Header>
        <div className="m-line-offCanvas" />

        <Offcanvas.Body className="d-flex flex-column gap-4">
          <button onClick={setCurrencyMXN} className="m-currency-list">
            <span className="icon-check-language">
              {currency === "mxn" && <Image src={IconDoneActive} alt="IconDoneActive" />}
            </span>
            {languageData.currency.mxn}
          </button>

          {/* CURRENCY US */}
          {/* <button onClick={setCurrencyUS} className="m-currency-list">
            <span className="icon-check-language">
              {currency === "us" && <IconDoneActive />}
            </span>
            {languageData.currency.us}
          </button>
          <button onClick={setCurrencyUSC} className="m-currency-list">
            <span className="icon-check-language">
              {currency === "usc" && <IconDoneActive />}
            </span>
            {languageData.currency.canadian}
          </button> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
