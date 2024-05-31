export function formatAdultsAndChildren(adultChildren) {
  const adults = Math.floor(parseFloat(adultChildren));
  const children = Math.round((parseFloat(adultChildren) % 1) * 10);

  let adultsText = `${adults} adulto${adults !== 1 ? "s" : ""}`;
  let childrenText = children
    ? `, ${children} niño${children !== 1 ? "s" : ""}`
    : "";

  return adultsText + childrenText;
}

export function parseQueryParams(url, codeHotel) {
  const queryParams = new URLSearchParams(url);
  // const code = queryParams.get("code");
  const code = codeHotel.codeHotel;
  const type = queryParams.get("type");
  let checkIn = queryParams.get("check-in");
  let checkOut = queryParams.get("check-out");
  const occupanciesParam = queryParams.get("occupancies");

  let occupancies = [{ adults: 2, children: [] }];
  if (occupanciesParam) {
    occupancies = JSON.parse(decodeURIComponent(occupanciesParam));
  }

  const currentDate = new Date();
  const checkInDate = new Date(checkIn);

  if (checkInDate <= currentDate || checkInDate - currentDate < 2 * 24 * 60 * 60 * 1000) {
    const newCheckInDate = new Date(currentDate);
    newCheckInDate.setMonth(currentDate.getMonth() + 1);
    checkIn = newCheckInDate.toISOString().split('T')[0];
  }

  if (checkInDate <= currentDate || checkIn > checkOut) {
    const newCheckOutDate = new Date(currentDate);
    newCheckOutDate.setMonth(currentDate.getMonth() + 1);
    newCheckOutDate.setDate(currentDate.getDate() + 2);
    checkOut = newCheckOutDate.toISOString().split('T')[0];
  }

  return {
    code,
    type,
    "check-in": checkIn,
    "check-out": checkOut,
    occupancies,
  };
}

