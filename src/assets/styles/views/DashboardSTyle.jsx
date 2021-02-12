import { makeStyles,colors } from "@material-ui/core";

const DashboardSTyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  icon1: {
    backgroundColor: theme.palette.primary.color1,
  },
  icon2: {
    backgroundColor: theme.palette.primary.color2,
  },
  icon3: {
    backgroundColor: theme.palette.primary.color3,
  },
  icon4: {
    backgroundColor: theme.palette.primary.color4,
  },
  rootPlanning: {
    height: "100%",
  },
  avatar: {
    height: 30,
    width: 30,
  },
  differenceIcon: {
    color: colors.red[900],
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1),
  },
  gridText: {
    textAlign: "center",
  },
}));
export default DashboardSTyle;
