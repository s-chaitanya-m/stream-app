import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-[calc(100%-136px)] h-[calc(100vh-80px)] flex-1 p-4 shadow-lg rounded-lg overflow-y-scroll no-scrollbar">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
