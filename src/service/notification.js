import { api } from "../utils/api";

export const fetchNotification = async (userId) => {
    try {
      let response = await api.get(
        "notification/get",
        {
          params: {
            
            userId:userId
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };