import classesSlice from "../slices/classes/classesSlice";
import scheduleTeacherSlice from "../slices/schedule/scheduleTeacherSlice";
import scheduleStudentSlice from "../slices/schedule/scheduleStudentSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    //class material
    classes: classesSlice,
    scheduleTeacher: scheduleTeacherSlice,
    scheduleStudent: scheduleStudentSlice,
    
  },
});
