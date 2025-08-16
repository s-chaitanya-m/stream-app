import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
        <Link key={v.id} to={"/watch?v=" + v.id}>
          <VideoCard info={v} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
