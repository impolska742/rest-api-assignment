import { toast } from "react-toastify";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

export const userLoginAction =
  (password, userId, navigate) => async (dispatch) => {
    dispatch({
      type: USER_LOGIN_LOADING,
    });

    if (password !== `${userId}@user`) {
      toast.error("Incorrect UserId or Password !", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: "Error in loggin in",
      });
    } else {
      localStorage.setItem("userInfo", userId);
      navigate("/");
      dispatch({
        type: USER_LOGIN_SUCCESS,
      });
    }
  };

export const userLogoutAction = (navigate) => async () => {
  localStorage.removeItem("userInfo");
  navigate("/login");
};
