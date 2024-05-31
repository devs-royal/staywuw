import moment from "moment";

export default function UpdateAutocomplete(props) {
  const { dataLocalSend } = props;

  // LOCAL STORAGE SAVE DATA STATIC
  // AUTOCOMPLETE SEARCH
  const requestSearch = {
    type: "destination",
    key: dataLocalSend.code,
    label: dataLocalSend.name,
    codeName:dataLocalSend.codeName,
    country:dataLocalSend.country,
    countryDestinationCodeName:`${dataLocalSend.codeName}-${dataLocalSend.country}`,
    // category:""
    provider: "hb",
  };

  const requestSearchJSON = JSON.stringify(requestSearch);
  localStorage.setItem("dataSearch", requestSearchJSON);

  // DATES SAVE
  const today = moment();
  const oneMonthFromToday = moment(today).add(1, "months");
  const oneMonthAndTwoDaysFromToday = moment(today)
    .add(1, "months")
    .add(2, "days");

  const selectedDates = [];
  const formattedOneMonth = oneMonthFromToday.toISOString(); // "2023-10-06T05:00:00.000Z"
  const formattedOneMonthAndTwoDays = oneMonthAndTwoDaysFromToday.toISOString();
  selectedDates.push(formattedOneMonth);
  selectedDates.push(formattedOneMonthAndTwoDays);
  localStorage.setItem("selectedDates", JSON.stringify(selectedDates));

  const requestRoom = [
    {
      adults: 2,
      children: [],
    },
  ];

  localStorage.setItem("roomData", JSON.stringify(requestRoom));

  const totalPeople = 2;

  localStorage.setItem("totalPeople", JSON.stringify(totalPeople));

  return null;
}
