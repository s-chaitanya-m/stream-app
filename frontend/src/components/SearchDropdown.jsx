import React from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { saveVideos } from "../redux/slice/videoSlice";

const SearchDropdown = ({ suggestions, toggleSuggestions, setSearchQuery }) => {
  const dispatch = useDispatch();

  const onSearchHandler = async (searchString) => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchString);
    const json = await data.json();
    dispatch(saveVideos(json.items));
    setSearchQuery(searchString);
    toggleSuggestions(false);
  };

  if (suggestions.length === 0) return null;
  return (
    <div className="absolute top-10 w-3/5  bg-white border border-gray-200 p-2 shadow-lg rounded-lg">
      {suggestions.map((s) => (
        <div
          onClick={() => {
            onSearchHandler(s);
          }}
          key={s}
          className="flex gap-2 hover:bg-gray-100"
        >
          <img className="w-4" src="/assets/search.svg" alt="search" />
          {s}
        </div>
      ))}
    </div>
  );
};

export default SearchDropdown;
