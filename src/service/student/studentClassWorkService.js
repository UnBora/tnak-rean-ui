import { api } from "../../utils/api";

export const fetchUpCommingWork = async (studentId, classId) => {
  try {
    let response = await api.get(
      "submittableWork/get-upComingWork-by-StudentId",
      {
        params: {
          studentId: studentId,
          classId: classId,
          classRoomId: 1,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
