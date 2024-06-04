
import { TotalStars } from '../General/Stars'

export default function BannerCardHome() {
    return (
        <div className="absolute flex justify-between w-full bottom-0">

            <div className="text-fs-20 m-s-b text-white pl-[24px] w-[250px] items-center flex">Lorem ipsum dolor sit amet</div>

            <div className="bg-white rounded-tl-lg px-[16px] py-[8px] w-[189px]">
                <h4 className="text-fs-12 m-m">Hotel Nickelodeon riviera maya</h4>
                <TotalStars
                    stars={5}
                    width={"w-[11]"}
                    height={"h-[11]"}
                />

                <span className="flex m-b text-fs-10 gap-2 items-center">desde <span className="text-fs-16"> MXN $10,000</span></span>
            </div>
        </div>
    )
}
