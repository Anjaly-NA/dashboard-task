import React, { useState } from "react";
import {
  Button,
  makeStyles,
  Menu,
  MenuItem,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
  ListItemText,
  Box,
} from "@material-ui/core";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  commentButton: {
    color: theme.palette.primary.color4,
  },
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const CommentButton = (props) => {
  const classes = useStyles();
  const [menu, setMenu] = useState(null);

  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };
  return (
    <React.Fragment>
      <Button
        className={classes.commentButton}
        size="small"
        onClick={handleClick}
      >
        Comment
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={menu}
        keepMounted
        open={Boolean(menu)}
        onClose={handleClose}
      >
        <MenuItem>
          <TextField
            id="outlined-basic"
            label="Comment..."
            variant="outlined"
            color="secondary"
          ></TextField>
          <Button
            size="small"
            onClick={handleClose}
            variant="contained"
            color="secondary"
          >
            Add
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <Box>
                    <Typography variant="h6" color="textPrimary">
                      Ali Connors what is the difference between
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default CommentButton;
