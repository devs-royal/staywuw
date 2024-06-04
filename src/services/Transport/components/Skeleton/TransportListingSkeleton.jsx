import React from 'react'

export function WeFoundTransportSkeleton() {
    return (
        <div className="flex justify-between items-center my-[36px]">
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-1/2 h-[20px]' />
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[180px] h-[50px] max-lg:w-[150px] rounded-lg' />
        </div>
    )
}

export function CardTransportSkeleton() {
    return (
        <>
            {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gry-30 lg:h-[194px] max-sm:max-h-[35rem] max-sm:max-h-[35rem] w-full my-[20px] rounded-[8px] flex max-lg:flex-col">

                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[30%] h-full max-lg:h-[241px] rounded-l-[8px] max-lg:w-full max-lg:h-[225px] max-lg:rounded-none max-lg:rounded-t-lg" />

                    <div className="w-[70%] p-[20px] max-lg:w-full">

                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[80%] h-[20px] mb-[1.25rem]" />
                        {/* <div className='mb-[1rem]'><TotalStars /></div> */}

                        <div className="flex mt-1 max-lg:flex-col">
                            <div className="w-3/5 flex flex-col gap-2 max-lg:w-full max-lg:mb-2">
                                {/* <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[50px]" /> */}
                                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[130px]" />
                                <div className="bg-gry-50 h-[70px] w-[80%] flex gap-2 items-center" >
                                    <div className='flex flex-col gap-2'>
                                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[90px]" />
                                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[90px]" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[90px]" />
                                        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[90px]" />
                                    </div>
                                </div>
                                {/* <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[44px] w-[110px] rounded" /> */}
                            </div>

                            <div className="w-2/5 max-lg:w-full max-lg:items-start flex flex-col items-end gap-2 ml-[10px] max-lg:ml-0 border-l border-gry-70 max-lg:border-l-0 max-lg:border-t max-lg:flex-row  max-lg:justify-between max-lg:items-center max-lg:pt-[10px]">

                                <div className="flex flex-col items-end max-lg:items-start gap-2">
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
