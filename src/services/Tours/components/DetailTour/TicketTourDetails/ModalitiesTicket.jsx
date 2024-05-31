"use client";

import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import ContentTour from "./ContentTour";
import { TicketsTour } from "./TicketTour";
import DetailTourContext from "@/services/Tours/context/DetailTourContext";
import LanguageContext from "@/language/LanguageContext";

export function ModalitiesTicket({tourData}) {
  const [isModality, setIsModality] = useState(false);
  const { dayTour, setSelectModality } = useContext(DetailTourContext);
  const { languageData } = useContext(LanguageContext);  

  // CHANGE MODALITY
  const handleModality = (modality) => {
    setIsModality(true);
    setSelectModality(modality);
  };

  return (
    dayTour && (
      <>
        {isModality === false && (
          <>
            <p className="m-s-b text-black text-fs-14 mb-4">{languageData.modalTour.modalities}</p>
            <div className="max-xl:hidden flex flex-wrap gap-x-[11px] gap-y-4  ">
              {/*  */}
              {dayTour.rates.map((modality, index) => (
                <div key={index} className="relative h-max w-[202px]">
                  <ContentTour
                    key={index}
                    modality={modality}
                    onSelect={handleModality}
                  />
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="relative pr-[58px] xl:hidden block">
              <Swiper
                // slidesPerView={"auto"}
                spaceBetween={11}
                // loop={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  300: {
                    slidesPerView: 1.5,
                  },
                  530: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3.5,
                  },

                  1024: {
                    slidesPerView: 1.5,
                  },
                }}
                id="dates-tour-modal"
                className="!static h-max"
                navigation={true}
                modules={[Navigation]}
              >
                {dayTour.rates.map((modality, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-max">
                      <ContentTour
                        key={index}
                        modality={modality}
                        onSelect={handleModality}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        )}

        <TicketsTour
          setIsModality={setIsModality}
          isModality={isModality}
          tourData={tourData}
        />
      </>
    )
  );
}
