import { createSlice } from "@reduxjs/toolkit";
const initialState = { isLogged: false };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // toggle: (state, action) => {
    //   state.isLogged != state.isLogged;
    // },
    login: state => {
      state.isLogged = true;
    },
    logout: state => {
      state.isLogged = false;
    }
  }
});
export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
