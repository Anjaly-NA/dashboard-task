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

const post = [
  {
    postId: 1,
    postTitle: "abcd",
    postContent:
      "With a theme and an overrides property. If that's not sufficient, you can check the implementation of the component for more detail",
  },
  {
    postId: 2,
    postTitle: "pqrs",
    postContent:
      "With a theme and an overrides property. If that's not sufficient, you can check the implementation of the component for more detail",
  },
  {
    postId: 3,
    postTitle: "wxyz",
    postContent:
      "With a theme and an overrides property. If that's not sufficient, you can check the implementation of the component for more detail",
  },
];
const PostList = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Post">
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid container spacing={3}>
            {post.map((item) => (
              <Grid item lg={4} md={6} xs={12} sm={6}>
                <Post post={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default PostList;
