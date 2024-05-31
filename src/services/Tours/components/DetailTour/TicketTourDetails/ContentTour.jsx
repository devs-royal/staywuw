import React, { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export default function ContentTour(props) {
  const { modality, onSelect } = props;
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <img
        src={`${process.env.NEXT_PUBLIC_URL}general/ticket-tour.webp`}
        alt="ticket tour"
        className="absolute left-0 top-0 w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,.11)] z-[1]"
      />

      <div className="flex flex-col pt-4 pb-[13px] pl-4 pr-[22px] relative z-[2]">
        {/* TITLE */}
        <span className="text-fs-12 m-s-b text-black text-center mb-4">
          {modality.text}
        </span>

        {/* PRICE FOR PERSON */}

        <div className="flex flex-col gap-y-2">
          <span className="text-fs-12 m-b text-black text-start">
            {languageData.modalTour.prices}
          </span>

          {modality.categories.map((category, index) => (
            <div className="flex justify-between items-center" key={index}>
              <p className="text-gry-100 text-fs-10 m-m m-0">{category.text}</p>

              {/* text-gry-100 */}
              <span className="text-fs-12 m-b text-black">
                $
                {Math.floor(category.price)
                  .toLocaleString("es-MX", { currency: "MXN" })
                  .replace(".00", "")}{" "}
                MXN
              </span>
            </div>
          ))}
        </div>

        <span className="px-2 border-dashed border border-gry-70 w-fulls my-4" />

        <button
          className="border-2 border-or-100 rounded-full px-[25px] py-[2px] text-or-100 text-fs-12 m-s-b hover:bg-gry-30"
          onClick={() => onSelect(modality)}
        >
          {languageData.containerModalTour.topSelection}
        </button>
      </div>
    </>
  );
}
