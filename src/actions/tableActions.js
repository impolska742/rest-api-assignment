import {
  ADD_POST_FAILURE,
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  GET_TABLE_DATA_FAILURE,
  GET_TABLE_DATA_LOADING,
  GET_TABLE_DATA_SUCCESS,
} from "../constants/tableConstants";
import axios from "axios";
import { toast } from "react-toastify";

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

export const addPostAction =
  (body, title, userId, navigate) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_POST_LOADING,
      });

      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          body: body,
          title: title,
          userId: userId,
        }
      );

      dispatch({
        type: ADD_POST_SUCCESS,
        payload: data,
      });

      toast.success("Post has been addded successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/");
    } catch (error) {
      dispatch({
        type: ADD_POST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
