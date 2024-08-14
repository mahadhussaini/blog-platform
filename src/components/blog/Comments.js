import React, { useState } from "react";
import "../../styles/blog/Comments.css";

const Comments = ({ comments, onAddComment, error }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        await onAddComment(newComment);
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  return (
    <div className="comments">
      <h3>Comments</h3>
      {error && <p className="error-message">{error}</p>}{" "}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
      <form onSubmit={handleAddComment}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        ></textarea>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default Comments;
