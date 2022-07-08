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

// all classwork folder
export const fetchallClassworkFolder = async () => {
  try {
    let response = await api.get("folder/get-classworkFolder-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

//all course folder
export const fetchallCourseFolder = async () => {
  try {
    let response = await api.get("folder/get-courseFolder-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};