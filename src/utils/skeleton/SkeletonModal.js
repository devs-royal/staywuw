import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { useIsMobile } from "../../config/Mobile/isMobile";

export default function SkeletonModal() {
  const isMobile = useIsMobile();
  return (
    <Container>
      {isMobile ? (
        <>
          <Skeleton variant="text" animation="wave" height={33} width="100%" />
          <div className="d-flex justify-content-between">
            <Skeleton variant="text" animation="wave" width="20%" />
            <div className="width9">
              <Skeleton
                className="ms-2"
                variant="text"
                animation="wave"
                width="75%"
              />
            </div>
          </div>
          <Skeleton variant="rectangular" height="400px" width="100%" />
          <div className="mt-3 d-flex flex-column">
            <Skeleton variant="text" animation="wave" height={35} width="50%" />
            <div className="d-flex justify-content-between mt-3 ms-4 me-4">
              {[...Array(4)].map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  animation="wave"
                  width={70}
                  height={70}
                />
              ))}
            </div>
            <Skeleton
              className="mt-3"
              width="100%"
              height={12}
              variant="text"
              animation="wave"
            />
          </div>
          <Skeleton className="mt-4" variant="text" animation="wave" height={35} width="50%" />
          <Skeleton className="mt-4" variant="text" animation="wave" width="100%" />
          <Skeleton variant="text" animation="wave" width="98%" />
          <Skeleton variant="text" animation="wave" width="80%" />
          <Skeleton variant="text" animation="wave" width="100%" />
          <Skeleton variant="text" animation="wave" width="90%" />
          <Skeleton variant="text" animation="wave" width="100%" />

          <Skeleton variant="text" animation="wave" className="mt-4 mb-1" height={35} width="50%"/>
          <Skeleton variant="text" animation="wave" width="40%"/>
          <Skeleton variant="text" animation="wave" width="45%"/>
          <Skeleton variant="text" animation="wave" width="54%"/>

          <Skeleton className="m-search-skeleton" variant="rounded" animation="wave" width="100%" height={98}/>
          
          <Skeleton className="mt-4 mb-2" animation="wave" variant="text" width="56%" height={35}/>
          {
            [...Array(5)].map((_,index)=>(
              <Skeleton className="mb-4" key={index} animation="wave" variant="rounded" width="100%" height={392}/>
            ))
          }
        </>
      ) : (
        <>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "70%", marginTop: 2 }}>
              <Skeleton width="70%">
                <Typography>.</Typography>
              </Skeleton>
            </Box>
          </Box>

          <Box sx={{ width: "10%", display: "inline-flex", marginTop: 1 }}>
            <Skeleton width="90%">
              <Typography>.</Typography>
            </Skeleton>
          </Box>

          <Box sx={{ width: "40%", display: "inline-flex", marginTop: 1 }}>
            <Skeleton width="40%">
              <Typography>.</Typography>
            </Skeleton>
          </Box>

          <div className="skeleton-container-gallery">
            <Row>
              <Col sm={8}>
                <Skeleton
                  variant="rectangular"
                  // width="auto"
                  height={485}
                  className="skeleton-gallery-image"
                />
                <Box
                  className="d-flex justify-content-center"
                  style={{ marginTop: 42 }}
                >
                  <Skeleton
                    variant="rectangular"
                    width="13%"
                    height={65}
                    style={{ marginRight: 10 }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width="13%"
                    height={65}
                    style={{ marginRight: 10 }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width="13%"
                    height={65}
                    style={{ marginRight: 10 }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width="13%"
                    height={65}
                    style={{ marginRight: 10 }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width="13%"
                    height={65}
                    style={{ marginRight: 10 }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width="13%"
                    height={65}
                    style={{ marginRight: 10 }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width="6%"
                    height={65}
                    style={{ marginRight: 10 }}
                  />
                </Box>
              </Col>

              <Col sm={4} className="skeleton-information-modal-col">
                <Box sx={{ width: "60%", marginTop: 2, marginBottom: 4 }}>
                  <Skeleton width="60%">
                    <Typography>.</Typography>
                  </Skeleton>
                </Box>

                <div>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ width: "96%", marginTop: 6 }}
                  />
                </div>

                <div>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ width: "92%", marginTop: 6 }}
                  />
                </div>

                <div>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ width: "88%", marginTop: 6 }}
                  />
                </div>

                <div>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ width: "84%", marginTop: 6 }}
                  />
                </div>

                <div>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ width: "86%", marginTop: 6 }}
                  />
                </div>

                <div>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ width: "68%", marginTop: 6 }}
                  />
                </div>

                <Box sx={{ width: "75%", marginTop: 5 }}>
                  <Skeleton width="75%">
                    <Typography>.</Typography>
                  </Skeleton>
                </Box>

                <div className="skeleton-circular-information-m">
                  <Skeleton variant="circular">
                    <Avatar />
                  </Skeleton>

                  <Skeleton variant="circular">
                    <Avatar />
                  </Skeleton>

                  <Skeleton variant="circular">
                    <Avatar />
                  </Skeleton>

                  <Skeleton variant="circular">
                    <Avatar />
                  </Skeleton>
                </div>

                <Box sx={{ width: "60%", marginTop: 7, marginBottom: 4 }}>
                  <Skeleton width="60%">
                    <Typography>.</Typography>
                  </Skeleton>
                </Box>

                <ul className="list-details-payment">
                  <li className="details-hotels-text">
                    {" "}
                    <Skeleton
                      animation="wave"
                      height={10}
                      style={{ width: "45%", marginTop: 2 }}
                    />
                  </li>

                  <li className="details-hotels-text">
                    {" "}
                    <Skeleton
                      animation="wave"
                      height={10}
                      style={{ width: "45%", marginTop: 2 }}
                    />
                  </li>
                  <li className="details-hotels-text">
                    {" "}
                    <Skeleton
                      animation="wave"
                      height={10}
                      style={{ width: "60%", marginTop: 2 }}
                    />
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          <div className="row-update-skeleton">
            <div className="avatar-update-skeleton">
              <Skeleton variant="circular" width="24px" height="24px">
                <Avatar />
              </Skeleton>
              <Skeleton
                animation="wave"
                height={10}
                style={{ width: "75%", marginTop: 6, marginLeft: 1 }}
              />
            </div>

            <div className="avatar-update-skeleton">
              <Skeleton variant="circular" width="24px" height="24px">
                <Avatar />
              </Skeleton>
              <Skeleton
                animation="wave"
                height={10}
                style={{ width: "75%", marginTop: 6, marginLeft: 1 }}
              />
            </div>

            <div className="avatar-update-skeleton">
              <Skeleton variant="circular" width="24px" height="24px">
                <Avatar />
              </Skeleton>
              <Skeleton
                animation="wave"
                height={10}
                style={{ width: "75%", marginTop: 6, marginLeft: 1 }}
              />
            </div>

            <Skeleton
              animation="wave"
              height={10}
              style={{ width: "12%", marginTop: 6 }}
            />
          </div>
        </>
      )}
    </Container>
  );
}
