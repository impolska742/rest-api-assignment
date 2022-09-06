import { combineReducers } from "redux";
import jsonApiReducer from "./jsonApi/jsonApi.reducer";

const rootReducer = combineReducers({
  jsonApi: jsonApiReducer,
});

export default rootReducer;
