import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";
import searchReducer from "./slice/searchSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
  },
});

export default store;
