"use client";

import Image from "next/image";
import React, { useContext } from "react";

import { faqsConfig } from "@/config/Others/faqsConfig";
import LanguageContext from "@/language/LanguageContext";

import "../../../assets/styles/web/About.css";
import IconAdd from "../../../assets/icons/utils/others/add.svg";
import IconRemove from "../../../assets/icons/utils/others/remove.svg";
import { Disclosure } from "@headlessui/react";

export default function FaqsWeb(props) {
  const { setOpenSection, openSection, activeKey, handleAccordionClick } =
    props;
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col lg:w-3/5 max-lg:pb-6">
        <h2 className="text-[1.25rem] m-b mb-[0.9rem]">
          {languageData.faqs.subtitleFaqs}
        </h2>

        <div className="flex flex-wrap">
          {Object.keys(faqsConfig).map((sectionKey, index) => (
            <div
              key={index}
              className={`text-[0.875rem] m-b lg:mb-[1rem] max-lg:border-r max-lg:border-gry-100  max-lg:pr-[17px] ${
                openSection === sectionKey && "text-or-100"
              }`}
              onClick={() => setOpenSection(sectionKey)}
            >
              {languageData.faqs[sectionKey]}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        {faqsConfig[openSection].map((value, index) => (
          <div
            onClick={() => handleAccordionClick(openSection, index.toString())}
            className={`${
              faqsConfig[openSection].length - 1 === index && "border-b-2"
            } border-t-2 border-gry-70 py-3`}
          >
            <Disclosure
              key={index}
              defaultOpen={index.toString() === activeKey}
            >
              <>
                <Disclosure.Button className="flex justify-between items-center m-b w-full">
                  {languageData.faqs.questions[value.question]}
                  <Image
                    alt={value.question}
                    src={activeKey === index.toString() ? IconRemove : IconAdd}
                  />
                </Disclosure.Button>
                <div
                  className={`
                  transition-opacity
                  ease-in
                  duration-700 ${
                    activeKey === index.toString() ? "opacity-100" : "opacity-0"
                  } `}
                >
                  {activeKey === index.toString() && (
                    <div className="mt-3.5 m-m">
                      {languageData.faqs.questions[value.answer]}
                      {value.listItem && (
                        <ul className="list-disc">
                          {value.listItem.map((listItemKey, listItemIndex) => (
                            <li key={listItemIndex}>
                              {languageData.faqs.questions[listItemKey]}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </>
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
