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
  
};
