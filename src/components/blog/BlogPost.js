import React from "react";
import "../../styles/blog/BlogPost.css";

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default BlogPost;
