// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import rootReducer from "./rootReducer";

// const store = configureStore({ reducer: { rootReducer } });
const store = createStore(rootReducer);

export default store;
