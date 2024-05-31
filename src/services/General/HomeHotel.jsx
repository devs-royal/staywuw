"use client";

import React from "react";

import "../../assets/styles/web/Hotel.css";

import SearchBox from "@/hooks/SearchBox";
import { Container } from "@/config/Others/Container";
import {
  BannerExcDiscounts,
  BannerHomeHotelTop,
  BannerHomeKnowMore,
} from "@/services/Hotels/components/home/bannerHotel";

import { PopularState } from "@/components/General/PopularEstates";
import ShuffleHotel from "@/services/Hotels/components/home/ShuffleHotel";
import TourRecommended from "@/services/Hotels/components/home/TourRecommended";
import { TransportBanner } from "@/services/Hotels/components/home/TransportBanner";

export const HomeHotel = () => {
  return (
    <>
      <div className="relative flex justify-center align-center mb-[256px] lg:mb-[118px]">
        <BannerHomeHotelTop />
        <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center">
          <SearchBox />
        </div>
      </div>

      <Container>
        <BannerExcDiscounts />
        <PopularState />
        <ShuffleHotel />
        <TransportBanner />
        <TourRecommended />
        <BannerHomeKnowMore />
      </Container>
    </>
  );
};

export default HomeHotel;
