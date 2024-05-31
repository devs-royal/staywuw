"use client"

import React, { useContext } from 'react'
import { Tour } from '@/config/Others/imagesBanners';
import LanguageContext from '@/language/LanguageContext'

export default function BannerHeaderTour() {

    const { languageData } = useContext(LanguageContext);
    
    return (
        // h-[442px] md:h-72 2xl:h-[480px] w-full
        <div className='relative flex items-center justify-center h-[442px] md:h-72 2xl:h-[480px] w-full '>
            <img
                src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/BannerHomeTour.webp`}
                className='w-full h-full object-cover select-none'>

            </img>

            <h1 className="absolute text-white m-b lg:text-fs-60 md:text-fs-40 max-sm:text-fs-20 ">
                {languageData.titleBanners[Tour.bannerHome.title]}
            </h1>
        </div>
    )
}
