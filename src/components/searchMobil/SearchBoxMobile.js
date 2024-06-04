"use client";

import { Tab } from "@headlessui/react";
import React, { useState, useEffect, useContext } from "react";

import MobilSearchTour from "./MobilSearchTour";
import MobilSearchHotel from "./MobilSearchHotel";
import LanguageContext from "@/language/LanguageContext";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";
import SearchTransport from "@/services/Transport/components/Search/SearchTransport";
import { MobilSearchSkeleton } from "@/services/Hotels/components/Skeleton/HotelListingSkeleton";

export default function SearchBoxMobile() {
  const [activeTab, setActiveTab] = useState(null);
  const { languageData } = useContext(LanguageContext);

  // GET ACTIVITY SERVICE
  const routerActual = NavigationConfig();

  useEffect(() => {
    setActiveTab(routerActual);
  }, [routerActual]);

  return (
    
    <Tab.Group>
      <Tab.List className="flex gap-x-2 text-fs-12 m-s-b">
        <Tab
          className="focus:outline-none focus:ring-transparent"
          onClick={() => setActiveTab("hotels")}
          style={{ padding: "0" }}
        >
          <span
            className={`${activeTab === "hotels"
              ? "bg-bl-100 text-white"
              : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-3.5 px-4`}
          >
            {languageData.SearchBox.tabHotel.hotel}
          </span>
        </Tab>

        {/* <Tab
          className="focus:outline-none focus:ring-transparent"
          onClick={() => setActiveTab("tour")}
          style={{ padding: "0" }}
        >
          <span
            className={`${activeTab === "tours" || activeTab === "tour"
              ? "bg-bl-100 text-white"
              : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-3.5 px-4`}
          >
            {languageData.modalHotelOptions.titleTour}
          </span>
        </Tab> */}

        {/* <Tab
          className="focus:outline-none focus:ring-transparent"
          onClick={() => setActiveTab("transport")}
          style={{ padding: "0" }}
        >
          <span
            className={`${activeTab === "transports" || activeTab === "transport"
              ? "bg-bl-100 text-white"
              : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-3.5 px-4`}
          >
            {languageData.modalHotelOptions.titleTransfer}
          </span>
        </Tab> */}
      </Tab.List>
      
      {activeTab === null ? <MobilSearchSkeleton /> :

        <Tab.Panels>
          {activeTab === "hotels" && <MobilSearchHotel />}

          {/* {activeTab === "tours" || activeTab === "tour" ? <MobilSearchTour /> : ''} */}

          {/* {activeTab === "transports" || activeTab === "transport" ? <SearchTransport isListing={true}/> : ''} */}

        </Tab.Panels>
      }

    </Tab.Group>
  );
}
