"use client";
import { useContext } from "react";
import LanguageContext from "@/language/LanguageContext";

export default function CancelPolicyTransportWhite({cancellation}) {

    const { languageData } = useContext(LanguageContext);

    return (
        <div className="absolute bottom-[1.7rem] md:right-[-18px]">
            <div className="relative bg-white rounded-md p-4 w-max shadow-3xl">
                <img
                    className="absolute bottom-[-9px] max-md:left-0 max-md:right-0 md:right-[90px] max-md:mx-auto rotate-180"
                    src={`${process.env.NEXT_PUBLIC_URL}icons/general/ellipse.svg`}
                    alt="ellipse white"
                    width={22}
                    height={22}
                />
                <h1 className="text-fs-14 m-b text-black">{`${languageData.cancelationTransport.cancelation} ${cancellation} ${languageData.durationTour.hPlural}`}</h1>
                {/* <h1 className="text-fs-14 m-b text-black">{languageData.tourPolicyCancelation.title}</h1> */}
            </div>
        </div>
    )
}
