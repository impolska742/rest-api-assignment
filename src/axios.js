import axios from "axios";
// import store from "./store";

const instance = axios.create({
  //   baseURL: process.env.REACT_APP_BASE_URL,
  //   headers: {
  //     Authorization: `Bearer ${getToken(store.getState())}`,
  //   },
});

export default instance;
