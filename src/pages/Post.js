import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/blog/BlogPost";
import Comments from "../components/blog/Comments";
import "../pages/Post.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResponse = await fetch(`https://api.example.com/posts/${id}`);
        if (!postResponse.ok) throw new Error("Post not found");
        const postData = await postResponse.json();
        setPost(postData);

        const commentsResponse = await fetch(
          `https://api.example.com/comments?postId=${id}`
        );
        if (!commentsResponse.ok) throw new Error("Comments not found");
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleAddComment = async (content) => {
    try {
      const response = await fetch(`https://api.example.com/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId: id, content }),
      });

      if (!response.ok) throw new Error("Failed to add comment");

      const newComment = await response.json();
      // @ts-ignore
      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Error adding comment.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="post">
      {post ? (
        <>
          <BlogPost post={post} />
          <Comments comments={comments} onAddComment={handleAddComment} />
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default Post;
