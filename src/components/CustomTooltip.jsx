import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.color5,
    maxWidth: 220,
    borderColor: theme.palette.primary.main,
    borderWidth: "1px",
    borderStyle: "solid",
  },
}))(Tooltip);
export default CustomTooltip;
