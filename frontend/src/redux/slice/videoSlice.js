import { createSlice } from "@reduxjs/toolkit";

const videoReducer = createSlice({
  name: "video",
  initialState: {
    videos: [],
  },
  reducers: {
    saveVideos: (state, action) => {
      const videoList = action.payload.map((v) => {
        return { ...v, id: v.id?.videoId || v.id };
      });
      state.videos = videoList;
    },
  },
});

export const { saveVideos } = videoReducer.actions;

export default videoReducer.reducer;
