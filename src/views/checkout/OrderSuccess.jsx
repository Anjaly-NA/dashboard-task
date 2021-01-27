import React from "react";
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

const useStyle = makeStyles(() => ({
  card: {
    marginTop: "30px",
  },
}));

const OrderSuccess = () => {
  const classes = useStyle();
  return (
    <Container maxWidth="sm">
      <Card className={classes.card}>
        <CardHeader title="Thank you for your order." />
        <Divider />
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary">
            Your order number is #2001539. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OrderSuccess;
