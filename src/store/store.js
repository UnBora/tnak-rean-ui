import classesSlice from "../slices/classes/classesSlice";
import scheduleTeacherSlice from "../slices/schedule/scheduleTeacherSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    //class material
    classes: classesSlice,
    scheduleTeacher: scheduleTeacherSlice,
    
  },
});
