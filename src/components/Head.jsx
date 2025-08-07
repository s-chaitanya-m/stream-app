import React from "react";

const Head = () => {
  return (
    <div className="p-4 m-2 gap-2 flex justify-between items-center rounded-lg shadow-lg">
      <div className="flex">
        <img
          className="w-8 p-1 rounded-full hover:bg-gray-300"
          src="src/assets/hamburger-menu.svg"
          alt="menu"
        />
        <img className="w-8 ml-2" src="src/assets/youtubeLogo.svg" alt="logo" />
        <div className="font-bold text-2xl">YouTube</div>
      </div>
      <div className="h-8 flex flex-1 justify-center">
        <input
          className="w-1/2 px-2 rounded-l-full border border-gray-400"
          placeholder="Search"
          type="text"
        />
        <button className="px-4 rounded-r-full bg-gray-100  border border-gray-400">
          <img className="w-6" src="src/assets/search.svg" alt="search" />
        </button>
      </div>
      <div className="bg-gray-300 rounded-full">
        <img className="w-8 p-1" src="src/assets/user.svg" alt="user" />
      </div>
    </div>
  );
};

export default Head;
