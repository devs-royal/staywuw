import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "react-bootstrap";

export default function SkeletonPolicy() {
  const skeletonItems = Array(4).fill(null);

  return (
    <Container className="privacy-information">
      <Skeleton variant="text" animation="wave" width="30em" height={30} className="mb-4"/>
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }}  width="50%"/>
      {skeletonItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className="pb-4">
            <Skeleton variant="text" animation="wave" width="10em"/>
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="70%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="50%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6, marginLeft:"20px" }} />
          </div>
          <div className="pb-4">
            <Skeleton variant="text" animation="wave" width="10em"/>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6}} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6}} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6}} />
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="90%" style={{ marginBottom: 6, marginLeft:"20px" }} />
          </div>
          <div className="pb-4">
            <Skeleton variant="text" animation="wave" width="10em"/>
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6,  marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="90%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="50%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="10%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="70%" style={{ marginBottom: 6, marginLeft:"20px" }} />
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6, marginLeft:"20px" }} />
          </div>
        </React.Fragment>
      ))}
    </Container>
  );
}
