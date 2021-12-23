import axios from "axios";

const ApiInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export default ApiInstance;
