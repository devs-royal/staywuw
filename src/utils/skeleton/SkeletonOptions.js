import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "../../assets/styles/web/SkeletonCarousel.css"

export default function SkeletonOptions() {
  return (
    <div className="d-flex flex-column height100 width100">
      <Skeleton
        sx={{ bgcolor: "grey.400" }}
        variant="rectangular"
        className="image-skeleton-options"
      />
      <div className="box-skeleton-carousel-options">
        <Skeleton
          animation="wave"
          style={{
            width: "90%",
            height: "16px",
          }}
        />

        <Skeleton
          animation="wave"
          style={{
            width: "50%",
            height: "16px",
          }}
        />

        <Skeleton
          animation="wave"
          style={{
            width: "45%",
            height: "12px",
            margin: "32px 0px 0px",
          }}
        />

        <Skeleton
          animation="wave"
          style={{
            width: "50%",
            height: "30px",
            margin: "5px 0px",
          }}
        />

        <Skeleton
          animation="wave"
          style={{
            width: "38%",
            height: "12px",
          }}
        />
      </div>
    </div>
  );
}
