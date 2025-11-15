import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-300 px-3 py-1 rounded-full mr-2">{name}</button>
  );
};

export default Button;
