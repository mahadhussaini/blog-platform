const API_URL = "https://api.example.com/comments";

export const addComment = async (postId, content) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postId,
        content: content,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

export const getCommentsByPostId = async (postId) => {
  try {
    const response = await fetch(`${API_URL}?postId=${postId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
