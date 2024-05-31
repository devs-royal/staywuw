import * as React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Skeleton from "@mui/material/Skeleton";
import { Rating } from "@mui/material";

import { useIsMobileNew, useIsMobile } from "../../config/Mobile/isMobile";
import "../../assets/styles/web/SkeletonConfirmPay.css";

export default function SkeletonPay({ steep = 1 }) {
  const isMobile = useIsMobile();
  const isMobileNew = useIsMobileNew();

  return (
    <>
      {isMobileNew ? (
        <>
          <div className="grey-container-skeleton">
            <Container>
              <div className="d-flex justify-content-between pt-5">
                {[...Array(3)].map((value, item) => (
                  <div
                    key={item}
                    className="d-flex align-items-center flex-column p-2"
                  >
                    <Skeleton
                      variant="circular"
                      animation="wave"
                      height="3rem"
                      width="3rem"
                    />

                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="3.4rem"
                      height="0.8rem"
                    />
                  </div>
                ))}
              </div>

              <div className="d-flex flex-column my-5 gap-1">
                <div className="d-flex align-items-center">
                  <Skeleton
                    variant="circular"
                    animation="wave"
                    height="2rem"
                    width="2rem"
                  />

                  <Skeleton
                    variant="text"
                    animation="wave"
                    height="1.2rem"
                    width="4rem"
                  />
                </div>
                <Skeleton
                  variant="text"
                  animation="wave"
                  height="1rem"
                  width="7rem"
                />
              </div>

              <div className="d-flex flex-column gap-3">
                {[...Array(4)].map((value, index) => (
                  <div key={index} className="d-flex gap-1 align-items-start">
                    <div className="d-flex flex-column align-items-center">
                      <Skeleton
                        variant="circular"
                        animation="wave"
                        width="1.7rem"
                        height="1.7rem"
                      />
                      <div className="d-flex flex-column align-items-center">
                        {[...Array(7)].map((value, item) => (
                          <Skeleton
                            key={item}
                            variant="text"
                            animation="wave"
                            width="4px"
                            height="26px"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-start width100">
                      <div className="d-flex flex-column">
                        <Skeleton
                          variant="text"
                          animation="wave"
                          width="5rem"
                          height="1rem"
                        />
                        <Skeleton
                          variant="text"
                          animation="wave"
                          width="7rem"
                          height="1rem"
                        />
                      </div>

                      <div className="p-3 d-flex flex-column rounded-2 width100 bg-white">
                        <div className="d-flex width100 gap-2 align-items-center border border-top-0 border-start-0 border-end-0 pb-3">
                          <Skeleton
                            variant="rounded"
                            animation="wave"
                            width="30%"
                            height="6rem"
                          />
                          <div className="d-flex flex-column align-items-start width7">
                            <Skeleton
                              variant="text"
                              animation="wave"
                              height="0.8rem"
                              width="100%"
                            />
                            <Rating
                              name="no-value"
                              value={null}
                              readOnly
                              style={{ fontSize: "1.2rem" }}
                            />

                            <div className="d-flex align-items-center">
                              <Skeleton
                                variant="circular"
                                animation="wave"
                                height="2rem"
                                width="2rem"
                              />

                              <Skeleton
                                variant="text"
                                animation="wave"
                                height="0.8rem"
                                width="5rem"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between my-3 border border-top-0 border-start-0 border-end-0">
                          <div className="d-flex flex-column">
                            <Skeleton
                              variant="text"
                              animation="wave"
                              width="5.8rem"
                              height="0.8rem"
                            />
                            <Skeleton
                              variant="text"
                              animation="wave"
                              width="5rem"
                              height="0.8rem"
                            />
                          </div>

                          <div className="d-flex flex-column">
                            <Skeleton
                              variant="text"
                              animation="wave"
                              width="5.8rem"
                              height="0.8rem"
                            />
                            <Skeleton
                              variant="text"
                              animation="wave"
                              width="5.8rem"
                              height="1.5rem"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-column">
                          <Skeleton
                            variant="text"
                            animation="wave"
                            width="6rem"
                            height="1rem"
                          />

                          <div
                            className="d-flex align-items-center rounded-top-2 justify-content-between width100 p-2"
                            style={{ backgroundColor: "#e0e0e0" }}
                          >
                            <Skeleton
                              variant="text"
                              animation="wave"
                              width="36%"
                              height="1rem"
                            />

                            <div className="d-flex flex-column width4">
                              <Skeleton
                                variant="text"
                                animation="wave"
                                width="100%"
                                height="0.8rem"
                              />
                              <Skeleton
                                variant="text"
                                animation="wave"
                                width="100%"
                                height="0.8rem"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </>
      ) : (
        <Container>
          <Row>
            <Col sm={7}>
              <div className="d-flex justify-content-between mb-5 mt-5">
                {[...Array(3)].map((value, item) => (
                  <div key={item} className="skeleton-payment-steep" />
                ))}
              </div>

              <div className="d-flex justify-content-between width100 align-items-center pt-5">
                <div className="d-flex align-items-center gap-2 width5">
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width="2rem"
                    height="2rem"
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    width="30%"
                    height="1.8rem"
                  />
                </div>

                <Skeleton
                  variant="text"
                  animation="wave"
                  width="50%"
                  height="1.8rem"
                />
              </div>

              <Skeleton
                variant="text"
                animation="wave"
                width="18%"
                height="1rem"
                className="mb-4"
              />

              <div className="d-flex flex-column gap-4">
                {[...Array(3)].map((value, item) => (
                  <div className="d-flex" key={item}>
                    <div className="d-flex flex-column justify-content-start align-items-center">
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width="1rem"
                        height="1rem"
                      />

                      <div className="d-flex flex-column">
                        {[...Array(8)].map((value, index) => (
                          <Skeleton
                            key={index}
                            variant="text"
                            animation="wave"
                            width="0.2rem"
                            height="1.7rem"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="d-flex flex-column gap-2 ms-3 width100">
                      <Skeleton
                        variant="text"
                        animation="wave"
                        width="50%"
                        height="1.8rem"
                      />

                      <div className="d-flex flex-column p-3 border rounded-2 gap-2">
                        <div className="d-flex gap-3">
                          <Skeleton
                            animation="wave"
                            variant="rounded"
                            width="20%"
                            height="7em"
                          />

                          <div className="d-flex justify-content-between width8">
                            <div className="d-flex flex-column">
                              <Skeleton
                                animation="wave"
                                variant="text"
                                height="1.9rem"
                                width="15rem"
                              />
                              <Rating
                                name="no-value"
                                value={null}
                                readOnly
                                style={{ fontSize: "1rem" }}
                              />

                              <Skeleton
                                variant="text"
                                animation="wave"
                                height="1rem"
                                width="100%"
                              />
                              <div className="d-flex gap-3">
                                <Skeleton
                                  variant="text"
                                  animation="wave"
                                  height="1rem"
                                  width="40%"
                                />
                                <Skeleton
                                  variant="text"
                                  animation="wave"
                                  height="1rem"
                                  width="40%"
                                />
                              </div>
                            </div>
                            {!isMobile && (
                              <div className="d-flex flex-column">
                                <Skeleton
                                  animation="wave"
                                  variant="text"
                                  width="7rem"
                                  height="1rem"
                                />

                                <Skeleton
                                  animation="wave"
                                  variant="text"
                                  width="7rem"
                                  height="1.8rem"
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        {isMobile && (
                          <div className="d-flex justify-content-between my-3 border border-top-0 border-start-0 border-end-0">
                            <div className="d-flex flex-column">
                              <Skeleton
                                variant="text"
                                animation="wave"
                                width="5.8rem"
                                height="0.8rem"
                              />
                              <Skeleton
                                variant="text"
                                animation="wave"
                                width="5rem"
                                height="0.8rem"
                              />
                            </div>

                            <div className="d-flex flex-column">
                              <Skeleton
                                variant="text"
                                animation="wave"
                                width="5.8rem"
                                height="0.8rem"
                              />
                              <Skeleton
                                variant="text"
                                animation="wave"
                                width="5.8rem"
                                height="1.5rem"
                              />
                            </div>
                          </div>
                        )}

                        <Skeleton
                          animation="wave"
                          variant="text"
                          width="45%"
                          height="1.3rem"
                        />
                        <div
                          className="p-3 d-flex justify-content-between align-items-center rounded-top-3 width100"
                          style={{ background: "#F4F4F4" }}
                        >
                          <Skeleton
                            variant="text"
                            animation="wave"
                            height="1.5rem"
                            width="50%"
                          />

                          <div className="d-flex flex-column gap-1 me-4">
                            <Skeleton
                              animation="wave"
                              variant="text"
                              height="1.5rem"
                              width="5rem"
                            />

                            <Skeleton
                              animation="wave"
                              variant="text"
                              height="1.2rem"
                              width="5rem"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col sm={5} className="d-flex justify-content-end">
              <div className="d-flex flex-column gap-3 width8 p-5 ms-3">
                <Skeleton
                  variant="text"
                  animation="wave"
                  width="58%"
                  height="1.7rem"
                />

                <div className="d-flex flex-column gap-4">
                  <div className="border border-black border-bottom-2 border-top-0 border-start-0 border-end-0 pb-1">
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="6rem"
                      height="0.8rem"
                    />

                    <Skeleton
                      className="mt-1"
                      variant="text"
                      animation="wave"
                      width="3rem"
                      height="0.8rem"
                    />

                    <Skeleton
                      className="mt-1 ms-3"
                      variant="text"
                      animation="wave"
                      width="3rem"
                      height="0.8rem"
                    />
                  </div>

                  <div className="border border-black border-bottom-2 border-top-0 border-start-0 border-end-0 pb-1">
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="6rem"
                      height="0.8rem"
                    />

                    <Skeleton
                      className="mt-1"
                      variant="text"
                      animation="wave"
                      width="3rem"
                      height="0.8rem"
                    />

                    <Skeleton
                      className="mt-1 ms-3"
                      variant="text"
                      animation="wave"
                      width="3rem"
                      height="0.8rem"
                    />
                  </div>

                  <div>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="6rem"
                      height="0.8rem"
                    />

                    <Skeleton
                      className="mt-1"
                      variant="text"
                      animation="wave"
                      width="3rem"
                      height="0.8rem"
                    />

                    <Skeleton
                      className="mt-1 ms-3"
                      variant="text"
                      animation="wave"
                      width="3rem"
                      height="0.8rem"
                    />
                  </div>

                  <div className="d-flex justify-content-end gap-2">
                    {[...Array(4)].map((value, item) => (
                      <Skeleton
                        key={item}
                        variant="rounded"
                        animation="wave"
                        width="2.5rem"
                        height="1.5rem"
                      />
                    ))}
                  </div>

                  {steep === 1 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <Skeleton
                        variant="text"
                        animation="wave"
                        height="1.3rem"
                        width="40%"
                      />
                      <Skeleton
                        variant="rounded"
                        animation="wave"
                        height="3rem"
                        width="40%"
                      />
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
