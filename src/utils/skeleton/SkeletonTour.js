import React from "react";
import { Container } from "react-bootstrap";
import { useIsMobile } from "../../config/Mobile/isMobile";
import { Rating, Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export function ActivitiesTourCardSkeleton({ isTopActivities = false }) {
  const isMobile = useIsMobile();
  return (
    <Container className="d-flex flex-column p-0">
      <div
        className={`d-flex flex-wrap p-0 row-gap-4 mt-3 ${
          isMobile ? "justify-content-around " : "justify-content-between"
        }`}
      >
        {isTopActivities === true ? (
          <Swiper
            spaceBetween={8}
            autoplay={{
              delay: 9000,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.7,
              },
            }}
          >
            {[...Array(9)].map((value, index) => (
              <SwiperSlide key={index}>
                <div className="card-tours-home width100">
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    className="image-card-t-h width100"
                  />

                  <div className="description-g-t-c width100">
                    <Skeleton animation="wave" variant="text" width="90%" />

                    <div className="d-flex justify-content-between cont-rating-text-tour-card-skeleton">
                      <Rating
                        name="no-value"
                        value={null}
                        className="mt-2 rating-tour-card"
                        width="20px"
                        readOnly
                      />
                      {/* <Skeleton
                    animation="wave"
                    variant="text"
                    width="30%"
                    height={20}
                  /> */}
                    </div>
                    <div className="cont-price-tour-card-popular d-flex  justify-content-between">
                      <div className="width5">
                        <Skeleton
                          animation="wave"
                          variant="text"
                          height={16}
                          width="60%"
                          className="mt-2"
                        />
                        <Skeleton
                          animation="wave"
                          variant="text"
                          height={16}
                          width="60%"
                          className="mt-2"
                        />
                      </div>

                      <Skeleton className="btn-see-details-card-tour-popular-skeleton width5" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          [...Array(8)].map((value, index) => (
            <div key={index} className="card-tours-home width100">
              <Skeleton
                animation="wave"
                variant="rectangular"
                className="image-card-t-h width100"
              />

              <div className="description-g-t-c width100">
                <Skeleton animation="wave" variant="text" width="90%" />

                <div className="d-flex justify-content-between cont-rating-text-tour-card-skeleton">
                  <Rating
                    name="no-value"
                    value={null}
                    className="mt-2 rating-tour-card"
                    width="20px"
                    readOnly
                  />
                  {/* <Skeleton
                  animation="wave"
                  variant="text"
                  width="30%"
                  height={20}
                /> */}
                </div>
                <div className="cont-price-tour-card-popular d-flex  justify-content-between">
                  <div className="width5">
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height={16}
                      width="60%"
                      className="mt-2"
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height={16}
                      width="60%"
                      className="mt-2"
                    />
                  </div>

                  <Skeleton className="btn-see-details-card-tour-popular-skeleton width5" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

export function SkeletonPopularTour() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        id="carousel-home-tour"
       
        navigation={true}
        modules={[Navigation]}
      >
        {[...Array(5)].map((image, item) => (
          <div key={item}>
            <SwiperSlide className="container-item-carrousel-tour gap-3">
              <div className="container-one-image-tour gap-3">
                <div className="carrousel-image column-image-one-tour">
                  <Skeleton variant="rounded" width="100%" height="100%" />
                </div>

                <div className="carrousel-image column-image-two-tour">
                  <Skeleton variant="rounded" width="100%" height="100%" />
                </div>
              </div>

              <div className="column-image-three-tour row-gap-3">
                <div className="carrousel-image column-image-tour-home">
                  <Skeleton variant="rounded" width="100%" height="100%" />
                </div>

                <div className="carrousel-image column-image-tour-home">
                  <Skeleton variant="rounded" width="100%" height="100%" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="container-item-carrousel-tour gap-3">
              <div className="container-one-image-tour gap-3">
                <div className="carrousel-image column-image-one-tour">
                  <Skeleton variant="rounded" width="100%" height="100%" />
                </div>

                <div className="carrousel-image column-image-two-tour">
                  <Skeleton variant="rounded" width="100%" height="100%" />
                </div>
              </div>

              <div className="column-image-three-tour row-gap-3">
                <div className="carrousel-image column-image-tour-home">
                  <Skeleton variant="rounded" width="100%" height="100%" />
                </div>

                <div className="carrousel-image column-image-tour-home">
                  <Skeleton variant="rounded" width="100%" height="100%" />
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
