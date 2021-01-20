import React, { useEffect } from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  designListRequest,
  designListSuccess,
  designListFailure,
  designListFetch,
} from "../../redux";
import { connect } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import PopOver from "../../components/PopOver";
import Loader from "../../components/Loader";

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
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  image: {
    height: 48,
    width: 48,
  },
  error: {
    color: theme.palette.primary.color1,
    marginLeft: 20,
  },
}));

const Design = (props, { ...rest }) => {
  const classes = useStyles();
  const {
    designListRequest,
    fetchDesign,
    designListSuccess,
    designListFailure,
  } = props;
  useEffect(() => {
    designListRequest();
    fetchDesign()
      .then((response) => {
        designListSuccess(response.data.data);
      })
      .catch((error) => {
        designListFailure(error.message);
      });
    return;
  }, [designListRequest, fetchDesign, designListSuccess, designListFailure]);
  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardHeader subtitle={`${data.length} in total`} title="Latest Designs" />
      <Divider />
      <List>
        {props.loading && <Loader />}
        {props.designListError && (
          <Typography className={classes.error} variant="h6">
            No data
          </Typography>
        )}
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
            <PopOver designId={item.id} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}></Box>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return {
    designList: state.designRed.designList,
    loading: state.designRed.loading,
  };
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
