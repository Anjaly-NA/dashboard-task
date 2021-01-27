import React from "react";
import { useFormikContext } from "formik";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { cities, states, countries } from "../../constant/constant";

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
  } = formValues;

  return (
    <Container maxWidth="sm">
      {cities
        .filter((item) => item.value === city)
        .map((filteredCity) => console.log(filteredCity.label, "filteredCity"))}
      <Card>
        <CardHeader title="Shipping address" />
        <Divider />
        <CardContent>
          <Typography variant="h6" color="textPrimary">
            {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {capitalizeFirstLetter(address1)} {capitalizeFirstLetter(address2)}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {cities
              .filter((item) => item.value === city)
              .map((filteredCity) => filteredCity.label)}{" "}
            {states
              .filter((item) => item.value === state)
              .map((filteredState) => filteredState.label)}
            <br />
            {countries
              .filter((item) => item.value === country)
              .map((filteredCountry) => filteredCountry.label)}
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
