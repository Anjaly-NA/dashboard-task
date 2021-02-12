import React from "react";
import { Container, Grid } from "@material-ui/core";
import Page from "../../components/Page";
import Planning from "./Planning";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DescriptionIcon from "@material-ui/icons/Description";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import Development from "./Development";
import Design from "./Design";
import Users from "./Users";
import EditUser from "./EditUser";
import useStyles from "../../assets/styles/views/DashboardSTyle";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     minHeight: "100%",
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3),
//   },
//   icon1: {
//     backgroundColor: theme.palette.primary.color1,
//   },
//   icon2: {
//     backgroundColor: theme.palette.primary.color2,
//   },
//   icon3: {
//     backgroundColor: theme.palette.primary.color3,
//   },
//   icon4: {
//     backgroundColor: theme.palette.primary.color4,
//   },
// }));

const boxes = [
  {
    head: "Planning",
    subHead: "Plan",
    icon: <DescriptionIcon />,
  },
  {
    head: "Design",
    subHead: "Design",
    icon: <CalendarTodayIcon />,
  },
  {
    head: "Development",
    subHead: "Module",
    icon: <DeveloperBoardIcon />,
  },
  {
    head: "Testing",
    subHead: "Test",
    icon: <DoneOutlineIcon />,
  },
];
const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {boxes.map((item) => (
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Planning
                head={item.head}
                subHead={item.subHead}
                icon={item.icon}
                bg={classes.icon1}
              />
            </Grid>
          ))}

          {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Planning
              head="Design"
              subHead="Design"
              icon={<CalendarTodayIcon />}
              bg={classes.icon2}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Planning
              head="Development"
              subHead="Module"
              icon={<DeveloperBoardIcon />}
              bg={classes.icon3}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Planning
              head="Testing"
              subHead="Test"
              icon={<DoneOutlineIcon />}
              bg={classes.icon4}
            />
          </Grid> */}
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Development />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Design />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <EditUser />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Users />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
