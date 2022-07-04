const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const scheduleTeacherSlice = createSlice({
  name: "scheduleTeacher",
  initialState,
  reducers: {
    fetchScheduleTeacher: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fetchScheduleTeacher } = scheduleTeacherSlice.actions;
export default scheduleTeacherSlice.reducer;
