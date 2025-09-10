import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    history: [],
  },

  reducers: {
    addToHistory: (state, action) => {
      const exists = state.history.find((i) => i.id === action.payload);
      if (!exists) {
        state.history.push(action.payload);
      }
    },
    removeHistory: (state, action) => {
      const item = state.history.find((i) => i.id === action.payload);
      if (item) {
        state.history = state.history.filter((i) => i.id !== action.payload);
      }
    },
    removeAll: (state) => {
      state.history = [];
    },
  },
});

export const { addToHistory, removeHistory, removeAll } = movieSlice.actions;
export default movieSlice.reducer;
