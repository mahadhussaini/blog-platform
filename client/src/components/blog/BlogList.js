import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../../styles/blog/BlogList.css";

const BlogList = ({ posts, onDelete }) => {
  const { isAuthenticated } = useAuth(); // Use the authentication status

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-preview">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
          {"  "}
          {isAuthenticated() && (
            <button className="delete-button" onClick={() => onDelete(post.id)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
