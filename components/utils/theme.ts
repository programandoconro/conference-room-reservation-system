import { createTheme } from "@mui/material/styles";
import { purple, blue, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffbbbb",
    },
    secondary: {
      main: "#f44336",
      light: "rgba(0, 0, 0, 0.12)",
    },
    success: {
      main: blue[500],
    },
  },
});

export default theme;