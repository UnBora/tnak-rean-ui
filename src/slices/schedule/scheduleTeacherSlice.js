const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const scheduleClassSlice = createSlice({
  name: "scheduleTeacher",
  initialState,
  reducers: {
    fetchScheduleClassSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fetchScheduleClassSlice } = scheduleClassSlice.actions;
export default scheduleClassSlice.reducer;
