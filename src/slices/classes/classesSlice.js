import swal from "sweetalert";
import { showLoading } from "../../components/swal/Loading";
import { removeClass } from "../../service/classesService";

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
    deleteClass(state, action) {
      removeClass(action.payload);
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
     createNewClass(state, action) {
      // createClass(action.payload);
      state.value = [...state.value, action.payload];
    },
  },
});
export const { fetchAllClassesSlice, deleteClass,createNewClass } = classesSlice.actions;

export default classesSlice.reducer;
