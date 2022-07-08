 
import { api } from "../utils/api";
//result
export const fetchResult = async (class_id, material_id) => {
    try {
      let response = await api.get(
        "submittedWork/get-result-by-classId-materialId",
        {
          params: {
            class_id: class_id,
            material_id : material_id,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };
