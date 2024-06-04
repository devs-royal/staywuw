export function DisabledInputTransport({ isListing, languageData, isSearch }) {
  return (
    <div className={`${isListing ? "w-full" : "max-lg:w-full"} relative`}>
      <img
        className="absolute left-4 bottom-0 top-0 my-auto W-[16px] h-[20px]"
        width="16px"
        height="20px"
        src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
        alt="transport-b"
      />

      <p className="m-0 top-2.5 left-[2.5rem] absolute text-gry-70 m-m text-fs-10">
        {languageData.SearchBox.tabHotel.autocomplete}
      </p>
      <input
        type="text"
        disabled
        className={`${
          isListing ? "w-full" : "w-full lg:w-[260px]"
        } placeholder:m-m placeholder:text-gry-70 m-b font-extrabold h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[22px] pr-4 pl-[2.4rem] shadow-sm focus:outline-none text-fs-12 cursor-not-allowed`}
        placeholder={
          isSearch
            ? "Buscando rutas..."
            : languageData.SearchBox.tabHotel.textDestination
        }
      />
    </div>
  );
}

export function DisabledInputTransportRelated({ isListing, languageData }) {
  return (
    <div className={`${isListing ? "w-full" : "max-lg:w-full"} relative`}>
      <img
        className="absolute left-4 bottom-0 top-0 my-auto W-[16px] h-[20px]"
        width="16px"
        height="20px"
        src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
        alt="transport-b"
      />

      <p className="m-0 top-2.5 left-[2.5rem] absolute text-gry-70 m-m text-fs-10">
        {languageData.SearchBox.tabHotel.autocomplete}
      </p>
      <input
        type="text"
        disabled
        className={`${
          isListing ? "w-full" : "w-full lg:w-[260px]"
        } placeholder:m-m placeholder:text-gry-70 m-b font-extrabold h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[22px] pr-4 pl-[2.4rem] shadow-sm focus:outline-none text-fs-12 cursor-not-allowed`}
        placeholder={languageData.SearchBox.tabHotel.textDestination}
      />
    </div>
  );
}
