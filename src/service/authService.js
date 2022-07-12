import { api } from "../utils/api";
import { cryptoEncrypt } from "../utils/tokenEnDe";

export const signUp = async (user) => {
  try {
    let response = await api.post("/register", user);
    console.log(response);
    return response.data.message;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (user) => {
  try {
    let response = await api.post("/auth/login", user);
    if (response.data.token) {
      console.log(response.data);
      cryptoEncrypt(response.data.token, "Phanith");
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const studentRegister = async (student) => {
  let data = {
    name: student.name,
    username: student.userName,
    email: student.email,
    classroomId: 1,
    classId: student.class,
    password: student.password,
    gender: student.gender,
    img: null,
  };

  try {
    let response = await api.post("/auth/register", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const userUpdateProfile = async (student) => {
  let data = {
    name: student.name,
    username: student.username,
    gender: student.gender,
    img: null,
    email: student.email,
  };

  console.log('iam update user ',data);

  try {
    let response = await api.put("/user/update-profile", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//change password
export const changePassword = async (password) => {
  let data = {
    old_password: password.oldpassword,
    new_password: password.newpassword,
  };

  console.log('iam update password :',data);

  try {
    let response = await api.post("auth/update-password", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};