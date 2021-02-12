import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  card: {
    padding: theme.spacing(3),
    borderRadius: 15,
  },
  rootTerms: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    width: "70%",
  },
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  point: {
    color: theme.palette.primary.color4,
  },
}));
export default useStyles;
