import React from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export function SkeletonRooms() {
  const showRooms = [
    { minMAx: true },
    { individual: true },
    { minMAx: true },
    { individual: true },
    { minMAx: true },
    { individual: true },
  ];

  return showRooms.map((room, index) => (
    <div
      key={index}
      style={{ height: "auto" }}
      className="d-flex flex-column border border-top-0 border-end-0 border-start-0 my-4"
    >
      <div style={{ height: "3.7em" }} className="d-flex">
        <Skeleton animation="wave" width="100%" height="4.6em" className="round-header-room-skeleton">
          <Typography>.</Typography>
        </Skeleton>
      </div>
      <div className="d-flex" style={{ height: "300px" }}>
        <div
          style={{ width: "30%", height: "100%" }}
          className="p-3 border border-top-0 border-bottom-0"
        >
          <Skeleton animation="wave" width="95%">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton animation="wave" width="89%">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton animation="wave" width="93%">
            <Typography>.</Typography>
          </Skeleton>
          <div className="pt-3">
            <ul className="color-ul-skeleton">
              <li>
                <Skeleton animation="wave" width="60%" height={22}></Skeleton>
              </li>
              <li>
                <Skeleton animation="wave" width="60%" height={22}></Skeleton>
              </li>
              <li>
                <Skeleton animation="wave" width="60%" height={22}></Skeleton>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          {room.minMAx ? SkeletonRoomIndividual() : SkeletonRoomMinMax()}
        </div>
      </div>
    </div>
  ));
}

function SkeletonRoomIndividual() {
  return (
    <div className="container d-flex p-0" style={{ height: "100%" }}>
      <div
        style={{ width: "40%" }}
        className="p-3 d-flex align-items-center justify-content-center flex-column gap-3 border border-top-0 border-bottom-0 border-start-0"
      >
        <div
          style={{ width: "100%" }}
          className="d-flex align-items-center justify-content-start gap-2"
        >
          <Skeleton width={22} height={22} variant="circular"></Skeleton>
          <Skeleton width="80%"></Skeleton>
        </div>
        <div
          style={{ width: "100%" }}
          className="d-flex align-items-center justify-content-start gap-2"
        >
          <Skeleton width={22} height={22} variant="circular"></Skeleton>
          <Skeleton width="75%"></Skeleton>
        </div>
      </div>
      <div
        style={{ width: "40%" }}
        className="p-3 border border-top-0 border-bottom-0 border-start-0 d-flex flex-column align-items-center justify-content-center gap-2"
      >
        <Skeleton animation="wave" width="90%" height="40px">
          <Typography>.</Typography>
        </Skeleton>
        <Skeleton width="50%" animation="wave" height={20}></Skeleton>
        <Skeleton width="90%" animation="wave" height={35}></Skeleton>
        <Skeleton width="50%" animation="wave" height={20}></Skeleton>
      </div>
      <div
        style={{ width: "20%" }}
        className="p-3 border border-top-0 border-bottom-0 border-start-0 d-flex justify-content-center align-items-center"
      >
        <Skeleton
          animation="wave"
          width="100%"
          height={73}
          style={{ borderRadius: "32px" }}
        ></Skeleton>
      </div>
    </div>
  );
}

function SkeletonRoomMinMax() {
  return (
    <div
      className="container d-flex flex-column p-0"
      style={{ height: "100%" }}
    >
      <div
        style={{ width: "100%", height: "50%" }}
        className="d-flex border border-top-0 border-start-0 border-end-0"
      >
        <div
          style={{ width: "40%" }}
          className="p-4 d-flex align-items-center justify-content-center flex-column gap-3 border border-top-0 border-bottom-0 border-start-0"
        >
          <div
            style={{ width: "100%" }}
            className="d-flex align-items-center justify-content-start gap-2"
          >
            <Skeleton width={22} height={22} variant="circular"></Skeleton>
            <Skeleton width="80%"></Skeleton>
          </div>
          <div
            style={{ width: "100%" }}
            className="d-flex align-items-center justify-content-start gap-2"
          >
            <Skeleton width={22} height={22} variant="circular"></Skeleton>
            <Skeleton width="70%"></Skeleton>
          </div>
        </div>

        <div
          style={{ width: "40%" }}
          className="p-4 border border-top-0 border-bottom-0 border-start-0 d-flex flex-column align-items-center justify-content-center gap-2"
        >
          <Skeleton animation="wave" width="90%" height="40px">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="50%" animation="wave" height={20}></Skeleton>
          <Skeleton width="90%" animation="wave" height={35}></Skeleton>
          <Skeleton width="50%" animation="wave" height={20}></Skeleton>
        </div>

        <div
          style={{ width: "20%" }}
          className="p-4 border border-top-0 border-bottom-0 border-start-0  border-start-0 d-flex justify-content-center align-items-center"
        >
          <Skeleton
            width="100%"
            height={73}
            style={{ borderRadius: "32px" }}
          ></Skeleton>
        </div>
      </div>

      <div
        style={{ width: "100%", height: "50%" }}
        className="d-flex border border-top-0 border-start-0 border-end-0"
      >
        <div
          style={{ width: "40%" }}
          className="p-4 d-flex align-items-center justify-content-center flex-column gap-3 border border-top-0 border-bottom-0 border-start-0"
        >
          <div
            style={{ width: "100%" }}
            className="d-flex align-items-center justify-content-start gap-2"
          >
            <Skeleton width={22} height={22} variant="circular"></Skeleton>
            <Skeleton width="80%"></Skeleton>
          </div>
          <div
            style={{ width: "100%" }}
            className="d-flex align-items-center justify-content-start gap-2"
          >
            <Skeleton width={22} height={22} variant="circular"></Skeleton>
            <Skeleton width="70%"></Skeleton>
          </div>
        </div>

        <div
          style={{ width: "40%" }}
          className="p-4 border border-top-0 border-bottom-0 border-start-0 d-flex flex-column align-items-center justify-content-center gap-2"
        >
          <Skeleton animation="wave" width="90%" height="40px">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="50%" animation="wave" height={20}></Skeleton>
          <Skeleton width="90%" animation="wave" height={35}></Skeleton>
          <Skeleton width="50%" animation="wave" height={20}></Skeleton>
        </div>

        <div
          style={{ width: "20%" }}
          className="p-4 border border-top-0 border-bottom-0 border-start-0 d-flex justify-content-center align-items-center"
        >
          <Skeleton
            animation="wave"
            width="100%"
            height={73}
            style={{ borderRadius: "32px" }}
          ></Skeleton>
        </div>
      </div>
    </div>
  );
}
