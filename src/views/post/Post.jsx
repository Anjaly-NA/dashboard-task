import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  CardActions,
  Grid,
} from "@material-ui/core";
import LikeButton from "../../components/LikeButton";
import CommentButton from "../../components/CommentButton";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

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
}));

const Post = ({ className, passedPost, ...rest }) => {
  const classes = useStyles();
  const [postList, setPostList] = useState(passedPost);

  useEffect(() => {
    setPostList(passedPost);
  }, [passedPost]);

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
                color="secondary"
                gutterBottom
                variant="h4"
              >
                {capitalizeFirstLetter(item.postTitle)}
              </Typography>
              <Typography align="center" color="textPrimary" variant="body1">
                {item.postContent}
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
              <LikeButton item={item} handleLike={handleLike} />
              <CommentButton postComment={item.postComment} />
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
