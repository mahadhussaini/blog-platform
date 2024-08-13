const API_URL = "https://api.example.com/comments"; // Replace with your actual API URL

/**
 * Adds a comment to a specific post.
 *
 * @param {string} postId - The ID of the post to add the comment to.
 * @param {string} content - The content of the comment.
 * @returns {Promise<Object>} The added comment.
 */
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

/**
 * Fetches comments for a specific post.
 *
 * @param {string} postId - The ID of the post to fetch comments for.
 * @returns {Promise<Array>} The list of comments.
 */
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
