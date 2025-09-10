import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "/MovieSlice.js";
export const store = configureStore({
  movies: movieReducer,
});
