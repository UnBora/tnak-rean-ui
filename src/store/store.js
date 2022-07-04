import classesSlice from "../slices/classes/classesSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    classes: classesSlice,
  },
});
