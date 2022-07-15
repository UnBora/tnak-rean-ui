const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};
//  folderCourseInClass:folderCoursePerClassSlice,
const folderCoursePerClassSlice = createSlice({
  name: "folderCourseInClass",
  initialState,
  reducers: {
    fetchAllfolderCourseClassSlice: (state, action) => {
      console.log(state);
      console.log(action);
      state.value = action.payload;
    },
  },
});
export const { fetchAllfolderCourseClassSlice } = folderCoursePerClassSlice.actions;


export default folderCoursePerClassSlice.reducer;
