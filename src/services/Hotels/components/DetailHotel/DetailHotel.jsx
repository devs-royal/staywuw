import RoomsDetails from "./RoomsDetails";
import { SearchModalHotel } from "../GalleryModal/SearchModalHotel";

export default function DetailsHotel(codeHotel) {
  return (
    <div className="bg-white py-9 pl-4 lg:pl-9 lg:py-6 rounded-lg mt-2">
      <SearchModalHotel />
      <RoomsDetails codeHotel={codeHotel.codeHotel} />
    </div>
  );
}
