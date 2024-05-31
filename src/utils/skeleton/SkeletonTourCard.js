import React from 'react'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Card, Rating } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonTourCard() {
    return (
        <>
            {[...Array(10)].map((value, index) => (
                <Card className='cont-card-tour-test' key={index}>
                    <div className='cont-image-card-tour-test'>
                        <Skeleton
                            variant="rectangular"
                            className="image-card-tour-l"
                            width="100%"
                            height="100%"
                        >
                        </Skeleton>
                    </div>

                    <div className='cont-card-info-star-loc-price-skeleton'>
                        <div>
                            <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} width="85%" />
                        </div>

                        <div className='d-flex cont-mobile-loc-price'>
                            <Stack spacing={1} width="60%">

                                <Rating name="disabled" value={null} disabled />

                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={250} />

                                <Box sx={{ width: 200 }}>
                                    <Skeleton />
                                    <Skeleton animation="wave" />
                                    <Skeleton animation={false} />
                                </Box>

                                <div className='d-flex gap-1'>
                                    <Skeleton variant="circular" width={30} height={30} />
                                    <Skeleton variant="circular" width={30} height={30} />
                                </div>

                                <Skeleton variant="rounded" className='cont-duration-card-tour' width={100} height={40} />
                            </Stack>

                            <div className='line-card-tour-grey'></div>
                           
                                <div className='cont-price-percentage-details justify-content-center'>
                                    <div className='w-100 d-flex flex-column align-items-center'>
                                        <Skeleton variant="text" animation="wave" width="60%" height={25} />
                                        <Skeleton variant="text" animation="wave" width="63%" height={11} />
                                        <Skeleton variant="text" animation="wave" width="55%" height={25} />
                                    </div>

                                    <Skeleton variant="text" className='cont-see-details-tour-skeleton' animation="wave" width="75%" height={45} />
                                </div>                          
                        </div>
                    </div>
                </Card>
            ))}
        </>
    )
}
