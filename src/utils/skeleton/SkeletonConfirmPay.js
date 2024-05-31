import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import "../../assets/styles/web/SkeletonConfirmPay.css";

import { useIsMobile } from "../../config/Mobile/isMobile";
import { Rating } from "@mui/material";

export default function SkeletonConfirmPay() {

  const isMobile = useIsMobile();

  return (
    [...Array(4)].map((value, index)=>(
      <div key={index} className="cont-card-icon-location-and-date d-flex gap-2 align-items-start ">
        <Skeleton variant="rectangular" animation="wave" height="14rem" width="7px" />

        <div className="d-flex flex-column width100">
          <Skeleton variant="text" animation="wave" width="90%" height="1.3rem" />

          <div className="cont-card-hotel-itinerary">
            <div className="d-flex gap-2 cont-img-price-info">
              <div className="cont-img-card-hotel">
                <Skeleton variant="rounded" animation="wave" width="100%" height="100%" />
              </div>

              <div className="d-flex width8 align-items-start gap-3 justify-content-between my-auto mt-1">
                <div className="width100 d-flex flex-column">
                  <Skeleton variant="rectangular" animation="wave" width="100%" height="2rem" />

                  <Rating value={null} id="start-itinerary" readOnly/>

                  <Skeleton variant="text" animation="wave" width="53%" height="14px" />
                
                  <Skeleton variant="text" animation="wave" width="70%" height="14px" />
                </div>
                {
                  !isMobile && 
                    (<div className="width3">
                      <Skeleton variant="text" animation="wave" width="100%" height="16px" />
                
                      <Skeleton variant="text" animation="wave" width="100%" height="12px" />
                    </div>)
                }
              </div>

            </div> 
            {
              isMobile && (
                <div className="active-container-payment-mobile align-items-start justify-content-between width100">
                  <Skeleton variant="text" animation="wave" width="40%" height="16px" />

                  <div className="width4 d-flex flex-column">
                    <Skeleton variant="text" animation="wave" width="80%" height="12px" />
                  
                    <Skeleton variant="text" animation="wave" width="100%" height="16px" />
                  </div>
                </div>
              )
            }

            <div className="d-flex flex-column width100">
              <Skeleton variant="text" width="80%" height="1.2rem"/>

              <div className="cont-accordion-hotel-card-i p-3 d-flex flex-column gap-3">
                <Skeleton variant="text" animation="wave" width="40%" height="1.3rem"/>
                
                <div className="mt-3 gap-3 d-flex flex-column">
                  {
                    [...Array(3)].map((value, item)=>(
                      <div className="d-flex flex-column width100" key={item}>
                        <Skeleton variant="text" animation="wave" width="50%" height="1.2rem" />
                        <Skeleton variant="text" animation="wave" width="80%" height="1.2rem" />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}
