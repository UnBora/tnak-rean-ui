import { api } from "../utils/api";

// classwork folder
export const fetchClassworkFolder = async (classId, classRoomId) => {
  try {
    let response = await api.get("folder/get-classWorkFolders-by-class-id", {
      params: {
        classId: classId,
        classRoomId: classRoomId,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// course folder
export const fetchCourseFolder = async (classId, classRoomId) => {
  try {
    let response = await api.get("folder/get-courseFolders-by-class-id", {
      params: {
        classId: classId,
        classRoomId: classRoomId,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// get all classwork folder
export const fetchallClassworkFolder = async () => {
  try {
    let response = await api.get("folder/get-classworkFolder-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

//getall course folder
export const fetchallCourseFolder = async () => {
  try {
    let response = await api.get("folder/get-courseFolder-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// create folder in all classwork

export const createClassworkFolders = async (folder_name, material_type_id) => {
  let data = {
    folder_name: folder_name,
    parent_id: 0,
    material_type_id: material_type_id,
  };
  console.log("before respon data:", data);

  try {
    let response = await api.post("folder/create-classWorkFolder", data);
    return response.data;
  } catch (error) {
    console.log("create-classworkFolder", error);
  }
};
export const createCourseFolders = async (folder_name, material_type_id) => {
  let data = {
    folder_name: folder_name,
    parent_id: 0,
    material_type_id: material_type_id,
  };
  console.log("before respon data course:", data);

  // try {
  //   let response = await api.post(
  //     "folder/create-classWorkFolder",
  //     data
  //   );
  //   return response.data;
  // } catch (error) {
  //   console.log("create-classworkFolder", error);
  // }
};
