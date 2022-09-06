import {
  ADD_POST,
  DELETE_POST,
  SAVE_API_DATA,
  UPDATE_POST,
} from "./jsonApi.types";

export const saveApiData = (data) => {
  return {
    type: SAVE_API_DATA,
    payload: data,
  };
};

export const deletePost = (data) => {
  return {
    type: DELETE_POST,
    payload: data,
  };
};

export const updatePost = (data) => {
  return {
    type: UPDATE_POST,
    payload: data,
  };
};

export const addPost = (data) => {
  return {
    type: ADD_POST,
    payload: data,
  };
};
