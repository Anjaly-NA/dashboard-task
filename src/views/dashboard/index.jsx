import React from "react";
import { Container, Grid, makeStyles, colors } from "@material-ui/core";
import Page from "../../components/Page";
import Planning from "./Planning";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DescriptionIcon from "@material-ui/icons/Description";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
// import LatestOrders from "./LatestOrders";
// import LatestProducts from "./LatestProducts";
// import Sales from "./Sales";
// import TasksProgress from "./TasksProgress";
// import TotalCustomers from "./TotalCustomers";
// import TotalProfit from "./TotalProfit";
// import TrafficByDevice from "./TrafficByDevice";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Planning
              head="Planning"
              subHead="Plan"
              icon={<DescriptionIcon />}
              bg={colors.red[400]}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Planning
              head="Design"
              subHead="Design"
              icon={<CalendarTodayIcon />}
              bg={colors.green[600]}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Planning
              head="Development"
              subHead="Module"
              icon={<DeveloperBoardIcon />}
              bg={colors.blue[600]}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Planning
              head="Testing"
              subHead="Test"
              icon={<DoneOutlineIcon />}
              bg={colors.orange[600]}
            />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}></Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}></Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}></Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}></Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
