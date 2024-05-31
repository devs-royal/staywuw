"use client";

import { hotel } from '@/config/Others/imagesBanners';
import LanguageContext from '@/language/LanguageContext';
import Image from 'next/image'
import { useContext } from 'react';

export default function BannerCallHotelT() {
  const { languageData } = useContext(LanguageContext);
  return (

    <div className='pointer relative w-full'>
      <a href="tel:8009530342" target="_blank" rel="noopener noreferrer">

        <Image
          src={`${process.env.NEXT_PUBLIC_URL}banners/desktop/call-d.webp`}
          alt='Banner-Call-Center'
          width={1272}
          height={246}
          className='select-none'
        ></Image>

        <div className="absolute w-[62%] ml-[60px] top-[26%] left-0 max-xl:ml-[89px] max-lg:ml-[20px] max-sm:top-[12%]">
          <h2 className="m-b text-fsw-24 text-bl-100 text-left mb-[10px] max-lg:mb-0 max-sm:text-fs-10 max-[425px]:text-fsw-32">
            {languageData.titleBanners[hotel.bannerCallCenter.title]}
          </h2>

          <h4 className="m-s-b text-fsw-16 text-gry-100 m-0 max-sm:text-fs-8 max-[425px]:text-fsw-28">
            {languageData.titleBanners[hotel.bannerCallCenter.paragraph1]}{" "}
            <span className="m-b text-fs-20 m-0 max-lg:text-fs-12 max-[425px]:text-fsw-32">
              {languageData.titleBanners.titleNumber}
            </span>
            {languageData.titleBanners[hotel.bannerCallCenter.paragraph2]}{" "}
          </h4>
        </div>
      </a>
    </div>
  );
}

