import { api } from "../utils/api";

// get all classwork
export const fetchAllclasswork = async (classroom_id,class_id) => {
    try {
      let response = await api.get(
        "submittableWork/get-by-classroomId-and-classId",
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