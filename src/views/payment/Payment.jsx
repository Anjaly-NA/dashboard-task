import React from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  makeStyles,
} from "@material-ui/core";
import Page from "../../components/Page";

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
  card:{
    marginTop:'30px'
  }
}));

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyle();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <Page title="Payment">
      <Container maxWidth="sm">
        <Card  className={classes.card}>
          <CardHeader title="Payment" />
          <Divider />
          <CardContent >
            <form onSubmit={handleSubmit}>
              <label className={classes.label}>
                Card number
                <CardNumberElement options={options} />
              </label>
              <label className={classes.label}>
                Expiration date
                <CardExpiryElement options={options} />
              </label>
              <label className={classes.label}>
                CVC
                <CardCvcElement options={options} />
              </label>
              <Button
                type="submit"
                disabled={!stripe}
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                Pay
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default Payment;
