import axios from "axios";
import { setAuthorizationToken } from "../helpers/setAuthorizationToken";

const login = async (username, password) => {
  return await axios
    .post("http://localhost:3000/login", { username, password })
    .then((user) => {
      if (user.data.status) {
        const { token } = user.data;
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
      }
      return user.data;
    })
    .catch((err) => console.log(err));
};

const logout = () => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
};

const logger = {
  login,
  logout,
};

export default logger;
