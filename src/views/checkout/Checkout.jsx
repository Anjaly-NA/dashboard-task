import React from "react";
import { Formik } from "formik";
import clsx from "clsx";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles,
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
} from "@material-ui/core";
import * as Yup from "yup";
import Page from "../../components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));
const cities = [
  {
    value: undefined,
    label: "Choose a city",
  },
  {
    value: "1",
    label: "New York",
  },
  {
    value: "2",
    label: "Chicago",
  },
  {
    value: "3",
    label: "Saigon",
  },
];

const states = [
  {
    value: undefined,
    label: "Choose state",
  },
  {
    value: "11",
    label: "Florida",
  },
  {
    value: "22",
    label: "Michigan",
  },
  {
    value: "33",
    label: "Texas",
  },
];

const countries = [
  {
    value: null,
    label: "Choose a Country",
  },
  {
    value: "111",
    label: "United States",
  },
  {
    value: "222",
    label: "Italy",
  },
  {
    value: "333",
    label: "Vietnam",
  },
];

// var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test("90210");
// const validationSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .max(255)
//     .required("First name is required"),
//   lastName: Yup.string()
//     .max(255)
//     .required("Last name is required"),
//   address1: Yup.string()
//     .max(255)
//     .required("Address is required"),
//   address2: Yup.string().max(255),
//   city: Yup.string()
//     .max(255)
//     .required("City is required"),
//   state: Yup.string()
//     .max(255)
//     .required("State is required"),
//   zip: Yup.string()
//     .required("Zip code is required")
//     .matches(isValidZip, "Invalid zip code"),
//   country: Yup.string()
//     .max(255)
//     .required("Country is required"),
//   policy: Yup.boolean().oneOf([true], "This field must be checked"),
// });
// const initialValues = {
//   firstName: "",
//   lastName: "",
//   address1: "",
//   address2: "",
//   city: "",
//   state: "",
//   zip: "",
//   country: "",
//   policy: false,
// };
const AddressForm = (props, { className, ...rest }) => {
  const classes = useStyles();
  return (
    // <Page className={classes.root} title="Chechout">
    //   <Container maxWidth="lg">
    //     <Grid container spacing={3}>
    //       <Grid item lg={8} md={6} xs={12} sm={8}>
    //         <Formik
    //           initialValues={initialValues}
    //           validationSchema={validationSchema}
    //           // onSubmit={saveCustomer}
    //         >
    //           {(formik) => {
    //             const {
    //               props.errors,
    //               props.values,
    //               props.handleChange,
    //               props.handleBlur,
    //               handleSubmit,
    //               props.touched,
    //               isValid,
    //               dirty,
    //             } = formik;
    //             return (
    //               <form className={clsx(className)} onSubmit={handleSubmit}>
    // <Card>
    //   <CardHeader
    //     subheader="The information can't be edited"
    //     title="Address"
    //   />
    //   <Divider />
    //   <CardContent>
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(props.touched.firstName && props.errors.firstName)}
          helperText={props.touched.firstName && props.errors.firstName}
          fullWidth
          label="Name"
          name="firstName"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          required
          value={props.values.firstName}
          variant="outlined"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(props.touched.lastName && props.errors.lastName)}
          helperText={props.touched.lastName && props.errors.lastName}
          fullWidth
          label="Last Name"
          name="lastName"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          required
          value={props.values.lastName}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={Boolean(props.touched.address1 && props.errors.address1)}
          helperText={props.touched.address1 && props.errors.address1}
          fullWidth
          label="Address Line 1"
          name="address1"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          required
          value={props.values.address1}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={Boolean(props.touched.address2 && props.errors.address2)}
          helperText={props.touched.address2 && props.errors.address2}
          fullWidth
          label="Address Line 2"
          name="address2"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          // type="number"
          value={props.values.address2}
          variant="outlined"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(props.touched.city && props.errors.city)}
          helperText={props.touched.city && props.errors.city}
          fullWidth
          label="City"
          name="city"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          required
          value={props.values.city}
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
          error={Boolean(props.touched.state && props.errors.state)}
          helperText={props.touched.state && props.errors.state}
          fullWidth
          name="state"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          required
          select
          SelectProps={{ native: true }}
          value={props.values.state}
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
          error={Boolean(props.touched.zip && props.errors.zip)}
          helperText={props.touched.zip && props.errors.zip}
          fullWidth
          label="Zip"
          name="zip"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          // type="number"
          value={props.values.zip}
          variant="outlined"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          error={Boolean(props.touched.country && props.errors.country)}
          helperText={props.touched.country && props.errors.country}
          fullWidth
          name="country"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          required
          select
          SelectProps={{ native: true }}
          value={props.values.country}
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
            checked={props.values.policy}
            name="policy"
            onChange={props.handleChange}
          />
          <Typography color="textSecondary" variant="body1">
            Let me in
          </Typography>
        </Box>
      </Grid>
    </Grid>
    //   </CardContent>
    //   <Divider />
    //   <Box display="flex" justifyContent="flex-end" p={2}></Box>
    // </Card>
    //               </form>
    //             );
    //           }}
    //         </Formik>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Page>
  );
};
export default AddressForm;
