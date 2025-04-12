import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api/";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (thunkApi) => {
    try {
      const { data } = await axios.get("news");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
