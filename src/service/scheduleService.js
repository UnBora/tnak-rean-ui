import { api } from "../utils/api";

export const fetchScheduleTeacher = async (classId, classroomId) => {
  try {
    let response = await api.get(
      "schedule/get-schedule-by-classroomId-classId",
      {
        params: {
          classroomId: classroomId,
          classId: classId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
