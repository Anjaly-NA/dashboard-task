import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const data = [
  {
    id: uuid(),
    name: "Design 1",
    imageUrl: "/static/d.jpeg",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Design 2",
    imageUrl: "/static/d.jpeg",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Design 3",
    imageUrl: "/static/d.jpeg",
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Design 3",
    imageUrl: "/static/d.jpeg",
    updatedAt: moment().subtract(3, "hours"),
  }, {
    id: uuid(),
    name: "Design 3",
    imageUrl: "/static/d.jpeg",
    updatedAt: moment().subtract(3, "hours"),
  },
];
const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  image: {
    height: 48,
    width: 48,
  },
});

const Design = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardHeader subtitle={`${data.length} in total`} title="Latest Designs" />
      <Divider />
      <List>
        {data.map((item, i) => (
          <ListItem divider={i < data.length - 1} key={item.id}>
            <ListItemAvatar>
              <img alt="item" className={classes.image} src={item.imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={`Updated ${item.updatedAt.fromNow()}`}
            />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        {/* <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button> */}
      </Box>
    </Card>
  );
};
export default Design;
