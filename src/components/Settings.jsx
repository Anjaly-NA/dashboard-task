import React, { useState } from "react";
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
  Tab,
  Tabs,
  Box,
} from "@material-ui/core";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import DataUsageRoundedIcon from "@material-ui/icons/DataUsageRounded";
import General from "./settings/General";
import Notification from "./settings/Notification";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  typography: {
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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    alignItems: "flex-start",
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Settings = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const open = Boolean(props.anchor);
  const id = open ? "simple-popover" : undefined;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="settings-main-container">
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
            <div className={classes.root}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab
                  label={
                    <List>
                      <ListItem button>
                        <ListItemIcon>
                          <InfoRoundedIcon className={classes.general} />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              className={classes.typography}
                            >
                              General
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  }
                />
                <Tab
                  label={
                    <List>
                      <ListItem button>
                        <ListItemIcon>
                          <NotificationsRoundedIcon
                            className={classes.notification}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              className={classes.typography}
                            >
                              Notifications
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  }
                />
                <Tab
                  label={
                    <List>
                      <ListItem button>
                        <ListItemIcon>
                          <DataUsageRoundedIcon className={classes.data} />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              className={classes.typography}
                            >
                              Data and Sync
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  }
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                <General />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Notification />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <General />
              </TabPanel>
            </div>
            {/* <List>
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
            </List> */}
          </CardContent>
        </Card>
      </Popover>
    </div>
  );
};
export default Settings;
