import React, { useEffect } from "react";
import { Box, Checkbox, TextField, Typography, Grid } from "@material-ui/core";
import { cities, states, countries } from "../../constant/constant";

const AddressForm = (props, { className, ...rest }) => {
  useEffect(() => {
    props.setButtonDisable(false);
  });
  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(
            props.formik.touched.firstName && props.formik.errors.firstName
          )}
          helperText={
            props.formik.touched.firstName && props.formik.errors.firstName
          }
          fullWidth
          label="Name"
          name="firstName"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          required
          value={props.formik.values.firstName}
          variant="outlined"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(
            props.formik.touched.lastName && props.formik.errors.lastName
          )}
          helperText={
            props.formik.touched.lastName && props.formik.errors.lastName
          }
          fullWidth
          label="Last Name"
          name="lastName"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          required
          value={props.formik.values.lastName}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={Boolean(
            props.formik.touched.address1 && props.formik.errors.address1
          )}
          helperText={
            props.formik.touched.address1 && props.formik.errors.address1
          }
          fullWidth
          label="Address Line 1"
          name="address1"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          required
          value={props.formik.values.address1}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={Boolean(
            props.formik.touched.address2 && props.formik.errors.address2
          )}
          helperText={
            props.formik.touched.address2 && props.formik.errors.address2
          }
          fullWidth
          label="Address Line 2"
          name="address2"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          // type="number"
          value={props.formik.values.address2}
          variant="outlined"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(props.formik.touched.city && props.formik.errors.city)}
          helperText={props.formik.touched.city && props.formik.errors.city}
          fullWidth
          label="City"
          name="city"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          required
          value={props.formik.values.city}
          variant="outlined"
          SelectProps={{ native: true }}
          select
        >
          {cities.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(
            props.formik.touched.state && props.formik.errors.state
          )}
          helperText={props.formik.touched.state && props.formik.errors.state}
          fullWidth
          name="state"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          required
          select
          SelectProps={{ native: true }}
          value={props.formik.values.state}
          variant="outlined"
        >
          {states.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(props.formik.touched.zip && props.formik.errors.zip)}
          helperText={props.formik.touched.zip && props.formik.errors.zip}
          fullWidth
          label="Zip"
          name="zip"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          // type="number"
          value={props.formik.values.zip}
          variant="outlined"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(
            props.formik.touched.country && props.formik.errors.country
          )}
          helperText={
            props.formik.touched.country && props.formik.errors.country
          }
          fullWidth
          name="country"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          required
          select
          SelectProps={{ native: true }}
          value={props.formik.values.country}
          variant="outlined"
        >
          {countries.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item md={6} xs={12}>
        <Box alignItems="center" display="flex" ml={-1}>
          <Checkbox
            checked={props.formik.values.policy}
            name="policy"
            onChange={props.formik.handleChange}
          />
          <Typography color="textSecondary" variant="body1">
            Let me in
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AddressForm;
