import axios from "axios";
import { api } from "../utils/api";

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
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  let data;
  let re;
  // console.log(formData);
  if (image !== null) {
    re = await api.post("/upload/one", formData, config);
    console.log(re.data.data.name);
    
  }

  // .then((res) => {
  //   console.log(res + "this is data after api call");
  // })
  // .catch((err) => console.log(err));

  data = {
    className: className,
    image: re?re.data?.data?.name:null,
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

// remove class
export const removeClass = async (classId) => {
  console.log(classId);

  try {
    console.log("hello asdasdas ");
    let response = await api.delete("class/delete-class", {
      params: { classId: classId },
    });
    return response.data;
  } catch (error) {
    console.log("dataClassERR", error);
  }
};


export const editClass = async (id, className, image) => {
  try {
    let response = await api.delete(`/class/update-class`, {
      params: {
        id: id,
        className: className,
        image: image,
      },
    });
    console.log(response);
    return response.api;
  } catch (error) {
    console.log("err", error);
  }
};