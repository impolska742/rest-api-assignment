export const saveUserDataInMemory = (data) => {
  localStorage.setItem("userInfo", JSON.stringify(data));
};

export const saveUserDataInAllowedUsersList = (data) => {
  var a = [];
  if (JSON.parse(localStorage.getItem("allowedUsers")))
    a.push(JSON.parse(localStorage.getItem("allowedUsers")));
  a.push(data);
  localStorage.setItem("allowedUsers", JSON.stringify(a));
};

export const deleteUserDataFromMemory = () => {
  localStorage.removeItem("userInfo");
};
