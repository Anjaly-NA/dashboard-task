import React, { useEffect } from "react";
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
import ModalBox from "../../components/Modal";
import { connect } from "react-redux";
import {
  loginUser,
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
} from "../../redux";
import Loader from "../../components/Loader";
import { setModal, unsetModal } from "../../redux/common/modal/modalAction";

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

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/user/dashboard");
    }
    // firebase case: if user is logged in ,when login page is taken navigate to the dashboard page
    // if (firebase.getCurrentUsername()) {
    //   navigate("/user/dashboard");
    // }
  });

  const submitLogin = (values) => {
    props.userLoginRequest();
    let credentials = { email: values.email, password: values.password };
    props
      .userLogin(credentials)
      .then((resp) => {
        if (resp.status === 200) {
          props.userLoginSuccess(resp.data.token);
          localStorage.setItem("userToken", resp.data.token);
          navigate("/user/dashboard");
        }
      })
      .catch((error) => {
        if (error.message.includes("400")) {
          props.userLoginFailure("User not found");
          props.setModal("User not found");
        }
      });

    //login using firebase
    //     try {
    // await firebase.login(values.email, values.password);
    // navigate("/user/dashboard", { replace: true });
    // } catch (error) {
    //   setModal(true);
    //   setLoginError(loginError);

    // login error message using firebase
    // setLoginError(error.message);
    // }
  };
  const closeModal = () => {
    // setModal(false);
    props.unsetModal();
  };

  return (
    <>
      <Page className={classes.root}>
        <ModalBox
          message={props.modalData.modalMessage}
          modal={props.modalData.openModal}
          closeModal={closeModal}
        />
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
        >
          <Container maxWidth="sm">
            {props.loginData.loading && <Loader />}
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
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loginData: state.loginRed,
    modalData: state.modalRed,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (credentials) => dispatch(loginUser(credentials)),
    userLoginSuccess: (token) => dispatch(userLoginSuccess(token)),
    userLoginFailure: (errorMsg) => dispatch(userLoginFailure(errorMsg)),
    userLoginRequest: () => dispatch(userLoginRequest()),

    setModal: (message) => dispatch(setModal(message)),
    unsetModal: () => dispatch(unsetModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
// export default LoginView;
