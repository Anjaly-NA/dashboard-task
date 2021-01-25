import React from "react";
import { useFormikContext } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const Review = (props) => {
  const { values: formValues } = useFormikContext();
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    country,
    policy,
  } = formValues;

  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader title="Shipping address" />
        <Divider />
        <CardContent>
          <Typography variant="h6" color="textSecondary">
            {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {capitalizeFirstLetter(address1)} {capitalizeFirstLetter(address2)}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {capitalizeFirstLetter(city)} {capitalizeFirstLetter(state)}{" "}
            {capitalizeFirstLetter(country)}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {zip}
          </Typography>
        </CardContent>
      </Card>
      {/* <Card>
        <CardHeader title="Shipping details" />
        <Divider />
        <CardContent>
        <Typography variant="h6" color="textSecondary">
            {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {capitalizeFirstLetter(address1)} {capitalizeFirstLetter(address2)}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {capitalizeFirstLetter(city)} {capitalizeFirstLetter(state)}{" "}
            {capitalizeFirstLetter(country)}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {zip}
          </Typography>
        </CardContent>
      </Card> */}
    </Container>
  );
};

export default Review;
