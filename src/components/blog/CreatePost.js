import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/blog/CreatePost.css"; // Ensure the correct path

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API call
      const response = await fetch("https://api.example.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) throw new Error("Failed to create post");

      alert("Post created successfully!");
      navigate("/"); // Redirect to Home after successful creation
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Error creating post.");
    }
  };

  return (
    <div className="create-post">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        ></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
