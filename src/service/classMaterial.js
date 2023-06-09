import { MdDescription } from "react-icons/md";
import { api } from "../utils/api";
import { format } from "date-fns";

const pattern = "yyyy-MM-dd HH:mm:ss";

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
 console.log('task assad: ' , task); 
  try {
    let formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    let re;
    if (file !== undefined) {
      console.log("asdasda file ", file);
      re = await api.post("/upload/one", formData, config);
      console.log(re.data.data);
    }
    const listfile = [re ? re.data?.data?.name : null];
    let data = JSON.stringify({ file: listfile, link: task?.link });
    console.log("fiasldasdl ", file);
    console.log("data task: ", task);
    console.log("data nhom", task?.class);
    let response;
    console.log("date", format(task.deadline, pattern));
    // if (task.class !== "-1" && task.class !== "0") {
    //   response = await api.post(
    //     "submittableWork/create-homework-in-class",
    //     data,
    //     {
    //       params: {
    //         title: task?.title,
    //         description: task?.description,
    //         deadline: format(task.deadline, pattern),
    //         class_id: parseInt(task?.class),
    //         classroom_id: 1,
    //         score: parseFloat(task?.score),
    //       },
    //     }
    //   );
    // } else if (task.class === "-1") {
    //   response = await api.post("submittableWork/create-homework", {
    //     data,
    //     params: {
    //       title: task?.title,
    //       description: task?.description,
    //     },
    //   });
    // } else if (task.class === "0") {
      
    // }
    response = await api.post(
      "submittableWork/create-homework-in-class",
      data,
      {
        params: {
          title: task?.title,
          description: task?.description,
          deadline: format(task.deadline, pattern),
          class_id: parseInt(task?.class),
          classroom_id: 1,
          score: parseFloat(task?.score),
        },
      }
    );
    console.log('asdasdasd tiest ',response?.data);
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
    console.log("service", response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
// get ALL COURSE by folder id (OUTSITE)
export const fetchCourseInFolder = async (folder_id) => {
  try {
    let response = await api.get(
      "classMaterial/get-course-by-folderId-with-teacherId",
      {
        params: {
          folder_id: folder_id,
        },
      }
    );  
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchAllCourseFileStu = async () => {
  try {
    let response = await api.get("classMaterial/get-course-by-studentId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// get ALL CLASSWORK by folder id (Per class)
export const fetchClassworkInFolderInClass = async (class_id,classroom_id,folderId) => {
  try {
    let response = await api.get(
      "submittableWork/get-classwork-by-folderId-with-classId",
      {
        params: {
       
          class_id: class_id,
          classroom_id:classroom_id,
          folderId:folderId


        },
      }
    
    );  
    console.log(response);
    return response.data;
    
  } catch (error) {
    console.log("error", error);
  }
  
};

// get ALL COURSE by folder id (Per class)

export const fetchCourseInFolderInClass = async (folder_id,class_id,classroom_id) => {
  try {
    let response = await api.get(
      "classMaterial/get-course-by-folderId-with-classId",
      {
        params: {
          folder_id: folder_id,
          class_id:class_id,
          classroom_id:classroom_id
        },
      }
    
    );  
    console.log("=======test ",response);
    return response.data;
    
  } catch (error) {
    console.log("error", error);
  }
  
}

export const fetchAllClassworkHasResult = async (class_id) => {
  try {
    let response = await api.get("submittableWork/get-classwork-has-result-by-classId", {
      params: {
        class_id: class_id,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};