import { createSlice } from "@reduxjs/toolkit";

export const savedLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : { movieItems: [] };
};

const initialState = loadFromLocalStorage("movies") || {
  movieItems: [],
};

const historySlice = createSlice({
  name: "history", // why this is used ? Ans is in the below(at the bottom)
  initialState,

  reducers: {
    addToHistory: (state, action) => {
      const exists = state.movieItems.find((i) => i.id === action.payload.id);
      if (!exists) {
        state.movieItems.push(action.payload);
      }
      savedLocalStorage("history", state);
    },
    removeHistory: (state, action) => {
      const item = state.movieItems.find((i) => i.id === action.payload);
      if (item) {
        state.movieItems = state.movieItems.filter(
          (i) => i.id !== action.payload
        );
      }
      savedLocalStorage("history", state);
    },
    removeAll: (state) => {
      state.movieItems = [];
      savedLocalStorage("history", state);
    },
  },
});

export const { addToHistory, removeHistory, removeAll } = historySlice.actions;
export default historySlice.reducer;

/*
That line

name: "history",


is used internally by Redux Toolkit.

It does two things:

1. It prefixes action types

When you write reducers inside your slice like:

reducers: {
  addToHistory: (state, action) => { ... }
}


Redux Toolkit automatically creates action types like this:

history/addToHistory
history/removeHistory
history/removeAll


The "history" comes from the name field.

So if you changed it to "movies", your actions would be:

movies/addToHistory
movies/removeHistory
movies/removeAll

2. Helps in debugging

If you open Redux DevTools in your browser, you’ll see actions labeled with that prefix.
It helps you understand which slice dispatched the action.

⚡️ So:

name: "history" is not “directly used” in your component code.

But Redux uses it behind the scenes for action naming and debugging.
*/
