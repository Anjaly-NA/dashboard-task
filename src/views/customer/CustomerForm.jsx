import React, { useState } from "react";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  state: "",
  country: "",
};
const phoneRegExp = /((\+*)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required First name"),
  lastName: Yup.string().required("Required Last name"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Invalid phone number"),
  state: Yup.string().required("State required"),
  country: Yup.string().required("Country required"),
});

const CustomerForm = ({ className, ...rest }) => {
  const handleChange = (event) => {
    // setValues({
    //   ...values,
    //   [event.target.name]: event.target.value,
    // });
  };

  return (
    <form autoComplete="off" noValidate className={clsx(className)} {...rest}>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Customer"
        />
        <Divider />
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {(formik) => {
              const {
                errors,
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                isValid,
                dirty,
              } = formik;
              return (
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      label="First name"
                      name="firstName"
                      onChange={handleChange}
                      required
                      value={values.firstName}
                      variant="outlined"
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Last name"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      value={values.lastName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      value={values.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="number"
                      value={values.phone}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Country"
                      name="country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      value={values.country}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Select State"
                      name="state"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      select
                      SelectProps={{ native: true }}
                      value={values.state}
                      variant="outlined"
                    >
                      {states.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              );
            }}
          </Formik>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default CustomerForm;
