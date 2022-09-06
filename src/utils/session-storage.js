export const saveUserDataInMemory = (data) => {
  localStorage.setItem("userInfo", JSON.stringify(data));
};

export const saveUserDataInMemoryForRegister = (data) => {
  localStorage.setItem("allowedUser", JSON.stringify(data));
};
export const deleteUserDataFromMemory = () => {
  localStorage.removeItem("userInfo");
};
