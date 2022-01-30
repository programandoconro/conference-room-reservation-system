import { createTheme } from "@mui/material/styles";
import { purple, blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
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
