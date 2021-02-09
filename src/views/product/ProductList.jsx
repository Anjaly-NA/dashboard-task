import React, { useState } from "react";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  CardActions,
  Button,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import CloseIcon from "@material-ui/icons/Close";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { connect } from "react-redux";
import { setLike, unsetLike } from "../../redux/like/likeAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  statsItem: {
    alignItems: "center",
    display: "flex",
  },
  statsIcon: {
    color: theme.palette.primary.color4,
  },
  likeButton: {
    color: theme.palette.text.secondary,
  },
  unlikeButton: {
    color: theme.palette.primary.color3,
  },
}));

const ProductList = ({
  className,
  product,
  likeData,
  setLike,
  unsetLike,
  ...rest
}) => {
  const classes = useStyles();
  const [snackbar, setSnackbar] = useState(false);

  const handleClick = () => {
    setSnackbar(true);
  };
  const handleClose = () => {
    setSnackbar(false);
  };
  const likeProduct = () => {
    setLike();
  };
  const unlikeProduct = () => {
    unsetLike();
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box display="flex" justifyContent="center" mb={3}>
          <Avatar
            alt="Product"
            variant="square"
            // className={classes.statsIcon}
            style={{ color: product.color }}
            onClick={handleClick}
          />
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={snackbar}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Selected"
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  CLOSE
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />{" "}
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.name !== undefined && capitalizeFirstLetter(product.name)}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {product.name} {product.year} {product.color} {product.pantone_value}{" "}
          {product.name} {product.year} {product.color} {product.pantone_value}{" "}
          {product.name} {product.year} {product.color} {product.pantone_value}{" "}
          {product.name} {product.year} {product.color} {product.pantone_value}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        {likeData.like ? (
          <ThumbDownAltIcon
            className={classes.unlikeButton}
            onClick={unlikeProduct}
          />
        ) : (
          <ThumbUpAltIcon
            className={classes.likeButton}
            onClick={likeProduct}
          />
        )}
        <Button color={likeData.like ? "secondary" : "primary"}>
          {likeData.like ? "Unlike" : "Like"}
        </Button>
      </CardActions>
      <Box flexGrow={1} />
      <Divider />
    </Card>
  );
};
const mapStateToProps = (state) => {
  return {
    likeData: state.likeRed,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLike: () => dispatch(setLike()),
    unsetLike: () => dispatch(unsetLike()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
