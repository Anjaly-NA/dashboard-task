import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import Page from "../../components/Page";
import Post from "./Post";
import { post } from "../../constant/constant";

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
  addPostBtn: {
    backgroundColor: theme.palette.primary.color4,
    color: theme.palette.primary.white,
    fontWeight: 1000,
    "&:hover": {
      backgroundColor: theme.palette.primary.color4,
      opacity: "0.7",
    },
  },
  addPostCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
}));

const PostList = () => {
  const classes = useStyles();
  const [passedPost, setPassedPost] = useState(post);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlChange = (event) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setContent(event.target.value);
    }
  };
  const handleAddPost = () => {
    if (title !== "" && content !== "") {
      let newPostList = passedPost;
      let newPost = {
        postId: passedPost.length + 1,
        postTitle: title,
        postContent: content,
        liked: false,
        postComment: [],
      };
      newPostList.push(newPost);
      setPassedPost([...newPostList]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Page className={classes.root} title="Post">
      <Container maxWidth={false}>
        <Box>
          <Card>
            <CardContent className={classes.addPostCard}>
              <TextField
                color="primary"
                variant="outlined"
                label="Post Title..."
                value={title}
                onChange={handlChange}
                name="title"
              />
              <TextField
                color="primary"
                variant="outlined"
                label="Post Content..."
                value={content}
                onChange={handlChange}
                name="content"
              />
              <Button
                variant="contained"
                className={classes.addPostBtn}
                onClick={handleAddPost}
              >
                Add Post
              </Button>
            </CardContent>
          </Card>
        </Box>
        <Box mt={3}>
          <Grid container spacing={3}>
            <Post passedPost={passedPost} />
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default PostList;
