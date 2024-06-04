import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";

import FormCentral from "./Forms/FormCentral";
import AlertTextBooking from "./AlertTextBooking";
import LanguageContext from "../../language/LanguageContext";
import { FormDataProvider } from "../context/FormDataContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

export default function Booking(props) {
  const { dataItinerary, hasActivities } = props;
  const { languageData } = useContext(LanguageContext);
  const [activityPreBooking, setActivityPreBooking] = useState(null);

  const fetchData = async () => {
    try {
      const url = "/v1/pre-booking/";
      const searchParams = new URLSearchParams(window.location.search);
      const cartId = searchParams.get("uid");
      const response = await axiosWithInterceptor.get(`${url}${cartId}`);
      setActivityPreBooking(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormDataProvider>
      <>
        <div className="flex !gap-x-2 w-full items-start justify-start items-start !mb-2">
          <Image
            className="w-[27px] h-[25px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
            width={27}
            height={25}
          />
          <h1 className="text-fs-24 m-b text-black">
            {languageData.booking.titleVacations}
          </h1>
        </div>

        <h2 className="text-fs-14 m-m text-black mb-3">
          {languageData.booking.subtitleComplete}
        </h2>

        <FormCentral
          activityPreBooking={activityPreBooking}
          dataItinerary={dataItinerary.items}
          activityTrue={hasActivities}
        />
      </>
    </FormDataProvider>
  );
}
