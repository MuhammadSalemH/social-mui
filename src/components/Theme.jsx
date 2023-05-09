import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { grey, lightBlue } from "@mui/material/colors";

const Theme = ({ children, mode }) => {
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            main: "#fff",
            sec: grey[200],
            blue: "#1b74e4",
            text: grey[900],
          }
        : {
            main: grey[900],
            sec: grey[800],
            blue: lightBlue[500],
            text: grey[200],
          }),
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
