import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
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

const LikeButton = (props) => {
  const classes = useStyles();
  const { item, handleLike } = props;

  return (
    <React.Fragment>
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
        {item.liked ? "Liked" : "Like"}
      </Typography>
    </React.Fragment>
  );
};

export default LikeButton;
