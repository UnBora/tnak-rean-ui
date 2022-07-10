import axios from "axios";
import { api } from "../utils/api";
import { header } from "../utils/header";

// export const fetchAllClasses = async () => {
//   try {
//     let response = await api.get("class/get-by-teacherUserId");
//     return response.data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

const classes = {
  classname: "SW2",
  image: "images",
};
export const createClasses = async () => {
  try {
    console.log("create class");
    let response = await api.post("class/create-class", classes);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fecthAllClassByTeacher = async () => {
  try {
    let response = await api.get("classroom/get-class-by-classroom-id", {
      params: {
        classroomId: 1,
      },
    });
    console.log("get class   ", response.data.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
// create class
export const create = async (className, image) => {
  let formData = new FormData();
  formData.append("file", image);
  const file = image;
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  // console.log(formData);

  let re = await api.post("/upload/one", formData, config);
  console.log(re.data.data.name);

  let data = {
    className: className,
    image: re.data.data.name,
  };
  // console.log(data);
  try {
    let response = await api.post("class/create-class", data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchSelectClass = async () => {
  try {
    let response = await api.get("classroom/get-select-class-by-classroom-id", {
      params: {
        classroomId: 1,
      },
    });
    console.log("get class   ", response.data.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllClass = async () => {
  let response = await api.get("/");
};
