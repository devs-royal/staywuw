"use client";
import "../../../../assets/styles/general/Swiper.css";

import moment from "moment";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useContext, useEffect } from "react";

import LanguageContext from "@/language/LanguageContext";
import DetailTourContext from "../../context/DetailTourContext";

export default function DayCalendar(props) {
  const { tourData, tourSchedule, params } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const { setDataTour, setDayTour, setCodeNameTour } = useContext(DetailTourContext);
  const { languageData } = useContext(LanguageContext);
  // FIRST DAY SELECTED 
  useEffect(() => {
    if (tourSchedule.length > 0) {
      setDayTour(tourSchedule[0]);
    }
  }, [tourSchedule]);

  // TOURDATA
  useEffect(() => {
    setDataTour(tourData);
    setCodeNameTour(params.codeName);
  }, []);

  // DAY SELECT
  const selectDate = (index) => {
    setSelectIndex(index);
    setDayTour(tourSchedule[index]);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <span className="text-black m-s-b text-16 w-max">
          {languageData.modalTour.choosenDate}
        </span>

        {/* <div className="flex gap-x-[6px] items-center cursor-pointer">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-bl-100.svg`}
            width="14px"
            height="13.3px"
            alt="calendar bl"
            className="h-[19px] w-[19px]"
          />

          <p className="m-0 text-bl-100 m-s-b text-fs-16 mr-">
            Ver más detalles
          </p>
        </div> */}
      </div>

      <div className="relative pr-[58px] mt-[16px]">
        <Swiper
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.7,
            },
            500: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 3.5,
            },
            1270: {
              slidesPerView: 5.4,
            },
          }}
          id="dates-tour-modal"
          className="!static h-max"
          navigation={true}
          modules={[Navigation]}
        >
          {tourSchedule.map((tour, index) => (
            <SwiperSlide
              id="date-tour-modal"
              className={`${selectIndex === index ? "bg-bl-100" : "bg-white hover:bg-gry-30"
                } rounded-md p-2 flex flex-col border border-gry-70 cursor-pointer`}
              onClick={() => selectDate(index)}
              key={index}
            >
              <div className="border-b border-gry-70 pb-[3.5px] mb-[3.5px] flex flex-col items-center">
                {/* DAY WEEK  */}
                <span
                  className={`${selectIndex === index ? "text-white" : "text-gry-100"
                    } m-s-b text-fs-12 `}
                >
                  {moment(tour.date).format("ddd")}
                </span>

                {/* NUMBER DAY WEEK */}
                <h3
                  className={`${selectIndex === index ? "text-white" : "text-black"
                    } m-b test-fs-20 `}
                >
                  {moment(tour.date).format("D")}
                </h3>

                {/* MONTH */}
                <span
                  className={`${selectIndex === index ? "text-white" : "text-black"
                    } m-s-b text-fs-12 `}
                >
                  {moment(tour.date).format("MMMM")}
                </span>
              </div>

              <div className="flex flex-col gap-y-1 items-center">
                <span
                  className={`${selectIndex === index ? "text-white" : "text-gry-100"
                    } text-fs-10 m-m`}
                >
                  {languageData.SearchBox.tabTour.from}
                </span>
                <span
                  className={`${selectIndex === index ? "text-white" : "text-black"
                    } m-b text-fs-14`}
                >
                  $
                  {Math.floor(tour.priceFrom)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                </span>
                <span
                  className={`${selectIndex === index ? "text-white" : "text-black"
                    } text-8 m-b text-fs-8`}
                >
                  MXN
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
