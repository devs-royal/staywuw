import React from "react";

export default function SkeletonDetailTour() {
  return (
    <div className="flex max-lg:flex-col mt-12">
      <div className="bg-gry-30 p-[20px] flex flex-col gap-4 w-1/2 max-lg:w-full max-lg:h-[20rem]">
        <div className="flex gap-2">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[125px] h-[35px]" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[125px] h-[35px]" />
        </div>

        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[80px] h-[40px]" />

        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[90px]" />
      </div>

      <div className="pl-[54px] pt-[2.25rem] w-1/2 flex flex-col gap-[2rem] max-lg:w-full max-lg:pl-0">
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[150px] h-[20px]" />

        <div className="flex gap-2">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[90px] h-[160px] rounded-lg" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[90px] h-[160px] rounded-lg" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[90px] h-[160px] rounded-lg" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[90px] h-[160px] rounded-lg max-sm:hidden" />
        </div>

        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[90px] h-[20px]" />

        <div className="flex gap-2">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[90px] h-[40px] rounded-lg" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[90px] h-[40px] rounded-lg" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[90px] h-[40px] rounded-lg" />
        </div>

        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[125px] h-[20px]" />

        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[218px] h-[219px] rounded-lg" />
      </div>
    </div>
  );
}
