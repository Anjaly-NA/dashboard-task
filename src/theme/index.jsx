import { createMuiTheme, colors } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    background: {
      dark: "#F4F6F8",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: colors.teal[500],
      light: colors.teal[100],
      color1: colors.red[400],
      color2: colors.green[600],
      color3: colors.blue[600],
      color4: colors.orange[600],
      color5: colors.teal[50],
      white: colors.common.white,
    },
    secondary: {
      main: colors.red[500],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
    border: {
      primary: colors.grey[500],
    },
  },
  shadows,
  typography,
});

export default theme;
