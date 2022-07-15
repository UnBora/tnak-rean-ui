import swal from "sweetalert";
import { showLoading } from "../../components/swal/Loading";
import { removeClass } from "../../service/classesService";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const selectClass = createSlice({
  name: "selectClass",
  initialState,
  reducers: {
    fetchSelectClassSlice: (state, action) => {
      state.value = action.payload;
    },

  },
});
export const { fetchSelectClassSlice } = selectClass.actions;

export default selectClass.reducer;
