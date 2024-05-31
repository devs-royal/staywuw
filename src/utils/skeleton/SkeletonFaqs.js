import React from "react";

import { useIsMobile } from "../../config/Mobile/isMobile";

const { Skeleton } = require("@mui/material");

export function SkeletonFaqs() {
  const isMobile = useIsMobile();
  return (
    <div className="d-flex flex-column container gap-3">
      <Skeleton
        variant="rectangular"
        animation="wave"
        height={isMobile ? "160px" : "346px"}
        width="100%"
      />
      <div className="pb-3">
        <Skeleton height={44} width="30%" variant="text" animation="wave" />
        <Skeleton height={17} width="70%" variant="text" animation="wave" />
      </div>
      <div
        className={`d-flex justify-content-between ${
          isMobile && "flex-column"
        }`}
      >
        <div
          className={`d-flex gap-2  ${
            isMobile ? "width100" : "width3 flex-column"
          }`}
        >
          <Skeleton height={44} width="40%" variant="text" animation="wave" />
          <Skeleton height={17} width="55%" variant="text" animation="wave" />
          <Skeleton height={17} width="59%" variant="text" animation="wave" />
          <Skeleton height={17} width="30%" variant="text" animation="wave" />
          <Skeleton height={17} width="49%" variant="text" animation="wave" />
          <Skeleton height={17} width="26%" variant="text" animation="wave" />
          <Skeleton height={17} width="38%" variant="text" animation="wave" />
        </div>
        <div
          className={`d-flex flex-column gap-3 ${
            isMobile ? "width100" : "width7"
          }`}
        >
          <Skeleton height={3} width="100%" />
          <div className="d-flex flex-column gap-2 ps-4 pe-4">
            <div className="d-flex justify-content-between">
              <Skeleton height={20} width="30%" />
              <Skeleton height={15} width={25} />
            </div>
            <div className="pt-3">
              <Skeleton
                height={17}
                width="100%"
                variant="text"
                animation="wave"
              />
              <Skeleton
                height={17}
                width="97%"
                variant="text"
                animation="wave"
              />
              <Skeleton
                height={17}
                width="100%"
                variant="text"
                animation="wave"
              />
              <Skeleton
                height={17}
                width="90%"
                variant="text"
                animation="wave"
              />
            </div>
          </div>
          <Skeleton height={6} width="100%" />
          <div className="d-flex justify-content-between ps-4 pe-4">
            <Skeleton height={20} width="30%" />
            <div className="position-relative content-plus-icon">
              <div
                className="plus-icon position-absolute"
                height={15}
                width={25}
              />
              <div className="plus-icon rotation-line" height={15} width={25} />
            </div>
          </div>
          <Skeleton height={6} width="100%" />
          <div className="d-flex justify-content-between ps-4 pe-4">
            <Skeleton height={20} width="36%" />
            <div className="position-relative content-plus-icon">
              <div
                className="plus-icon position-absolute"
                height={15}
                width={25}
              />
              <div className="plus-icon rotation-line" height={15} width={25} />
            </div>
          </div>
          <Skeleton height={6} width="100%" />
          <div className="d-flex justify-content-between ps-4 pe-4">
            <Skeleton height={20} width="29%" />
            <div className="position-relative content-plus-icon">
              <div
                className="plus-icon position-absolute"
                height={15}
                width={25}
              />
              <div className="plus-icon rotation-line" height={15} width={25} />
            </div>
          </div>
          <Skeleton height={6} width="100%" />
          <div className="d-flex justify-content-between ps-4 pe-4">
            <Skeleton height={20} width="45%" />
            <div className="position-relative content-plus-icon">
              <div
                className="plus-icon position-absolute"
                height={15}
                width={25}
              />
              <div className="plus-icon rotation-line" height={15} width={25} />
            </div>
          </div>
          <Skeleton height={6} width="100%" />
          <div className="d-flex justify-content-between ps-4 pe-4">
            <Skeleton height={20} width="50%" />
            <div className="position-relative content-plus-icon">
              <div
                className="plus-icon position-absolute"
                height={15}
                width={25}
              />
              <div className="plus-icon rotation-line" height={15} width={25} />
            </div>
          </div>
          <Skeleton height={6} width="100%" />
          <div className="d-flex justify-content-between ps-4 pe-4">
            <Skeleton height={20} width="50%" />
            <div className="position-relative content-plus-icon">
              <div
                className="plus-icon position-absolute"
                height={15}
                width={25}
              />
              <div className="plus-icon rotation-line" height={15} width={25} />
            </div>
          </div>
          <Skeleton height={6} width="100%" />
        </div>
      </div>
    </div>
  );
}
