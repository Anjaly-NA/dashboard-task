import React from "react";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

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
}));

const ProductList = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box display="flex" justifyContent="center" mb={3}>
          <Avatar
            alt="Product"
            variant="square"
            // className={classes.statsIcon}
            style={{ color: product.color }}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.name}
          {/* {capitalizeFirstLetter(product.name)} */}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {product.name} {product.year} {product.color} {product.pantone_value}{" "}
          {product.name} {product.year} {product.color} {product.pantone_value}{" "}
          {product.name} {product.year} {product.color} {product.pantone_value}{" "}
          {product.name} {product.year} {product.color} {product.pantone_value}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
    </Card>
  );
};

export default ProductList;
