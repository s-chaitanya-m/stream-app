import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveVideos } from "../redux/slice/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((store) => store.video);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(saveVideos(json.items));
  };
  if (videos.length === 0) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <Link key={v.id} to={"/watch?v=" + v.id}>
          <VideoCard info={v} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
