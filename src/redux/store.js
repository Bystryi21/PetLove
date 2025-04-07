import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import modalReducer from "./modal/slice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
  },
});
