import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import routes from "./routes";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import firebase from "./firebase";
import { Provider } from "react-redux";
import store from "./redux/store";
import Loader from "./components/Loader";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const App = () => {
  const routing = useRoutes(routes);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });
  return firebaseInitialized !== false ? (
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles /> {routing}
        </ThemeProvider>
      </Provider>
    </Elements>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export default App;
