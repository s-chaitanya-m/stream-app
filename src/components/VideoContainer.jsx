import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (videos.length === 0) return null;
  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((v) => (
        <VideoCard key={v.id} info={v} />
      ))}
    </div>
  );
};

export default VideoContainer;
