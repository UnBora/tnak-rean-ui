import classesSlice from "../slices/classes/classesSlice";
import scheduleTeacherSlice from "../slices/schedule/scheduleTeacherSlice";
import scheduleStudentSlice from "../slices/schedule/scheduleStudentSlice";
import userSlice from "../slices/users/userSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    //class material
    classes: classesSlice,
    scheduleTeacher: scheduleTeacherSlice,
    scheduleStudent: scheduleStudentSlice,
    user: userSlice,
  },
});
