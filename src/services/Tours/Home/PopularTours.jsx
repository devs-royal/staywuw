"use client";
import "swiper/css";
import axios from "axios";
import moment from "moment";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "@/language/LanguageContext";
import PopularStateSkeleton from "@/services/Hotels/components/Skeleton/HotelHomeSkeleton";

export function PopularTours() {
  const { language, languageData } = useContext(LanguageContext);
  const router = useRouter();
  
  const [popularState, setPopularState] = useState([]);
  useEffect(() => {
    const getPopularStates = async () => {
      try {
        let dataPopularState = await axios.get(
          `${process.env.NEXT_PUBLIC_ROYAL_URL}resources/top_activities.json`
        );
        
        if (dataPopularState.data && dataPopularState.status === 200) {
          const shuffledDestinations = dataPopularState.data
            .slice(0, 8)
            .sort(() => 0.5 - Math.random());
          setPopularState(shuffledDestinations);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPopularStates();
  }, []);

  const sendDestination = (destinationInfo) => {
    // console.log(destinationInfo);
    // console.log(destinationInfo[language || "es"].destination);
    const persons = [{ adults: 2, children: 0 }]
    const today = moment();

    let initDate = moment(today).add(1, "month");
    const checkIn = initDate.format("YYYY-MM-DD");

    const requestBody = {
      // codeNameTour: destinationInfo.codeName,
      // destination: validateLanguageName(language, destinationInfo).name,
      // code: destinationInfo.id,
      // type: "activity",
      dateStart:checkIn,
      adults: persons[0].adults,
      children: persons[0].children,
    };
    // return;
    destinationInfo["country"] = "mexico"

    const query = new URLSearchParams(requestBody).toString();
    
    // http://localhost:3000/es/mx/Acapulco-mexico/tours/cena-y-espectaculo-de-clavados-en-acapulco?destination=Cena+y+espect%C3%A1culo+de+clavados+en+Acapulco&code=6&type=tour&check-in=2024-05-16&check-out=2024-05-18&occupancies=%255B%257B%2522adults%2522%253A2%252C%2522children%2522%253A0%257D%255D
    // http://localhost:3000/es/mx/acapulco-mexico/tours/cena-y-espectaculo-de-clavados-en-acapulco?codeNameTour=cena-y-espectaculo-de-clavados-en-acapulco&destination=Cena+y+espect%C3%A1culo+de+clavados+en+Acapulco%2C+Acapulco&code=6&type=activity&dateStart=2024-04-26&adults=2&children=0
    // sendDataSearch(destinationInfo);

    window.open(
      `/${language}/mx/${
        destinationInfo[language || "es"].destination
      }-mexico/tours/${destinationInfo.codeName}?${query}`,
      "_blank"
    );

    // PUSH RESULT HOTEL
    // http://localhost:3000/es/mexico/cancun/hotels?codeNameHotel=cancun&destination=Canc%C3%BAn&codeName=cancun&code=18&type=destination&check-in=2024-05-17&check-out=2024-05-18&occupancies=%255B%257B%2522adults%2522%253A2%252C%2522children%2522%253A%255B%255D%257D%255D
    // router.push(`/hotel/results?${query}`);
    // router.push(`${language}/mx/${destinationInfo.codeName}/hotels?${query}`);
  };

  // const sendDataSearch = (destination) => {
  //   const dataLocalSend = destination;
  //   const type = "activity";
  //   UpdateAutocomplete({ dataLocalSend, type });
  // };

  const parsePrice = (price) => (
    <>
      {Math.floor(price)
        .toLocaleString("es-MX", { currency: "MXN" })
        .replace(".00", "")}
      .<sup>{(price % 1).toFixed(2).slice(2)}</sup>
    </>
  );

  return (
    <div className="my-16 md:my-32 relative">
      <h1 className="m-b text-fs-24 mb-9">
        {languageData.SearchBox.tabTour.popularState}
      </h1>
      {popularState.length > 0 && language ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          className="h-[500px] !static"
          navigation
          modules={[Navigation]}
          id="swiper-popular-estates"
        >
          <SwiperSlide className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-x-0 gap-y-3 md:gap-y-0 h-full md:gap-x-3">
              <div className="flex gap-x-3 w-full md:h-full h-2/4">
                <div
                  className="relative rounded-lg md:w-[23%] w-full cursor-pointer"
                  onClick={() => sendDestination(popularState[0])}
                >
                  <img
                    src={popularState[0].image}
                    alt={` ${
                      validateLanguageName(language, popularState[0]).name
                    } ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                    // alt={`${popularState[0][language].name} staywuw`}
                    className="h-full rounded-lg object-cover brightness-[.7] select-none"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="text-fs-14 m-b">
                      {validateLanguageName(language, popularState[0]).name}
                    </span>
                    <span className="m-m text-fs-10">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN $
                        {parsePrice(
                          validateLanguageName(language, popularState[0]).price
                        )}{" "}
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  className="relative rounded-lg md:w-[77%] w-full cursor-pointer"
                  onClick={() => sendDestination(popularState[1])}
                >
                  <img
                    src={popularState[1].image}
                    alt={`${
                      validateLanguageName(language, popularState[1]).name
                    } ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                    className="h-full rounded-lg object-cover brightness-[.7] select-none"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="text-fs-14 md:text-fs-20 m-b">
                      {validateLanguageName(language, popularState[1]).name}
                    </span>
                    <span className="m-m text-fs-10 md:text-fs-12">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12 md:text-fs-16">
                        {" "}
                        MXN $
                        {parsePrice(
                          validateLanguageName(language, popularState[1]).price
                        )}{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col gap-y-3 gap-x-3 md:gap-x-0 md:w-[268px] md:h-full h-[45%]">
                <div
                  className="relative rounded-lg md:h-[246px] w-full cursor-pointer"
                  onClick={() => sendDestination(popularState[2])}
                >
                  <img
                    src={popularState[2].image}
                    alt={`${
                      validateLanguageName(language, popularState[2]).name
                    } ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                    className="h-full rounded-lg object-cover brightness-[.7] select-none"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="m-b text-fs-14">
                      {validateLanguageName(language, popularState[2]).name}
                    </span>
                    <span className="text-fs-10 m-m">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN $
                        {parsePrice(
                          validateLanguageName(language, popularState[2]).price
                        )}{" "}
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  className="relative rounded-lg md:h-[246px] w-full cursor-pointer"
                  onClick={() => sendDestination(popularState[3])}
                >
                  <img
                    src={popularState[3].image}
                    alt={`${
                      validateLanguageName(language, popularState[3]).name
                    } ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                    className="h-full rounded-lg object-cover brightness-[.7] select-none"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="m-b text-fs-14">
                      {validateLanguageName(language, popularState[3]).name}
                    </span>
                    <span className="text-fs-10 m-m">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN $
                        {parsePrice(
                          validateLanguageName(language, popularState[2]).price
                        )}{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-x-0 gap-y-3 md:gap-y-0 h-full md:gap-x-3">
              <div className="flex gap-x-3 w-full md:h-full h-[45%]">
                <div
                  className="relative rounded-lg md:w-[23%] w-full cursor-pointer"
                  onClick={() => sendDestination(popularState[4])}
                >
                  <img
                    src={popularState[4].image}
                    alt={`${
                      validateLanguageName(language, popularState[4]).name
                    } ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                    className="h-full rounded-lg object-cover brightness-[.7] select-none"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="text-fs-14 m-b">
                      {validateLanguageName(language, popularState[4]).name}
                    </span>
                    <span className="m-m text-fs-10">
                      {" "}
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN $
                        {parsePrice(
                          validateLanguageName(language, popularState[4]).price
                        )}{" "}
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  className="relative rounded-lg md:w-[77%] w-full cursor-pointer"
                  onClick={() => sendDestination(popularState[5])}
                >
                  <img
                    src={popularState[5].image}
                    alt={`${
                      validateLanguageName(language, popularState[5]).name
                    } ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                    className="h-full rounded-lg object-cover brightness-[.7] select-none"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="text-fs-14 md:text-fs-20 m-b">
                      {validateLanguageName(language, popularState[5]).name}
                    </span>
                    <span className="m-m text-fs-10 md:text-fs-12">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12 md:text-fs-16">
                        {" "}
                        MXN $
                        {parsePrice(
                          validateLanguageName(language, popularState[5]).price
                        )}{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col gap-y-3 gap-x-3 md:gap-x-0 md:w-[268px] md:h-full h-[45%]">
                <div
                  className="relative rounded-lg md:h-[246px] w-full cursor-pointer"
                  onClick={() => sendDestination(popularState[6])}
                >
                  <img
                    src={popularState[6].image}
                    alt={`${
                      validateLanguageName(language, popularState[6]).name
                    } ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                    className="h-full rounded-lg object-cover brightness-[.7] select-none"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="m-b text-fs-14">
                      {validateLanguageName(language, popularState[6]).name}
                    </span>
                    <span className="text-fs-10 m-m">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN $
                        {parsePrice(
                          validateLanguageName(language, popularState[6]).price
                        )}{" "}
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  className="relative rounded-lg md:h-[246px] w-full cursor-pointer"
                  onClick={() => sendDestination(popularState[7])}
                >
                  <img
                    src={popularState[7].image}
                    alt={`${
                      validateLanguageName(language, popularState[7]).name
                    } ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                    className="h-full rounded-lg object-cover brightness-[.7] select-none"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="m-b text-fs-14">
                      {validateLanguageName(language, popularState[7]).name}
                    </span>
                    <span className="text-fs-10 m-m">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN $
                        {parsePrice(
                          validateLanguageName(language, popularState[7]).price
                        )}{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <PopularStateSkeleton />
      )}
    </div>
  );
}

const validateLanguageName = (language, value) => {
  if (language === "es") {
    if (value.es) {
      return { name: value.es.name, price: value.es.price };
    } else {
      return { name: value.en.name, price: value.en.price };
    }
  } else if (language === "en") {
    if (value.en) {
      return { name: value.en.name, price: value.en.price };
    } else {
      return { name: value.es.name, price: value.es.price };
    }
  }
};
