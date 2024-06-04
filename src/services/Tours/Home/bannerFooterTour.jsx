import Image from 'next/image'

export default function BannerFooterTour() {

  return (
    <div className='my-[120px] w-full max-sm:my-[30px]'>
      <Image
        src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/banner-tour.webp`}
        width={1272}
        height={469}
        alt='banner-footer-tour'
        className='w-[99%] h-auto select-none max-md:hidden'
      />

      <Image
        src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/banner-tour-mobile.jpg`}
        width={608}
        height={608}
        alt='banner-footer-tour-mobile'
        className='w-[608px] h-auto select-none md:hidden'
      />
    </div>
  )
}
