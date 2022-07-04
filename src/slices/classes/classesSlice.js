const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    fetchAllClassesSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fetchAllClassesSlice } = classesSlice.actions;
export default classesSlice.reducer;
