import React from "react";
import { Link } from "react-router-dom";
import "../../styles/blog/BlogList.css";

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-preview">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
