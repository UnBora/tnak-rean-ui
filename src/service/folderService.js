import { api } from "../utils/api";

// classwork folder
export const fetchClassworkFolder = async (classId,classRoomId) => {
  try {
    let response = await api.get("folder/get-classWorkFolders-by-class-id",
    {
        params: {
            classId: classId,
            classRoomId:classRoomId,
        },
      });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// course folder
export const fetchCourseFolder = async (classId,classRoomId) => {
  try {
    let response = await api.get("folder/get-courseFolders-by-class-id",
    {
        params: {
            classId: classId,
            classRoomId:classRoomId,
        },
      });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};