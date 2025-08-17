import React from "react";

const SearchDropdown = ({ suggestions }) => {
  if (suggestions.length === 0) return null;
  return (
    <div className="absolute top-10 w-3/5  bg-white border border-gray-200 p-2 shadow-lg rounded-lg">
      {suggestions.map((s) => (
        <div key={s} className="flex gap-2 hover:bg-gray-100">
          <img className="w-4" src="src/assets/search.svg" alt="search" />
          {s}
        </div>
      ))}
    </div>
  );
};

export default SearchDropdown;
