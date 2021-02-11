import React, { useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
  Box,
  Popover,
  CardHeader,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";
import "./index.css";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  commentButton: {
    color: theme.palette.primary.color4,
  },
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  addComment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  typography: {
    padding: theme.spacing(2),
  },
  commentBox: {
    maxHeight: "200px",
    height: "auto",
    overflowY: "scroll",
  },
}));

const CommentButton = (props) => {
  const classes = useStyles();
  const [menu, setMenu] = useState(null);
  const [commentList, setCommentList] = useState(props.postComment);
  const [commentAdd, setCommentAdd] = useState("");

  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };
  const handlChange = (event) => {
    setCommentAdd(event.target.value);
  };
  const handleAddComment = () => {
    if (commentAdd !== "") {
      let data = commentList;
      let dataLength = commentList.length + 1;
      let addedComment = commentAdd;
      let commentDate = moment().format("YYYYMMDDThhmm");
      setCommentAdd("");
      let newComment = {
        id: dataLength,
        comment: addedComment,
        postedOn: commentDate,
      };
      data.push(newComment);
      setCommentList([...data]);
    }
  };

  const open = Boolean(menu);
  // const id = open ? "simple-popover" : undefined;
  return (
    <React.Fragment>
      <Button
        className={classes.commentButton}
        size="small"
        onClick={handleClick}
      >
        Comment
      </Button>
      <Popover
        id="simple-popover"
        open={open}
        anchorEl={menu}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Card>
          <CardHeader
            title={
              <Typography
                component="div"
                variant="caption"
                className={classes.inline}
                color="secondary"
              >
                Comments
              </Typography>
            }
          />
          <Divider />
          <CardContent>
            <Box className={classes.addComment} component="div">
              <TextField
                color="secondary"
                variant="outlined"
                label="Comments..."
                value={commentAdd}
                onChange={handlChange}
              />
              <Button
                color="secondary"
                variant="contained"
                onClick={handleAddComment}
              >
                Add
              </Button>
            </Box>
            <Box className={classes.commentBox}>
              <List className={classes.root}>
                {commentList
                  .slice(0)
                  .reverse()
                  .map((item) => (
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar />
                        </ListItemAvatar>
                        <ListItemText
                          // primary="Brunch this weekend?"
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textSecondary"
                              >
                                {item.comment}
                              </Typography>
                              <Typography
                                component="div"
                                variant="caption"
                                className={classes.inline}
                                color="primary"
                              >
                                Posted on :{" "}
                                <Typography
                                  variant="caption"
                                  className={classes.inline}
                                  color="textPrimary"
                                >
                                  {moment(item.postedOn).format(
                                    "MMMM Do YYYY, h:mm a"
                                  )}{" "}
                                </Typography>
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider />
                    </>
                  ))}
              </List>
            </Box>
          </CardContent>
        </Card>
      </Popover>
    </React.Fragment>
  );
};

export default CommentButton;
