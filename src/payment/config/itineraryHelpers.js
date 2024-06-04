const isAnyHotelUnavailable = (dataItinerary) => {
  // return dataItinerary.items.some((item) => item.available === true);
  return dataItinerary.items.some((item) => item.available === false);
};

export { isAnyHotelUnavailable };
