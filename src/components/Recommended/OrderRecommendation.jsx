import TourRecommendation from "@/components/Recommended/Tour/TourRecommendation";
import HotelRecommendation from "@/components/Recommended/Hotel/HotelRecommendation";
import OffersNowRecommendation from "@/components/Recommended/OffersNowRecommendation";
import TransportRecommendation from "@/components/Recommended/Transport/TransportRecommendation";

export default function OrderRecommendation({ type }) {
  let order;
  const service = type;

  // IS HOTEL
  switch (service) {
    case "hotel":
      {
        order = (
          <>
            <TourRecommendation />
            <OffersNowRecommendation />
            <TransportRecommendation />
            <HotelRecommendation />
          </>
        );
      }
      break;
    // IS TOUR
    case "tour":
      {
        order = (
          <>
            <HotelRecommendation />
            <OffersNowRecommendation />
            <TransportRecommendation />
            <TourRecommendation />
          </>
        );
      }
      break;
    // IS TRANSPORT
    case "transport":
      {
        order = (
          <>
            <HotelRecommendation />
            <OffersNowRecommendation />
            <TourRecommendation />
            <TransportRecommendation />
          </>
        );
      }
      break;
  }

  return <div>{order}</div>;
}
