import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import { createTheme ,ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1ea4ce",
    },
  },
});
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider >
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
