import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Button,
  IconButton,
  Snackbar,
  TextField,
  Card,
  CardContent,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CloseIcon from "@material-ui/icons/Close";
import Page from "../../components/Page";
import ProductList from "./ProductList";
import {
  productListRequest,
  productListSuccess,
  productListFailure,
  productListFetch,
} from "../../redux/productList/productListAction";
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
const options = [
  {
    color: "#98B2D1",
    id: "",
    name: "none",
    pantone_value: "15-4020",
    year: 2000,
  },
  {
    color: "#98B2D1",
    id: 1,
    name: "cerulean",
    pantone_value: "15-4020",
    year: 2000,
  },
  {
    id: 2,
    name: "fuchsia rose",
    year: 2001,
    color: "#C74375",
    pantone_value: "17-2031",
  },
  {
    id: 3,
    name: "true red",
    year: 2002,
    color: "#BF1932",
    pantone_value: "19-1664",
  },
  {
    id: 4,
    name: "aqua sky",
    year: 2003,
    color: "#7BC4C4",
    pantone_value: "14-4811",
  },
];
const Product = (props) => {
  const [snackbar, setSnackbar] = useState(false);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
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
  const handleClick = () => {
    setSnackbar(true);
  };
  const handleClose = () => {
    setSnackbar(false);
  };
  const handleSearch = (productDetail) => {
    var productId;
    var productArray = [];
    if (productDetail !== null) {
      setValue(productDetail);
      productId = productDetail.id;
    } else {
      setValue(options[0]);
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
        <Card title="Search...">
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
              options={options}
              getOptionLabel={(option) => option.name}
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
                      onClick={handleClick}
                      className={classes.productCard}
                      product={product}
                    />
                  </Grid>
                ))
              : props.productListData.productList.map((product) => (
                  <Grid item key={product.id} lg={4} md={6} xs={12} sm={6}>
                    <ProductList
                      onClick={handleClick}
                      className={classes.productCard}
                      product={product}
                    />
                  </Grid>
                ))}
            {/* {props.productListData.productList.data &&
              props.productListData.productList.data.map((product) => (
                <Grid item key={product.id} lg={4} md={6} xs={12} sm={6}>
                  <ProductList
                    onClick={handleClick}
                    className={classes.productCard}
                    product={product}
                  />
                </Grid>
              ))} */}
          </Grid>
        </Box>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Selected"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              CLOSE
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
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
    productListFetch: (productId) => dispatch(productListFetch(productId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
