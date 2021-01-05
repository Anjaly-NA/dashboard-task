import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import routes from "./routes";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import firebase from "./firebase";
import { CircularProgress } from "@material-ui/core";

const App = () => {
  const routing = useRoutes(routes);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });
  return firebaseInitialized !== false ? (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  ) : (
    <div>
      <CircularProgress />
    </div>
  );
};

export default App;
