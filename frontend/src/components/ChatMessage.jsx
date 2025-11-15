import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex mb-1 gap-2 items-center shadow-sm p-1">
      <img
        className="w-8 h-8 p-1 bg-gray-400 rounded-full"
        src="/assets/user.svg"
        alt="user"
      />

      <span className="font-bold">{name}</span>
      <span className="font-extralight">{message}</span>
    </div>
  );
};

export default ChatMessage;
