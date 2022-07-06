import { api } from "../utils/api";

export const fetchAllClasses = async () => {
  try {
    let response = await api.get("class/get-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const createClass = async () => {
  try {
    let response = await api.post("class/create-class");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fecthAllClassByTeacher = async () => {
  try {
    let response = await api.get("class/get-by-teacherUserId",{
      params:{
        classroom_id : 1,
      }
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};