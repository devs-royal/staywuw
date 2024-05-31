import Image from 'next/image'

export default function BannerFooterTour() {

  return (
    <div className='my-[120px] w-full max-sm:my-[30px]'>
        <Image
        src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/banner-tour.webp`}
        width={1272}
        height={469}
        alt='banner-footer-tour'
        className='w-[99%] h-auto select-none'
        />
    </div>
  )
}
