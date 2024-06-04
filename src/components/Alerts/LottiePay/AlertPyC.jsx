import { useContext, useEffect, useRef } from "react";

import LanguageContext from "@/language/LanguageContext";

export function AlertPyC({
  openAlert,
  setOpenAlert,
  title,
  description,
  cancelPolicy,
}) {
  const ref = useRef(null);

  const handleClickOutSide = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenAlert(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    openAlert && (
      <div
        ref={ref}
        className="cursor-auto absolute z-[2] shadow-3xl bg-white rounded-lg w-[316px] md:w-[458px] translate-x-[-67%] md:translate-x-[-50%] h-auto p-4 flex flex-col items-center"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-70.svg`}
          width={12}
          height={12}
          alt="icon-close"
          className="cursor-pointer absolute top-[20px] right-[20px]"
          onClick={setOpenAlert}
        />

        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/general/infotipo-staywuw.svg`}
          alt="icon-logo"
          width={57}
          height={57}
          className="w-[57px] h-[57px] pb-[17px]"
        />

        <div className="w-full">
          {title && <span className="text-fs-20 m-s-b mb-[8px]">{title}</span>}

          <p className="text-fs-12 text-gry-100 m-m text-center mb-[24px]">
            {description == "policy" ? PolicyAlert(cancelPolicy) : description}
          </p>
        </div>
      </div>
    )
  );
}

export function PolicyAlert(cancelPolicy) {
  const { languageData, language } = useContext(LanguageContext);
  const url = `/${language}/policy`;
  return (
    <>
      {languageData.roomsCancellations.percentage} {cancelPolicy.hours}{" "}
      {languageData.roomsCancellations.from}{" "}
      {`${cancelPolicy.penalty}${cancelPolicy.type === "percent" ? "% " : ""}`}
      {languageData.roomsCancellations.total}{" "}
      <a
        className="text-bl-100 no-underline focus:outline-none"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {languageData.roomsCancellations.terms}{" "}
      </a>
    </>
  );
}
