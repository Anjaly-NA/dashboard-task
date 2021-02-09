import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Page from "../../components/Page";
import ProductList from "./ProductList";
import {
  productListRequest,
  productListSuccess,
  productListFailure,
  productListFetch,
} from "../../redux/productList/productListAction";
import {
  searchListRequest,
  searchListSuccess,
  searchListFailure,
  searchListFetch,
} from "../../redux/search/searchAction";
import { connect } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  productCard: {
    height: "100%",
    cursor: "pointer",
  },
}));

const Product = (props) => {
  const [value, setValue] = useState({ id: "", name: "None" });
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();
  const {
    productListRequest,
    productListFetch,
    productListSuccess,
    productListFailure,
    searchListRequest,
    searchListSuccess,
    searchListFailure,
    searchListFetch,
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

    searchListRequest();
    searchListFetch()
      .then((response) => {
        searchListSuccess(response.data);
      })
      .catch((error) => {
        searchListFailure(error.message);
      });
  }, [
    productListRequest,
    productListFetch,
    productListSuccess,
    productListFailure,
    searchListRequest,
    searchListSuccess,
    searchListFailure,
    searchListFetch,
  ]);
  const handleSearch = (productDetail) => {
    var productId;
    var productArray = [];
    if (productDetail !== null) {
      setValue(productDetail);
      productId = productDetail.id;
    } else {
      setValue({ id: "", name: "None" });
      productId = "";
    }
    productListRequest();
    productListFetch(productId)
      .then((response) => {
        if (productDetail !== null) {
          productArray.push(response.data.data);
          productListSuccess(productArray);
        } else {
          productListSuccess(response.data);
        }
      })
      .catch((error) => {
        productListFailure(error.message);
      });
  };

  return (
    <Page className={classes.root} title="Products">
      <Container maxWidth={false}>
        <Card>
          <CardHeader title="Search..." />
          <CardContent>
            <Autocomplete
              id="combo-box-demo"
              value={value}
              onChange={(event, newValue) => {
                handleSearch(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              options={
                props.searchListData.searchList.data !== undefined &&
                props.searchListData.searchList.data
              }
              getOptionLabel={(option) => capitalizeFirstLetter(option.name)}
              renderOption={(option) => (
                <React.Fragment>
                  <Avatar
                    style={{ color: option.color, marginRight: "10px" }}
                  />
                  {capitalizeFirstLetter(option.name)}
                </React.Fragment>
              )}
              style={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Combo box" variant="outlined" />
              )}
            />
          </CardContent>
        </Card>
        <Box mt={3}>
          <Grid container spacing={3}>
            {props.productListData.productList.data !== undefined
              ? props.productListData.productList.data.map((product) => (
                  <Grid item key={product.id} lg={4} md={6} xs={12} sm={6}>
                    <ProductList
                      className={classes.productCard}
                      product={product}
                    />
                  </Grid>
                ))
              : props.productListData.productList.map((product) => (
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
    searchListData: state.searchListRed,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    productListRequest: () => dispatch(productListRequest()),
    productListSuccess: (productList) =>
      dispatch(productListSuccess(productList)),
    productListFailure: (errorMessage) =>
      dispatch(productListFailure(errorMessage)),
    productListFetch: (productId) => dispatch(productListFetch(productId)),

    searchListRequest: () => dispatch(searchListRequest()),
    searchListSuccess: (searchList) => dispatch(searchListSuccess(searchList)),
    searchListFailure: (errorMessage) =>
      dispatch(searchListFailure(errorMessage)),
    searchListFetch: () => dispatch(searchListFetch()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
