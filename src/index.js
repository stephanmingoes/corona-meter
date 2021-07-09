import React from "react";
import ReactDOM from "react-dom";
import css from "./styles/main.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Reducer/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
