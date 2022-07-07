import { api } from "../utils/api";

// Manageclasswork
export const fetchAllclasswork = async (classroom_id,class_id) => {
    try {
      let response = await api.get(
        "submittableWork/get-by-classId-classroomId",
        {
          params: {
            
            classroom_id:classroom_id,
            class_id:class_id,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };

  // ManageCourse
  export const fetchAllcourse = async (classroom_id,class_id) => {
    try {
      let response = await api.get(
        "classMaterial/get-by-classId-and-classroomId",
        {
          params: {
            classroom_id:classroom_id,
            class_id:class_id,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };