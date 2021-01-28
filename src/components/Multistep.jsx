import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "../views/checkout/AddressForm";
import * as Yup from "yup";
import Page from "../components/Page";
import { Formik, Form } from "formik";
import {
  Container,
  Grid,
  CardContent,
  Box,
  Card,
  CardHeader,
  Divider,
} from "@material-ui/core";
import PaymentForm from "../views/checkout/PaymentForm";
import Review from "../views/checkout/Review";
import OrderSuccess from "../views/checkout/OrderSuccess";
import moment from "moment";

var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const validationSchema = [
  Yup.object().shape({
    firstName: Yup.string()
      .max(255)
      .required("First name is required"),
    lastName: Yup.string()
      .max(255)
      .required("Last name is required"),
    address1: Yup.string()
      .max(255)
      .required("Address is required"),
    address2: Yup.string().max(255),
    city: Yup.string()
      .max(255)
      .required("City is required"),
    state: Yup.string()
      .max(255)
      .required("State is required"),
    zip: Yup.string()
      .required("Zip code is required")
      .matches(isValidZip, "Invalid zip code"),
    country: Yup.string()
      .max(255)
      .required("Country is required"),
    policy: Yup.boolean().oneOf([true], "This field must be checked"),
  }),
  Yup.object().shape({
    nameOnCard: Yup.string().required("Card holder name is required"),
    cardNumber: Yup.string()
      .required("Card number is required")
      .matches(visaRegEx, "Invalid card number"),
    expiryDate: Yup.string()
      .nullable()
      .required("Expiry date is required")
      .test("expDate", "Enter valid expiry date", (val) => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    cvv: Yup.string()
      .required("Cvv is required")
      .test("len", "Enter valid cvv", (val) => val && val.length === 3),
  }),
];
const initialValues = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  policy: false,
  nameOnCard: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
};

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage: `linear-gradient( 136deg, ${theme.palette.primary.color4} 0%, ${theme.palette.primary.color1} 50%, ${theme.palette.primary.color1} 100%)`,
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage: `linear-gradient( 136deg, ${theme.palette.primary.white} 0%, ${theme.palette.primary.color4} 50%, ${theme.palette.primary.color4} 100%)`,
  },
}));

const ColorlibStepIcon = (props) => {
  const classes = useStyle();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const getSteps = () => {
  return ["Select  address", "step 2", "step 3"];
};
const getTitle = (step) => {
  switch (step) {
    case 0:
      return "Shipping address";
    case 1:
      return "Payment";
    case 2:
      return "Order summary";
    default:
      return "Unknown step";
  }
};

const getStepContent = (step, formik) => {
  switch (step) {
    case 0:
      return <AddressForm formik={formik} />;
    case 1:
      return <PaymentForm formik={formik} />;
    case 2:
      return <Review />;
    default:
      return "Unknown step";
  }
};

const Multistep = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleMultistep = (values, actions) => {
    if (activeStep === steps.length - 1) {
      handleNext();
    } else {
      handleNext();
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <Page className={classes.root} title="Checkout">
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <OrderSuccess />
          ) : (
            <div>
              <Typography className={classes.instructions}>
                <Page className={classes.root} title="Checkout">
                  <Container maxWidth="lg">
                    <Grid container spacing={3}>
                      <Grid item lg={8} md={6} xs={12} sm={8}>
                        <Formik
                          initialValues={initialValues}
                          validationSchema={validationSchema[activeStep]}
                          onSubmit={handleMultistep}
                        >
                          {(formik) => {
                            const {
                              handleSubmit,
                              isValid,
                              dirty,
                              isSubmitting,
                            } = formik;
                            return (
                              <Form onSubmit={handleSubmit} id="checkoutForm">
                                <Card>
                                  <CardHeader
                                    subheader="This information can't be edited"
                                    title={getTitle(activeStep)}
                                  />
                                  <Divider />
                                  <CardContent>
                                    {getStepContent(activeStep, formik)}
                                  </CardContent>
                                  <Divider />
                                  <Box
                                    display="flex"
                                    justifyContent="flex-end"
                                    p={2}
                                  >
                                    <div>
                                      <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                      >
                                        Back
                                      </Button>
                                      <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        // onClick={handleNext}
                                        className={classes.button}
                                        // disabled={!(dirty && isValid)}
                                        disabled={isSubmitting}
                                      >
                                        {activeStep === steps.length - 1
                                          ? "Finish"
                                          : "Next"}
                                      </Button>
                                    </div>
                                  </Box>
                                </Card>
                              </Form>
                            );
                          }}
                        </Formik>
                      </Grid>
                    </Grid>
                  </Container>
                </Page>
              </Typography>
              {/* <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                disabled={!(dirty && isValid)}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div> */}
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};
export default Multistep;
