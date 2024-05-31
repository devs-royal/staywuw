"use client";

import {
  InformationCircleIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { useContext, useState } from "react";

import "../../../../assets/styles/general/keyframes.css";
import LanguageContext from "@/language/LanguageContext";

const tabs = [
  { name: "information", icon: InformationCircleIcon },
  { name: "amenities", icon: MegaphoneIcon },
];

export default function TabsTours(props) {
  const { tourData } = props;
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const { languageData } = useContext(LanguageContext);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // VALIDATION FOR THE LIMIT OF LETTERS ALLOWED

  const getMessageForTab = (tabName) => {
    switch (tabName) {
      //   INFO HOTEL
      case "information":
        return (
          <div className="flex flex-col gap-y-4">
            <span className="rounded bg-gry-30 w-max text-gry-100 m-s-b h-[36px] py-1 px-2 text-fs-9 text-center content-center">
              {languageData.cartTour.duration} {tourData.duration}
            </span>
            <div
              className="m-m text-fs-12"
              dangerouslySetInnerHTML={{ __html: tourData.infoVoucher }}
            />
          </div>
        );
      case "amenities":
        return (
          <ul className="list-disc pl-5">
            {tourData.included.map((value, index) => (
              <li className="m-m mt-2 text-fs-14 text-black" key={index}>
                {value}
              </li>
            ))}
          </ul>
        );

      default:
        return "";
    }
  };

  return (
    <>
      <div className="block">
        <div className="mb-5 mt-6">
          <nav
            className=" flex gap-x-4 space-x-8 overflow-y-auto my-2"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <a
                key={tab.name}
                // href={tab.href}
                onClick={() => handleTabClick(tab)}
                className={`${
                  selectedTab.name === tab.name
                    ? "border-or-70 text-or-100"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } m-0 group inline-flex items-center border-b-2 py-2 px-4 text-sm font-medium no-underline m-0 !ml-0 !mr-0 cursor-pointer`}
                aria-current={
                  selectedTab.name === tab.name ? "page" : undefined
                }
              >
                <tab.icon
                  className={`${
                    selectedTab.name === tab.name
                      ? "text-or-100"
                      : "text-gray-400 group-hover:text-gray-500"
                  } -ml-0.5 mr-2 h-5 w-5`}
                  aria-hidden="true"
                />
                <span>{languageData.modalTour[tab.name]}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-5">{getMessageForTab(selectedTab.name)}</div>
    </>
  );
}
