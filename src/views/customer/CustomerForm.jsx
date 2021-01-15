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
import {
  addCustomerRequest,
  addCustomerSuccess,
  addCustomerFailure,
  addCustomer,
} from "../../redux/index";
import { connect } from "react-redux";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";

const states = [
  {
    value: "",
    label: "Choose a State",
  },
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
  email: "",
  job: "",
  phone: "",
  state: "",
  country: "",
};
const phoneRegExp = /((\+*)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required Name"),
  job: Yup.string().required("Required Job"),
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

const CustomerForm = (props, { className, ...rest }) => {
  const [modal, setModal] = useState(false);
  const [addCustomerMessage, setAddCustomerMessage] = useState("");

  const saveCustomer = (values, resetForm) => {
    props.addCustomerRequest();
    let body = { name: values.firstName, job: values.job };
    props
      .addCustomer(body)
      .then((response) => {
        props.addCustomerSuccess(response.data.data);
        resetForm.resetForm();
        setModal(true);
        setAddCustomerMessage("Added Customer Successfully");
      })
      .catch((error) => {
        props.addCustomerFailure(error.message);
      });
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Modal
        modal={modal}
        closeModal={closeModal}
        message={addCustomerMessage}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={saveCustomer}
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
            <form className={clsx(className)} onSubmit={handleSubmit}>
              <Card>
                <CardHeader
                  subheader="The information can be edited"
                  title="Customer"
                />
                {props.customerData.loading && <Loader />}
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        fullWidth
                        label="Name"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        value={values.firstName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        error={Boolean(touched.job && errors.job)}
                        helperText={touched.job && errors.job}
                        fullWidth
                        label="Job Role"
                        name="job"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        value={values.job}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
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
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // type="number"
                        value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        error={Boolean(touched.country && errors.country)}
                        helperText={touched.country && errors.country}
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
                        error={Boolean(touched.state && errors.state)}
                        helperText={touched.state && errors.state}
                        fullWidth
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
                </CardContent>
                <Divider />
                <Box display="flex" justifyContent="flex-end" p={2}>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={!(dirty && isValid)}
                  >
                    Add Customer
                  </Button>
                </Box>
              </Card>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
const mapStateToProps = (state) => {
  return { customerData: state.addCustomerRed };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCustomerRequest: () => dispatch(addCustomerRequest()),
    addCustomerSuccess: (addedData) => dispatch(addCustomerSuccess(addedData)),
    addCustomerFailure: (errorMessage) =>
      dispatch(addCustomerFailure(errorMessage)),
    addCustomer: (customerData) => dispatch(addCustomer(customerData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
