import IconHotel from "../../assets/icons/utils/navigation/hotel.svg";
import IconHotelActive from "../../assets/icons/utils/navigation/hotel-active.svg";
import IconTour from "../../assets/icons/utils/navigation/tour.svg";
import IconTourActive from "../../assets/icons/utils/navigation/tour-active.svg";
// import IconTour from "../../assets/icons/utils/navigation/tour.svg";
// import IconTourActive from "../../assets/icons/utils/navigation/tour-active.svg";
// import IconTransportation from "../../assets/icons/utils/navigation/transportation.svg";
// import IconTransportationActive from "../../assets/icons/utils/navigation/transportation-active.svg";

const navigation = [
  {
    id: "",
    label: "hotel",
    imageSrc: IconHotel,
    activeImageSrc: IconHotelActive,
  },
  {
    id: "tour",
    label: "tour",
    imageSrc: IconTour,
    activeImageSrc: IconTourActive,
  },
];

// if (process.env.REACT_APP_DEV === "true") {
//   navigation.push(
//     {
//       id: "transportation",
//       label: "transportation",
//       imageSrc: IconTransportation,
//       activeImageSrc: IconTransportationActive,
//     }
//   );
// }

export { navigation };
