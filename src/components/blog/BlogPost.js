import React from "react";
import "../../styles/blog/BlogPost.css";

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <div className="blog-post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
