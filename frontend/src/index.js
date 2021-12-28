import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./static/css/bootstrap.min.css";
import App from "./App";
import { setAuthorizationToken } from "./helpers/setAuthorizationToken";
import { Auth0Provider } from "@auth0/auth0-react";

//Redux config
import { Provider } from "react-redux";
import store from "./helpers/Store";

const jwtToken = localStorage.getItem("jwtToken");
if (jwtToken) {
  setAuthorizationToken(jwtToken);
}

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.login.origin}>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
