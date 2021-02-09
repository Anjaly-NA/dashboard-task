import React, { useState } from "react";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

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
}));

const Post = ({ className, post, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {post.postTitle}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {post.postContent}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        {/* {likeData.like ? ( */}
        <ThumbDownAltIcon className={classes.unlikeButton} />
        {/* ) : ( */}
        <ThumbUpAltIcon className={classes.likeButton} />
        {/* )} */}
        <Button color="primary">like</Button>
      </CardActions>
      <Box flexGrow={1} />
      <Divider />
    </Card>
  );
};

export default Post;
