import { api } from "../utils/api";

export const fetchAllClasses = async () => {
  try {
    let response = await api.get("class/get-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

const classes = { 
  classname: 'SW2',
  image: 'images' };
export const createClasses = async () => {
  try {
    console.log('create class')
    let response = await api.post("class/create-class",classes);
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
// create class
export const create = async () => {
  try {
    let response = await api.post("class/create-class")
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const createClasss = async (createClass) => {
  try {
    let response = await api.post("class/create-class", createClass);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};