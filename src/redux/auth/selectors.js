export const selectPasswordIsOpen = (state) => state.auth.isOpenPassword;

export const selectConfirmPassword = (state) =>
  state.auth.isOpenConfirmPassword;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
