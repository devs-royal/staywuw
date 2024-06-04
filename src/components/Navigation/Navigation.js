import React from "react";
import Image from "next/image";

import Line from "../../assets/images/others/group 75.jpg";
import NavigationDesktop from "./NavigationDesktop";
import HeaderBlue from "./HeaderBlue";

export default function Navigation({hotelDetails=false}) {
  return (
    <div className={`${hotelDetails ? 'static' : 'static' } flex flex-col top-0 z-[9]`}>
      <Image
        src={Line}
        alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} orange`}
        height={8}
        priority={true}
        className="size-full"
      />
      <div className="md:h-[124px] md:pb-2 bg-white border-b border-gry-70">
        <HeaderBlue />

        <NavigationDesktop />
      </div>
    </div>
  );
}
