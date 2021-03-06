import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import useStyles from "../../assets/styles/views/DashboardSTyle";

// const useStyles = makeStyles((theme) => ({
//   rootPlanning: {
//     height: "100%",
//   },
//   avatar: {
//     // backgroundColor: colors.red[600],
//     height: 30,
//     width: 30,
//   },
//   differenceIcon: {
//     color: colors.red[900],
//   },
//   differenceValue: {
//     color: colors.red[900],
//     marginRight: theme.spacing(1),
//   },
//   gridText: {
//     textAlign: "center",
//   },
// }));

const Planning = ({ head, subHead, icon, bg, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.rootPlanning, className)} {...rest}>
      <CardContent>
        <Grid container alignItems="center" spacing={2} direction="column">
          <Grid item>
            <Typography color="textPrimary" gutterBottom variant="h5">
              {head}
            </Typography>
            {/* <Typography
              color="textPrimary"
              variant="h3"
            >
              $24,000
            </Typography> */}
          </Grid>
          <Grid item>
            <Avatar className={clsx(classes.avatar, bg)}>{icon}</Avatar>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="caption"
                >
                  {subHead} One
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="caption"
                >
                  {subHead} Three
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="caption"
                >
                  {subHead} Eight
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="caption"
                >
                  {subHead} Six
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Planning.propTypes = {
  className: PropTypes.string,
};

export default Planning;
