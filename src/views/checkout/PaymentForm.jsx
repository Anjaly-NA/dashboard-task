import React from "react";
import { Box, Checkbox, TextField, Typography, Grid } from "@material-ui/core";

const AddressForm = (props, { className, ...rest }) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(
            props.formik.touched.nameOnCard && props.formik.errors.nameOnCard
          )}
          helperText={
            props.formik.touched.nameOnCard && props.formik.errors.nameOnCard
          }
          fullWidth
          label="Name on Card"
          name="nameOnCard"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          required
          value={props.formik.values.nameOnCard}
          variant="outlined"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(
            props.formik.touched.cardNumber && props.formik.errors.cardNumber
          )}
          helperText={
            props.formik.touched.cardNumber && props.formik.errors.cardNumber
          }
          fullWidth
          label="Card Number"
          name="cardNumber"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          required
          value={props.formik.values.cardNumber}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="date"
          error={Boolean(
            props.formik.touched.expiryDate && props.formik.errors.expiryDate
          )}
          helperText={
            props.formik.touched.expiryDate && props.formik.errors.expiryDate
          }
          fullWidth
          label="Expiry Date"
          name="expiryDate"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          required
          value={props.formik.values.expiryDate}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={Boolean(props.formik.touched.cvv && props.formik.errors.cvv)}
          helperText={props.formik.touched.cvv && props.formik.errors.cvv}
          fullWidth
          label="Cvv"
          name="cvv"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.cvv}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
export default AddressForm;
