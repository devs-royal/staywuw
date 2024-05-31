import { Rating, Skeleton } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useIsMobileNew } from "../../config/Mobile/isMobile";
export function SkeletonTourModal() {
  const isMobile = useIsMobileNew();
  return (
    <>
      <Skeleton
        variant="text"
        animation="wave"
        width="4rem"
        height="1.2rem"
        className="mb-2"
      />

      <div className="d-flex width100">
        <Skeleton
          animation="wave"
          variant="rounded"
          className="image-modal-hotel-major-tour"
          // height="480px"
          // width="100%"
        />
      </div>

      <div className="row mt-3 justify-content-between">
        <div className="col-md-8">
          <Skeleton
            animation="wave"
            variant="text"
            height="3rem"
            width="100%"
          />
        </div>

        <div className="col-md-4 d-flex flex-column align-items-start">
          <Skeleton
            animation="wave"
            variant="text"
            height="2rem"
            width="100%"
          />
          <Skeleton
            animation="wave"
            variant="text"
            height="1.6rem"
            width="70%"
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            height="1.8rem"
            width="56%"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-2 width100">
        <Skeleton animation="wave" variant="text" width="17%" />
        <Rating readOnly={true} size="small" sx={{ fontSize: "23px" }} />
      </div>

      <div className="d-flex flex-wrap gap-2 my-3">
        {[...Array(3)].map((value, index) => (
          <Skeleton
            key={index}
            animation="wave"
            variant="rounded"
            height="2.5rem"
            width="9rem"
            className="detail-radius"
          />
        ))}
      </div>

      <span className="width100 line-down d-flex" />

      <div className="d-flex width100">
        <Skeleton
          animation="wave"
          className="select-info-tour-modal"
          width={`${isMobile ? "100%" : "50%"}`}
          height="5rem"
        />
      </div>

      <Skeleton
        animation="wave"
        variant="text"
        width="7rem"
        height="1rem"
        className="mb-3"
      />

      <Swiper
        // slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2.7,
          },
          600: { slidesPerView: 4 },

          700: {
            slidesPerView: 4.5,
          },

          850: {
            slidesPerView: 5.5,
          },

          1200: {
            slidesPerView: 7,
          },
        }}
        id="dates-tour-modal"
        // navigation={true}
      >
        {[...Array(7)].map((value, key) => (
          <SwiperSlide key={key} id="date-tour-modal">
            <div className="calendar-contain-tour">
              <div className="d-flex flex-column align-items-center">
                <Skeleton animation="wave" width="2rem" height="1rem" />
                <Skeleton animation="wave" width="3rem" height="4rem" />
                <Skeleton animation="wave" width="2rem" height="1rem" />
              </div>

              <hr className="line-divided-calendar-tour-m mt-1 mb-1" />

              <div className="d-flex flex-column align-items-center width100">
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="50%"
                  height="1.3rem"
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="70%"
                  height="2.3rem"
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="50%"
                  height="1.4rem"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Skeleton
        animation="wave"
        variant="text"
        height="1.6rem"
        width="3rem"
        className="mt-4"
      />

      <div className="gap-4 d-flex align-items-center width100 flex-wrap mt-3">
        {[...Array(4)].map((value, item) => (
          <Skeleton
            key={item}
            animation="wave"
            variant="rounded"
            width="13%"
            height="2.4rem"
          />
        ))}
      </div>

      <Skeleton
        animation="wave"
        variant="text"
        height="1.6rem"
        width="4.3rem"
        className="mt-4"
      />

      <div className="d-flex gap-3 align-items-center justify-content-around flex-wrap">
        {[...Array(3)].map((value, item) => (
          <div key={item} className="modality-tour">
            <div className="contend-tour-title-price width100">
              <div className="d-flex justify-content-center"></div>
              <Skeleton
                animation="wave"
                variant="text"
                width="60%"
                height="2rem"
              />

              <Skeleton
                animation="wave"
                variant="text"
                width="40%"
                height="2rem"
              />

              <div className="d-flex flex-column">
                {[...Array(3)].map((value, item) => (
                  <div
                    key={item}
                    className="d-flex justify-content-between width100 align-items-center"
                  >
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height="1.8rem"
                      width="29%"
                    />

                    <Skeleton
                      animation="wave"
                      variant="text"
                      height="1.8rem"
                      width="25%"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-selected-modality">
              <Skeleton
                animation="wave"
                variant="rounded"
                width="60%"
                height="3rem"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
