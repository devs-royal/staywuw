"use client";

import { TotalStars } from "@/components/General/Stars";

export function HotelCardSkeleton() {
    return (
        <div className="mt-8">
            {/* SKELETON  WE FOUNT AND FILTER ORDER BY*/}
            <div className="flex justify-between items-center">
                <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[40%] h-[20px]' />
                <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[225px] h-[40px] max-md:w-[150px] rounded-lg' />
            </div>

            {/* SKELETON CARD */}
            {[...Array(10)].map((_, index) => (
                <div key={index} className="max-sm:px-4">
                    <div className="bg-gry-30 lg:h-[230px] max-sm:max-h-[35rem] max-sm:max-h-[35rem] w-full my-[20px] rounded-lg flex max-lg:flex-col">

                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[30%] h-full rounded-l-lg max-lg:w-full max-lg:h-[225px] max-lg:rounded-none max-lg:rounded-t-lg" />

                        <div className="w-[70%] p-[20px] max-lg:w-full">

                            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[80%] h-[20px] mb-1" />
                            <TotalStars />

                            <div className="flex mt-1 max-lg:flex-col">
                                <div className="w-3/5 flex flex-col gap-2 max-lg:w-full max-lg:mb-2">
                                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[50px]" />
                                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[100px]" />
                                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[50px] w-full" />
                                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[25px] w-[150px] rounded-lg" />
                                </div>

                                <div className="w-2/5 max-lg:w-full max-lg:items-start flex flex-col items-center gap-2 ml-[10px] max-lg:ml-0 border-l border-gry-70 max-lg:border-l-0 max-lg:border-t max-lg:flex-row  max-lg:justify-between max-lg:items-center">

                                    <div className="flex flex-col items-center max-lg:items-start gap-2">
                                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[70px] max-lg:mt-2" />
                                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[160px]" />
                                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[120px]" />
                                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[100px] rounded-lg" />
                                    </div>

                                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[35px] w-[150px] rounded-full" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function MobilSearchSkeleton() {
    return (
        <div className="bg-gry-30 w-full p-[1.25rem] flex flex-col gap-3">
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[80%] mt-2 mb-4" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[50px] w-full rounded-lg" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[50px] w-full rounded-lg" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[50px] w-full rounded-lg" />

            <div className="flex justify-between gap-4">
                <div className="lg:hidden animate-[skeletonLoading_1s_linear_infinite_alternate] h-[40px] w-[100px] rounded-full" />
                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[40px] w-full max-lg:!w-3/5 rounded-full" />
            </div>

        </div>
    )
}


