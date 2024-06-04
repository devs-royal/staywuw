import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { ListingHotelMobile } from "../listing/FilterTransportMobile";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";

export function ButtonSearch(props) {
  const {
    isListing,
    selectedAutoComplete,
    selectDestinationA,
    selectDestinationB,
    travelType,
  } = props;
  const { languageData, language } = useContext(LanguageContext);
  const router = useRouter();

  const [openFilter, setOpenFilter] = useState(false);

  const getTransportsLists = async () => {
    const ids = {
      destinationId: selectedAutoComplete.id,
      zoneFromId: selectDestinationA.id,
      zoneToId: selectDestinationB.id,
      type: travelType,
    };

    const params = new URLSearchParams(ids).toString();
    const transportRout = `/${language}/mx/${selectedAutoComplete.codeName}-${selectedAutoComplete.country}/transport?${params}`;
    router.push(transportRout);
  };
  const routerActual = NavigationConfig();

  const isTransport = () => {
    if (
      (routerActual && routerActual === "transport") ||
      routerActual === "transports"
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={`flex justify-between w-full gap-x-4`}>
      {isListing && isTransport && (
        <button
          className={`py-[8.5px] px-8 rounded-[50px] border-2 border-bl-100 text-center text-bl-100 m-b text-fs-12 ${
            isListing && "block xl:hidden"
          }`}
          onClick={() => setOpenFilter(true)}
        >
          Filtros
        </button>
      )}

      <button
        className={`w-full ${
          !isListing && "lg:w-auto py-[20px]"
        } rounded-[50px] flex gap-2 items-center justify-center m-b text-fs-12 text-white py-[8.5px] px-4 ${
          !selectedAutoComplete || !selectDestinationA || !selectDestinationB
            ? "bg-or-50 cursor-not-allowed"
            : "bg-or-100 hover:!bg-or-110"
        }`}
        variant="contained"
        color="primary"
        size="large"
        disabled={
          !selectedAutoComplete || !selectDestinationA || !selectDestinationB
        }
        sx={{ mt: 2 }}
        onClick={getTransportsLists}
      >
        {languageData.SearchBox.tabTour.button}
        <img
          className="h-4 w-4"
          src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-w.svg`}
          alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon search`}
        />
      </button>

      <ListingHotelMobile
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
      />
    </div>
  );
}
