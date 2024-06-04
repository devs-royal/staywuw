import moment from "moment";

export function UpdateAutocompleteTour(props) {
  const { dataLocalSend } = props;

  const requestSearch = {
    codeName: dataLocalSend.codeName,
    country: dataLocalSend.country,
    countryDestinationCodeName: `${dataLocalSend.codeName}-${dataLocalSend.country}`,
    key: dataLocalSend.code,
    label: dataLocalSend.name,
    type: dataLocalSend.autocomplete.type,
  };

//   return
  const requestSearchJSON = JSON.stringify(requestSearch);
  localStorage.setItem("searchTour", requestSearchJSON);

  // UPDATE CALENDARDAY
  const today = moment();
  const oneMonthFromToday = moment(today).add(1, "months");
  const formattedOneMonth = oneMonthFromToday.toISOString(); 
  const requestCalendarJSON = JSON.stringify([formattedOneMonth]);
  localStorage.setItem("calendarDay", requestCalendarJSON);

  const tourData = [
    {
      adults: 2,
      children: [],
    },
  ];

  localStorage.setItem("tourData", JSON.stringify(tourData));
  localStorage.setItem("personsData", JSON.stringify(tourData));
  return null
}
