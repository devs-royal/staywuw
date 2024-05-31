export function calculateTotalPeople(occupancies) {
  let totalPeople = 0;

  if (occupancies && occupancies.length) {
    occupancies.forEach((occupancy) => {
      totalPeople += occupancy.adults + (occupancy.children ? occupancy.children.length : 0);
    });
  }

  return totalPeople;
}
