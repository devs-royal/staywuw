import "swiper/css";
import "swiper/css/pagination";
import "../../../../assets/styles/general/Swiper.css";

import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "@/language/LanguageContext";
import { calculateNights } from "../../utils/calculateNights";

export default function CardHotelT(props) {
  const { hotel, requestQueryParams } = props;
  const { languageData, language } = useContext(LanguageContext);

  //   PARAMS URL
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  // CALCULATE NIGHTS
  const checkIn = searchParams ? searchParams.get("check-in") : null;
  const checkOut = searchParams ? searchParams.get("check-out") : null;
  const numNights = calculateNights(checkIn, checkOut);

  // DECODE OCCUPANCIES
  const occupanciesCode = searchParams.get("occupancies");
  const decodedOccupancies = JSON.parse(decodeURIComponent(occupanciesCode));
  const totalPeople = sumOccupancies(decodedOccupancies);

  function sumOccupancies(decodedOccupancies) {
    return decodedOccupancies.reduce((total, occupancy) => {
      return total + occupancy.adults + occupancy.children.length;
    }, 0);
  }

  const buildUrlWithParams = (queryParams) => {
    const destination  = searchParams.get("codeNameHotel");

    const baseUrl = `/${language}/mx/${destination}-mexico/${destination}-hotels/${hotel.codeName}`;

    const occupanciesString = JSON.stringify(queryParams.occupancies);

    const queryParamsString = new URLSearchParams({
      codeNameHotel: hotel.codeName,
      ...queryParams,
      occupancies: encodeURIComponent(occupanciesString),
    }).toString();

    return `${baseUrl}?${queryParamsString}`;
  };

  return (
    <>
      {hotel && (
        <div className="max-sm:px-4">
          <div className="flex border border-gry-50 rounded-lg mb-[10px] bg-white w-full gap-2 my-[20px] max-lg:flex-col lg:h-[230px] max-sm:max-h-[35rem]">
            <div className="w-[30%] relative max-lg:w-full max-lg:h-[225px]">
              <Swiper
                // spaceBetween={30}
                id="card-hotel-t"
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="!h-[87%] !rounded-tl-lg max-lg:!rounded-t-lg"
              >
                {hotel.images.map((image, index) => (
                  <SwiperSlide>
                    <img
                      key={index}
                      className="w-full h-full object-cover "
                      src={image}
                      alt="card"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {hotel.isTop && (
                <Image
                  className="absolute z-[4] top-0"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/info/offer-es.svg`}
                  alt="icon-solicited"
                  width={42}
                  height={91}
                />
              )}

              <div className="h-[13%] bg-black text-white m-b text-fs-12 flex items-center justify-center rounded-bl-lg max-lg:rounded-none">
                {languageData.eatingPlan[hotel.eatingPlan]}
              </div>
            </div>

            <div className="w-[70%] p-[20px] max-lg:w-full">
              {/* NAME AND STARS HOTEL */}
              <h2 className="text-fs-16 m-b mb-0 truncate">{hotel.name}</h2>
              <TotalStars
                stars={hotel.stars}
                className="!text-fs-12 !gap-[2px]"
              />

              <div className="flex max-lg:flex-col">
                {/* INFO HOTEL*/}
                <div className="w-3/5  pr-[23px] max-lg:w-full flex flex-col gap-[8px] mt-1">
                  <div className="flex gap-1">
                    <Image
                      className="w-[11px] h-[14px]"
                      src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                      alt="icon-location"
                      width={11}
                      height={14}
                    />

                    {/* PENDIENTE */}
                    <span className="text-bl-100 m-s-b text-fs-10">
                      {hotel.address}
                    </span>
                  </div>

                  <span className="m-s-b text-fs-10 text-gry-100">
                    {numNights}{" "}
                    {numNights > 1
                      ? languageData.cardHotel.nights
                      : languageData.cardHotel.night}{" "}
                    {totalPeople}{" "}
                    {totalPeople > 1
                      ? languageData.cardHotel.people
                      : languageData.cardHotel.person}
                  </span>

                  {/* PENDIENTE */}
                  <p className="m-m text-fs-10 text-gry-70 !mb-1">
                    {/* {hotel.description} */}
                    {hotel.description.length > 165
                      ? `${hotel.description.substring(0, 165)}...`
                      : hotel.description}
                  </p>

                  {hotel.exclusiveDeal < 4 ? (
                    <div className="flex bg-[#FFF0BD] px-[10px] py-[3px] items-center w-fit rounded-lg gap-1">
                      <Image
                        className="w-4 h-4"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/info/solicited.svg`}
                        alt="icon-solicited"
                        width={24}
                        height={25}
                      />

                      <span className="m-b text-fs-12 text-gry-100 px-[8px]">
                        {languageData.cardHotel.label}
                      </span>
                    </div>
                  ) : hotel.exclusiveDeal >= 5 && hotel.exclusiveDeal <= 10 ? (
                    <div className="flex bg-[#FFF0BD] px-[10px] py-[3px] items-center w-fit rounded-lg gap-1">
                      <Image
                        className="w-4 h-4"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/info/solicited.svg`}
                        alt="icon-solicited"
                        width={24}
                        height={25}
                      />
                      <span className="m-b text-fs-12 text-gry-100 px-[8px]">
                        {languageData.cardHotel.bestHotel}
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* INFO PRICE */}
                <div className="w-2/5 border-l border-gry-[#ebebeb] flex flex-col pl-[23px] items-center justify-end max-lg:w-full max-lg:border-t max-lg:border-l-0 max-lg:mt-2 max-lg:pt-2 max-lg:flex-row max-lg:justify-between max-lg:pl-0 justify-center">
                  <div className="flex flex-col items-start lg:items-center ">
                    <span className="m-b text-red-100 text-fs-12">
                      ¡{languageData.cardHotel.titleSpace}{" "}
                      {hotel.availableRooms}!
                    </span>

                    <h2 className="m-b text-fs-16 flex items-center gap-1 text-nowrap">
                      <span className="m-s-b text-fs-12">
                        {languageData.cartTour.from}{" "}
                      </span>
                      {hotel.currency} $
                      {Math.floor(hotel.minRate)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(hotel.minRate % 1).toFixed(2).slice(2)}</sup>
                    </h2>

                    <div className="flex gap-1 mb-1 items-center min-h-">
                      {hotel.offers && hotel.percentageDiscount && (
                        <>
                          <div className="m-s-b text-gry-100 text-fs-10">
                            MXN ${" "}
                            {Math.floor(hotel.offers)
                              .toLocaleString("es-MX", { currency: "MXN" })
                              .replace(".00", "")}
                            .<sup>{(hotel.offers % 1).toFixed(2).slice(2)}</sup>
                          </div>
                          <div className="bg-red-100 text-white text-fs-12 px-[8px] py-[2px] rounded-r-md">
                            {hotel.percentageDiscount}%
                          </div>
                        </>
                      )}
                    </div>

                    <div className="m-b bg-[#E0FEF0] text-grn-100 text-fs-8  py-[4px] px-[8px] rounded md:mb-3">
                      {languageData.cartTour.taxesText}
                    </div>
                  </div>

                  <Link
                    // href={`/hotel/${hotel.codeName}?${requestQueryParams}`}
                    href={buildUrlWithParams(requestQueryParams)}
                    target="_blank"
                    className="no-underline bg-yw-100 text-black text-fs-12 m-b px-[20px] lg:px-[40px] py-[8px] rounded-full hover:bg-yw-110 text-nowrap"
                  >
                    {languageData.cardHotel.buttonShow}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
