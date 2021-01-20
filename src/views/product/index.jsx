import React, { useEffect } from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import ProductList from "./ProductList";
import {
  productListRequest,
  productListSuccess,
  productListFailure,
  productListFetch,
} from "../../redux/productList/productListAction";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  productCard: {
    height: "100%",
  },
}));

const Product = (props) => {
  const classes = useStyles();
  const {
    productListRequest,
    productListFetch,
    productListSuccess,
    productListFailure,
  } = props;

  useEffect(() => {
    productListRequest();
    productListFetch()
      .then((response) => {
        productListSuccess(response.data);
      })
      .catch((error) => {
        productListFailure(error.message);
      });
  }, [
    productListRequest,
    productListFetch,
    productListSuccess,
    productListFailure,
  ]);

  return (
    <Page className={classes.root} title="Products">
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid container spacing={3}>
            {props.productListData.productList.data &&
              props.productListData.productList.data.map((product) => (
                <Grid item key={product.id} lg={4} md={6} xs={12} sm={6}>
                  <ProductList
                    className={classes.productCard}
                    product={product}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => {
  return {
    productListData: state.productListRed,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    productListRequest: () => dispatch(productListRequest()),
    productListSuccess: (productList) =>
      dispatch(productListSuccess(productList)),
    productListFailure: (errorMessage) =>
      dispatch(productListFailure(errorMessage)),
    productListFetch: () => dispatch(productListFetch()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
