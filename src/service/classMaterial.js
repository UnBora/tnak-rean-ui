import { MdDescription } from "react-icons/md";
import { api } from "../utils/api";

// Manageclasswork
export const fetchAllclasswork = async (classroom_id, class_id) => {
  try {
    let response = await api.get("submittableWork/get-by-classId-classroomId", {
      params: {
        classroom_id: classroom_id,
        class_id: class_id,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// ManageCourse
export const fetchAllcourse = async (classroom_id, class_id) => {
  try {
    let response = await api.get(
      "classMaterial/get-by-classId-and-classroomId",
      {
        params: {
          classroom_id: classroom_id,
          class_id: class_id,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

//All classwork
export const fetchClassworks = async () => {
  try {
    let response = await api.get("submittableWork/get-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

//All course File
export const fetchCourseFile = async () => {
  try {
    let response = await api.get("classMaterial/get-by-teacherId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

//assigntask
export const assigntask = async (task, file) => {
  try {
    // let formData = new FormData();
    // formData.append("file", file);
    // const config = {
    //   headers: { "content-type": "multipart/form-data" },
    // };

    // let re;
    // if (formData.append("file", file) !== undefined) {
    //   re = await api.post("/upload/one", formData, config);
    // }
    // const listfile = [re ? re.data?.data?.name : null];
    // let data = {
    //   file: listfile,
    //   link: task.link ? task.link : null,
    // };

    // let data = JSON.stringify({ file: ["string"], link: "string" });
    console.log("fiasldasdl ", file);
    console.log("data task: ", task);

 

    // let response = await api.post(
    //   "submittableWork/create-homework-in-class",
    //   data,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     params: {
    //       title: task.title,
    //       description: "asdas",
    //       deadline: "2022-07-06 09:18:10.300577",
    //       class_id: 1,
    //       classroom_id: 1,
    //       score: task.score,
    //     },
    //   }
    // );
    // console.log(response.data);
    // return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
