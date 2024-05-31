import moment from "moment";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";

import Room from "../config/RoomBox"; 
import Calendar from "@/hooks/Calendar";
import SearchHotel from "./SearchHotel";
// import { useIsMobile } from "@/config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";
import AutocompleteHotel from "./AutocompleteHotel";

export default function SendHotel() {
  const router = useRouter();
  const { language, languageData } = useContext(LanguageContext);
  const [validFirstDay, setValidFirstDay] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [validSecondDay, setValidSecondDay] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);

  useEffect(() => {
    const storedSelectedDates = localStorage.getItem("selectedDates");
    const storedValidFirstDay = localStorage.getItem("validFirstDay");
    const storedValidSecondDay = localStorage.getItem("validSecondDay");
    const dataSearch = localStorage.getItem("dataSearch");

    if (dataSearch) {
      const parsedDataSearch = JSON.parse(dataSearch);
      setSelectedOption(parsedDataSearch);
    }

    if (storedSelectedDates) {
      setSelectedDates(JSON.parse(storedSelectedDates));
    }

    if (selectedDates) {
      //test
    }

    if (storedValidFirstDay) {
      setValidFirstDay(storedValidFirstDay);
    }

    if (storedValidSecondDay) {
      setValidSecondDay(storedValidSecondDay);
    }

    const storedRoomData = localStorage.getItem("roomData");
    if (storedRoomData) {
      const parsedRoomData = JSON.parse(storedRoomData);
      setRoomData(parsedRoomData);
    }
  }, [validFirstDay, validSecondDay]);

  const handleDateChange = (selectedDates) => {
    setSelectedDates(selectedDates);
    localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
    if (selectedDates && selectedDates.length >= 2) {
      const FormatCheckIn = selectedDates[0];
      const CheckIn = moment(FormatCheckIn).format("YYYY-MM-DD");
      setValidFirstDay(CheckIn);
      localStorage.setItem("validFirstDay", CheckIn);

      const FormatCheckOut = selectedDates[1];
      const CheckOut = moment(FormatCheckOut).format("YYYY-MM-DD");
      setValidSecondDay(CheckOut);
      localStorage.setItem("validSecondDay", CheckOut);
      
    }
  };

  // SEND LINK SECOND LISTING
  const sendAutocomplete = () => {
    // setShowModal(true);
    const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));
    const requestBody = {
      codeNameHotel: selectedOption.codeName,
      destination: selectedOption.label,
      codeName: selectedOption.codeName,
      code: selectedOption.key,
      type: selectedOption.type,
      "check-in": validFirstDay,
      "check-out": validSecondDay,
      occupancies: encodedRoomData,
    };
    const query = new URLSearchParams(requestBody).toString();
    if(selectedOption.type === "hotel"){
      window.open(`/${language}/mx/${selectedOption.destination}-${selectedOption.country}/${selectedOption.destination}-hotels/${selectedOption.codeName}?${query}`, '_blank')
    }else{
      router.push(`${language}/mx/${selectedOption.codeName}-${selectedOption.country}/hotels?${query}`);
    }
  };


  const [isHotelResults, setIsHotelResults] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      setIsHotelResults(currentPath.endsWith("/hotel/results"));
    }
  }, []);

  
  

  return (
    // <div className="flex flex-col lg:flex-row items-center bg-white gap-2.5 rounded-lg p-6">
    <div className={`flex ${isHotelResults ? 'flex-col' : 'flex-col lg:flex-row'} shadow-3xl items-center bg-white gap-2.5 rounded-lg p-6`}>

      {/* <SearchHotel onSelectSearch={setSelectedOption} /> */}
      <AutocompleteHotel/>
      <Calendar onDateChange={handleDateChange} />
      <Room OnApply={setRoomData} />

      <>
        <button
          className={`w-full lg:w-auto rounded-[50px] justify-center flex gap-2 items-center m-b text-fs-12 text-white py-[20px] px-4 ${
            !selectedOption || !validFirstDay || !validSecondDay
              ? "bg-or-50"
              : "bg-or-100 hover:!bg-or-110"
          }`}
          // eslint-disable-next-line react/no-unknown-property
          variant="contained"
          size="large"
          onClick={sendAutocomplete}
          disabled={!selectedOption || !validFirstDay || !validSecondDay}
          // eslint-disable-next-line react/no-unknown-property
          sx={{ mt: 2 }}
        >
          {languageData.SearchBox.tabHotel.buttonSearch}
          <img
            className="h-4 w-4"
            src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-w.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon search`}
          />
        </button>
      </>
    </div>
  );
}

// https://staywuw.com/en/mexico/cancun-mexico/{zone}-hotels/renaissance-cancun-resort-marina/
// https://staywuw.com/en/mexico/{zone}-{cointry}/hotels