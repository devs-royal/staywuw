"use client";

import { useEffect, useState } from "react";

import TabsTours from "./TabsTours";
import DetailTour from "./DetailTour";
import DayCalendar from "./DayCalendar";
import { HoursSelect } from "./HoursSelect";
import { Container } from "@/config/Others/Container";
import SkeletonDetailTour from "../Skeleton/SkeletonDetailTour";
import { ModalitiesTicket } from "./TicketTourDetails/ModalitiesTicket";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export default function Tour(props) {
  const { params, tourMetaData } = props;
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axiosWithInterceptor.get(
          `v1/activities/${params.id}/availability?dateFrom=2024-05-17&days=5&provider=ct`
        );
        setTourData(response.data);
      } catch (error) {
        console.error("Failed to fetch tour data:", error);
      }
    };

    fetchTourData();
  }, []);

  return (
    <Container>
      {/* <div className="p-9 mt-[25.8px]">  LP  TASK 20*/}
      {tourMetaData && <DetailTour tourData={tourMetaData.activity} />}

      {!tourData && <SkeletonDetailTour />}

      {tourData && (
        <div className="p-9 ">
          <div className="flex flex-col lg:flex-row mt-9">
            <div className="w-full lg:w-6/12 shadow-3xl p-4">
              <TabsTours tourData={tourData.activity} />
            </div>

            <div className="w-full flex-col lg:w-6/12 pt-9 lg:pl-[54px]">
              <DayCalendar
                tourSchedule={tourData.activity.schedule}
                tourData={tourData.activity}
              />
              <HoursSelect />
              <ModalitiesTicket tourData={tourData} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
