import React, { useEffect, useState } from "react";
import BlogList from "../components/blog/BlogList";
import { useAuth } from "../contexts/AuthContext";
import "../pages/Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { isAuthenticated } = useAuth(); // Use the authentication status

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5000/posts/${postId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete post");
      // @ts-ignore
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="home">
      <h1>Welcome to Bloggify</h1>
      <BlogList posts={posts} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
