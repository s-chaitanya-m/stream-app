import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { isMenuOpen } = useSelector((store) => store.app);
  if (!isMenuOpen) return null;
  return (
    <div className={`w-36 p-4 shadow-lg rounded-lg `}>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="pt-4 font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="pt-4 font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
