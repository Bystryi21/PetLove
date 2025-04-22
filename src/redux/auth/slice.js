import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isOpenPassword: false,
    isOpenConfirmPassword: false,
  },
  reducers: {
    openPassword: (state) => {
      state.isOpenPassword = true;
    },
    closePassword: (state) => {
      state.isOpenPassword = false;
    },
    togglePassword: (state) => {
      state.isOpenPassword = !state.isOpenPassword;
    },
    openConfirmPassword: (state) => {
      state.isOpenConfirmPassword = true;
    },
    closeConfirmPassword: (state) => {
      state.isOpenConfirmPassword = false;
    },
    toggleConfirmPassword: (state) => {
      state.isOpenConfirmPassword = !state.isOpenConfirmPassword;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isOpenPassword = false;
        state.isOpenConfirmPassword = false;
      });
  },
});

export const {
  openPassword,
  closePassword,
  togglePassword,
  openConfirmPassword,
  closeConfirmPassword,
  toggleConfirmPassword,
} = authSlice.actions;

export default authSlice.reducer;
