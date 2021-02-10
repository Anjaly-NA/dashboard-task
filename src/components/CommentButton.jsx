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
import { comment } from "../constant/constant";

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
    justifyContent: "space-between",
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
  const [commentList, setCommentList] = useState(comment);
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
    let data = commentList;
    let newComment = { id: 5, comment: commentAdd };
    data.push(newComment);
    setCommentList([...commentList]);
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
          <CardHeader>Comments</CardHeader>
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
              <Divider />
              <List className={classes.root}>
                {commentList.map((item) => (
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
                              color="textPrimary"
                            >
                              {item.comment}
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
