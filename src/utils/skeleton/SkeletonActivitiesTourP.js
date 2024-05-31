import React from "react";
import { Skeleton } from "@mui/material";

export function SkeletonActivitiesTourP() {
  return (
    <div className="form-activity">
      <Skeleton
        variant="text"
        animation="wave"
        width="40%"
        sx={{ fontSize: "30px" }}
      />
        <div className="d-flex flex-column gap-2 mb-4">
          <div className="d-flex gap-2 width100 ">
            <Skeleton
              animation="wave"
              variant="circle"
              width="2rem"
              height="2rem"
            />
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "1.3rem" }}
              width="100%"
            />
          </div>

          <Skeleton
            animation="wave"
            variant="rounded"
            height="178px"
            width="100%"
          />
        </div>
    </div>
  );
}
