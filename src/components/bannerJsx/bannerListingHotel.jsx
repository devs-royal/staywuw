import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";

import { hotel } from "../../config/Others/imagesBanners";
import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
// import { DialogOrderHotel } from "../Dialog/DialogOrderHotel";
// import { DialogFilterHotel } from "../Dialog/DialogFilterHotel";
// import { HotelContext } from "../../config/context/HotelContext";
import { DialogSearch } from "../Mobile/Hotel/Listing/DialogSearch";
// import { calculateNights } from "../../Hotel/Utils/calculateNights";
import { ParseDateRangeDate } from "../../payment/config/totalOccupants";

import RoomWhite from "../../assets/icons/hotel/listing/room-white.svg";
import PersonWhite from "../../assets/icons/hotel/listing/person-white.svg";
import LocationWhite from "../../assets/icons/hotel/listing/location-white.svg";
import CalendarWhite from "../../assets/icons/hotel/listing/calendar-white.svg";
import { DialogFilterHotel } from "../../services/Hotels/components/Dialog/DialogFilterHotel";
import { DialogOrderHotel } from "../../services/Hotels/components/Dialog/DialogOrderHotel";

export function BannerListingHotelTop() {
  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();

  const [position, setPosition] = useState(0);
  useEffect(() => {
    const randomPosition = Math.floor(
      Math.random() * hotel.bannerListing.data.length
    );
    setPosition(randomPosition);
  }, []);

  return (
    <picture className="position-image-new-listing">
      <Image
        src={
          isMobile ? hotel.bannerListing.imageMobile : hotel.bannerListing.image
        }
        alt={hotel.bannerListing.alt}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      />

      <div className="position-new-titles-listing first-banner">
        <h2 className="text-image-new-h2-listing" data-aos="fade-right">
          {languageData.titleBanners[hotel.bannerListing.data[position].title]}
        </h2>

        <h4 className="text-image-nex-h4-listing">
          {languageData.titleBanners[hotel.bannerListing.paragraph]}
        </h4>
      </div>
    </picture>
  );
}

export function BannerListingHotelBottom() {
  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();

  return (
    <picture className="content-image-comunication">
      <a href="tel:8009530342" target="_blank" rel="noopener noreferrer">
        <Image
          src={
            isMobile
              ? hotel.bannerCallCenter.imageMobile
              : hotel.bannerCallCenter.image
          }
          className="img-banner-listing-tour-radius"
          alt={hotel.bannerCallCenter.alt}
        />

        <div className="position-new-titles-listing">
          <h2 className="text-image-call-banner">
            {languageData.titleBanners[hotel.bannerCallCenter.title]}
          </h2>

          <h4 className="text-image-call-banner-h4">
            {languageData.titleBanners[hotel.bannerCallCenter.paragraph1]}{" "}
            <span className="span-new-text">
              {languageData.titleBanners.titleNumber}
            </span>
            {languageData.titleBanners[hotel.bannerCallCenter.paragraph2]}{" "}
          </h4>
        </div>
      </a>
    </picture>
  );
}

export function BlockBlueHotelListing() {
  const searchParams = new URLSearchParams(window.location.search);
  const destination = searchParams.get("destination");
  const checkIn = searchParams.get("check-in");
  const checkOut = searchParams.get("check-out");
  const occupanciesCode = searchParams.get("occupancies");
  const { languageData } = useContext(LanguageContext);

  // const { hotelData } = useContext(HotelContext);

  const decodedOccupancies = JSON.parse(decodeURIComponent(occupanciesCode));

  const [totalPeople, setTotalPeople] = useState(0);

  // DIALOG SEARCH
  const [dialogSearch, setDialogSearch] = useState(false);

  // DIALOG ORDER
  const [dialogOrder, setDialogOrder] = useState(false);
  const handleShowDialog = async () => {
    setDialogOrder(true);
  };

  // DIALOG FILTER
  const [dialogFilter, setDialogFilter] = useState(false);
  const handleShowDialogF = async () => {
    setDialogFilter(true);
  };

  useEffect(() => {
    let total = 0;

    decodedOccupancies.forEach((occupancy) => {
      total += occupancy.adults + occupancy.children.length;
    });

    setTotalPeople(total);
  }, [decodedOccupancies]);

  return (
    <>
      <div className="m-block-blue-data">
        <div className="m-mrg-line">
          <Image src={LocationWhite} alt="LocationWhite" />
          <span className="m-pdg-left">{destination}</span>
        </div>

        <div>
          <Image src={CalendarWhite} alt="CalendarWhite"/>
          <span className="m-pdg-left">
            <ParseDateRangeDate
              validFirstDay={checkIn}
              validSecondDay={checkOut}
            />
          </span>

          <span className="m-pdg-icon">
            <Image src={RoomWhite} alt="RoomWhite" /> {decodedOccupancies.length}
          </span>

          <span className="m-pdg-left">
            <Image src={PersonWhite} alt="PersonWhite" className="m-pdg-left" /> {totalPeople}
          </span>
        </div>
      </div>

      <div className="m-flex-btn">
        <button className="m-btn-dev " onClick={() => setDialogSearch(true)}>
          {languageData.ListingPhrases.find}
        </button>

        <button className="m-btn-dev " onClick={handleShowDialogF}>
          {languageData.ListingPhrases.filter}
        </button>

        <button className="m-btn-dev " onClick={handleShowDialog}>
          {languageData.ListingPhrases.order}
        </button>
      </div>

      {dialogSearch && (
        <DialogSearch openDialog={dialogSearch} closeDialog={setDialogSearch} />
      )}

      {dialogOrder && (
        <DialogOrderHotel
          open={dialogOrder}
          onClose={() => setDialogOrder(false)}
        />
      )}

      {dialogFilter && (
        <DialogFilterHotel
          open={dialogFilter}
          onClose={() => setDialogFilter(false)}
        />
      )}
    </>
  );
}
