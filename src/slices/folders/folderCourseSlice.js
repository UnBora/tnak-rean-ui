const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const folderCourseSlice = createSlice({
  name: "folderCourse",
  initialState,
  reducers: {
    fetchAllfolderCourseSlice: (state, action) => {
      state.value = action.payload;
    },
 
  },
});
export const { fetchAllfolderCourseSlice } = folderCourseSlice.actions;


export default folderCourseSlice.reducer;
