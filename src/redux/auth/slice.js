import { createSlice } from "@reduxjs/toolkit";
import { login } from "./operations";

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
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
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
  s,
} = authSlice.actions;

export default authSlice.reducer;
