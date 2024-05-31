import React from "react";
import { Rating } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export function SkeletonListingHMobil() {

  return (
    <div className="d-flex flex-column container">
      <>
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            className="d-flex mb-4 border border-1 rounded-3 p-0"
            style={{ height: "200px" }}
          >
            <Skeleton
              animation="wave"
              variant="rectangular"
              height="100%"
              className="width3"
            />
            <div className="width7 d-flex p-1 pt-2">
              <div className="width5 d-flex flex-column justify-content-around">
                <div>
                  <Skeleton
                    animation="wave"
                    height={17}
                    variant="text"
                    width="100%"
                  />
                  <Skeleton
                    animation="wave"
                    height={17}
                    variant="text"
                    width="60%"
                  />
                  <Rating
                    className="mt-2"
                    name="size-small"
                    animation="wave"
                    size="small"
                    readOnly
                  />

                  <div className="d-flex gap-2 mt-2">
                    <Skeleton variant="circular" width={30} />
                    <Skeleton variant="circular" width={30} />
                    <Skeleton variant="circular" width={30} />
                  </div>
                </div>

                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width="53%"
                  height={16}
                  className="mt-4"
                />
              </div>

              <div className="d-flex align-items-center ps-1 pe-1 justify-content-center">
                <Skeleton height="15em" width={4} />
              </div>

              <div className="width5 d-flex flex-column justify-content-around">
                <div className="d-flex justify-content-end">
                  <Skeleton variant="circular" animation="wave" width={30} />
                </div>
                <div className="d-flex flex-column align-items-center gap-1">
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width="60%"
                    height={11}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width="63%"
                    height={11}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width="85%"
                    height={19}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width="45%"
                    height={8}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    width="75%"
                    height={23}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
