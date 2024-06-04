import React from "react";

export default function LoadingProgress({ width = null, height = null ,text = null , count = null, value = null }) {
  return (
    <div className="relative w-fit">
      <svg
        className={`${width ? width : "w-[50px]"} ${height ? height : "h-[50px]"}"size-full"`}
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-yw-100"
          stroke-width="2"
        ></circle>

        <g className="origin-center -rotate-90 transform">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            // className="stroke-current text-gry-70"
            className="stroke-current text-bl-100 border-none"
            stroke-width="2"
            stroke-dasharray="100"
            stroke-dashoffset={value}
          ></circle>
        </g>

      </svg>

      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className={`${text ? text : "text-fs-15"} text-center m-b text-black`}>
          {count ? count : ""}
        </span>
      </div>

    </div>
  );
}
