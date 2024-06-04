"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import LanguageContext from "@/language/LanguageContext";

export default function KeepExploring() {
  const { languageData } = useContext(LanguageContext);
  const router = useRouter()
  const handleHome = () => {
    router.push(`/`)
  };

  return (
    <div className="flex justify-between bg-white rounded-lg mt-[28px] mb-[85px] p-[36px] items-center max-md:flex-col max-md:items-start gap-[16px]">
      <div className="flex flex-col gap-[8px]">
        <span className="m-b text-fs-24">
          {languageData.recommendations.titleKeep}
        </span>

        <span className="m-m text-fs-14 text-gry-100">
          {languageData.recommendations.subtitleKeep}
        </span>
      </div>

      <button
        className="bg-yw-100 m-b text-fs-12 hover:bg-yw-110 px-[24px] py-[14px] rounded-full"
        onClick={() => handleHome()}
      >
        {languageData.recommendations.btnBack}
      </button>
    </div>
  );
}
