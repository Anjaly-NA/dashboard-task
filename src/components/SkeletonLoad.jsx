import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
    justifyContent:'space-between'
  },
}));

const SkeletonLoad = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={3}>
        <Skeleton height={100} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="circle" width={40} height={40} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="circle" width={40} height={40} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="circle" width={40} height={40} />
      </Grid>
    </Grid>
  );
};
export default SkeletonLoad;
