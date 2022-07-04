import { api } from "../utils/api";

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
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
