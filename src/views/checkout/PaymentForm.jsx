import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Page from "../../components/Page";
import ModalBox from "../../components/Modal";
import { connect } from "react-redux";
import {
  setModal,
  unsetModal,
  setLoader,
  unsetLoader,
} from "../../redux/common/modal/modalAction";
import Loader from "../../components/Loader";

const options = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "teal",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      letterSpacing: "0.025em",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#9e2146",
    },
  },
};

const useStyle = makeStyles((theme) => ({
  label: {
    color: theme.palette.text.secondary,
  },
  card: {
    marginTop: "30px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    height: "220px",
    justifyContent: "space-around",
  },
  btn: {
    width: "50px",
  },
  indicator: {
    color: theme.palette.primary.color1,
  },
}));

const PaymentForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyle();
  const [num, setNum] = useState(" ");
  const [dat, setDat] = useState(" ");
  const [cvc, setCvc] = useState(" ");

  useEffect(() => {
    if (num === "" && dat === "" && cvc === "") {
      props.setButtonDisable(false);
    } else {
      props.setButtonDisable(true);
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.setLoader();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (payload.paymentMethod) {
      props.unsetLoader();
      props.setModal(
        `Paid successfully via ${payload.paymentMethod.card.brand}`
      );
      props.setButtonDisable(false);
    } else {
      props.unsetLoader();
      props.setModal(payload.error.message);
    }
  };
  const closeModal = () => {
    props.unsetModal();
  };
  const handleNumber = (event, type) => {
    if (type === "number") {
      if (event.complete === true) {
        setNum("");
      } else if (event.error !== undefined) {
        setNum(event.error.message);
      } else {
        setNum("Card Number Incomplete");
      }
    } else if (type === "date") {
      if (event.complete === true) {
        setDat("");
      } else if (event.error !== undefined) {
        setDat(event.error.message);
      } else {
        setDat("Date Incomplete");
      }
    } else if (type === "cvc") {
      if (event.complete === true) {
        setCvc("");
      } else if (event.error !== undefined) {
        setCvc(event.error.message);
      } else {
        setCvc("Cvc Incomplete");
      }
    }
  };

  return (
    <Page title="Payment">
      <ModalBox
        message={props.modalData.modalMessage}
        modal={props.modalData.openModal}
        closeModal={closeModal}
      />
      {props.modalData.loader && <Loader />}
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <CardHeader title="Payment" />
          <Divider />
          <CardContent>
            {/* <form onSubmit={handleSubmit}> */}
            <Box className={classes.box}>
              <label className={classes.label}>
                Card number
                <CardNumberElement
                  options={options}
                  onChange={(event) => handleNumber(event, "number")}
                />
              </label>
              <label className={classes.label}>
                Expiration date
                <CardExpiryElement
                  options={options}
                  onChange={(event) => handleNumber(event, "date")}
                />
              </label>
              <label className={classes.label}>
                CVC
                <CardCvcElement
                  options={options}
                  onChange={(event) => handleNumber(event, "cvc")}
                />
              </label>
              <Typography variant="body2" className={classes.indicator}>
                {num}
                {"  "}
                {dat}
              </Typography>
              {/* <Button
                type="submit"
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                className={classes.btn}
                disabled={num !== "" || dat !== ""}
                onClick={handleSubmit}
              >
                Pay
              </Button> */}
            </Box>
            {/* </form> */}
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    modalData: state.modalRed,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (message) => dispatch(setModal(message)),
    unsetModal: () => dispatch(unsetModal()),
    setLoader: () => dispatch(setLoader()),
    unsetLoader: () => dispatch(unsetLoader()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
