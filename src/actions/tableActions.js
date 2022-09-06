import {
  GET_TABLE_DATA_FAILURE,
  GET_TABLE_DATA_LOADING,
  GET_TABLE_DATA_SUCCESS,
} from "../constants/tableConstants";
import axios from "axios";

export const getTableDataAction = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_TABLE_DATA_LOADING,
    });

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );

    dispatch({
      type: GET_TABLE_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TABLE_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
