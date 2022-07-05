const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    fetchAllfolderSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fetchAllfolderSlice } = folderSlice.actions;


export default folderSlice.reducer;
