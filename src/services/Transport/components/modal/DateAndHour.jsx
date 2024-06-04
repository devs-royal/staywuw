import React, { useContext } from "react";
import LanguageContext from "@/language/LanguageContext";
import ModalTransportContext from "../../context/ModalTransportContext";

export default function DateAndHour(props) {
  const { transport } = props;

  const {
    departureTime,
    setDepartureTime,
    comebackTime,
    setComebackTime,
    departureDate,
    setDepartureDate,
    comebackDate,
    setComebackDate,
  } = useContext(ModalTransportContext);

  // Manejadores para los cambios en los inputs
  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };
  const handleComebackDateChange = (e) => {
    setComebackDate(e.target.value);
  };
  const handleDepartureTimeChange = (e) => {
    setDepartureTime(e.target.value);
  };
  const handleComebackTimeChange = (e) => {
    setComebackTime(e.target.value);
  };
  const { languageData } = useContext(LanguageContext);
  return (
    <>
      <div className="flex w-full gap-[24px] mb-[36px]">
        {/* DATE */}
        <div className="w-1/2">
          <span>{languageData.SearchBox.tabHotel.date}</span>
          <div className="flex px-[16px] py-[11.5px] border border-[#ebebeb] items-center gap-2 relative">
            <img
              className="w-[14px] h-[16px]"
              src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
            />
            <input
              type="date"
              className="focus:outline-0 bg-white text-fs-12 m-m time-input"
              value={departureDate || ""}
              onChange={handleDepartureDateChange}
            />
          </div>
        </div>

        {/* HOUR */}
        <div className="w-1/2">
          <div>{languageData.ModalTransport.Schedule}</div>
          <div className="flex py-[11.5px] px-[16px] border border-[#ebebeb] items-center gap-2 relative">
            <img
              className=""
              src={`${process.env.NEXT_PUBLIC_URL}icons/general/schedule.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
            />
            <input
              type="time"
              id="timeInput"
              className="focus:outline-0 bg-white text-fs-12 m-m time-input"
              value={departureTime || ""}
              onChange={handleDepartureTimeChange}
            />
          </div>
        </div>
      </div>

      {/* ROUND */}
      {transport.round && (
        <div className="flex w-full gap-[24px] mb-[36px]">
          {/* DATE */}
          <div className="w-1/2">
            <span>Fecha</span>
            <div className="flex px-[16px] py-[11.5px] border border-[#ebebeb] items-center gap-2 relative">
              <img
                className="w-[14px] h-[16px]"
                src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
              />
              <input
                type="date"
                className="focus:outline-0 bg-white text-fs-12 m-m time-input"
                value={comebackDate || ""}
                onChange={handleComebackDateChange}
              />
            </div>
          </div>

          {/* HOUR */}
          <div className="w-1/2">
            <div>Horario</div>
            <div className="flex py-[11.5px] px-[16px] border border-[#ebebeb] items-center gap-2 relative">
              <img
                className=""
                src={`${process.env.NEXT_PUBLIC_URL}icons/general/schedule.svg`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
              />
              <input
                type="time"
                id="timeInput"
                className="focus:outline-0 bg-white text-fs-12 m-m time-input"
                value={comebackTime || ""}
                onChange={handleComebackTimeChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
