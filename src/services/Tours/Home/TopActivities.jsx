"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/assets/styles/general/Swiper.css";

import axios from "axios";
import moment from "moment/moment";
import React, { useContext, useEffect, useState } from "react";

import CardTopActivities from "./CardTopActivities";
import LanguageContext from "@/language/LanguageContext";
import { CardTopActivitiesSkeleton } from "@/components/Skeleton/CardTopActivitiesSkeleton";

export default function TopActivities() {
  const [tours, setTours] = useState([]);
  // const [hoveredIndex, setHoveredIndex] = useState(-1);
  const { languageData, language } = useContext(LanguageContext);

  useEffect(() => {
    const topActivities = async () => {
      try {
        let dataPopularState = await axios.get(
          `${process.env.NEXT_PUBLIC_ROYAL_URL}resources/top_activities.json`
        );

        if (dataPopularState.data && dataPopularState.status === 200) {
          const shuffledDestinations = dataPopularState.data
            .slice(0, 10)
            .sort(() => 0.5 - Math.random());
          setTours(shuffledDestinations);
        }
      } catch (error) {
        console.error(error);
      }
    };
    topActivities();
  }, []);

  const sentTour = (tourInfo) => {
    const today = moment();

    window.open(
      `/${language}/mx/${tourInfo.destinationCodeName}-${tourInfo[language || "es"].country
      }/tours/${tourInfo.codeName}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="mb-9">
        {/* TITLE TOP ACTIVITIES */}
        <h2 className="m-b text-black text-fs-26 mb-1">
          {languageData.SearchBox.tabTour.topActivity}
        </h2>

        <span className="m-m text-fs-16 text-gry-100">
          {languageData.SearchBox.tabTour.subtitleTopActivities}
        </span>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-wrap gap-[16px] justify-between max-sm:justify-around"
      >
        {tours.length > 0
          ? tours.map((tour, index) => (
            // CARD TOP ACTIVITIES TOUR
            // <div
            //   key={index}
            //   className="!w-fit !rounded-lg shadow-3xl colum-two"
            //   onClick={() => sentTour(tour)}
            //   onMouseEnter={() => setHoveredIndex(index)}
            //   onMouseLeave={() => setHoveredIndex(-1)}
            // >
            //   <div className="min-w-[266px] max-w-[280px] h-full cursor-pointer shadow-md shadow-gry-30 rounded-xl relative max-lg:min-w-[229px] max-lg:max-w-[229px] max-md:min-w-[266px] max-md:max-w-[280px] max-sm:max-w-fit">
            //     <div className="w-full h-[216px] overflow-hidden rounded-t-lg">
            //       <img
            //         className={`w-full h-full object-cover select-none transition-transform duration-500 transform ${hoveredIndex === index ? "scale-105" : "scale-100"
            //           }`}
            //         src={tour.image}
            //         alt="card"
            //       />

            //       <p className="absolute m-b text-fs-10 text-gry-100 top-[2%] right-[2%] py-[14px] px-[10px] rounded-lg bg-[#EBEBEB] bg-opacity-70">
            //         <span>{languageData.cartTour.duration} </span>
            //         {tour.duration}
            //       </p>
            //     </div>

            //     <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
            //       <div className="m-s-b pt-1 text-fs-14 text-start truncate max-sm:w-[250px]">
            //         {validateLanguageName(language, tour).name}{" "}
            //       </div>

            //       <TotalStars
            //         className="my-1"
            //         name="read-only"
            //         stars={tour.category}
            //         readOnly
            //         width={"14px"}
            //         height={"14px"}
            //       />

            //       <div className="flex gap-1 mb-[26px]">
            //         <Image
            //           className="w-auto h-auto"
            //           src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
            //           alt="icon-location"
            //           width={11}
            //           height={14}
            //         />
            //         <span className="text-bl-100 m-s-b text-fs-12">
            //           {validateLanguageName(language, tour).destination}
            //         </span>
            //       </div>

            //       <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
            //         <div className="flex flex-col">
            //           <span className="m-m text-black text-fs-12 text-start">
            //             {languageData.cartTour.from}
            //           </span>
            //           <span className="m-s-b text-or-100 text-fs-12">
            //             MXN{" "}
            //             <span className="m-b text-fs-16">
            //               $
            //               {Math.floor(
            //                 validateLanguageName(language, tour).price
            //               )}
            //             </span>
            //             .
            //             <sup className="m-b">
            //               {(validateLanguageName(language, tour).price % 1)
            //                 .toFixed(2)
            //                 .slice(2)}
            //             </sup>
            //           </span>
            //         </div>

            //         <button
            //           className={`m-s-b  text-fs-12 min-h-8 rounded-3xl border-2  px-4 py-2 text-nowrap ${hoveredIndex === index
            //               ? "bg-bl-100 text-white"
            //               : "text-bl-100 border-bl-100"
            //             }`}
            //         >
            //           {languageData.cartTour.seeDetails}
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            // </div>  
            <CardTopActivities tour={tour} key={index} />
          ))
          : [...Array(5)].map((_, index) => (
            <div key={index} className="min-w-[266px] h-full">
              <CardTopActivitiesSkeleton />
            </div>
          ))}
      </div>
    </>
  );
}

// const validateLanguageName = (language, value) => {
//   if (language === "es") {
//     if (value.es) {
//       return {
//         name: value.es.name,
//         destination: value.es.destination,
//         price: value.es.price,
//       };
//     } else {
//       return {
//         name: value.en.name,
//         destination: value.en.destination,
//         price: value.en.price,
//       };
//     }
//   } else if (language === "en") {
//     if (value.en) {
//       return {
//         name: value.en.name,
//         destination: value.en.destination,
//         price: value.en.price,
//       };
//     } else {
//       return {
//         name: value.es.name,
//         destination: value.es.destination,
//         price: value.es.price,
//       };
//     }
//   }
// };
