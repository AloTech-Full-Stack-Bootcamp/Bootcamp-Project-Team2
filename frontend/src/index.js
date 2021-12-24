import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./static/css/bootstrap.min.css";
import App from "./App";

import { setAuthorizationToken } from "./helpers/setAuthorizationToken";

//Redux config
import { Provider } from "react-redux";
import store from "./helpers/Store";

const jwtToken = localStorage.getItem("jwtToken");
if (jwtToken) {
  setAuthorizationToken(jwtToken);
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
