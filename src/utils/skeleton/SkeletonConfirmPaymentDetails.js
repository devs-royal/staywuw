import { Skeleton } from "@mui/material";
import React from "react";

import { useIsMobile } from "../../config/Mobile/isMobile";

export function SkeletonConfirmPaymentDetails(){
    const isMobile = useIsMobile()
    return(
        <div className="cont-confirmation-info-father">
            <Skeleton animation="wave" variant="rounded" width="100%" height="10rem"/>

            <div className="d-flex flex-column width100">
                <Skeleton animation="wave" variant="rounded" width="100%" height="1.3rem"/>

                <div className={`d-flex ${isMobile ? 'flex-column' : 'gap-3 justify-content-between'}`}>
                    <Skeleton variant="text" animation="wave" width="80%" height="1rem"/>
                    
                    <Skeleton variant="text" animation="wave" width="80%" height="1rem"/>
                </div>
                
                <Skeleton variant="text" animation="wave" width="80%" height="1rem"/>
                
                <Skeleton variant="text" animation="wave" width="50%" height="1rem"/>
            </div>

            <div className="d-flex flex-column width100">
                <Skeleton animation="wave" variant="rounded" width="100%" height="1.3rem"/>

                <div className={`d-flex ${isMobile ? 'flex-column' : 'gap-3 justify-content-between'}`}>
                    <Skeleton variant="text" animation="wave" width="30%" height="1rem"/>
                    
                    <Skeleton variant="text" animation="wave" width="70%" height="1rem"/>
                </div>

                <div className={`d-flex ${isMobile ? 'flex-column' : 'gap-3 justify-content-between'}`}>
                    <Skeleton variant="text" animation="wave" width="45%" height="1rem"/>
                    
                    <Skeleton variant="text" animation="wave" width="45%" height="1rem"/>
                </div>
            </div>

            <div className="border-button-conf"/>

            <div className="cont-cancellation-doubts">
                <div className="d-flex flex-column">
                    <Skeleton variant="text" animation="wave" width="40%" height="1rem" />

                    <div className="d-flex align-items-start width100 flex-column">
                        <Skeleton animation="wave" variant="text" height="0.9rem" width="89%" />
                        <Skeleton animation="wave" variant="text" height="0.9rem" width="100%" />
                        <Skeleton animation="wave" variant="text" height="0.9rem" width="80%" />
                        <Skeleton animation="wave" variant="text" height="0.9rem" width="100%" />
                        <Skeleton animation="wave" variant="text" height="0.9rem" width="95%" />
                    </div>
                </div>

                <Skeleton variant="rounded" animation="wave" width="6rem" height="2.4rem" />
            </div>

        </div>
    )
}