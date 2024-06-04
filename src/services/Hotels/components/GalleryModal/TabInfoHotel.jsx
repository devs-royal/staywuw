"use client";

import {
  InformationCircleIcon,
  MegaphoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { AmenitiesIcons } from "@/components/General/Amenities";


const tabs = [
  { name: "information", icon: InformationCircleIcon },
  { name: "amenities", icon: MegaphoneIcon  },
  { name: "schedules", icon: ClockIcon  },
];

export default function TabInfoHotel(props) {
  const { hotel } = props;
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLimitLetters, setIsLimitLetters] = useState(false);
  const [shortHotelDescription, setShortHotelDescription] = useState(null);
  const [hotelDescription, setHotelDescription] = useState(null);

  const { languageData } = useContext(LanguageContext);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  //   DESCRPTION TEXT
  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // VALIDATION FOR THE LIMIT OF LETTERS ALLOWED

  useEffect(() => {
    const getDescriptionPreview = () => {
      const words = hotel.description.split(" ");
      const totalArray = words.length;
      setHotelDescription(hotel.description);
      if (totalArray && totalArray > 155) {
        setIsLimitLetters(true);
        setShortHotelDescription(`${words.slice(0, 140).join(" ")}`);
      }
    };
    getDescriptionPreview();
  }, [hotel]);

  const getMessageForTab = (tabName) => {
    switch (tabName) {
      //   INFO HOTEL
      case "information":
        return (
          <>
            <div className="text-fs-14 m-m text-justify">
              {hotelDescription !== null ? (
                showFullDescription ? (
                  <>
                    <p className="text-gry-100">
                      {hotelDescription && hotelDescription}
                    </p>

                    <span>
                      <button
                        className="flex gap-1 items-center m-b text-fs-15 text-bl-100"
                        onClick={handleToggleDescription}
                      >
                        {languageData.modalHotel.showLess}
                        <img
                          src="https://sandboxmexico.com/assets/icons/arrows/up-bl.svg"
                          alt="show less"
                        />
                      </button>
                    </span>
                  </>
                ) : (
                  <>
                    <p className="text-gry-100">
                      {hotelDescription && isLimitLetters === true
                        ? shortHotelDescription
                        : hotelDescription}
                      {isLimitLetters === true && "..."}
                    </p>
                    {isLimitLetters === true && (
                      <span>
                        <button
                          className=" flex items-center gap-1 m-b text-fs-15 text-bl-100"
                          onClick={handleToggleDescription}
                        >
                          {languageData.modalHotel.showMore}
                          <img
                            src="https://sandboxmexico.com/assets/icons/arrows/down-bl.svg"
                            alt="show more"
                          />
                        </button>
                      </span>
                    )}
                  </>
                )
              ) : (
                <div className="relative w-[8px] h-[8px] rounded-[5px] bg-bl-100 text-bl-100 animate-[dot-flashing_1s_infinite_linear_alternate] before:content-[' '] before:block before:absolute before:top-0 before:left-[15px] before:w-[8px] before:h-[8px] before:rounded-[5px] before:bg-bl-100 before:text-bl-100 before:animate-[dot-flashing_1s_infinite_alternate] before:delay-0 after:content-[' '] after:block after:absolute after:top-0 after:left-[30px] after:w-[8px] after:h-[8px] after:rounded-[5px] after:bg-bl-100 after:text-bl-100 after:animate-[dot-flashing_1s_infinite_alternate] after:delay-1000	dot-flashing"></div>
              )}
            </div>
          </>
        );

      case "amenities":
        return (
          <div className="m-m gap-4 grid grid-cols-3 text-fs-14 text-gry-100">
            {hotel.facilities.map((facility, index) => (
              <li className="flex items-center gap-x-2 mb-2" key={index}>
                {AmenitiesIcons(facility)} {facility}
              </li>
            ))}
          </div>
        );

      // TIME CHECK IN Y CHECK OUT
      case "schedules":
        return (
          <div className="block">
            <div className="mb-2 m-b text-fs-20">{languageData.modalHotelOptions.findOutSchedules}</div>
            <ul className="list-disc m-m text-fs-14 text-gry-100 ms-9">
              <li>Check-in: 15:00 pm</li>
              <li>Check-out: 15:00 pm</li>
              {hotel.breakfast && <li> {languageData.modalHotel.breakfast}</li>}
            </ul>
          </div>
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
