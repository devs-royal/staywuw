import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Rating } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import { useIsMobile } from "../../config/Mobile/isMobile";

function SkeletonChildren() {
  const isMobile = useIsMobile();
  return (
    <div className="d-flex flex-column">

      <div className="d-flex pt-3 pb-2 justify-content-start">
        <Skeleton width="60%" height={12} variant="rounded" animation="wave">
          <Typography>.</Typography>
        </Skeleton>
      </div>

      {!isMobile && (
        <div className="d-flex gap-1 justify-content-end align-items-center mb-4">
          <Skeleton variant="text" animation="wave" height={22} width="10%" />
          <Skeleton
            width="25%"
            height={33}
            variant="rounded"
            animation="wave"
          />
        </div>
      )}

      <Row xs={1} md={1}>
        {Array.from({ length: 10 }).map((_, idx) =>
          isMobile ? (
            <div key={idx} className="ps-2 pe-2 pb-0 pt-0">
              <SkeletonCardListing />
            </div>
          ) : (
            <Card key={idx} sx={{ display: "flex" }} className="card-hotel">
              <Skeleton
                variant="rectangular"
                className="card-hotel-image-skeleton"
                width="100%"
              >
                <div style={{ paddingTop: "57%" }} />
              </Skeleton>
              <Col className="card-hotel-col">
                <div className="card-hotel-title">
                  <Skeleton variant="text" width="100%" />
                </div>
                <div className="city-card-title">.</div>
                <Rating name="size-small" animation="wave" size="small" />
                <div className="card-hotel-text">
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                </div>
                <div className="loading-card">
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                </div>
              </Col>
              <div className="v-line"></div>
              <Col className="card-hotel-load">
                <div className="card-hotel-subtitle">
                  <Skeleton
                    animation="wave"
                    style={{
                      width: "40%",
                      height: "10px",
                      margin: "20% 30% 0% 30%",
                    }}
                  />
                </div>
                <div className="card-hotel-information">
                  <Skeleton
                    animation="wave"
                    style={{
                      width: "70%",
                      height: "10px",
                      margin: "2% 25% 0% 25%",
                    }}
                  />
                </div>

                <div className="center-text">
                  <span className="card-hotel-room-availability">
                    <Skeleton
                      animation="wave"
                      style={{
                        width: "32%",
                        height: "10px",
                        margin: "0% 34% 10% 34%",
                      }}
                    />
                  </span>
                  <span className="card-hotel-people">
                    <Skeleton
                      animation="wave"
                      style={{
                        width: "50%",
                        height: "10px",
                        margin: "0% 25% 0% 25%",
                      }}
                    />
                  </span>
                  <span className="card-hotel-price">
                    <Skeleton
                      animation="wave"
                      style={{
                        width: "60%",
                        height: "40px",
                        margin: "0% 20% 0% 20%",
                      }}
                    />
                  </span>
                  <span className="card-hotel-taxes">
                    <Skeleton
                      animation="wave"
                      style={{
                        width: "40%",
                        height: "10px",
                        margin: "0% 30% 0% 30%",
                      }}
                    />
                  </span>
                </div>

                <Skeleton
                  animation="wave"
                  style={{
                    width: "50%",
                    height: "50px",
                    margin: "0% 25% 0% 25%",
                  }}
                />
              </Col>
            </Card>
          )
        )}
      </Row>
    </div>
  );
}

function SkeletonCardListing() {
  return (
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
            <Skeleton animation="wave" height={17} variant="text" width="60%" />
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
            <Skeleton variant="text" animation="wave" width="60%" height={11} />
            <Skeleton variant="text" animation="wave" width="63%" height={11} />
            <Skeleton variant="text" animation="wave" width="85%" height={19} />
            <Skeleton variant="text" animation="wave" width="45%" height={8} />
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
  );
}

export default SkeletonChildren;
