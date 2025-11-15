import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/slice/chatSlice";
import { generateName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState();
  const { messages } = useSelector((store) => store.chat);

  const sendChatHandler = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        id: Math.random(),
        name: "Chaitanya Shinde",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: Math.random().toString(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="flex-1 relative flex flex-col-reverse p-2 rounded-lg border border-gray-400 overflow-y-scroll">
        <form
          onSubmit={sendChatHandler}
          className="w-full sticky bottom-0 bg-white flex gap-1 border border-gray-400 rounded-lg p-1"
        >
          <input
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="flex-1"
            type="text"
          />
          <button className="bg-gray-400 px-2 rounded-full">Submit</button>
        </form>
        {messages.map((m) => (
          <ChatMessage
            key={m.id || m.message}
            name={m.name}
            message={m.message}
          />
        ))}
      </div>
    </>
  );
};

export default LiveChat;
