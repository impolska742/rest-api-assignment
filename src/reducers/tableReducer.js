import {
  GET_TABLE_DATA_FAILURE,
  GET_TABLE_DATA_LOADING,
  GET_TABLE_DATA_SUCCESS,
} from "../constants/tableConstants";

export const getTableDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TABLE_DATA_LOADING:
      return { loading: true };
    case GET_TABLE_DATA_SUCCESS:
      return { loading: false, tableData: action.payload };
    case GET_TABLE_DATA_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
