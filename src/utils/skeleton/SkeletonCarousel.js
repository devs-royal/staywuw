import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import "../../assets/styles/web/SkeletonCarousel.css"

export default function SkeletonCarousel() {
  return (
    <Box className="card-carousel-skeleton">
      <Skeleton
      className="skeleton-image-carousel"
        sx={{ bgcolor: "grey.400" }}
        variant="rectangular"
      />
      <div className="box-skeleton-carousel">
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
            width: "60%",
            height: "16px",
          }}
        />

        <Skeleton
          animation="wave"
          style={{
            width: "50%",
            height: "12px",
            margin: "20px 0px",
          }}
        />
      </div>
    </Box>
  );
}
