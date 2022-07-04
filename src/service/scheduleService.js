import { api } from "../utils/api";

export const fetchScheduleTeacher = async (id) => {
  try {
    let response = await api.get("schedule/getScheduleByClassId",{params:{id:id}});
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
