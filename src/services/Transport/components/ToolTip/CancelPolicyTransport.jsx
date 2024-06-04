"use client";

import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export default function CancelPolicyTransport(props) {
  const { cancellation } = props;

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="absolute top-[1.8rem] md:right-0">
      <div className="relative bg-bl-100 rounded-md p-4 w-max">
        <img
          className="absolute top-[-9px] max-md:left-0 max-md:right-0 md:right-[3.5rem] max-md:mx-auto"
          src={`${process.env.NEXT_PUBLIC_URL}icons/general/ellipse-bl-100.svg`}
          alt="ellipse blue"
          width={22}
          height={22}
        />
        {cancellation && (
          <h1 className="text-fs-14 text-white m-b">{`${languageData.cancelationTransport.cancelation} ${cancellation} ${languageData.durationTour.hPlural}`}</h1>
        )}{" "}
      </div>
    </div>
  );
}
