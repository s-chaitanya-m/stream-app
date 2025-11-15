import React from "react";
import CommentsList from "./Comment";
import { commentData } from "../utils/constants";

const CommentsContainer = () => {
  return (
    <div className="w-full md:w-3/4 py-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
