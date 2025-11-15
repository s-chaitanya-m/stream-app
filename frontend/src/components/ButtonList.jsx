import React from "react";
import Button from "./Button";
const dummyButtonList = [
  "All",
  "Trending",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
];
const ButtonList = () => {
  return (
    <div className="w-full mb-2 flex overflow-x-scroll no-scrollbar">
      {dummyButtonList.map((b) => (
        <Button key={b} name={b} />
      ))}
    </div>
  );
};

export default ButtonList;
