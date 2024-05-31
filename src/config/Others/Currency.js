import Image from "next/image";
import React, { Suspense, lazy } from "react";

import IconMoney from "../../assets/icons/utils/navigation/money.svg";

const CurrencyOffCanvas = lazy(()=> import("../../components/Mobile/Hotel/General/CurrencyOffCanvas"));

export default function Currency() {
  const [selectedCurrency, setSelectedCurrency] = React.useState("MXN");
  // const isMobile = useIsMobile();
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedCurrency(value);
    sessionStorage.setItem("selectedCurrency", value);
  };

  React.useEffect(() => {
    const storedValue = sessionStorage.getItem("selectedCurrency");
    if (storedValue) {
      setSelectedCurrency(storedValue);
    }
  }, []);

  return (
    <>
      <div className="d-currency">
        <Image src={IconMoney} alt="IconMoney" className="icon-currencies" />
        <select
          className="select-currencies"
          name="select"
          value={selectedCurrency}
          onChange={handleChange}
        >
          <option className="options-select-currency" value="MXN">
            MXN
          </option>
        </select>
      </div>
      <div className="m-currency">
        {/* <IconMoney className="icon-currencies" /> */}
        <Suspense fallback={null}>
          <CurrencyOffCanvas />
        </Suspense>
      </div>
    </>
  );
}

if (typeof window !== 'undefined') {
  window.addEventListener("load", () => {
    const selectedCurrency = sessionStorage.getItem("selectedCurrency");
    if (!selectedCurrency) {
      sessionStorage.setItem("selectedCurrency", "MXN");
    }
  });
}

