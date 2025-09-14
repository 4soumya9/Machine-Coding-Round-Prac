import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./historySlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

/*
State 
{
  movies: { movieItems: [] }
}
  */
