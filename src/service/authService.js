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
