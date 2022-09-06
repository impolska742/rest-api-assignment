import { toast } from "react-toastify";

export const userLoginAction = (password, userId, navigate) => async () => {
  if (password !== "User@123") {
    toast.error("Incorrect UserId or Password !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    localStorage.setItem("userInfo", userId);
    navigate("/");
  }
};

export const userLogoutAction = (navigate) => async () => {
  localStorage.removeItem("userInfo");
  navigate("/login");
};
