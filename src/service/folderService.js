import { api } from "../utils/api";

// classwork folder
export const fecthCourseFolderByTeacher = async (classroom_id) => {
  try {
    let response = await api.get("folder/get-courseFolder-by-teacherUserId",
    {
        params: {
            classroom_id: classroom_id
        },
      });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};