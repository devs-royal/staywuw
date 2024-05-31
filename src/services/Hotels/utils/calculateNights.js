export function calculateNights(checkIn, checkOut) {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return daysDifference;
}
