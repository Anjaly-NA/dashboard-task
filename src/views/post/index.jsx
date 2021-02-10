import React from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  productCard: {
    height: "100%",
    cursor: "pointer",
  },
}));

const PostList = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Post">
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid container spacing={3}>
            <Post />
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default PostList;
