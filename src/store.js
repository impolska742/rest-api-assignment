import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
import { userLoginReducer } from "./reducers/userReducer";
import { addPostReducer, getTableDataReducer } from "./reducers/tableReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  getTableData: getTableDataReducer,
  addPost: addPostReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
