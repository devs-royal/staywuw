export const sortAndFilterHotels = (hotels, order) => {
  switch (order) {
    case 1:
      return [...hotels].sort((a, b) => b.exclusiveDeal - a.exclusiveDeal);
    case 2:
      return [...hotels].sort((a, b) =>
        b.isTop === a.isTop ? 0 : a.isTop ? -1 : 1
      );
    case 3:
      return [...hotels].sort(
        (a, b) => parseFloat(b.minRate) - parseFloat(a.minRate)
      );
    case 4:
      return [...hotels].sort(
        (a, b) => parseFloat(a.minRate) - parseFloat(b.minRate)
      );
    case 5:
      return [...hotels].sort((a, b) => {
        if (a.provider === "rh" && b.provider !== "rh") {
          return -1;
        } else if (a.provider !== "rh" && b.provider === "rh") {
          return 1;
        }
        return 0;
      });
    case 6:
      return [...hotels].sort((a, b) => {
        if (a.provider === "hb" && b.provider !== "hb") {
          return -1;
        } else if (a.provider !== "hb" && b.provider === "hb") {
          return 1;
        }
        return 0;
      });
    default:
      return hotels;
  }
};

export const applyFilters = (hotels, filters, pricing) => {
  const eatingPlanMap = {
    1: "AI",
    2: "OR",
    3: "CD",
    4: "SD",
    5: "LI",
    6: "DI",
  };

  return hotels.filter((hotel) => {
    const rate = parseFloat(hotel.minRate);

    if (
      (pricing.min && rate < pricing.min) ||
      (pricing.max && rate > pricing.max)
    ) {
      return false;
    }

    if (filters.stars && filters.stars.length > 0) {
      if (!filters.stars.includes(-1) && !filters.stars.includes(hotel.stars)) {
        return false;
      }
    }

    if (filters["hotel-type"] && filters["hotel-type"].length > 0) {
      if (
        !filters["hotel-type"].includes(-1) &&
        !filters["hotel-type"].some((type) => hotel.types.includes(type))
      ) {
        return false;
      }
    }

    if (filters["eating-plan"] && filters["eating-plan"].length > 0) {
      if (
        !filters["eating-plan"].includes(-1) &&
        !filters["eating-plan"].some((code) =>
          hotel.eatingPlan.includes(eatingPlanMap[code])
        )
      ) {
        return false;
      }
    }

    return true;
  });
};

export const combineHotelData = (sortedFilteredHotels, hotelDetails) => {
  return sortedFilteredHotels.map((hotel) => {
    const details = hotelDetails.hotels[hotel.key];
    if (details) {
      return { ...hotel, ...details };
    }
    return hotel;
  });
};
