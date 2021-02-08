import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Notification = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <VolumeDownIcon color="secondary" />
          <ListItemText
            primary={
              <Typography variant="h6" color="secondary">
                Volume
              </Typography>
            }
          />
        </ListItem>
        <ListItemLink href="#simple-list">
          <LockIcon fontSize="small" color="secondary" />
          <ListItemText
            primary={
              <Typography variant="h6" color="secondary">
                App Notifications
              </Typography>
            }
          />
        </ListItemLink>
      </List>
    </div>
  );
};
export default Notification;
