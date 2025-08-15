import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex-1 p-4 shadow-lg rounded-lg">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
