import React, { useEffect } from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  Box,
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
import {
  designListRequest,
  designListSuccess,
  designListFailure,
  designListFetch,
} from "../../redux";
import { connect } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

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
  },
  {
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

const Design = (props, { ...rest }) => {
  const classes = useStyles();
  useEffect(() => {
    props.designListRequest();
    props
      .fetchDesign()
      .then((response) => {
        props.designListSuccess(response.data.data);
      })
      .catch((error) => {
        props.designListFailure(error.message);
      });
  }, []);
  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardHeader subtitle={`${data.length} in total`} title="Latest Designs" />
      <Divider />
      <List>
        {props.designList.map((item, i) => (
          <ListItem divider={i < data.length - 1} key={item.id}>
            <ListItemAvatar>
              <svg height="40" width="40">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="teal"
                  stroke-width="3"
                  fill={item.color}
                />
              </svg>
              {/* <img alt="item" className={classes.image} src={item.imageUrl} /> */}
            </ListItemAvatar>
            <ListItemText
              primary={capitalizeFirstLetter(item.name)}
              // secondary={`Updated ${item.updatedAt.fromNow()}`}
              secondary={`Pantone value ${item.pantone_value}`}
            />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}></Box>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return { designList: state.designRed.designList };
};
const mapDispatchToProps = (dispatch) => {
  return {
    designListRequest: () => dispatch(designListRequest()),
    designListSuccess: (designList) => dispatch(designListSuccess(designList)),
    designListFailure: (designError) =>
      dispatch(designListFailure(designError)),
    fetchDesign: () => dispatch(designListFetch()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Design);
