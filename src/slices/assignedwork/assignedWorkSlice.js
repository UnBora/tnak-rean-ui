const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const assignedWorkSlice = createSlice({
  name: "assignedWork",
  initialState,
  reducers: {
    fetchAllClassworkStuSlice: (state, action) => {
      state.value = action.payload;
    },classWorkType: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fetchAllClassworkStuSlice,classWorkType } = assignedWorkSlice.actions;
export default assignedWorkSlice.reducer;
