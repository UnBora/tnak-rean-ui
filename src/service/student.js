//student request
import { api } from "../utils/api";
export const fetchStudentRequest = async (classroomId, classId) => {
    try {
      let response = await api.get(
        "student/get-student-request-by-classId",
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

  // accept Student
  export const acceptStudent = async (studentId) => {
    try {
      let response = await api.post(
        `student/accept-student?user_id=${studentId}`,
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };

  //remove student in class
  export const removeStudent = async (user_id,class_id) => {

    let data = {
      user_id: user_id,
      class_id:class_id,
      classroom_id:1
    }
    let response = await api.post(
      "teacher/teacher-remove-student-by-id",data
    );
  
  
  }
