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
    console.log("asdasdasdasd   ", response.data.data);
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

  // .then((res) => {
  //   console.log(res + "this is data after api call");
  // })
  // .catch((err) => console.log(err));

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

// remove class
export const deleteClass = async (id) => {
  try {
    let response = await api.delete("class/delete-class", {
      params: {
        id:id
      },
    });
    return response.data;
  } catch (error) {
    console.log("dataClassERR", error);
  }
 
};
