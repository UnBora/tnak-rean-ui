//student request
export const fetchStudentRequest = async (classroomId, classId) => {
    try {
      let response = await api.get(
        "student/get-student-request",
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