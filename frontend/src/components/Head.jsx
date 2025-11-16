import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/slice/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchDropdown from "./SearchDropdown";
import { cacheResults } from "../redux/slice/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, toggleSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);

    //update search cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
  return (
    <div className="p-4 mb-2 gap-2 flex justify-between items-center rounded-lg shadow-lg">
      <div className="flex">
        <img
          className="w-8 p-1 rounded-full hover:bg-gray-300 cursor-pointer"
          src="/assets/hamburger-menu.svg"
          alt="menu"
          onClick={() => dispatch(toggleMenu())}
        />
        <img className="w-8 ml-2" src="/assets/youtubeLogo.svg" alt="logo" />
        <div className="font-bold text-2xl">YouTube</div>
      </div>
      <div className="relative h-8 flex flex-1 justify-center">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => toggleSuggestions(true)}
          // onBlur={() => toggleSuggestions(false)}
          className="w-1/2 px-2 rounded-l-full border border-gray-400"
          placeholder="Search"
          type="text"
        />
        <button className="px-4 rounded-r-full bg-gray-100  border border-gray-400">
          <img className="w-6" src="/assets/search.svg" alt="search" />
        </button>
        {showSuggestions && (
          <SearchDropdown
            suggestions={searchSuggestions}
            setSearchQuery={setSearchQuery}
            toggleSuggestions={toggleSuggestions}
          />
        )}
      </div>
      <div className="bg-gray-300 rounded-full">
        <img className="w-8 p-1" src="/assets/user.svg" alt="user" />
      </div>
    </div>
  );
};

export default Head;
