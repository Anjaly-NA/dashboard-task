import React, { useEffect } from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import "./PageNotFound.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  image: {
    marginTop: 50,
    display: "inline-block",
    maxWidth: "100%",
    width: 560,
  },
}));

const PageNotFound = () => {
  const classes = useStyles();
  useEffect(() => {
    let starContainer = document.querySelector(".stars");
    for (let i = 0; i < 100; i++) {
      starContainer.innerHTML += `<div class="star"></div>`;
    }
  });

  return (
    <Page className={classes.root} title="404">
      <Box className="wrapper">
      <Box className="text_group">
        <Typography className="text_404">404</Typography>
        <Typography className="text_lost">
          The page you are looking for <br />
          has been lost in space.
        </Typography>
      </Box>
      <Box className="window_group">
        <Box className="window_404">
          <Box className="stars"></Box>
        </Box>
      </Box>
    </Box>
    </Page>
  );
};

export default PageNotFound;
