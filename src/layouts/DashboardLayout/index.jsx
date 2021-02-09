import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { makeStyles, Fab } from "@material-ui/core";
import NavBar from "./NavBar/index";
import TopBar from "./TopBar";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
// import firebase from "../../firebase";
import Settings from "../../components/Settings";

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
  plusButton: {
    position: "absolute",
    bottom: "100px",
    right: "80px",
  },
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/");
    }

    // firebase case: checking current user is logged in else navigate to login page
    // if (!firebase.getCurrentUsername()) {
    //   navigate("/");
    // }
  });

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

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
            <Fab
              color="secondary"
              className={classes.plusButton}
              onClick={handleClick}
            >
              <SettingsRoundedIcon />
            </Fab>
            <Settings
              handleClick={handleClick}
              handleClose={handleClose}
              anchor={anchor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
