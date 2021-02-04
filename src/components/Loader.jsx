import React from "react";
import { CircularProgress, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => ({
  root: {
    width: "40px",
    height: "40px",
    position: "absolute",
    top: "35%",
    left: "48%",
    zIndex:1
  },
}));

const Loader = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <CircularProgress color="secondary" />
    </Box>
  );
};
export default Loader;
