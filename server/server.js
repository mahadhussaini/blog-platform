const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Mock data
let posts = [
  {
    id: 1,
    title: "Introduction to Web Development",
    excerpt:
      "An overview of web development, including front-end and back-end technologies,",
    content:
      "Content of the new first post. Web development is a broad field that involves creating websites and web applications. This post will introduce the main concepts, tools, and technologies involved in web development, including HTML, CSS, JavaScript, and server-side languages.",
  },
  {
    id: 2,
    title: "Exploring React",
    excerpt: "A deep dive into React, its features, and best practices.",
    content:
      "Content of the second post. Learn about React, a popular JavaScript library for building user interfaces. We'll cover its core concepts, components, state management, and more.",
  },
  {
    id: 3,
    title: "Understanding CSS Grid",
    excerpt: "A guide to mastering CSS Grid layout system.",
    content:
      "Content of the third post. CSS Grid Layout is a powerful layout system available in CSS. It allows you to create complex layouts easily and provides great flexibility in designing responsive web pages.",
  },
  {
    id: 4,
    title: "JavaScript ES6 Features",
    excerpt: "An overview of new features introduced in ES6.",
    content:
      "Content of the fourth post. ES6, also known as ECMAScript 2015, introduced several new features to JavaScript. This post will cover some of the most important features, such as arrow functions, classes, and template literals.",
  },
  {
    id: 5,
    title: "Getting Started with Node.js",
    excerpt: "A beginner's guide to using Node.js for server-side development,",
    content:
      "Content of the fifth post. Node.js is a runtime environment that allows you to execute JavaScript code on the server side. This guide will help you set up Node.js, create your first server, and explore its core modules.",
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    excerpt:
      "A guide to getting started with TypeScript, a superset of JavaScript,",
    content:
      "Content of the sixth post. TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. This post will cover the basics of TypeScript, including type annotations, interfaces, and how to integrate TypeScript into your existing JavaScript projects.",
  },
  {
    id: 7,
    title: "The Power of Progressive Web Apps",
    excerpt: "An overview of Progressive Web Apps (PWAs) and their Benefits,",
    content:
      "Content of the seventh post. Progressive Web Apps (PWAs) offer a native app-like experience on the web. This post will explore the benefits of PWAs, including offline capabilities, push notifications, and improved performance.",
  },
  {
    id: 8,
    title: "Using GraphQL with React",
    excerpt:
      "Learn how to use GraphQL to fetch data in your React applications.",
    content:
      "Content of the eighth post. GraphQL is a query language for APIs that allows clients to request exactly the data they need. This post will guide you through integrating GraphQL with React, including setting up a GraphQL server and using Apollo Client for data fetching.",
  },
];

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

let comments = [
  // Comments for Post 1
  { id: 1, postId: 1, content: "Great post! Very informative." },
  { id: 2, postId: 1, content: "I learned a lot from this article." },
  { id: 3, postId: 1, content: "Looking forward to more content like this." },

  // Comments for Post 2
  { id: 4, postId: 2, content: "Excellent overview of React." },
  { id: 5, postId: 2, content: "React is indeed a powerful library." },

  // Comments for Post 3
  { id: 6, postId: 3, content: "CSS Grid is so useful for layout." },
  { id: 7, postId: 3, content: "The examples were very helpful!" },

  // Comments for Post 4
  { id: 8, postId: 4, content: "ES6 features make JavaScript more powerful." },
  { id: 9, postId: 4, content: "I love the arrow functions!" },

  // Comments for Post 5
  {
    id: 10,
    postId: 5,
    content: "Node.js is great for server-side development.",
  },
  {
    id: 11,
    postId: 5,
    content: "This post helped me understand Node.js better.",
  },

  // Comments for Post 6
  {
    id: 12,
    postId: 6,
    content: "TypeScript is a game-changer for JS development.",
  },
  {
    id: 13,
    postId: 6,
    content: "I appreciate the clear explanation of types.",
  },

  // Comments for Post 7
  { id: 14, postId: 7, content: "PWAs are the future of web apps." },
  { id: 15, postId: 7, content: "Great benefits of PWAs discussed here." },

  // Comments for Post 8
  { id: 16, postId: 8, content: "GraphQL integration with React is powerful." },
  { id: 17, postId: 8, content: "The Apollo Client setup was well explained." },
];

// Route to create a new post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const excerpt =
    content.substring(0, 100) + (content.length > 100 ? "..." : "");

  const newPost = {
    id: posts.length + 1,
    title,
    excerpt,
    content,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get("/comments", (req, res) => {
  const { postId } = req.query;

  if (!postId) {
    return res.status(400).json({ error: "Post ID is required" });
  }

  const filteredComments = comments.filter(
    // @ts-ignore
    (comment) => comment.postId === parseInt(postId)
  );

  if (filteredComments.length === 0) {
    return res.status(404).json({ error: "Comments not found" });
  }

  res.status(200).json(filteredComments);
});

// Route to get a single post by id
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.status(200).json(post);
});

// Route to update a post
app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;

  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const updatedPost = {
    id: postId,
    title,
    excerpt: content.substring(0, 100) + (content.length > 100 ? "..." : ""),
    content,
  };

  posts[postIndex] = updatedPost;
  res.status(200).json(updatedPost);
});

// Route to delete a post
app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  posts = posts.filter((p) => p.id !== postId);
  res.status(204).send(); // No content to send back
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
