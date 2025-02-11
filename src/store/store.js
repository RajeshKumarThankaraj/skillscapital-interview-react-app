import { configureStore } from "@reduxjs/toolkit";
import searchTextSlice from "./slice";

export const store = configureStore({
  reducer: {
    searchText: searchTextSlice,
  },
});

export default store;
