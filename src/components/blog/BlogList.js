import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../../styles/blog/BlogList.css";

const BlogList = ({ posts, onDelete, loading }) => {
  const { isAuthenticated } = useAuth();

  const handlePostDelete = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await onDelete(postId);
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div className="blog-list">
      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="blog-preview">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`}>Read More</Link>{" "}
            {isAuthenticated() && (
              <button
                className="delete-button"
                onClick={() => handlePostDelete(post.id)}
                disabled={loading}
              >
                Delete
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
