import React from "react";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

export default function AnimationFlyMobile({isListing=false}) {
  return (
    <Box className={isListing ? "m-box-linear-listing" : "m-box-linear"}>
      <LinearProgress />
    </Box>
  );
}
