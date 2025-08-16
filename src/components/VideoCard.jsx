import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="w-78 mr-2 rounded-lg shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="video_thumbnail"
      />
      <div className="p-2">
        <div className="font-bold">{title}</div>
        <div>{channelTitle}</div>
        <div className="font-light">{statistics.viewCount + " views"}</div>
        {/* <div>{new Date(publishedAt).toISOString().split("T")[0]}</div> */}
      </div>
    </div>
  );
};

export default VideoCard;
