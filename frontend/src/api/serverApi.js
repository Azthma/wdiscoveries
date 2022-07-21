/*eslint-disable */
import axios from "axios";

const serverApi = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: true,
});

export default serverApi;
