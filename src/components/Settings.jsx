import React from "react";
import {
  Typography,
  Card,
  Popover,
  makeStyles,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import DataUsageRoundedIcon from "@material-ui/icons/DataUsageRounded";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  general: {
    color: theme.palette.primary.color4,
  },
  notification: {
    color: theme.palette.primary.color3,
  },
  data: {
    color: theme.palette.primary.color1,
  },
  card: {},
}));

const Settings = (props) => {
  const classes = useStyles();
  const open = Boolean(props.anchor);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={props.anchor}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Card className={classes.card}>
          <CardHeader
            title={
              <Typography variant="h5" color="textSecondary">
                Settings
              </Typography>
            }
          />
          <Divider />
          <CardContent>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InfoRoundedIcon className={classes.general} />
                </ListItemIcon>
                <ListItemText
                  primary="General"
                  className={classes.typography}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <NotificationsRoundedIcon className={classes.notification} />
                </ListItemIcon>
                <ListItemText
                  primary="Notifications"
                  className={classes.typography}
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DataUsageRoundedIcon className={classes.data} />
                </ListItemIcon>
                <ListItemText
                  primary="Data and sync"
                  className={classes.typography}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Popover>
    </div>
  );
};
export default Settings;
