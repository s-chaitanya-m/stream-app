import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="h-full p-2">
      <img
        className="w-full aspect-video rounded-lg"
        src={thumbnails.maxres?.url || thumbnails.medium.url}
        alt="video_thumbnail"
      />
      <div className="p-2">
        <div className="font-bold">{title}</div>
        <div>{channelTitle}</div>
        {statistics && (
          <div className="font-light">{statistics.viewCount + " views"}</div>
        )}
        {/* <div>{new Date(snippet.publishedAt).toISOString().split("T")[0]}</div> */}
      </div>
    </div>
  );
};

export default VideoCard;
