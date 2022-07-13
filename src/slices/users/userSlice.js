const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   value: {} 
  };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserSlice: (state, action) => {
      state.value = action.payload;
    },
    login:(state,action)=>{
      state.value = action.payload
    }
  },
});

export const { getUserSlice ,login } = userSlice.actions;

export default userSlice.reducer;
