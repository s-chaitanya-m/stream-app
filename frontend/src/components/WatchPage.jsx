import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/slice/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [seachParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-[calc(100%-136px)] h-[calc(100vh-80px)] flex-1 p-4 shadow-lg rounded-lg overflow-y-scroll no-scrollbar">
      <div className="h-full flex gap-2 flex-col md:flex-row">
        <iframe
          className="w-full md:w-3/4  aspect-video rounded-lg"
          src={"https://www.youtube.com/embed/" + seachParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
