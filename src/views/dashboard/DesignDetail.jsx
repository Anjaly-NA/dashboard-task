import React, { useEffect } from "react";
import clsx from "clsx";
import {
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  designSingleSuccess,
  designSingleFailure,
  designSingleFetch,
} from "../../redux";
import { connect } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
  },
}));

const DesignDetail = (props, { className, ...rest }) => {
  const classes = useStyles();
  const {
    designSingleFetch,
    designSingleSuccess,
    designSingleFailure,
    designId,
  } = props;
  useEffect(() => {
    designSingleFetch(designId)
      .then((response) => {
        designSingleSuccess(response.data.data);
      })
      .catch((error) => designSingleFailure(error));
  }, [designSingleFetch, designSingleSuccess, designSingleFailure, designId]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <svg height="100" width="100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="teal"
              stroke-width="3"
              fill={props.singleDesign.color}
            />
          </svg>
          <Typography color="textPrimary" gutterBottom variant="h3">
            {props.singleDesign.name !== undefined &&
              capitalizeFirstLetter(props.singleDesign.name)}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Pantone value : {props.singleDesign.pantone_value}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            Year : {props.singleDesign.year}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return {
    singleDesign: state.designSingleRed.singleDesign,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    designSingleFetch: (designId) => dispatch(designSingleFetch(designId)),
    designSingleSuccess: (designDetail) =>
      dispatch(designSingleSuccess(designDetail)),
    designSingleFailure: (errorMessage) =>
      dispatch(designSingleFailure(errorMessage)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DesignDetail);
