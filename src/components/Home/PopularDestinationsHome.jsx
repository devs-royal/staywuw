"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import moment from "moment";
import { useRouter } from "next/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import UpdateAutocomplete from "@/config/Others/UpdateAutocomplete";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export default function PopularDestinationsHome() {
  const router = useRouter();
  const [popularState, setPopularState] = useState(null);
  const { language, languageData } = useContext(LanguageContext);

  useEffect(() => {
    getPopularStates();
  }, []);
1
  // AXIOS GET
  const getPopularStates = async () => {
    try {
      let dataPopularState = await axiosWithInterceptor.get(
        `v1/destinations/promotions/hotels`
      );

      if (dataPopularState.data && dataPopularState.status === 200) {
        const shuffledDestinations = dataPopularState.data.topDestinations
          .slice(0, 8)
          .sort(() => 0.5 - Math.random());
        setPopularState(shuffledDestinations);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // SEND PAGE HOTEL
  const sendDestination = (popular) => {
    const encodedRoomData = encodeURIComponent(
      JSON.stringify([{ adults: 2, children: [] }])
    );
    const today = moment();

    let initDate = moment(today).add(1, "month");
    let endDate = moment(today).add(1, "month").add(2, "day");
    const checkIn = initDate.format("YYYY-MM-DD");
    const checkOut = endDate.format("YYYY-MM-DD");

    const requestBodyHotel = {
      codeNameHotel: popular.codeName,
      destination: popular.name,
      codeName: popular.codeName,
      code: popular.id,
      type: "destination",
      "check-in": checkIn,
      "check-out": checkOut,
      occupancies: encodedRoomData,
    };
    const queryHotel = new URLSearchParams(requestBodyHotel).toString();
    sendDataSearch(popular);
    router.push(`/${language}/mx/${popular.codeName}/hotels?${queryHotel}`);
  };

  // AUTOCOMPLETE
  const sendDataSearch = (destination) => {
    const dataLocalSend = destination;
    UpdateAutocomplete({ dataLocalSend });
  };

  return (
    <div className="flex flex-col gap-[36px] my-[180px] relative max-sm:my-[90px]">
      <h2 className="text-fs-28 m-b ">
        {languageData.homeDestinations[0].titleTop.title}
      </h2>

      <Swiper
        slidesPerView={1}
        className="rounded-lg w-full !static"
        spaceBetween={12}
        id="swiper-popular-destinations-home"
        initialSlide={0}
        navigation
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 1.4,
          },
          500: {
            slidesPerView: 1.8,
          },
          620: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {popularState &&
          popularState.map((popular, index) => (
            <SwiperSlide
              className="!rounded-lg cursor-pointer"
              key={index}
              onClick={() => sendDestination(popular)}
            >
              <div className="h-[280px] relative overflow-hidden rounded-lg">
                {/* IMAGE */}
                <img
                  src={popular.imageUrl}
                  alt="banner-offers"
                  className="brightness-[.65] w-full h-full rounded-lg select-none object-cover transition-transform duration-500 transform scale-100 hover:scale-105 hover:brightness-[.85]"
                />

                <div className="flex flex-col pl-[16px] pb-[16px] absolute bottom-0 gap-[4px]">
                  {/* TITLE */}
                  <span className="m-b text-white text-fs-14">
                    {popular.name}
                  </span>

                  {/* PRICE */}
                  <span className="flex items-center gap-1 m-m text-white text-fs-12">
                    {languageData.homeDestinations[0].titleTop.textHotel}
                    <span className="text-fs-14">
                      MXN $
                      {Math.floor(popular.price)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(popular.price % 1).toFixed(2).slice(2)}</sup>
                    </span>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
