"use client";

import React, { useEffect, useContext, useState } from "react";

// EXPORT NEW
import TourCard from "./TourCard";
import FilterTour from "./FilterTour";
import {
  BannerListingSkeleton,
  CardTourSkeleton,
  WeFoundTourSkeleton,
} from "../Skeleton/TourListingSkeleton";
import OrderingTour from "./OrderingTour";
import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import ImageListingTour from "../Banners/ImageListingTour";
import PaginationT from "@/components/General/PaginationT";
import { scrollToTop } from "@/utils/pageConfig/scrollToTop";
import { BannerDestinationTour } from "../Banners/BannerTour";
import { useTourContext } from "../../context/ListingTourContext";
import SearchBoxMobile from "@/components/searchMobil/SearchBoxMobile";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { NotFoundDestination } from "@/components/General/NotFoundDestination";

export default function ListingTour() {
  const {
    tourData,
    currentPage,
    setCurrentPage,
    updatePage,
    updateTourData,
    setTourData,
    orderTour,
  } = useTourContext();

  const { languageData } = useContext(LanguageContext);
  const [auxTourData, setAuxTourData] = useState(null);
  const [currentTours, setCurrentTours] = useState(null);
  const [changeTours, setChangeTours] = useState(0);

  // AXIOS ENDPOINT
  useEffect(() => {
    setTourData(null);
    setCurrentTours(null);
    const searchParams = new URLSearchParams(window.location.search);
    // const requestBody = {
    //   type: searchParams.get("type"),
    //   id: searchParams.get("code"),
    //   currency: "MXN",
    // };

    const codeNameTour = searchParams.get("codeNameTour");

    axiosWithInterceptor
      .get(`v1/destinations/${codeNameTour}/activities`)
      .then((response) => {
        updateTourData(response.data);
        scrollToTop();
      })
      .catch((error) => {
        console.error(error);
        setTourData([]);
      });
  }, []);

  useEffect(() => {
    if (currentPage === 1) {
      setCurrentPage(1);
    }
  }, [currentTours]);

  useEffect(() => {
    if (tourData && tourData.activities) {
      setAuxTourData(tourData);
      setCurrentTours(
        tourData && tourData.activities.slice(indexOfFirstTour, indexOfLastTour)
      );
    }
  }, [tourData]);

  useEffect(() => {
    if (changeTours > 0) {
      setCurrentTours(
        auxTourData &&
          auxTourData.activities.slice(indexOfFirstTour, indexOfLastTour)
      );
      setCurrentPage(1);
    }
  }, [changeTours]);

  useEffect(() => {
    if (!isNaN(currentPage)) {
      setCurrentTours(
        auxTourData &&
          auxTourData.activities.slice(indexOfFirstTour, indexOfLastTour)
      );
      // setCurrentPage(1);
    }
  }, [currentPage]);

  // useEffect(() => {
  //   if (changeTours > 0 || !isNaN(currentPage)) {
  //     setCurrentTours(
  //       auxTourData &&
  //         auxTourData.activities.slice(indexOfFirstTour, indexOfLastTour)
  //     );
  //     // setCurrentPage(1);
  //   }
  // }, [changeTours, currentPage]);

  // IMAGE
  const getKeyImage = (key, count) => {
    if (count === (currentPage - 1) * 10 + key) {
      return true;
    } else {
      if (key % 10 === 5) {
        if (key % 5 === 0) {
          return true;
        }
      }
      return false;
    }
  };

  const toursPerPage = 10;
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;

  // PAGINATION
  const handleChangePage = (event, newPage) => {
    updatePage(newPage);
    scrollToTop();
  };

  return (
    <>
      {!tourData && <BannerListingSkeleton />}

      {tourData && <BannerDestinationTour destination={tourData.destination} />}

      <Container>
        <div className="flex flex-col xl:flex-row md:justify-between">
          <div className="w-full xl:w-[28%] mt-10">
            <SearchBoxMobile className="margin-bottom" />

            {auxTourData && (
              <FilterTour
                className="margin-bottom"
                tourData={tourData}
                setAuxTourData={setAuxTourData}
                auxTourData={auxTourData}
                setChangeTours={setChangeTours}
                orderTour={orderTour}
              />
            )}
          </div>
          <div className="w-full xl:w-8/12 relative">
            {currentTours && (
              <div className="flex items-center justify-between my-[1.6rem] mx-0">
                <h5 className="m-s-b">
                  <span>{languageData.listingTour.weFound}</span>{" "}
                  {auxTourData.activities.length}{" "}
                  <span>{languageData.listingTour.excursionsActivities}</span>
                </h5>
                <OrderingTour />
              </div>
            )}

            {!currentTours && !tourData && <WeFoundTourSkeleton />}

            {tourData && tourData.length == 0 && <NotFoundDestination />}
            {/* <div className="cont-found-ordering-tour-skeleton">
              {!auxTourData && (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.25rem", width: "60%" }}
                />
              )}

              {!auxTourData && (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "3rem", width: "20%" }}
                />
              )}
            </div> */}

            {!tourData && <CardTourSkeleton />}

            {currentTours && (
              <>
                {currentTours
                  // .filter((tour) => !tour.name.toLowerCase().includes("free"))
                  .map((tour, index) => (
                    <div key={index}>
                      <TourCard
                        tour={tour}
                        destination={auxTourData.destination}
                      />
                      {getKeyImage(
                        index + 1,
                        auxTourData.activities.length
                      ) && <ImageListingTour />}
                    </div>
                  ))}
              </>
            )}

            {auxTourData && currentTours && (
              <div className="flex justify-center py-[1.5rem]">
                <PaginationT
                  count={Math.ceil(
                    auxTourData.activities.length / toursPerPage
                  )}
                  pageChange={currentPage}
                  onChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
