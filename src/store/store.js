import classesSlice from "../slices/classes/classesSlice";
import scheduleTeacherSlice from "../slices/schedule/scheduleTeacherSlice";
import scheduleStudentSlice from "../slices/schedule/scheduleStudentSlice";
import userSlice from "../slices/users/userSlice";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "../slices/users/userSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import folderSlice from "../slices/folders/folderSlice";
import assignedWorkSlice from "../slices/assignedwork/assignedWorkSlice";
import { fetchSelectClassSlice } from "../slices/classes/selectClass";
import resultSlice from "../slices/result/resultSlice";
import folderCourseSlice from "../slices/folders/folderCourseSlice";
import folderCoursePerClassSlice, { fetchAllfolderCourseClassSlice } from "../slices/folders/folderCoursePerClassSlice";
import folderClassworkSlice from "../slices/folders/folderClassworkSlice";

const { configureStore } = require("@reduxjs/toolkit");
const persistConfig = {
  key: "root",

  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    //class material
    persistedReducer: persistedReducer,
    classes: classesSlice,
    scheduleTeacher: scheduleTeacherSlice,
    scheduleStudent: scheduleStudentSlice,
    user: userSlice,
    folder: folderSlice,
    assignedWork: assignedWorkSlice,
    selectClass: fetchSelectClassSlice,
    assignedWork:assignedWorkSlice,
    result:resultSlice,
    folderCourse:folderCourseSlice,
    folderCourseInClass:folderCoursePerClassSlice,
    folderClasswrok:folderClassworkSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST],
      },
    }),
});

/*
const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
          ignoredActions:[FLUSH,PAUSE,PERSIST]
        }
      })
})

*/
