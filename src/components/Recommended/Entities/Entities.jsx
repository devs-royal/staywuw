export function EntitiesRecommendations(
  language,
  type,
  infoReservation,
  cartUid
) {
  let shortInfoReservation = {
    name: infoReservation.name,
    cartUid: cartUid,
  };

  if (type === "hotel") {
    shortInfoReservation["checkIn"] = infoReservation.date.checkIn;
    shortInfoReservation["checkOut"] = infoReservation.date.checkOut;
  } else {
    shortInfoReservation["date"] = infoReservation.date;
  }

  const query = new URLSearchParams(shortInfoReservation).toString();
  return `/${language}/mx/recommendations/${type}/${infoReservation.codeName}?${query}`;
}
