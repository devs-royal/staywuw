import "swiper/css";
import "swiper/css/pagination";
import "../../../../assets/styles/general/Swiper.css";

import Link from "next/link";
import Image from "next/image";
import { Rating } from "@mui/material";
import { Pagination } from "swiper/modules";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import { TourDialogInfo } from "./TourDialogInfo";
import LanguageContext from "@/language/LanguageContext";

import IconLocationBlue from "../../../../assets/icons/utils/others/location-blue.svg";
import ImageNotFount from "../../../../assets/images/banners/es/no-image-available.png";
import "../../../../assets/styles/general/Swiper.css";

export default function TourCard(props) {
  const maxLength = 290;

  const { tour } = props;

  const description = tour.description;

  const { languageData, language } = useContext(LanguageContext);

  const buildUrlWithParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const destination = searchParams.get("codeNameTour");
    const requestBody = {
      code: searchParams.get("code"),
      type: searchParams.get("type"),
      dateStart: searchParams.get("dateStart"),
      adults: searchParams.get("adults"),
      children: searchParams.get("children"),
    };

    const query = new URLSearchParams(requestBody).toString();

    const baseUrl = `/${language}/mx/${destination}-mexico/tours/${tour.codeName}?${query}`;
    return `${baseUrl}`;
  };

  return (
    <>
      <div className="cont-card-tour-test d-flex">
        <div className="card-listing-tour">
          <div className="image-card-tour-l">
            {/* <img className='image-card-tour-test' src='https://sandboxmexico.com/assets/banners/desktop/banner-about-us.webp' alt='tour-test-banner-abaut-us' /> */}
            <Swiper
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="swiperCardTour swiperCardTourLP"
              id="images-tour-listing"
            >
              {tour.images && tour.images.length > 0 ? (
                tour.images.slice(0, 5).map((tourImage, index) => (
                  <SwiperSlide
                    key={index}
                    id={`dotsSwiperHotel${index}`}
                    style={{ width: 280, height: "100%" }}
                  >
                    <img
                      className="object-fit-cover img-tour-list"
                      alt="tours list"
                      src={tourImage}
                      width={"100%"}
                      height={"100%"}
                      effect="blur"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <img
                  src={ImageNotFount}
                  alt="notFount"
                  className="object-fit-cover rounded-start-4 img-tour-list"
                ></img>
              )}
            </Swiper>
          </div>

          <div className="cont-card-info-star-loc-price">
            <h2 className="title-card-tour-test truncate w-[95%]">
              {tour.name}
            </h2>

            <Rating
              className="stars-card-tour-font-size"
              name="size-small"
              style={{ padding: "5px 0px" }}
              defaultValue={0}
              value={tour.starRating}
              size="small"
              readOnly
            />

            <div className="d-flex cont-mobile-loc-price">
              <div className="cont-info-card-tour-test">
                {tour.address && (
                  <div className="d-flex gap-1">
                    <Image
                      src={IconLocationBlue}
                      alt="IconLocationBlue"
                      className="icons-card-tour-w-s"
                    />
                    <span className="text-blue-card-tour-test">
                      {tour.address}
                    </span>
                  </div>
                )}

                <span className="text-grey-card-tour-test-s">
                  {description && description.length > maxLength ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: description.substring(0, maxLength) + "...",
                      }}
                    ></div>
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                  )}
                </span>

                {/* <div className="cont-icons-water-and-baggage">
                  <IconWater className="icons-card-tour-w" />
                  <IconBaggage className="icons-card-tour-w" />
                </div> */}

                <div className="cont-duration-card-tour">
                  <span className="text-grey-card-tour-test-m">
                    {languageData.cartTour.duration}{" "}
                    {tour.duration ? tour.duration : "Sin información"}
                  </span>
                </div>
              </div>

              <div className="line-card-tour-grey"></div>

              <div className="cont-price-percentage-details">
                <div className="content-card-tour-gap-percentage">
                  <h2 className="text-black-card-tour-test-m">
                    {/* TEXT FROM /LP15-02-24 */}
                    {languageData.cartTour.from}
                    {tour.originalPrice ? (
                      <span className="text-black-card-tour-test-g">
                        MXN $
                        {Math.floor(tour.originalPrice)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .
                        <sup>
                          {(tour.originalPrice % 1).toFixed(2).slice(2)}
                        </sup>
                      </span>
                    ) : (
                      <span className="text-black-card-tour-test-g">
                        MXN $
                        {Math.floor(tour.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .<sup>{(tour.price % 1).toFixed(2).slice(2)}</sup>
                      </span>
                    )}
                  </h2>

                  {tour.discount > 0 && (
                    <div className="d-flex cont-text-percentage">
                      <del className="text-grey-card-tour-test-g">
                        MXN $
                        {Math.floor(tour.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .<sup>{(tour.price % 1).toFixed(2).slice(2)}</sup>
                      </del>
                      <div className="cont-percentage-red">
                        {tour.discount} %
                      </div>
                    </div>
                  )}
                  {/* TEXT TAXES LP-15-02-24 */}
                  <div className="cont-taxes-included-green">
                    {languageData.cartTour.taxesText}
                  </div>
                </div>

                {/* TEXT SEE-DETAILS LP-15-02-24 */}
                <Link
                  target="_blank"
                  className="cont-see-details-tour width100"
                  // onClick={() => openDialog(tour)}
                  href={buildUrlWithParams()}
                  // href={`/tour/${tour.name}`}
                >
                  {languageData.cartTour.seeDetails}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
