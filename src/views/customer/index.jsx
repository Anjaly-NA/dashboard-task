import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import CustomerForm from "./CustomerForm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Customer = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={8} md={6} xs={12} sm={8}>
            <CustomerForm />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Customer;
