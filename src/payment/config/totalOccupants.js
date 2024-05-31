import { useEffect, useState } from "react";

export function TotalOccupants(props) {
  const { occupants, language, confirmationPay = false } = props;
  let children = "";
  let adult = "";

  let totalChildren = 0;
  let totalAdult = 0;

  if (confirmationPay) {
    children = occupants.totalChildren > 1 ? "textChildren" : "textChild";
    adult = occupants.totalAdults > 1 ? "textAdults" : "textAdult";

    totalChildren = occupants.totalChildren;
    totalAdult = occupants.totalAdults;
  } else {
    children = occupants.children > 1 ? "textChildren" : "textChild";
    adult = occupants.adults > 1 ? "textAdults" : "textAdult";

    totalChildren = occupants.children;
    totalAdult = occupants.adults;
  }

  if (totalAdult && totalChildren) {
    return `${totalAdult}  ${language.itinerary.tourItinerary[adult]}, ${totalChildren} ${language.itinerary.tourItinerary[children]}`;
  }

  if (totalAdult && !totalChildren) {
    return `${totalAdult}  ${language.itinerary.tourItinerary[adult]}`;
  }
}

export function TotalOccupanciesModal(props) {
  const { language, details } = props;
  const [numNights, setNumNights] = useState(0);
  const [totalPeopleData, setTotalPeopleData] = useState(0);

  // DIFF DATES
  useEffect(() => {
    const datesLocal = JSON.parse(localStorage.getItem("selectedDates"));
    if (datesLocal && datesLocal.length >= 2) {
      const checkInDate = new Date(datesLocal[0]);
      const checkOutDate = new Date(datesLocal[1]);
      const oneDay = 24 * 60 * 60 * 1000;
      const diffDays = Math.round(
        Math.abs((checkInDate - checkOutDate) / oneDay)
      );
      setTimeout(() => {
        setNumNights(diffDays);
      }, 100);
    } else {
      setNumNights(2);
    }
  });

  // OCCUPANTS CALCULATION
  useEffect(() => {
    if (details && details.length > 0) {
      let totalOccupants = 0;
      details.forEach((roomSelected) => {
        totalOccupants += parseFloat(
          roomSelected.adults + roomSelected.children.length
        );
      });
      setTotalPeopleData(totalOccupants);
    } else {
      setTotalPeopleData(0);
    }
  }, [details, totalPeopleData]);

  const pluralNight = numNights >= 2 ? "nights" : "night";
  let pluralPerson = "person";

  if (totalPeopleData === 0) {
    pluralPerson = "people";
  } else if (totalPeopleData >= 2) {
    pluralPerson = "people";
  }
  const totalNights = numNights === 0 ? "0" : numNights;
  const totalPerson = totalPeopleData === 0 ? "0" : totalPeopleData;
  return `${totalNights} ${language.cardHotel[pluralNight]} ${totalPerson} ${language.cardHotel[pluralPerson]} `;
}

// RETURN PARSE NEW DATE TO MXN
export function ParseDateRangeDate(props) {
  const { validFirstDay, validSecondDay } = props;

  const splitFirsDate = validFirstDay.split("-");
  const splitSecondDate = validSecondDay.split("-");

  const parseFirstDate = `${splitFirsDate[2]}/${splitFirsDate[1]}/${splitFirsDate[0]}`;
  const parseSecondDate = `${splitSecondDate[2]}/${splitSecondDate[1]}/${splitSecondDate[0]}`;

  return `${parseFirstDate} - ${parseSecondDate}`;
}

