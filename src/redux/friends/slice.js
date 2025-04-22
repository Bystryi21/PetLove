import { createSlice } from "@reduxjs/toolkit";
import { fetchFriends } from "./operations";

const friendsSlice = createSlice({
  name: "friends",
  initialState: { friends: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchFriends.fulfilled, (state, action) => {
      state.friends = action.payload;
    });
  },
});

export default friendsSlice.reducer;
