import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
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
} from "@material-ui/core";
import Page from "../../components/Page";
import { connect } from "react-redux";
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFailure,
  userRegister,
} from "../../redux";
import ModalBox from "../../components/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  firstName: Yup.string()
    .max(255)
    .required("First name is required"),
  lastName: Yup.string()
    .max(255)
    .required("Last name is required"),
  password: Yup.string()
    .max(255)
    .required("password is required"),
  policy: Yup.boolean().oneOf([true], "This field must be checked"),
});
const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  policy: false,
};

const RegisterView = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [registerMessage, setRegisterMessage] = useState("");

  const modalClose = () => {
    setModal(false);
    // navigate("/user/dashboard");
  };

  const onRegister = (values) => {
    props.userRegisterRequest();
    let data = { email: values.email, password: values.password };
    props
      .userRegister(data)
      .then((response) => {
        if (response.status === 200) {
          props.userRegisterSuccess(response.data.token);
          setModal(true);
          setRegisterMessage("Registration Success, Logn Now");
        }
      })
      .catch((error) => {
        props.userRegisterFailure(error.message);
        setModal(true);
        setRegisterMessage("Registration Failed");
      });
  };

  return (
    <Page className={classes.root} title="Register">
      <ModalBox
        modal={modal}
        message={registerMessage}
        closeModal={modalClose}
      />
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onRegister}
          >
            {(formik) => {
              const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isValid,
                dirty,
              } = formik;
              return (
                <form onSubmit={handleSubmit}>
                  <Box mb={3}>
                    <Typography color="textPrimary" variant="h2">
                      Create new account
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(touched.firstName && errors.firstName)}
                    fullWidth
                    helperText={touched.firstName && errors.firstName}
                    label="First name"
                    margin="normal"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.lastName && errors.lastName)}
                    fullWidth
                    helperText={touched.lastName && errors.lastName}
                    label="Last name"
                    margin="normal"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email Address"
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <Box alignItems="center" display="flex" ml={-1}>
                    <Checkbox
                      checked={values.policy}
                      name="policy"
                      onChange={handleChange}
                    />
                    <Typography color="textSecondary" variant="body1">
                      I have read the{" "}
                      <Link
                        color="primary"
                        component={RouterLink}
                        to="/termsconditios"
                        underline="always"
                        variant="h6"
                        target="_blank"
                      >
                        Terms and Conditions
                      </Link>
                    </Typography>
                  </Box>
                  {Boolean(touched.policy && errors.policy) && (
                    <FormHelperText error>{errors.policy}</FormHelperText>
                  )}
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={!(dirty && isValid)}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign up now
                    </Button>
                  </Box>
                  <Typography color="textSecondary" variant="body1">
                    Have an account?{" "}
                    <Link component={RouterLink} to="/login" variant="h6">
                      Sign in
                    </Link>
                  </Typography>
                </form>
              );
            }}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};
const mapStateToProps = (state) => {
  return { registerData: state.registerRed };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (registerInput) => dispatch(userRegister(registerInput)),
    userRegisterRequest: () => dispatch(userRegisterRequest()),
    userRegisterSuccess: (registerToken) =>
      dispatch(userRegisterSuccess(registerToken)),
    userRegisterFailure: (registerError) =>
      dispatch(userRegisterFailure(registerError)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);

// export default RegisterView;
