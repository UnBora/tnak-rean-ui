//student request
import { api } from "../utils/api";
export const fetchStudentRequest = async (classroomId, classId) => {
    try {
      let response = await api.get(
        "student/get-student-request",
        {
          params: {
            classroom_id: classroomId,
            class_id: classId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };

  //all student

  export const fetchAllstudent = async (class_id) => {
    try {
      let response = await api.get(
        "student/get-student-by-classId",
        {
          params: {
            class_id:class_id,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };