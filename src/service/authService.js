import { Navigate } from "react-router-dom";
import { MyChange } from "../components/swal/Success";
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
    console.log("Response Data: ", response.data);
    let temp = JSON.stringify(response.data)
    localStorage.setItem("user", temp);
        console.log('userrrrrrrrrrrrrrrrrrrrrrrrrrrrrr ',temp);
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

export const changePassword = async (old_password, new_password) => {
  let data = {
    old_password:old_password,
    new_password:new_password,
  };
  console.log("before respon data course:", data);

  try {
    let response = await api.post("auth/update-password", data);
    console.log(response);
    return response.data;
    
  } catch (error) {
    console.log("err", error);
  }
};

// Delete account
export const deleteAccount = async (password, confirmPassword) => {
  try {
    let response = await api.delete("user/delete-account", {
      params: {
        password:password,
        confirmPassword:confirmPassword,
      },
    });
    console.log(response);
    return response.data;
    
  } catch (error) {
    console.log("err", error);
  }
};
