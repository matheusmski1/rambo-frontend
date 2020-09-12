import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          margin: 0,
          padding: 0,
          outline: 0,
          boxSizing: "border-box",
        },
        body: {
          textRendering: "optimizeLegibility !important",
          WebkitFontSmoothing: "antialiased !important",
        },
        button: {
          cursor: "pointer",
        },
        a: {
          textDecoration: "none",
          fontSize: '1.2rem',
          color: '#7CA9FF'
        },
        "::-webkit-scrollbar": {
          width: 8,
        },
        "::-webkit-scrollbar-track": {
          background: "#fff",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#ccc",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#bbbbbb",
        },
        "::-webkit-scrollbar-thumb:window-inactive": {
          background: "#ccc",
        },
      },
    },
  },
});

export default theme;
