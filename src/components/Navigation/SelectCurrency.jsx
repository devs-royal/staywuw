"use client";

import { useEffect, useState } from "react";

export function SelectCurrency() {
  const [currency, setCurrency] = useState("MXN");

  const currencySelected = (event) => {
    const currencySelected = event.target.value;
    setCurrency(currencySelected);
  };

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  return (
    <div className="flex gap-[3px]">
      <img
        src="https://sandboxmexico.com/assets/icons/money/money-b.svg"
        alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon money`}
        width={18}
        height={18}
      />

      <select
        defaultValue="MXN"
        onChange={currencySelected}
        id="location"
        name="location"
        className="w-max block border-0 bg-transparent focus:outline-none m-s-b text-gry-100 appearance-none px-[3px]"
      >
        <option className="m-s-b text-fs-12">MXN</option>
        {/* <option className="m-s-b text-fs-12">US</option> */}
      </select>
      <img
          src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-100.svg`}
          alt="icon arrow down"
          width={8}
          height={8}
        />
    </div>
  );
}
