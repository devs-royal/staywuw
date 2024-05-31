import GolfIcon from "../../assets/icons/hotel/listing/golf.svg";
import GolfActiveIcon from "../../assets/icons/hotel/listing/golf-active.svg";
import GymIcon from "../../assets/icons/hotel/listing/gym.svg";
import GymActiveIcon from "../../assets/icons/hotel/listing/gym-active.svg";
import KidsIcon from "../../assets/icons/hotel/listing/kids-club.svg";
import KidsActiveIcon from "../../assets/icons/hotel/listing/kids-club-active.svg";
import PoolIcon from "../../assets/icons/hotel/listing/pool.svg";
import PoolActive from "../../assets/icons/hotel/listing/pool-active.svg";
import RestaurantIcon from "../../assets/icons/hotel/listing/restaurant.svg";
import RestaurantActiveIcon from "../../assets/icons/hotel/listing/restaurant-active.svg";
import RoomService from "../../assets/icons/hotel/listing/service-room.svg";
import RoomServiceActive from "../../assets/icons/hotel/listing/service-room-active.svg";
import SpaIcon from "../../assets/icons/hotel/listing/spa.svg";
import SpaActiveIcon from "../../assets/icons/hotel/listing/spa-active.svg";
import WifiIcon from "../../assets/icons/hotel/listing/wifi.svg";
import WifiActiveIcon from "../../assets/icons/hotel/listing/wifi-active.svg";

export const facilities = {
  "wi-fi": {
    default: WifiIcon,
    active: WifiActiveIcon,
    label: "wifi",
  },
  golf: {
    default: GolfIcon,
    active: GolfActiveIcon,
    label: "golf",
  },
  pool: {
    default: PoolIcon,
    active: PoolActive,
    label: "pool",
  },
  restaurant: {
    default: RestaurantIcon,
    active: RestaurantActiveIcon,
    label: "restaurant",
  },
  gym: {
    default: GymIcon,
    active: GymActiveIcon,
    label: "gym",
  },
  spa: {
    default: SpaIcon,
    active: SpaActiveIcon,
    label: "spa",
  },
  "kids-club": {
    default: KidsIcon,
    active: KidsActiveIcon,
    label: "kids",
  },
  "room-service": {
    default: RoomService,
    active: RoomServiceActive,
    label: "roomService",
  },
};
