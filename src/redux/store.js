import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";
import searchReducer from "./slice/searchSlice";
import videoReducer from "./slice/videoSlice";
import chatReducer from "./slice/chatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    video: videoReducer,
    chat: chatReducer,
  },
});

export default store;
