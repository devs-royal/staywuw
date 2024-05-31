import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const TooltipDown = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="bottom"
    arrow={true}

    // PROPIEDADES QUE LOS MANTIENEN ACTIVO
    // onClose={false}
    // open={true}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#BEE0EE",
    color: "rgba(0, 0, 0, 0.87)",
    border: `2px solid #2899C7`,
    boxShadow: theme.shadows[1],
    fontSize: "0.875rem",
    fontFamily: "Montserrat SemiBold",
    textAlign: "justify",
    maxWidth: "630px",
    padding: "20px",
    borderRadius: "10px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#BEE0EE",
    borderColor: "#2899C7",
  },
  [`& .${tooltipClasses.arrow}::before`]: {
    border: `solid #BEE0EE`,
    borderWidth: "2px 2px 2px 2px",
    borderColor: "#2899C7",
  },
}));
