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

const App = () => {
  const routing = useRoutes(routes);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });
  return firebaseInitialized !== false ? (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </Provider>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export default App;
