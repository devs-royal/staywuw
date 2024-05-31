"use client";

import Image from 'next/image'
import React, { useContext } from 'react'
import LanguageContext from '@/language/LanguageContext'

export default function EmptyCart() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className='flex flex-col items-center'>
      <Image
        src={`${process.env.NEXT_PUBLIC_URL}royal/fly-gry.svg`}
        alt='fly-gry'
        width={72}
        height={65}
        className='mb-6 mt-2'
      />

      <h4 className='m-b text-fs-14 mb-2'>{languageData.cart.empty}</h4>

      <span className='m-m text-gry-100 text-fs-12 mb-6'>{languageData.cart.textMessage}</span>

      <button className='m-s-b text-fs-12 text-white bg-bl-100 px-4 py-3 hover:bg-bl-110 rounded-full mb-12'>{languageData.cart.startNow}</button>
    </div>
  )
}
