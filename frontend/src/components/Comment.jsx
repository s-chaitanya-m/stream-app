import React, { useState } from "react";

const Comment = ({ data }) => {
  const [showReplies, toggleReplies] = useState(false);
  const { name, text, replies } = data;
  return (
    <>
      <div className="flex align-top shadow-sm bg-gray-100 p-2 my-1 rounded-lg">
        <img
          className="bg-gray-400 w-8 h-8 p-1 rounded-full"
          src="src/assets/user.svg"
          alt="user"
        />
        <div className="px-2">
          <p className="font-bold">{name}</p>
          <p className="font-light">{text}</p>
          {replies.length > 0 && (
            <div
              onClick={() => toggleReplies(!showReplies)}
              className="flex px-2 gap-1 items-center bg-sky-300 rounded-full w-max text-white"
            >
              <p className="text-sm font-extralight">replies</p>
              <img className="h-3 w-3" src="/src/assets/downarrow.png" alt="" />
            </div>
          )}
        </div>
      </div>
      {showReplies && (
        <div className="pl-5 border-l">
          <CommentsList comments={replies} />
        </div>
      )}
    </>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => <Comment key={comment.id} data={comment} />);
};

export default CommentsList;
