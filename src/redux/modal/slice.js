import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpenMenuModal: false,
  },
  reducers: {
    openModalMenu: (state) => {
      state.isOpenMenuModal = true;
    },
    closeModalMenu: (state) => {
      state.isOpenMenuModal = false;
    },
  },
});

export const { openModalMenu, closeModalMenu } = modalSlice.actions;

export default modalSlice.reducer;
