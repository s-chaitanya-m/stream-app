import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";
import searchReducer from "./slice/searchSlice";
import videoReducer from "./slice/videoSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    video: videoReducer,
  },
});

export default store;
