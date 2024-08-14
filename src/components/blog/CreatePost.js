import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/blog/CreatePost.css";
import { usePosts } from "../../contexts/PostContext ";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { addPost, error } = usePosts();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in both title and content.");
      return;
    }

    const newPost = {
      title,
      content,
    };

    try {
      await addPost(newPost);
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="create-post">
      <h2>Create New Post</h2>
      {error && <p className="error-message">{error}</p>}{" "}
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
