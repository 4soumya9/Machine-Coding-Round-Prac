import { createSlice } from "@reduxjs/toolkit";

export const savedLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : { favourites: [] };
};



const favSlice = createSlice({
    name:"favou"
})