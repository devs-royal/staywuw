import React from 'react'

export default function PopularStateSkeleton() {
    return (
        <div className='w-full h-[500px] bg-gry-30 rounded-lg flex gap-3 max-md:flex-col'>

            <div className='h-full w-full max-md:h-1/2 flex gap-3'>
                <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[23%] h-full rounded-lg max-md:w-1/2' />
                <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[77%] h-full rounded-lg max-md:w-1/2' />
            </div>

            <div className='flex flex-col h-full w-[268px] gap-3 max-md:h-1/2 max-md:flex-row max-md:w-full'>
                <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-1/2 rounded-lg max-md:h-full' />
                <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-1/2 rounded-lg max-md:h-full' />
            </div>

        </div>
    )
}
