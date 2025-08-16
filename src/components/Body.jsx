import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-1 gap-2">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
