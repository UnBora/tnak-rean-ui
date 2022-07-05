const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const scheduleStudentSlice = createSlice({
  name: "scheduleStudent",
  initialState,
  reducers: {
    fetchScheduleStudentSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fetchScheduleStudentSlice } = scheduleStudentSlice.actions;


export default scheduleStudentSlice.reducer;
