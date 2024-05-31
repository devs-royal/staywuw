
import React from 'react'
import Image from 'next/image'

export default function BannerConfirmationT() {
    return (
        <div className='pointer relative w-full mt-8 pb-8'>
            <a href="tel:8009530342" target="_blank" rel="noopener noreferrer">

                <Image
                    src={`${process.env.NEXT_PUBLIC_URL}banners/desktop/cont-reserv-d.webp`}
                    alt='Banner-Confirmation'
                    width={1272}
                    height={246}
                    className='select-none w-full'
                ></Image>

                <div className="absolute w-[62%] ml-[60px] top-[34%] left-0 max-xl:ml-[89px] max-lg:ml-[20px] max-sm:top-[29%]">
                    <h2 className="m-b text-fsw-26 text-bl-100 text-left mb-[10px] max-lg:mb-0 max-sm:text-fs-10 max-[425px]:text-fsw-32">
                        ¿Le falta algo a tu reservación? 
                    </h2>

                    <h4 className="m-s-b text-fsw-20 max-lg:text-fsw-24 text-gry-100 m-0 max-sm:text-fs-8 max-[425px]:text-fsw-28">
                        Si tienes alguna duda llámanos al {" "}
                        <span className="m-b text-fs-24 m-0 max-lg:text-fs-12 max-[425px]:text-fsw-32 text-gry-110">
                            800 953 0342
                        </span>
                    </h4>
                </div>
            </a>
        </div>
    )
}
