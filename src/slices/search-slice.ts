import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: "",
  reducers: {
    addSearchValue(state, action) {
      return action.payload;
    },
  },
});

const { addSearchValue } = searchSlice.actions;

export { searchSlice, addSearchValue };
