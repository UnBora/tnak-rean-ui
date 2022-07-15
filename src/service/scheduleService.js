import { api } from "../utils/api";

export const fetchScheduleTeacher = async (classroomId, dayId) => {
  try {
    let response = await api.get(
      "schedule/get-schedule-by-teacherUserId-dayId-classroomId",
      {
        params: {
          classroomId: classroomId,
          dayId: dayId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

//
export const fetchScheduleStudent = async (dayId) => {
  try {
    let response = await api.get(
      "schedule/get-schedule-by-studentUserId",
      {
        params: {
          dayId: dayId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
