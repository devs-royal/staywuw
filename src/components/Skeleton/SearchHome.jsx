export function SearchHomeSkeleton(){
    return (
        <div className="flex flex-col lg:flex-row items-center bg-white gap-2.5 rounded-lg p-6 shadow-3xl max-lg:w-[377px]">
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] rounded h-[53px] w-full lg:w-[290px]"/>
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full lg:w-[290px] rounded h-[54px]"/>
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full lg:w-[296px] rounded h-[54px]"/>
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full lg:w-[113px] h-[58px] rounded-[50px]"/>
        </div>
    )
}