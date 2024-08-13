import React from "react";
import BlogList from "../components/blog/BlogList";
import "../pages/Home.css";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "First Post",
      excerpt: "This is the first post. It provides an overview of our blog.",
      content:
        "Content of the first post. This is where you put the full content of your post. Include detailed information, images, and any other relevant content to engage your readers.",
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
      excerpt:
        "A beginner's guide to using Node.js for server-side development.",
      content:
        "Content of the fifth post. Node.js is a runtime environment that allows you to execute JavaScript code on the server side. This guide will help you set up Node.js, create your first server, and explore its core modules.",
    },
  ];

  return (
    <div className="home">
      <h1>Welcome to Bloggify</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default Home;
