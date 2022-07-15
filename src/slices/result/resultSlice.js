const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    fetchAllResultSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fetchAllResultSlice } = resultSlice.actions;


export default resultSlice.reducer;