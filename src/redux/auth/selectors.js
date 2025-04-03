export const selectPasswordIsOpen = (state) => state.auth.isOpenPassword;

export const selectConfirmPassword = (state) =>
  state.auth.isOpenConfirmPassword;
