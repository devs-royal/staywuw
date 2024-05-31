import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function CancelPolicyToulTip({ policies }) {

  const { languageData, language } = useContext(LanguageContext);
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
        <h1 className="text-fs-14 text-white m-b">{languageData.tourPolicyCancelation.title}</h1>
        <ul className="list-disc pl-4 mt-2">
          {policies.map((policy, index) => (
            <li key={index} className="m-m text-white text-fs-12">
              {languageData.tourPolicyCancelation.before}{" "}
              <span className="m-b">{policy.hours}</span>{" "}
              {languageData.durationTour.hPlural},{" "}
              {language === "es" && languageData.tourPolicyCancelation.penalty}{" "}
              <span className="m-b">
                {policy.penalty}
                {policy.type === "percent" ? "%" : ""}
              </span>{" "}
              {language === "en" && languageData.tourPolicyCancelation.penalty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
