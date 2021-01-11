import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Page from "../../components/Page";
import firebase from "../../firebase";
import ModalBox from "../../components/Modal";
import { connect } from "react-redux";
import { loginUser } from "../../redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const initialValues = {
  email: "",
  password: "",
};
const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string()
    .max(255)
    .required("Password is required"),
});

const LoginView = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (firebase.getCurrentUsername()) {
      navigate("/user/dashboard");
    }
  });

  const submitLogin = async (values) => {
    // try {
    let credentials = { email: values.email, password: values.password };
    await props.userLogin(credentials);
    console.log("entered",  "yok", props.loginToken);
    //   await userLogin(credentials);
    //   console.log(loginData, "result");
    //   if (loginData.errorMessage !== "") {
    //     setModal(true);
    //     setLoginError(loginData.errorMessage);
    //   }
    // localStorage.setItem("userToken", loginToken);

    //login using firebase
    // await firebase.login(values.email, values.password);
    // navigate("/user/dashboard", { replace: true });
    // } catch (error) {
    //   setModal(true);
    //   setLoginError(loginError);

    //login error message using firebase
    // setLoginError(error.message);
    // }
  };
  const modalClose = () => {
    setModal(false);
  };

  return (
    <Page className={classes.root}>
      <ModalBox modal={modal} message={loginError} closeModal={modalClose} />
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={submitLogin}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
                isValid,
                dirty,
              } = formik;
              return (
                <form onSubmit={handleSubmit}>
                  <Box mb={3}>
                    <Typography color="textPrimary" variant="h2">
                      Sign in
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      Sign in to the application
                    </Typography>
                  </Box>
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
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={!(dirty && isValid)}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  </Box>
                  <Typography color="textSecondary" variant="body1">
                    Don&apos;t have an account?{" "}
                    <Link component={RouterLink} to="/register" variant="h6">
                      Sign up
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
  console.log(state.loginRed, "mapStateToProps");
  return {
    loginData: state.loginRed,
    // loginLoading: state.loginRed.loading,
    loginToken: state.loginRed.userToken,
    // loginError: state.loginRed.errorMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { userLogin: (credentials) => dispatch(loginUser(credentials)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
// export default LoginView;
