import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
  name: "searchText",
  initialState: {
    searchTextEntered: ["Overall Sales", "Last Quarter Sale", "Profit Revenue"],
  },
  reducers: {
    updateSearchTextEnetered: (state, action) => {
      state.searchTextEntered = [...state.searchTextEntered, ...action.payload];
    },
    removeSearchTextEntered: (state, action) => {
      state.searchTextEntered = state.searchTextEntered.filter(
        (elem) => elem !== action.payload
      );
    },
  },
});

export const { updateSearchTextEnetered, removeSearchTextEntered } =
  searchTextSlice.actions;
export default searchTextSlice.reducer;
