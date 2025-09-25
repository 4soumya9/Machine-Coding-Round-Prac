import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme") || "light";
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: storedTheme,
  },

  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

// Cart → complex data (array/object) → better to have a separate save/load function.

// Theme → simple string → can directly save inside the reducer.
