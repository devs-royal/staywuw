import React from 'react'
import { TotalStars } from "@/components/General/Stars";

export function BannerListingSkeleton() {
    return (
        <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[13rem]' />
    )
}

export function WeFoundTourSkeleton() {
    return (
        <div className="flex justify-between items-center my-8">
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-1/2 h-[20px]' />
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[180px] h-[50px] max-md:w-[150px] rounded-lg' />
        </div>
    )
}

export function CardTourSkeleton() {
    return (
        <>
            {[...Array(10)].map((_, index) => (
                <div key={index} className="bg-gry-30 lg:h-[250px] max-sm:max-h-[35rem] w-full my-[20px] rounded-lg flex max-md:flex-col">

                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[30%] h-full max-lg:h-[241px] rounded-l-lg max-md:w-full max-md:h-[225px] max-md:rounded-none max-md:rounded-t-lg" />

                    <div className="w-[70%] p-[20px] max-md:w-full">

                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[80%] h-[20px] mb-[1.25rem]" />
                        <div className='mb-[1rem]'><TotalStars /></div>

                        <div className="flex mt-1 max-md:flex-col">
                            <div className="w-3/5 flex flex-col gap-2 max-md:w-full max-md:mb-2">
                                {/* <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[50px]" /> */}
                                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[100px]" />
                                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[50px] w-full" />
                                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[44px] w-[110px] rounded" />
                            </div>

                            <div className="w-2/5 max-md:w-full max-md:items-start flex flex-col items-center gap-2 ml-[10px] max-md:ml-0 border-l border-[#ebebeb] max-md:border-l-0 max-md:border-t max-md:flex-row  max-md:justify-between">

                                <div className="flex flex-col items-center max-md:items-start gap-2">
                                    {/* <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[70px] max-lg:mt-2" /> */}
                                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[160px]" />
                                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[120px]" />
                                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[100px] rounded" />
                                </div>

                                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[35px] w-[150px] rounded-full" />
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}