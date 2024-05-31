import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const TooltipUp = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="top"
    arrow={true}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#BEE0EE",
    color: "rgba(0, 0, 0, 0.87)",
    border: `1px solid #2899C7`,
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontFamily: "Montserrat Medium",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#BEE0EE",
    borderColor: "#2899C7",
  },
  [`& .${tooltipClasses.arrow}::before`]: {
    border: `solid #BEE0EE`,
    borderWidth: "0 1px 1px 0",
    borderColor: "#2899C7",
  },
}));
