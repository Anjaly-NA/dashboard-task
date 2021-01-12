import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar/index";
import TopBar from "./TopBar";
import firebase from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/");
    }

    // firebase case: checking current user is logged in else navigate to login page
    // if (!firebase.getCurrentUsername()) {
    //   navigate("/");
    // }
  });
  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;