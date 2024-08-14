import React, { createContext, useState, useContext } from "react";

// @ts-ignore
const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    // @ts-ignore
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    // @ts-ignore
    const updatedPosts = posts.filter((post) => post.id !== postId);
    // @ts-ignore
    setPosts(updatedPosts);
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
