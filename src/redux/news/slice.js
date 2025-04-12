import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const newsSlice = createSlice({
  name: "news",
  initialState: { results: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.results = action.payload.results;
    });
  },
});

export default newsSlice.reducer;
