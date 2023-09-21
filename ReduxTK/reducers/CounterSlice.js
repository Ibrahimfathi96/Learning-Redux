import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state, action) => {
      state.value = 0;
    }
  }
});
export default counterSlice.reducer;
export const { increase, decrease, reset } = counterSlice.actions;
