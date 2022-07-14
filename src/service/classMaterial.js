import { MdDescription } from "react-icons/md";
import { api } from "../utils/api";

// Manageclasswork  (PER CLASS)
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

// ManageCourse (PER CLASS)
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

//All classwork (OUTSITE)
export const fetchClassworks = async () => {
  try {
    let response = await api.get("submittableWork/get-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

//All course File (OUTSITE)
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
    let formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    let re;
    if (formData.append("file", file) !== undefined) {
      re = await api.post("/upload/one", formData, config);
    }
    const listfile = [re ? re.data?.data?.name : null];
    // let data = JSON.stringify({
    //   file: listfile,
    //   link: task.link ? task.link : null,
    // });

    let data = JSON.stringify({ file: ["string"], link: "string" });
    console.log("fiasldasdl ", file);
    console.log("data task: ", task);
    console.log("data nhom", data);
    let response;
    if (task.class !== "-1" && task.class !== "0") {
      response = await api.post(
        "submittableWork/create-homework-in-class",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            title: task.title,
            description: task.description,
            deadline: "2022-07-13 15:45:33.275669",
            class_id: 1,
            classroom_id: 1,
            score: task.score,
          },
        }
      );
    }
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};
// get ALL CLASSWORK by folder id (OUTSITE)
export const fetchClassworkInFolder = async (folderId) => {
  try {
    let response = await api.get(
      "submittableWork/get-classwork-by-folderId-with-teacherId",
      {
        params: {
          folderId: folderId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchAllClassworkStu = async () => {
  try {
    let response = await api.get("submittableWork/get-classwork-by-studentId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
// get ALL COURSE by folder id (OUTSITE)
