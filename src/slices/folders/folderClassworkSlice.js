const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const folderClassworkSlice = createSlice({
  name: "folderClasswork",
  initialState,
  reducers: {
    fetchAllfolderClassworkSlice: (state, action) => {
      state.value = action.payload;
    },
 
  },
});
export const { fetchAllfolderClassworkSlice } =folderClassworkSlice.actions;


export default folderClassworkSlice.reducer;
