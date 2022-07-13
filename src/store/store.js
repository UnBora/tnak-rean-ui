import classesSlice from "../slices/classes/classesSlice";
import scheduleTeacherSlice from "../slices/schedule/scheduleTeacherSlice";
import scheduleStudentSlice from "../slices/schedule/scheduleStudentSlice";
import userSlice from "../slices/users/userSlice";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";



const { configureStore } = require("@reduxjs/toolkit");
import {persistStore,persistReducer,  FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import userReducer from '../slices/users/userSlice'
import storage from 'redux-persist/lib/storage'


const { configureStore } = require("@reduxjs/toolkit");

const persistConfig = {
  key: 'root',
  
  storage,
  blacklist:['user']
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    //class material
    persistedReducer:persistedReducer,
    classes: classesSlice,
    scheduleTeacher: scheduleTeacherSlice,
    scheduleStudent: scheduleStudentSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
        ignoredActions:[FLUSH,PAUSE,PERSIST]
      }
    })
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