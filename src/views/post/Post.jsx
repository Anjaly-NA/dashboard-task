import React, { useState } from "react";
import clsx from "clsx";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

const post = [
  {
    postId: 1,
    postTitle: "abcd",
    postContent:
      "With a theme and an overrides property. If that's not sufficient, you can check the implementation of the component for more detail",
    liked: true,
  },
  {
    postId: 2,
    postTitle: "pqrs",
    postContent:
      "With a theme and an overrides property. If that's not sufficient, you can check the implementation of the component for more detail",
    liked: false,
  },
  {
    postId: 3,
    postTitle: "wxyz",
    postContent:
      "With a theme and an overrides property. If that's not sufficient, you can check the implementation of the component for more detail",
    liked: false,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  statsItem: {
    alignItems: "center",
    display: "flex",
  },
  statsIcon: {
    color: theme.palette.primary.color4,
  },
  likeButton: {
    color: theme.palette.text.secondary,
  },
  unlikeButton: {
    color: theme.palette.primary.color3,
  },
  pointer: {
    cursor: "pointer",
  },
}));

const Post = ({ className, ...rest }) => {
  const classes = useStyles();
  const [postList, setPostList] = useState(post);

  const handleLike = (id, type) => {
    let data = postList;
    for (let i = 0; i < data.length; i++) {
      if (data[i].postId === id) {
        if (type === "like") {
          data[i].liked = true;
          setPostList([...data]);
        } else {
          data[i].liked = false;
          setPostList([...data]);
        }
      }
    }
  };

  return (
    <React.Fragment>
      {postList.map((item) => (
        <Grid item lg={4} md={6} xs={12} sm={6}>
          <Card className={clsx(classes.root, className)} {...rest}>
            <CardContent>
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h4"
              >
                {item.postTitle}
              </Typography>
              <Typography align="center" color="textPrimary" variant="body1">
                {item.postContent}
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
              {item.liked ? (
                <ThumbDownAltIcon
                  className={clsx(classes.unlikeButton, classes.pointer)}
                  onClick={() => handleLike(item.postId, "unlike")}
                />
              ) : (
                <ThumbUpAltIcon
                  className={clsx(classes.likeButton, classes.pointer)}
                  onClick={() => handleLike(item.postId, "like")}
                />
              )}
              <Typography
                variant="caption"
                color={item.liked ? "secondary" : "primary"}
              >
                {item.liked ? "Unlike" : "Like"}
              </Typography>
            </CardActions>
            <Box flexGrow={1} />
            <Divider />
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default Post;
